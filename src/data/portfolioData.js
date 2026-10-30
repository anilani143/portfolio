import { Database, Terminal, Settings, Globe } from 'lucide-react';

export const personalInfo = {
  name: 'Anil Kumar',
  title: 'MERN Stack Developer',
  tagline: 'Building responsive, high-performance full-stack web applications',
  bio: 'Passionate about building intelligent,scaleable full-stack web applications using MongoDB, Express.js, React.js, Node.js and looking for Software Development Internship opportunities where I can apply my skills, contribute, and grow.',
  email: 'kvamsivamsi4@gmail.com',
  phone: '+91 9392728424',
  location: 'chennai, India',
  resumeUrl: '../public/image.png', // Placeholder for resume PDF download
  github: "https://github.com/anilani143",
  linkedin: 'https://www.linkedin.com/in/k-anil-kumar-7a586b326?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  leetcode: 'https://leetcode.com/u/anilani143/',
  gmailUrl: 'mailto:kvamsivamsi4@gmail.com'
};

export const skillsData = [
  {
    category: 'Frontend',
    icon: Globe,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design']
  },
  {
    category: 'Backend',
    icon: Terminal,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'API Integration']
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['MongoDB','Mongoose']
  },
  {
    category: 'Tools & Others',
    icon: Settings,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm', 'Data Structures & Algorithms']
  }
];

export const projectsData = [
  {
    id: 'movie-booking',
    title: 'Movie Ticket Booking App',
    subtitle: 'Featured Project • Full Stack',
    description: 'A robust, full-stack Movie Ticket Booking application where users can register, login, browse movies, select seats, and book tickets with persistent database storage and admin features.',
    features: [
      'JWT-based secure user authentication and route protection.',
      'Interactive seat layout with real-time seat selection and validation.',
      'Admin dashboard to manage movies, showtimes, and view booking metrics.',
      'Image management for movie posters using Cloudinary cloud storage.',
      'Booking history trackable directly in the user profile.'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Cloudinary', 'Tailwind CSS'],
    githubUrl: 'https://github.com/anilani143/QuickShow',
    liveUrl: 'quickshow-pied-gamma.vercel.app',
    isFeatured: true,
    mockImage: 'movie_booking_dashboard' // to be used as generated or placeholder image representation
  },
  {
    id: 'spotify-clone',
    title: 'Spotify UI Clone',
    subtitle: 'Frontend UI/UX',
    description: 'A highly polished and responsive replica of the Spotify web interface. Highlights advanced styling layouts and audio navigation states.',
    features: [
      'Modern, pixel-perfect dark theme UI resembling the actual Spotify player.',
      'Interactive playlists, sidebar, and customizable dashboard content.',
      'Fully responsive layouts optimized for mobile, tablet, and desktop views.',
      'Rich hover animations and smooth CSS transitions.'
    ],
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3'],
    githubUrl: 'https://github.com/anilani143/Spotify-Clone',
    liveUrl: 'http://quickshow-pied-gamma.vercel.app',
    isFeatured: false,
    mockImage: 'spotify_ui_player'
  },
  {
    id: 'youtube-clone',
    title: 'YouTube Clone',
    subtitle: 'Frontend API Integration',
    description: 'A dynamic video-sharing platform interface powered by React and integrated with external video search and playback APIs.',
    features: [
      'Video search functionality retrieving real-time matches.',
      'Built-in video player section supporting seamless watching experiences.',
      'Categorized video listing sliders (Music, Gaming, Tech, etc.).',
      'Fluid page structure responding gracefully to screen resizing.'
    ],
    tech: ['React.js', 'YouTube API', 'Tailwind CSS', 'REST API Integration'],
    githubUrl: 'https://github.com',
    liveUrl: 'http://quickshow-pied-gamma.vercel.app',
    isFeatured: false,
    mockImage: 'youtube_video_app'
  }
];

export const educationData = {
  institution: 'B.Tech in Computer Science Engineering',
  duration: '2023 - 2027',
  status: 'Current Year: 4th Year',
  performance: 'CGPA: 8.2 / 10',
  description: 'Currently pursuing final year of Bachelor of Technology in Computer Science & Engineering. Gaining comprehensive expertise in Software Engineering, Algorithms, Full-Stack Web Technologies, and Database Design.'
};

export const achievementsData = [
  {
    title: 'Solved 100+ LeetCode Problems',
    description: 'Consistently practicing problem-solving skills focused on Data Structures, Algorithms, and logical optimization.'
  },
  {
    title: 'Built 3+ Major Web Projects',
    description: 'End-to-end engineering from front-end user experience to back-end API construction and cloud media uploads.'
  },
  {
    title: 'Strong MERN Stack Foundation',
    description: 'Proficient in designing schemas (MongoDB/Mongoose) and building robust servers (Node/Express).'
  },
  {
    title: 'REST API & Authentication Expertise',
    description: 'Experienced in developing secure RESTful web endpoints and auth flows using JSON Web Tokens (JWT).'
  },
  {
    title: 'Git & GitHub Version Control',
    description: 'Proficient in branching workflows, commits, issue tracking, and software lifecycle deployment.'
  }
];
