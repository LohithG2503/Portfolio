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
    description: 'Clarity-X DFIR reasoning engine',
    imageUrl: '/Clarity-X.png',
    imageHint: 'Clarity-X AI-driven DFIR reasoning engine',
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
      'Full‑stack job‑seeker app: secure JWT auth, job/company analysis and interview prep, with dual LLM inference (local llama.cpp or La Platforme cloud).',
    technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'JWT'],
    image: getProjectImage('project-1'),
    imageFit: 'contain' as const,
    sourceUrl: 'https://github.com/LohithG2503/Ai_Placements_Helper',
  },
  {
    title: 'Clarity-X: AI-Driven DFIR Reasoning Engine',
    description:
      'An AI-driven DFIR reasoning engine that correlates real-time Sysmon events and uses LLMs to generate high-fidelity threat intelligence reports.',
    technologies: ['Python', 'Sysmon', 'Winlogbeat', 'Groq API', 'LLM Integration', 'DFIR'],
    image: getProjectImage('project-2'),
    imageFit: 'contain' as const,
    sourceUrl: 'https://github.com/LohithG2503/Clarity-X',
  },
  {
    title: 'My Personal DFIR Lab',
    description:
      'A fully isolated, virtualized DFIR laboratory featuring centralized logging (Sysmon/NXLog/Syslog-ng), network segmentation, and a SIFT forensic workstation for threat analysis.',
    technologies: ['VirtualBox', 'SIFT', 'Sysmon', 'NXLog', 'Syslog-ng', 'Bash'],
    image: getProjectImage('project-4'),
    imageFit: 'cover' as const,
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
