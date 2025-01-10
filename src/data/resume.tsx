import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: '彭偉',
  initials: 'WP',
  url: 'https://franco820711.github.io/portfolio',
  location: '台中, 台灣',
  locationLink: 'https://www.google.com/maps/place/taiwan',
  description: '熱衷於解決複雜問題，並打造具有影響力的產品。',
  summary:
    '全端工程師，具化工碩士背景，擅長將邏輯思維與問題解決能力應用於前後端開發與維運。曾獨立完成多款產品的開發與上線，涵蓋 AI 應用與系統開發。重視技術深度與產品迭代，持續提升專業技能。',
  avatarUrl: '/avatar.png',
  skills: {
    frontend: [
      'React',
      'Next.js',
      'Typescript',
      'Flutter',
      'Dart',
      'TailwindCSS',
    ],
    backend: ['Node.js', 'Express', 'NestJS', 'Python'],
    database: ['MongoDB', 'Mongoose', 'Redis', 'Postgres'],
    devops: [
      'Docker',
      'Portainer',
      'Traefik',
      'Github',
      'Grafana',
      'Prometheus',
      'Loki',
      'Jenkins',
      'Jest',
      'Umami',
      'Google analytics',
      'Google search console',
      'Hotjar',
      'NewebPay',
      'ECPay',
    ],
  },
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'franco19930711@gmail.com',
    tel: '+886 0972773293',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/franco820711',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/wei-peng-889670112',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://dub.sh/dillion-twitter',
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: 'Youtube',
        url: 'https://dub.sh/dillion-youtube',
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: '偉雯科技',
      href: '#',
      badges: [],
      location: '遠端',
      title: '全端工程師',
      logoUrl: '',
      start: 'November 2022',
      end: 'Present',
      description: `- 領導 2 人團隊開發多個全端專案 (4+)，涵蓋網頁應用、行動應用與 AI 應用，建立可重用元件庫，提升開發效率。\n- 實踐 Clean Code 原則，建立後端模組化設計模式，維護成本降低。\n- 使用 Jira、Trello 進行開發管理，優化工作流程與 確保程式碼品質。`,
    },
    {
      company: '達邁科技',
      badges: [],
      href: 'https://www.taimide.com.tw/zh/',
      location: '新竹',
      title: '研發工程師',
      logoUrl: '/companylogo1.jpg',
      start: 'May 2019',
      end: 'Octorber 2020',
      description: `- 負責新材料的評估、測試、分析與選擇。\n- 負責新產品或技術的製程開發及導入。`,
    },
  ],
  education: [
    {
      school: '中興大學',
      href: '#',
      degree: '化學工程所',
      logoUrl: '/NCHU_Badge.png',
      start: '2015',
      end: '2017',
    },
    {
      school: '中原大學',
      href: '#',
      degree: '化學工程系',
      logoUrl: '/CYCU.png',
      start: '2011',
      end: '2015',
    },
  ],
  projects: [
    {
      title: '肌智健身管理系統 Smart Gym',
      href: 'https://smartgym2024.com',
      dates: 'June 2024 - Present',
      active: true,
      description:
        '智慧健身房管理系統 Landing Page，整合人臉辨識、會員管理與課程財務等功能',
      technologies: [
        'NextJS',
        'NestJS',
        'Typescript',
        'Docker',
        'Traefik',
        'Grafana',
        'Shadcn UI',
        'TailwindCSS',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://smartgym2024.com',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/cover1.jpg',
      video: '',
      isYoutubeVideo: false,
    },
    {
      title: 'Tuba Gym 前後台',
      href: 'https://tubagym2024.com',
      dates: 'June 2024 - Present',
      active: true,
      description:
        '為肌智健身房管理系統客戶打造的前後台網站，提供會員管理、線上課程與會籍購買、私課/團課/期班開課與預約、進出場紀錄、財務報表等功能',
      technologies: [
        'NextJS',
        'Typescript',
        'Docker',
        'Shadcn UI',
        'TailwindCSS',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://tubagym2024.com',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video:
        process.env.NODE_ENV === 'production'
          ? '/portfolio/tuba_1.mp4'
          : '/tuba_1.mp4',
      isYoutubeVideo: false,
    },
    {
      title: 'Phrasely',
      href: 'https://www.phrasely.app/',
      dates: 'May 2023 - August 2023',
      active: true,
      description:
        'Phrasely 是一款專為提升語句流暢度而設計的應用，利用AI技術幫助使用者優化文本，使語句更通順、自然。無論是寫作、編輯或日常溝通，Phrasely都能即時提供最佳建議，提升語言表達的品質。',
      technologies: ['React', 'Typescript', 'Firebase', 'TailwindCSS'],
      links: [
        {
          type: 'Website',
          href: 'https://www.phrasely.app',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/cover4.png',
      video: '',
      isYoutubeVideo: false,
    },
    {
      title: 'DoggyCatty 狗狗貓貓',
      href: '#',
      dates: 'February 2024 - March 2024',
      active: true,
      description:
        'DoggyCatty 是一款專為動物愛好者設計的認養平台，模擬社交應用程式的滑動功能，讓用戶可以通過左右滑動快速瀏覽心儀的狗狗和貓貓，簡化認養選擇過程，讓更多流浪動物找到溫暖的家。',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      links: [
        {
          type: 'Website',
          href: 'https://apps.apple.com/us/app/doggycatty-%E7%8B%97%E7%8B%97%E8%B2%93%E8%B2%93%E9%A0%98%E9%A4%8A%E8%B6%A3/id6479363250',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Video',
          href: 'https://youtube.com/shorts/qOL1-YEVpMY?feature=share',
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: '/cover2.jpg',
      video: '',
      isYoutubeVideo: false,
    },
    {
      title: '熊獲利',
      href: 'https://apps.apple.com/tw/app/%E7%86%8A%E7%8D%B2%E5%88%A9/id6459054639',
      dates: 'July 2023 - December 2023',
      active: true,
      description:
        '熊獲利是一個專為二手電子商品設計的交易平台，與多家實體電子商品商家合作，確保用戶能以更優惠的價格購買高品質的二手商品。',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      links: [
        {
          type: 'Website',
          href: 'https://apps.apple.com/tw/app/%E7%86%8A%E7%8D%B2%E5%88%A9/id6459054639',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Video',
          href: 'https://youtube.com/shorts/3Tt6dTPNu6c?feature=share',
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: '/cover3.jpg',
      video: '',
      isYoutubeVideo: true,
    },
  ],
  devs: [
    {
      title: 'Memoizer',
      href: '#',
      dates: 'November 2024 - Present',
      active: true,
      description:
        'Memoizer 是一款語音事件記錄 Web App，用戶可透過語音快速記錄工作、生活或特殊事件。AI 技術能智能分析並整理資訊，提供便捷的查詢與回顧功能，讓事件管理更高效直觀。',
      technologies: ['NextJS', 'NestJS', 'Typescript', 'Docker'],
      links: [],
      image: '/cover7.png',
      video: '',
      isYoutubeVideo: false,
    },
    {
      title: 'Adjoined',
      href: '#',
      dates: 'May 2023 - Present',
      active: true,
      description:
        'Adjoined 是一款迷你讀書會應用程式，讓使用者可以自由加入或創建學習房間。每個房間都是一個專注學習的時間循環，使用者可以和夥伴一起學習、交流，或專注於自己的任務。系統會自動記錄每個人的學習時間，讓使用者能夠追蹤自己的學習歷程，建立持續學習的好習慣。',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      links: [],
      image: '/cover6.png',
      video: '',
      isYoutubeVideo: false,
    },
    {
      title: 'DogGo 狗狗Go',
      href: '#',
      dates: 'March 2023 - Present',
      active: true,
      description:
        '這款為狗狗飼主設計的代客遛狗應用，讓飼主輕鬆追蹤保姆進度，隨時掌握狗狗動態。保姆可即時記錄狗狗狀態，分享精彩時刻，增進飼主與狗狗的互動。',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      links: [],
      image: '/cover5.jpg',
      video: '',
      isYoutubeVideo: false,
    },
  ],
} as const;
