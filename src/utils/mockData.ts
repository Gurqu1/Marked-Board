export interface Job {
  id: string;
  company: string;
  title: string;
  location: string;
  salary: string | null;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected' | 'In Progress';
  dateApplied: string;
  logoUrl: string | null;
  description: string;
  requirements: string[];
  responsibilities: string[];
  resumeScore: number;
  notes?: string;
  timeline: {
    date: string;
    title: string;
    description: string;
  }[];
}
export const mockJobs: Job[] = [{
  id: '1',
  company: 'Meta',
  title: 'Software Engineer',
  location: 'Menlo Park, CA',
  salary: '$150,000 - $180,000',
  status: 'Interview',
  dateApplied: '2023-06-15',
  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png',
  description: 'Meta is seeking a talented Software Engineer to join our team. You will be responsible for developing and maintaining high-quality software solutions that meet the needs of our users.',
  requirements: ['5+ years of experience in software development', 'Proficiency in React, JavaScript, and TypeScript', 'Experience with GraphQL and RESTful APIs', 'Strong problem-solving skills and attention to detail', 'Bachelor\'s degree in Computer Science or related field'],
  responsibilities: ['Design and implement new features for our web applications', 'Collaborate with cross-functional teams to define and implement solutions', 'Write clean, maintainable, and efficient code', 'Perform code reviews and provide constructive feedback to other developers', 'Troubleshoot and fix bugs in existing applications'],
  resumeScore: 85,
  notes: 'Had a great initial call with the recruiter. Need to prepare for the technical interview scheduled next week.',
  timeline: [{
    date: '2023-06-15',
    title: 'Application Submitted',
    description: 'Applied through company website'
  }, {
    date: '2023-06-20',
    title: 'Recruiter Contact',
    description: 'Initial screening call scheduled'
  }, {
    date: '2023-06-25',
    title: 'Phone Interview',
    description: 'Completed 45-minute technical screening'
  }, {
    date: '2023-07-02',
    title: 'Technical Interview',
    description: 'Scheduled for next week'
  }]
}, {
  id: '2',
  company: 'Google',
  title: 'Frontend Developer',
  location: 'Mountain View, CA',
  salary: '$140,000 - $170,000',
  status: 'Applied',
  dateApplied: '2023-06-18',
  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
  description: 'Google is looking for a Frontend Developer to join our team and help build exceptional user experiences for our products.',
  requirements: ['3+ years of experience with JavaScript and modern frameworks (React, Angular, or Vue)', 'Strong understanding of web standards and best practices', 'Experience with responsive design and cross-browser compatibility', 'Knowledge of performance optimization techniques', 'Bachelor\'s degree in Computer Science or related field'],
  responsibilities: ['Develop user interface components using React and other frontend technologies', 'Collaborate with designers to implement and improve UI/UX designs', 'Optimize applications for maximum speed and scalability', 'Write clean, maintainable, and reusable code', 'Stay up-to-date with emerging trends and technologies'],
  resumeScore: 72,
  timeline: [{
    date: '2023-06-18',
    title: 'Application Submitted',
    description: 'Applied through referral'
  }, {
    date: '2023-06-22',
    title: 'Application Received',
    description: 'Confirmation email received'
  }]
}, {
  id: '3',
  company: 'Amazon',
  title: 'Full Stack Developer',
  location: 'Seattle, WA',
  salary: '$135,000 - $165,000',
  status: 'Rejected',
  dateApplied: '2023-06-10',
  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png',
  description: 'Amazon is seeking a Full Stack Developer to join our team and help build innovative solutions for our customers.',
  requirements: ['4+ years of experience in full stack development', 'Proficiency in JavaScript, Node.js, and React', 'Experience with AWS services', 'Knowledge of database design and optimization', 'Bachelor\'s degree in Computer Science or related field'],
  responsibilities: ['Design and implement backend services using Node.js', 'Develop responsive frontend interfaces using React', 'Collaborate with product managers and designers to define requirements', 'Write clean, maintainable, and efficient code', 'Participate in code reviews and architectural discussions'],
  resumeScore: 65,
  notes: 'Received rejection email. Feedback mentioned needing more AWS experience.',
  timeline: [{
    date: '2023-06-10',
    title: 'Application Submitted',
    description: 'Applied through company website'
  }, {
    date: '2023-06-15',
    title: 'Initial Screening',
    description: 'Completed online assessment'
  }, {
    date: '2023-06-25',
    title: 'Application Rejected',
    description: 'Received rejection email'
  }]
}, {
  id: '4',
  company: 'Microsoft',
  title: 'UI/UX Developer',
  location: 'Redmond, WA',
  salary: '$130,000 - $160,000',
  status: 'Offer',
  dateApplied: '2023-06-05',
  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png',
  description: 'Microsoft is looking for a UI/UX Developer to join our team and help create exceptional user experiences for our products.',
  requirements: ['3+ years of experience in frontend development', 'Strong understanding of UI/UX principles', 'Proficiency in HTML, CSS, and JavaScript', 'Experience with design tools like Figma or Sketch', 'Bachelor\'s degree in Computer Science, Design, or related field'],
  responsibilities: ['Collaborate with designers to implement and improve UI/UX designs', 'Develop responsive and accessible web interfaces', 'Create and maintain design systems and component libraries', 'Conduct usability testing and gather feedback', 'Stay up-to-date with emerging trends and technologies'],
  resumeScore: 92,
  notes: 'Received offer! Need to review compensation package and benefits.',
  timeline: [{
    date: '2023-06-05',
    title: 'Application Submitted',
    description: 'Applied through referral'
  }, {
    date: '2023-06-10',
    title: 'Recruiter Contact',
    description: 'Initial screening call'
  }, {
    date: '2023-06-15',
    title: 'First Interview',
    description: 'Technical interview with team lead'
  }, {
    date: '2023-06-20',
    title: 'Second Interview',
    description: 'Panel interview with team members'
  }, {
    date: '2023-06-25',
    title: 'Final Interview',
    description: 'Interview with hiring manager'
  }, {
    date: '2023-07-01',
    title: 'Offer Received',
    description: 'Formal offer letter received'
  }]
}, {
  id: '5',
  company: 'Apple',
  title: 'iOS Developer',
  location: 'Cupertino, CA',
  salary: '$145,000 - $175,000',
  status: 'In Progress',
  dateApplied: '2023-06-20',
  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png',
  description: 'Apple is seeking an iOS Developer to join our team and help build innovative mobile applications for our users.',
  requirements: ['4+ years of experience in iOS development', 'Proficiency in Swift and Objective-C', 'Experience with UIKit and SwiftUI', 'Knowledge of iOS design principles and guidelines', 'Bachelor\'s degree in Computer Science or related field'],
  responsibilities: ['Design and develop high-quality iOS applications', 'Collaborate with cross-functional teams to define and implement features', 'Write clean, maintainable, and efficient code', 'Identify and fix bugs and performance issues', 'Stay up-to-date with emerging trends and technologies'],
  resumeScore: 78,
  timeline: [{
    date: '2023-06-20',
    title: 'Application Submitted',
    description: 'Applied through company website'
  }, {
    date: '2023-06-25',
    title: 'Application Viewed',
    description: 'Status updated on career portal'
  }]
}];