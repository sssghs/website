import express from 'express';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Handle contact form
app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, inquiryType, message } = req.body;

  // Validate inquiry type
  const validInquiryTypes = ['admissions', 'visit', 'programs', 'financial', 'other'];
  if (!validInquiryTypes.includes(inquiryType)) {
    return res.status(400).json({ message: 'Invalid inquiry type' });
  }

  const inquiryTypeMap = {
    admissions: 'Admissions Information',
    visit: 'Schedule a Visit',
    programs: 'Academic Programs',
    financial: 'Financial Information',
    other: 'Other',
  };

  const inquiryLabel = inquiryTypeMap[inquiryType] || 'Other';

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email to the user
  const userMailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: `Thanks for contacting SSSGHS - ${inquiryLabel}`,
    html: `
      <h2>Hi ${firstName},</h2>
      <p>Thank you for reaching out. Here's a copy of your message:</p>
      <ul>
        <li><strong>Full Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
        <li><strong>Inquiry Type:</strong> ${inquiryLabel}</li>
        <li><strong>Message:</strong><br/>${message}</li>
      </ul>
      <p>We'll get back to you shortly.</p>
    `,
  };

  // Email to the admin
  const adminMailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL, // Set this in your environment variables
    subject: `New Inquiry - ${inquiryLabel}`,
    html: `
      <h2>New Inquiry Received</h2>
      <ul>
        <li><strong>Full Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
        <li><strong>Inquiry Type:</strong> ${inquiryLabel}</li>
        <li><strong>Message:</strong><br/>${message}</li>
      </ul>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});


// Handle online admission form
app.post('/apply', async (req, res) => {
  const {
    studentName,
    dateOfBirth,
    gradeApplyingFor,
    fatherName,
    motherName,
    address,
    fatherOccupation,
    motherOccupation,
    religion,
    motherTongue,
    fatherEmail,
    fatherPhone,
    previousSchool,
    iLanguage,
    iiLanguage,
    iiiLanguage,
    maths,
    science,
    social,
    totalMarks,
    outOfMarks,
    studentDeclaration,
    parentDeclaration,
    previousSchoolNotApplicable,
    academicPerformanceNotApplicable,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const applicationHtml = `
    <h2>Application for ${studentName}</h2>
    <h3>Student Information</h3>
    <ul>
      <li><strong>Name:</strong> ${studentName}</li>
      <li><strong>Date of Birth:</strong> ${dateOfBirth}</li>
      <li><strong>Grade Applying For:</strong> ${gradeApplyingFor}</li>
    </ul>
    <h3>Parent/Guardian Information</h3>
    <ul>
      <li><strong>Father's Name:</strong> ${fatherName}</li>
      <li><strong>Mother's Name:</strong> ${motherName}</li>
      <li><strong>Address:</strong> ${address}</li>
      <li><strong>Father's Occupation:</strong> ${fatherOccupation}</li>
      <li><strong>Mother's Occupation:</strong> ${motherOccupation}</li>
      <li><strong>Email:</strong> ${fatherEmail}</li>
      <li><strong>Phone:</strong> ${fatherPhone}</li>
    </ul>
    <h3>Additional Information</h3>
    <ul>
      <li><strong>Religion:</strong> ${religion}</li>
      <li><strong>Mother Tongue:</strong> ${motherTongue}</li>
    </ul>
    <h3>Previous School Information</h3>
    <ul>
      <li><strong>Previous School:</strong> ${previousSchoolNotApplicable ? 'Not Applicable' : previousSchool || 'N/A'}</li>
    </ul>
    <h3>Academic Performance (Last Year)</h3>
    <ul>
      <li><strong>Academic Performance:</strong> ${academicPerformanceNotApplicable ? 'Not Applicable' : ''}</li>
      ${!academicPerformanceNotApplicable ? `
        <li><strong>I Language Marks:</strong> ${iLanguage || 'N/A'}</li>
        <li><strong>II Language Marks:</strong> ${iiLanguage || 'N/A'}</li>
        <li><strong>III Language Marks:</strong> ${iiiLanguage || 'N/A'}</li>
        <li><strong>Maths Marks:</strong> ${maths || 'N/A'}</li>
        <li><strong>Science Marks:</strong> ${science || 'N/A'}</li>
        <li><strong>Social Marks:</strong> ${social || 'N/A'}</li>
        <li><strong>Total Marks:</strong> ${totalMarks || 'N/A'}</li>
        <li><strong>Out of Marks:</strong> ${outOfMarks || 'N/A'}</li>
      ` : ''}
    </ul>
    <h3>Declarations</h3>
    <ul>
      <li><strong>Student Declaration:</strong> ${studentDeclaration ? 'Agreed' : 'Not Agreed'}</li>
      <li><strong>Parent Declaration:</strong> ${parentDeclaration ? 'Agreed' : 'Not Agreed'}</li>
    </ul>
  `;

  const userMailOptions = {
    from: process.env.SMTP_USER,
    to: fatherEmail,
    subject: 'Sri Sathya Sai Grammar High School - Application Confirmation',
    html: `
      <h2>Dear ${fatherName},</h2>
      <p>Thank you for submitting an application for ${studentName} to Sri Sathya Sai Grammar High School. Below are the details provided in the application:</p>
      ${applicationHtml}
      <p>We have received your application and will review it promptly. You will be contacted soon with the next steps in the admission process.</p>
      <p>Best regards,<br/>Admissions Team<br/>Sri Sathya Sai Grammar High School</p>
    `,
  };

  const adminMailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL, // Admin email from environment variable
    subject: `New Application Received - ${studentName} (${gradeApplyingFor})`,
    html: `
      <h2>New Application Received</h2>
      ${applicationHtml}
      <p>This is an automated notification for the admissions team.</p>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);
    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send confirmation email' });
  }
});


// Function to load events from the JSON file
const loadEvents = () => {
  const filePath = path.resolve('data/events.json');
  const eventsData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(eventsData);
};

// Handle event registration
app.post('/register', async (req, res) => {
  const { name, email, phone, comments, eventId } = req.body;

  // Server-side validation
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required fields.' });
  }

  // Fetch event from events.json
  const events = loadEvents(); // This should be a valid function that loads events
  const event = events.find((e) => e.id === Number(eventId));
  if (!event) {
    return res.status(404).json({ message: 'Event not found.' });
  }

  const { title: eventTitle, date: eventDate } = event;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const registrationDetailsHtml = `
    <ul>
      <li><strong>Full Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
      <li><strong>Comments/Special Requests:</strong> ${comments || 'None'}</li>
      <li><strong>Event:</strong> ${eventTitle}</li>
      <li><strong>Event Date:</strong> ${eventDate}</li>
      <li><strong>Event ID:</strong> ${eventId}</li>
    </ul>
  `;

  // User mail
  const userMailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: `Sri Sathya Sai Grammar High School - Registration Confirmation for ${eventTitle}`,
    html: `
      <h2>Dear ${name},</h2>
      <p>Thank you for registering for <strong>${eventTitle}</strong> at Sri Sathya Sai Grammar High School. Below are the details of your registration:</p>
      ${registrationDetailsHtml}
      <p>We look forward to seeing you at the event. You will receive further details closer to the event date.</p>
      <p>Best regards,<br/>Events Team<br/>Sri Sathya Sai Grammar High School</p>
    `,
  };

  // Admin mail
  const adminMailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Event Registration: ${name} for ${eventTitle}`,
    html: `
      <h2>New Event Registration Received</h2>
      ${registrationDetailsHtml}
      <p>This is an automated notification for the events team.</p>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);
    res.status(200).json({ message: 'Registration submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send confirmation email' });
  }
});


app.listen(8000, () => {
  console.log(`Server listening on port 8000`);
});