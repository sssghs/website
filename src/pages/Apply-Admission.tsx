import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import VibrantBubblesAndStarsAnimation from '../components/animations/bubbles-stars';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const AdmissionsForm = () => {
  useScrollAnimation();

  // Form state
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gradeApplyingFor: '',
    fatherName: '',
    motherName: '',
    address: '',
    fatherOccupation: '',
    motherOccupation: '',
    religion: '',
    motherTongue: '',
    fatherEmail: '',
    fatherPhone: '',
    previousSchool: '',
    iLanguage: '',
    iiLanguage: '',
    iiiLanguage: '',
    maths: '',
    science: '',
    social: '',
    totalMarks: '',
    outOfMarks: '',
    studentDeclaration: false,
    parentDeclaration: false,
    previousSchoolNotApplicable: false,
    academicPerformanceNotApplicable: false,
  });

  // Error state for validation
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (name) => {
    setFormData({ ...formData, [name]: !formData[name] });
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.studentName) newErrors.studentName = 'Student name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gradeApplyingFor) newErrors.gradeApplyingFor = 'Grade is required';
    if (!formData.fatherName) newErrors.fatherName = 'Father name is required';
    if (!formData.motherName) newErrors.motherName = 'Mother name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.fatherOccupation) newErrors.fatherOccupation = 'Father occupation is required';
    if (!formData.motherOccupation) newErrors.motherOccupation = 'Mother occupation is required';
    if (!formData.religion) newErrors.religion = 'Religion is required';
    if (!formData.motherTongue) newErrors.motherTongue = 'Mother tongue is required';
    if (!formData.fatherEmail || !/\S+@\S+\.\S+/.test(formData.fatherEmail))
      newErrors.fatherEmail = 'Valid email is required';
    if (!formData.fatherPhone) newErrors.fatherPhone = 'Phone number is required';
    if (!formData.previousSchool && !formData.previousSchoolNotApplicable)
      newErrors.previousSchool = 'Previous school is required';
    if (!formData.studentDeclaration) newErrors.studentDeclaration = 'Student declaration is required';
    if (!formData.parentDeclaration) newErrors.parentDeclaration = 'Parent declaration is required';
    // Validate numeric fields only if academic performance is applicable
    if (!formData.academicPerformanceNotApplicable) {
      ['iLanguage', 'iiLanguage', 'iiiLanguage', 'maths', 'science', 'social', 'totalMarks', 'outOfMarks'].forEach(
        (field) => {
          if (formData[field] && isNaN(formData[field]))
            newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').toUpperCase()} must be a number`;
        }
      );
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate form submission (e.g., API call)
    console.log('Form submitted:', formData);
    alert('Admission application submitted successfully!');
    // Reset form
    setFormData({
      studentName: '',
      dateOfBirth: '',
      gradeApplyingFor: '',
      fatherName: '',
      motherName: '',
      address: '',
      fatherOccupation: '',
      motherOccupation: '',
      religion: '',
      motherTongue: '',
      fatherEmail: '',
      fatherPhone: '',
      previousSchool: '',
      iLanguage: '',
      iiLanguage: '',
      iiiLanguage: '',
      maths: '',
      science: '',
      social: '',
      totalMarks: '',
      outOfMarks: '',
      studentDeclaration: false,
      parentDeclaration: false,
      previousSchoolNotApplicable: false,
      academicPerformanceNotApplicable: false,
    });
    setErrors({});
  };

  return (
    <div className="relative min-h-screen">
      <VibrantBubblesAndStarsAnimation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-school-navy text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop')] bg-center bg-cover bg-no-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif">
              Apply for Admission
            </h1>
            <p className="text-xl text-white/90">
              Join Inspire - The Holistic School by submitting your online application. Fill out the form below to start the admission process.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md border border-school-navy/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-school-navy font-serif">Student Information</h2>
              <div>
                <Label htmlFor="studentName" className="text-school-navy">Student Name</Label>
                <Input
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                  placeholder="Enter full name"
                />
                {errors.studentName && <p className="text-red-500 text-sm mt-1">{errors.studentName}</p>}
              </div>
              <div>
                <Label htmlFor="dateOfBirth" className="text-school-navy">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                />
                {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
              </div>
              <div>
                <Label htmlFor="gradeApplyingFor" className="text-school-navy">Grade Applying For</Label>
                <Input
                  id="gradeApplyingFor"
                  name="gradeApplyingFor"
                  value={formData.gradeApplyingFor}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                  placeholder="e.g., Grade 6"
                />
                {errors.gradeApplyingFor && <p className="text-red-500 text-sm mt-1">{errors.gradeApplyingFor}</p>}
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-school-navy font-serif">Parent/Guardian Information</h2>
              <div>
                <Label htmlFor="fatherName" className="text-school-navy">Father Name</Label>
                <Input
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                  placeholder="Enter full name"
                />
                {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>}
              </div>
              <div>
                <Label htmlFor="motherName" className="text-school-navy">Mother Name</Label>
                <Input
                  id="motherName"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                  placeholder="Enter full name"
                />
                {errors.motherName && <p className="text-red-500 text-sm mt-1">{errors.motherName}</p>}
              </div>
              <div>
                <Label htmlFor="address" className="text-school-navy">Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                  placeholder="Enter full address"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
              <div>
                <Label htmlFor="fatherOccupation" className="text-school-navy">Father Occupation</Label>
                <Input
                  id="fatherOccupation"
                  name="fatherOccupation"
                  value={formData.fatherOccupation}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                  placeholder="e.g., Engineer"
                />
                {errors.fatherOccupation && <p className="text-red-500 text-sm mt-1">{errors.fatherOccupation}</p>}
              </div>
              <div>
                <Label htmlFor="motherOccupation" className="text-school-navy">Mother Occupation</Label>
                <Input
                  id="motherOccupation"
                  name="motherOccupation"
                  value={formData.motherOccupation}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                  placeholder="e.g., Teacher"
                />
                {errors.motherOccupation && <p className="text-red-500 text-sm mt-1">{errors.motherOccupation}</p>}
              </div>
              <div>
                <Label htmlFor="fatherEmail" className="text-school-navy">Email</Label>
                <Input
                  id="fatherEmail"
                  name="fatherEmail"
                  type="email"
                  value={formData.fatherEmail}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                  placeholder="Enter email address"
                />
                {errors.fatherEmail && <p className="text-red-500 text-sm mt-1">{errors.fatherEmail}</p>}
              </div>
              <div>
                <Label htmlFor="fatherPhone" className="text-school-navy">Phone Number</Label>
                <Input
                  id="fatherPhone"
                  name="fatherPhone"
                  type="tel"
                  value={formData.fatherPhone}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                  placeholder="Enter phone number"
                />
                {errors.fatherPhone && <p className="text-red-500 text-sm mt-1">{errors.fatherPhone}</p>}
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-school-navy font-serif">Additional Information</h2>
              <div>
                <Label htmlFor="religion" className="text-school-navy">Religion</Label>
                <Input
                  id="religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                  placeholder="Enter religion"
                />
                {errors.religion && <p className="text-red-500 text-sm mt-1">{errors.religion}</p>}
              </div>
              <div>
                <Label htmlFor="motherTongue" className="text-school-navy">Mother Tongue</Label>
                <Input
                  id="motherTongue"
                  name="motherTongue"
                  value={formData.motherTongue}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                  placeholder="Enter mother tongue"
                />
                {errors.motherTongue && <p className="text-red-500 text-sm mt-1">{errors.motherTongue}</p>}
              </div>
            </div>

            {/* Previous School Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-school-navy font-serif">Previous School Information</h2>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="previousSchoolNotApplicable"
                  checked={formData.previousSchoolNotApplicable}
                  onCheckedChange={() => handleCheckboxChange('previousSchoolNotApplicable')}
                />
                <Label htmlFor="previousSchoolNotApplicable" className="text-gray-600">
                  Not Applicable
                </Label>
              </div>
              <div>
                <Label htmlFor="previousSchool" className="text-school-navy">Name of Previous School</Label>
                <Input
                  id="previousSchool"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleChange}
                  className="border-school-navy/20 focus:border-school-blue"
                  placeholder="Enter school name"
                  disabled={formData.previousSchoolNotApplicable}
                />
                {errors.previousSchool && <p className="text-red-500 text-sm mt-1">{errors.previousSchool}</p>}
              </div>
            </div>

            {/* Academic Performance */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-school-navy font-serif">Academic Performance (Last Year)</h2>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="academicPerformanceNotApplicable"
                  checked={formData.academicPerformanceNotApplicable}
                  onCheckedChange={() => handleCheckboxChange('academicPerformanceNotApplicable')}
                />
                <Label htmlFor="academicPerformanceNotApplicable" className="text-gray-600">
                  Not Applicable
                </Label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="iLanguage" className="text-school-navy">I Language Marks</Label>
                  <Input
                    id="iLanguage"
                    name="iLanguage"
                    type="number"
                    value={formData.iLanguage}
                    onChange={handleChange}
                    className="border-school-navy/20 focus:border-school-blue"
                    placeholder="e.g., 85"
                    disabled={formData.academicPerformanceNotApplicable}
                  />
                  {errors.iLanguage && <p className="text-red-500 text-sm mt-1">{errors.iLanguage}</p>}
                </div>
                <div>
                  <Label htmlFor="iiLanguage" className="text-school-navy">II Language Marks</Label>
                  <Input
                    id="iiLanguage"
                    name="iiLanguage"
                    type="number"
                    value={formData.iiLanguage}
                    onChange={handleChange}
                    className="border-school-navy/20 focus:border-school-blue"
                    placeholder="e.g., 90"
                    disabled={formData.academicPerformanceNotApplicable}
                  />
                  {errors.iiLanguage && <p className="text-red-500 text-sm mt-1">{errors.iiLanguage}</p>}
                </div>
                <div>
                  <Label htmlFor="iiiLanguage" className="text-school-navy">III Language Marks</Label>
                  <Input
                    id="iiiLanguage"
                    name="iiiLanguage"
                    type="number"
                    value={formData.iiiLanguage}
                    onChange={handleChange}
                    className="border-school-navy/20 focus:border-school-blue"
                    placeholder="e.g., 88"
                    disabled={formData.academicPerformanceNotApplicable}
                  />
                  {errors.iiiLanguage && <p className="text-red-500 text-sm mt-1">{errors.iiiLanguage}</p>}
                </div>
                <div>
                  <Label htmlFor="maths" className="text-school-navy">Maths Marks</Label>
                  <Input
                    id="maths"
                    name="maths"
                    type="number"
                    value={formData.maths}
                    onChange={handleChange}
                    className="border-school-navy/20 focus:border-school-blue"
                    placeholder="e.g., 92"
                    disabled={formData.academicPerformanceNotApplicable}
                  />
                  {errors.maths && <p className="text-red-500 text-sm mt-1">{errors.maths}</p>}
                </div>
                <div>
                  <Label htmlFor="science" className="text-school-navy">Science Marks</Label>
                  <Input
                    id="science"
                    name="science"
                    type="number"
                    value={formData.science}
                    onChange={handleChange}
                    className="border-school-navy/20 focus:border-school-blue"
                    placeholder="e.g., 87"
                    disabled={formData.academicPerformanceNotApplicable}
                  />
                  {errors.science && <p className="text-red-500 text-sm mt-1">{errors.science}</p>}
                </div>
                <div>
                  <Label htmlFor="social" className="text-school-navy">Social Marks</Label>
                  <Input
                    id="social"
                    name="social"
                    type="number"
                    value={formData.social}
                    onChange={handleChange}
                    className="border-school-navy/20 focus:border-school-blue"
                    placeholder="e.g., 89"
                    disabled={formData.academicPerformanceNotApplicable}
                  />
                  {errors.social && <p className="text-red-500 text-sm mt-1">{errors.social}</p>}
                </div>
                <div>
                  <Label htmlFor="totalMarks" className="text-school-navy">Total Marks</Label>
                  <Input
                    id="totalMarks"
                    name="totalMarks"
                    type="number"
                    value={formData.totalMarks}
                    onChange={handleChange}
                    className="border-school-navy/20 focus:border-school-blue"
                    placeholder="e.g., 531"
                    disabled={formData.academicPerformanceNotApplicable}
                  />
                  {errors.totalMarks && <p className="text-red-500 text-sm mt-1">{errors.totalMarks}</p>}
                </div>
                <div>
                  <Label htmlFor="outOfMarks" className="text-school-navy">Out of Marks</Label>
                  <Input
                    id="outOfMarks"
                    name="outOfMarks"
                    type="number"
                    value={formData.outOfMarks}
                    onChange={handleChange}
                    className="border-school-navy/20 focus:border-school-blue"
                    placeholder="e.g., 600"
                    disabled={formData.academicPerformanceNotApplicable}
                  />
                  {errors.outOfMarks && <p className="text-red-500 text-sm mt-1">{errors.outOfMarks}</p>}
                </div>
              </div>
            </div>

            {/* Declarations */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-school-navy font-serif">Declarations</h2>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="studentDeclaration"
                  checked={formData.studentDeclaration}
                  onCheckedChange={() => handleCheckboxChange('studentDeclaration')}
                />
                <Label htmlFor="studentDeclaration" className="text-gray-600">
                  I promise to follow the rules and regulations of Inspire - The Holistic School. If I violate the rules, the school may take disciplinary action.
                </Label>
              </div>
              {errors.studentDeclaration && <p className="text-red-500 text-sm">{errors.studentDeclaration}</p>}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="parentDeclaration"
                  checked={formData.parentDeclaration}
                  onCheckedChange={() => handleCheckboxChange('parentDeclaration')}
                />
                <Label htmlFor="parentDeclaration" className="text-gray-600">
                  I, the parent/guardian, promise that my ward will abide by the rules and regulations of Inspire - The Holistic School. If they violate the rules, the school may take action.
                </Label>
              </div>
              {errors.parentDeclaration && <p className="text-red-500 text-sm">{errors.parentDeclaration}</p>}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy text-white text-lg px-8 py-3"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsForm;