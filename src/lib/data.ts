import { Github, Linkedin, MessageCircle } from 'lucide-react';

// Inline placeholder images removed from external module to simplify assets
const PLACEHOLDER_IMAGES = [
  {
    id: 'project-1',
    description: 'AI Placement Helper web application interface',
    imageUrl: '/ai-placement-helper.png',
    imageHint: 'AI Placement Helper interface with glassmorphism design',
  },
  {
    id: 'project-2',
    description: 'Arduino Uno SMD Edition microcontroller board',
    imageUrl: '/arduino-board.png',
    imageHint: 'Arduino Uno board for Smart Shopping Cart project',
  },
  {
    id: 'project-3',
    description: 'An e-commerce storefront',
    imageUrl:
      'https://images.unsplash.com/photo-1586880244406-556ebe35f282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzdG9yZXxlbnwwfHx8fDE3NjM0Nzc4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'ecommerce store',
  },
  {
    id: 'project-4',
    description: 'SIFT Workstation logo for DFIR Lab',
    imageUrl: '/sift-workstation.png',
    imageHint: 'SIFT Workstation logo for digital forensics lab',
  },
];

const getProjectImage = (id: string) => {
  return (
    PLACEHOLDER_IMAGES.find((img) => img.id === id) || PLACEHOLDER_IMAGES[0]
  );
};

export const skillsData = [
  { name: 'Penetration Testing' },
  { name: 'Ethical Hacking' },
  { name: 'Vulnerability Assessment' },
  { name: 'Digital Forensics' },
  { name: 'Incident Response' },
  { name: 'Log Analysis' },
  { name: 'SIEM Fundamentals' },
  { name: 'Malware Analysis' },
  { name: 'Threat Hunting' },
  { name: 'MITRE ATT&CK Framework' },
  { name: 'Sysinternals Suite' },
  { name: 'Autopsy' },
  { name: 'FTK Imager' },
  { name: 'Sysmon' },
  { name: 'Wireshark' },
  { name: 'Metasploit Framework' },
  { name: 'Burp Suite' },
  { name: 'Nmap' },
  { name: 'Kali Linux' },
  { name: 'Python' },
  { name: 'C++' },
  { name: 'JavaScript' },
  { name: 'MongoDB' },
  { name: 'Node.js' },
  { name: 'Express.js' },
  { name: 'React.js' },
  { name: 'Git' },
  { name: 'Postman' },
  { name: 'VS Code' },
  { name: 'Windows' },
  { name: 'Linux (Ubuntu, Kali)' },
  { name: 'macOS' },
  { name: 'Advanced Troubleshooting' },
  { name: 'Analytical Problem-Solving' },
  { name: 'Client Communication' },
  { name: 'Team Collaboration' },
];


export const projectsData = [
  {
    title: 'AI Placements Helper (Full-Stack)',
    description:
      'Developed an AI-powered web application integrating LLMs (via llama.cpp) and cloud APIs to analyse job descriptions. Engineered a job analytics engine for resume-to-JD comparison, insight extraction, and automated report generation. Secured the backend (Express.js) using JWT for user authentication and session management.',
    technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'JWT'],
    image: getProjectImage('project-1'),
    sourceUrl: 'https://github.com/LohithG2503/Ai_Placements_Helper',
  },
  {
    title: 'Smart Shopping Cart (IoT)',
    description:
      'Designed and prototyped an automated billing and inventory tracking system using Arduino microcontrollers. Integrated RFID modules, load sensors, and an LCD display for seamless user interaction and data capture. Recognized for innovation and practical execution at the college expo.',
    technologies: ['Arduino IDE', 'C++', 'RFID Modules', 'Load Sensors'],
    image: getProjectImage('project-2'),
  },
  {
    title: 'My Personal DFIR Lab',
    description:
      'Engineered an isolated, virtualized security environment using VirtualBox, integrating a SIFT Workstation for forensics and a Windows 10 Enterprise victim node. Architected a centralized logging pipeline by deploying Sysmon for kernel-level endpoint visibility and configuring NXLog to forward telemetry to a custom Ubuntu/Syslog-ng server.',
    technologies: ['VirtualBox', 'SIFT', 'Sysmon', 'NXLog', 'Syslog-ng', 'Bash'],
    image: getProjectImage('project-4'),
    sourceUrl: 'https://github.com/LohithG2503/My-Personal-DFIR',
  },
];

export const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Presidency College, Bangalore',
    period: '2022 - 2025',
    description:
      'Grade: 7 CGPA',
  }
];

export const certificationsData = [
    {
        title: 'Cybersecurity Fundamentals',
        institution: 'IBM SkillsBuild',
        image: {
            imageUrl: '/IBM.png',
            imageHint: 'IBM certificate'
        },
        description: '',
    },
    {
        title: 'Certified Penetration Tester (CPT)',
        institution: 'RedTeam Hacker Academy (2025)',
        image: {
            imageUrl: '/cpt-cert.png',
            imageHint: 'CPT certificate'
        },
        description: 'Score: 88/100',
    }
];


export const contactData = {
  email: 'lohith2503@gmail.com',
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/LohithG2503', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/LohithG2503/', icon: Github },
    { name: 'WhatsApp', url: 'https://wa.me/+918105684524/?text=Hello%20this%20is%20my%20Whatsapp%20number', icon: MessageCircle },
  ],
};
