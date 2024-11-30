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
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Saisamarth21/React-quiz', 'Saisamarth21/React-Docker-Kubernetes'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
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
          title: 'COURSEWISE',
          description:
            'UI/UX Design for a learning app',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2074(1).png',
          link: 'https://saisamarth.framer.website/',
        },
        {
          title: 'Gameyte',
          description:
            'UI/UX Design for a game contest hosting',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2076.png',
          link: 'https://saisamarth.framer.website/',
        },
        {
          title: 'Instagram post',
          description:
            'Graphic designs for @thecoding_wiz page',
          imageUrl:
            'https://raw.githubusercontent.com/Saisamarth21/gitprofile/refs/heads/main/Images/Frame%2075.png',
          link: 'https://saisamarth.framer.website/',
        },
        {
          title: 'TENTONE',
          description:
            'UI/UX design for a music streaming site',
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
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: 'saisamaudikeri1',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'saisamarthudikeri',
    website: 'https://saisamarth.framer.website',
    phone: '',
    email: 'saisamarthudikeri@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1Dc8RDkksc4bqIV3ZEtOquPxY0mD6dwmx/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
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
  ],
  experiences: [
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
      title: 'A Comprehensive Comparative Analysis Between TEED and DexiNed for Enhanced Image Edge Detection',
      conferenceName: 'International Conference on Computer Communication and Informatics (ICCCI)',
      journalName: 'ICCCI',
      authors: 'Saisamarth Udikeri, Anupama P Bidargaddi',
      link: 'https://drive.google.com/file/d/1XSnaqWJF-yUltSaSeaWMfhkFsHNWCiDT/view?usp=drive_link',
      description:
        'This paper compares two edge detection models, Tiny Efficient Edge Detection (TEED) and Dense Extreme Inception Network (DexiNed), across multiple image datasets using metrics like MSE, PSNR, SSIM, NSER, EBIQA, and Sobel-based Reduced Reference. TEED prioritizes efficiency with 58K parameters, while DexiNed focuses on accuracy. The study highlights architectural differences in upsampling networks, loss functions, and skip connections. Results show TEED excels in lower error metrics (MSE) and higher edge preservation (NSER), while DexiNed produces sharper edges due to multi-scale processing. Average EBIQA values for TEED and DexiNed are 0.3304 and 0.5717, and NSER values are 13.028 and 9.159, respectively. The findings offer insights for selecting edge detection methods for computer vision tasks.',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'halloween',

    // Hides the switch in the navbar
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
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

    // Custom theme, applied to `procyon` theme
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
