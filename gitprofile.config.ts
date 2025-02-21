const CONFIG = {
  github: {
    username: 'Saisamarth21', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'My GitHub',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Saisamarth21/React-quiz', 'Saisamarth21/React-Docker-Kubernetes'],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'React Docker Kubernetes',
          description:
            'Deployed a React application using Docker and Kubernetes with Horizontal Pod Autoscaling (HPA) for efficient scaling',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2069.png',
          link: 'https://github.com/Saisamarth21/React-Docker-Kubernetes',
        },
        {
          title: 'React quiz',
          description:
            'Deployed a React quiz app using AWS Amplify and integrated AWS Cognito for user authentication.',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2070.png',
          link: 'https://github.com/Saisamarth21/React-quiz',
        },
        {
          title: 'Ansible on AWS',
          description:
            'Ansible setup and configuration with AWS EC2. This project involves installing Ansible on one of three created EC2 instances and includes various Ansible playbooks for system management.',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2071.png',
          link: 'https://github.com/Saisamarth21/Ansible-on-AWS',
        },
        {
          title: 'Web Hosting Using Nginx on Linux Server',
          description:
            'Hosted a website using Nginx on Linux (WSL) with domain routing',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2087.png',
          link: 'https://github.com/Saisamarth21/Web-Hosting-Using-Nginx-on-Linux-Servers',
        },
        {
          title: 'Human 3D Avatar Generation from an Image',
          description:
            'This project presents a system for generating realistic 3D human avatars from single RGB images. It integrates pose-guided normal prediction with detailed implicit surface reconstruction using advanced computer vision techniques',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2082.png',
          link: 'https://github.com/Saisamarth21/Human-3D-avatar-generation-from-an-image',
        },
        {
          title: 'Histopathology for Oral Cancer Diagnosis',
          description:
            'This project demonstrates the use of Hadoop and Hive to perform sentiment analysis on a Twitter dataset. The process involves uploading a CSV dataset to the Hadoop Distributed File System (HDFS), and querying the data for insights.',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2082.png',
          link: 'https://github.com/Saisamarth21/Histopathology-for-Oral-Cancer-Diagnosis',
        },
        {
          title: 'Twitter Sentiment Analysis Using Hadoop and Hive',
          description:
            'This project demonstrates the use of Hadoop and Hive to perform sentiment analysis on a Twitter dataset. The process involves uploading a CSV dataset to the Hadoop Distributed File System (HDFS), and querying the data for insights.',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2085.png',
          link: 'https://github.com/Saisamarth21/Twitter-Sentiment-Analysis-Using-Hadoop-and-Hive',
        },
        {
          title: 'Oil Spill Detection in Marine Environments Using AIS and Satellite Data',
          description:
            'Detects marine oil spills using AIS data and satellite imagery. Utilizes machine learning for anomaly detection and SAR image analysis to protect the environment.',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2084.png',
          link: 'https://github.com/Saisamarth21/Oil-Spill-Detection-in-Marine-Environments-Using-AIS-and-Satellite-Data',
        },
        {
          title: 'Hybrid AES and 3DES Encryption System',
          description:
            'This project uses hybrid encryption with AES (CTR mode) and 3DES to securely encrypt and decrypt image datasets, combining speed and enhanced security.',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2080.png',
          link: 'https://github.com/Saisamarth21/Hybrid-AES-and-3DES-Encryption-System',
        },
        {
          title: 'Email Verification with reCAPTCHA',
          description:
            'This project is a web-based email authentication system that uses Phone.Email for email verification and Google reCAPTCHA v3 for security. Built with HTML, CSS, JavaScript, Node.js, and Express, its designed for hosting on platforms with backend support.',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2073.png',
          link: 'https://github.com/Saisamarth21/Email-Verification-with-reCAPTCHA',
        },
        {
          title: 'Hotel Booking Chatbot Using AWS Lex Tool',
          description:
            'This project is a web-based email authentication system that uses Phone.Email for email verification and Google reCAPTCHA v3 for security. Built with HTML, CSS, JavaScript, Node.js, and Express, its designed for hosting on platforms with backend support.',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2072.png',
          link: 'https://github.com/Saisamarth21/Hotel-Booking-Chatbot-Using-AWS-Lex-Tool',
        },
        {
          title: 'ZEE5 Clone',
          description:
            'This project is a Clone of ZEE5 Streaming Site',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2088.png',
          link: 'https://github.com/Saisamarth21/ZEE5',
        },
        {
          title: 'COURSEWISE',
          description: 'UI/UX Design for a learning app',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2074(1).png',
          link: 'https://saisamarth.framer.website/',
        },
        {
          title: 'Gameyte',
          description: 'UI/UX Design for a game contest hosting',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2076.png',
          link: 'https://saisamarth.framer.website/',
        },
        {
          title: 'Instagram post',
          description: 'Graphic designs for @thecoding_wiz page',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2075.png',
          link: 'https://saisamarth.framer.website/',
        },
        {
          title: 'TENTONE',
          description: 'UI/UX design for a music streaming site',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2077.png',
          link: 'https://saisamarth.framer.website/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Saisamarth',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'saisamarth-udikeri',
    twitter: 'Saisamarth_',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: 'saisamaudikeri1',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: 'saisamarthudikeri',
    website: 'https://saisamarth.framer.website',
    phone: '',
    email: 'saisamarthudikeri@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/12Lzc-7iCSfQXgh3ElbYQEtxgC9oATmGw/view?usp=drive_link',
  },
  skills: [
    'React.js',
    'AWS',
    'Ansible',
    'Linux',
    'Node.js',
    'MySQL',
    'Git',
    'Kubernetes',
    'Docker',
    'Python',
    'C',
    'C++',
    'HTML',
    'CSS',
    'Nginx'
  ],
  experiences: [
    {
      company: 'ClickCrawl Media Private Limited',
      position: 'Software Developer Intern',
      from: 'February 2025',
      to: '',
      companyLink: 'https://clickcrawl.net/',
    },
    {
      company: 'KLETech-Center of Excellence in Visual Intelligence (CEVI)',
      position: 'Project Intern',
      from: 'Sep 2023',
      to: 'Jul 2024',
      companyLink: 'https://cevi.co.in/',
    },
    {
      company: 'Innovilla',
      position: 'AWS Developer',
      from: 'Aug 2024',
      to: 'Sep 2024',
      companyLink: 'https://innovilla.in/',
    },
    {
      company: 'CodingWiz',
      position: 'UI/UX Designer',
      from: 'May 2023',
      to: 'Jun 2023',
      companyLink: 'https://thecodewiz.com/',
    },
  ],
  certifications: [
    {
      name: 'AWS Academy Cloud Foundations',
      body: '',
      year: 'Oct 2024',
      link: 'https://drive.google.com/file/d/1k_AQFTVjdsqqnoxXdXOd2NLuZp6MmQQ1/view',
    },
    {
      name: 'Cyber Security and Privacy',
      body: '',
      year: 'Nov 2024',
      link: 'https://drive.google.com/file/d/1uGkrjSnKXIukedUdd2PsptgxVrp98Qsn/view',
    },
    {
      name: 'Smart India Hackathon',
      body: '',
      year: 'Sep 2024',
      link: 'https://drive.google.com/file/d/175-mwcvRuFH6Oxj2OIjkNkTQyLp7Duzq/view',
    },
    {
      name: 'AWS Cloud Practitioner Essentials',
      body: '',
      year: 'Aug 2024',
      link: 'https://drive.google.com/file/d/1kZQnKuyJoSzFGGj9Ek8RCOFj02qAtJp9/view',
    },
    {
      name: 'Cisco Networking Basics',
      body: '',
      year: 'May 2024',
      link: 'https://drive.google.com/file/d/1TSQOWvU8eK1tOlBZEN3O3oNZOcXOB_7Z/view',
    },
    {
      name: 'Kubernetes Course from a DevOps guru (Kubernetes + Docker)',
      body: '',
      year: 'May 2024',
      link: 'https://drive.google.com/file/d/1gUbeOlt5Nqp9TPv3D2D917AxglH-RcEr/view',
    },
  ],
  educations: [
    {
      institution: 'KLE Technological University - Hubballi (India)',
      degree: 'Computer Science and Engineering',
      from: '2025',
      to: '2021',
    },
    {
      institution: 'Prism PU Science College',
      degree: 'Pre University',
      from: '2021',
      to: '2019',
    },
    {
      institution: 'Kendriya Vidyalaya (KV)',
      degree: 'School',
      from: '2019',
      to: '2009',
    },
  ],
  publications: [
    {
      title:
        'A Comprehensive Comparative Analysis Between TEED and DexiNed for Enhanced Image Edge Detection',
      conferenceName:
        'International Conference on Computer Communication and Informatics (ICCCI)',
      journalName: 'ICCCI',
      authors: 'Saisamarth Udikeri, Anupama P Bidargaddi',
      link: 'https://drive.google.com/file/d/1XSnaqWJF-yUltSaSeaWMfhkFsHNWCiDT/view?usp=drive_link',
      description:
        'This paper compares two edge detection models, Tiny Efficient Edge Detection (TEED) and Dense Extreme Inception Network (DexiNed), across multiple image datasets using various metrics. The study highlights differences in efficiency and accuracy between the two models.',
    },
  ],
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'halloween',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
