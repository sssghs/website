import React from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image?: string;
  additionalInfo?: string;
}

const EventsList = (): Event[] => {
  return [
    {
      id: 1,
      title: "Winter Play",
      date: "March 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "School Auditorium",
      category: "Arts",
      description: "Enjoy our annual winter play performed by the drama club, showcasing student talent in a captivating production.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2070&auto=format&fit=crop",
      additionalInfo: "Tickets are $10 for adults and $5 for students. Refreshments will be served during intermission."
    },
    {
      id: 2,
      title: "Soccer Tournament",
      date: "April 1, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Sports Field",
      category: "Sports",
      description: "Cheer on our school teams as they compete in an exciting soccer tournament against local schools.",
      image: "https://images.unsplash.com/photo-1579952363873-27f3b2849daf?q=80&w=2070&auto=format&fit=crop",
      additionalInfo: "Bring your own chairs and sunscreen. Food trucks will be available on-site."
    },
    {
      id: 3,
      title: "Book Fair",
      date: "April 10, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Library",
      category: "General",
      description: "Explore a wide selection of books for all ages at our annual book fair, supporting our library programs.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Math Olympiad",
      date: "April 18, 2025",
      time: "8:30 AM - 1:00 PM",
      location: "Building A, Room 101",
      category: "Academic",
      description: "Challenge your math skills at our Math Olympiad, open to students in grades 6-12 with awards for top performers.",
      image: "https://images.unsplash.com/photo-1509228622689-0cb25a80a216?q=80&w=2070&auto=format&fit=crop",
      additionalInfo: "Participants must register by April 10. Calculators are not permitted."
    },
    {
      id: 5,
      title: "Spring Talent Show",
      date: "April 26, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Auditorium",
      category: "Arts",
      description: "Celebrate student creativity with performances in music, dance, and more at our annual Spring Talent Show.",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Charity Run",
      date: "May 3, 2025",
      time: "8:00 AM - 11:00 AM",
      location: "Campus Grounds",
      category: "Community",
      description: "Join our community for a 5K charity run to raise funds for local charities, with fun activities for all ages.",
      image: "https://images.unsplash.com/photo-1530549383844-a96aa55a7fd9?q=80&w=2070&auto=format&fit=crop",
      additionalInfo: "Registration fee is $20. All proceeds go to local charities."
    },
    {
      id: 7,
      title: "STEM Career Fair",
      date: "May 10, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Gymnasium",
      category: "Career",
      description: "Meet professionals in STEM fields and explore career paths in science, technology, engineering, and math.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      additionalInfo: "Bring your resume and questions for industry experts."
    },
    {
      id: 8,
      title: "Summer Festival",
      date: "July 1, 2025",
      time: "5:00 PM - 9:00 PM",
      location: "Campus Lawn",
      category: "Community",
      description: "Kick off summer with music, food, and games at our annual festival.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop"
    }
  ];
};

export default EventsList;
