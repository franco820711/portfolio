import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: '彭偉',
  initials: 'WP',
  url: 'https://dillion.io',
  location: '台中, 台灣',
  locationLink: 'https://www.google.com/maps/place/sanfrancisco',
  description: '熱衷於解決複雜問題，並打造具有影響力的產品。',
  summary:
    '全端工程師，具化工碩士背景，擅長將邏輯思維與問題解決能力應用於前後端開發與維運。曾帶領團隊成功上線多款產品，涵蓋 AI 應用與系統開發。重視技術深度與產品迭代，持續提升專業技能。',
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
        url: 'https://franco19930711.github.io/',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://dub.sh/dillion-linkedin',
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
      description: `- 領導 2 人團隊開發多個全端專案 (4+)，涵蓋網頁應用、行動應用與 AI 應用，建立可重用元件庫，提升 40% 開發效率。\n- 實踐 Clean Code 原則，建立模組化設計模式，維護成本降低。\n- 使用 Jira、Trello 進行敏捷開發管理，優化工作流程與 Code Review 制度，確保程式碼品質`,
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
      degree: '化工碩士',
      logoUrl: '/NCHU_Badge.png',
      start: '2015',
      end: '2017',
    },
    {
      school: '中原大學',
      href: '#',
      degree: '化工學士',
      logoUrl: '/CYCU.png',
      start: '2011',
      end: '2014',
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
      video: '/tuba_1.mp4',
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
      href: 'https://tubagym2024.com',
      dates: 'February 2024 - March 2024',
      active: true,
      description:
        'DoggyCatty 是一款專為動物愛好者設計的認養平台，模擬社交應用程式的滑動功能，讓用戶可以通過左右滑動快速瀏覽心儀的狗狗和貓貓，簡化認養選擇過程，讓更多流浪動物找到溫暖的家。',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      links: [
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
        '這款AI事件記錄應用，旨在幫助用戶輕鬆記錄各種日常事件，無論是工作、生活還是特殊事件，AI技術能夠智能分析並整理資訊，提供便捷的查詢與回顧功能。讓記錄與管理事件變得更加簡單、直觀，無需繁瑣操作。',
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
        '這款專為狗狗飼主設計的代客遛狗服務應用，讓飼主能夠輕鬆追蹤遛狗保姆的進度，並即時掌握狗狗的動態。保姆則可在遛狗過程中紀錄狗狗的狀態，拍攝精彩時刻並與飼主分享，提升飼主與狗狗之間的互動。',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      links: [],
      image: '/cover5.jpg',
      video: '',
      isYoutubeVideo: false,
    },
  ],
  hackathons: [
    {
      title: 'Hack Western 5',
      dates: 'November 23rd - 25th, 2018',
      location: 'London, Ontario',
      description:
        'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [],
    },
    {
      title: 'Hack The North',
      dates: 'September 14th - 16th, 2018',
      location: 'Waterloo, Ontario',
      description:
        'Developed a mobile application which delivers university campus wide events in real time to all students.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
      links: [],
    },
    {
      title: 'FirstNet Public Safety Hackathon',
      dates: 'March 23rd - 24th, 2018',
      location: 'San Francisco, California',
      description:
        'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
      icon: 'public',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
      links: [],
    },
    {
      title: 'DeveloperWeek Hackathon',
      dates: 'February 3rd - 4th, 2018',
      location: 'San Francisco, California',
      description:
        'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
      links: [
        {
          title: 'Github',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/cryptotrends/cryptotrends',
        },
      ],
    },
    {
      title: 'HackDavis',
      dates: 'January 20th - 21st, 2018',
      location: 'Davis, California',
      description:
        'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
      win: 'Best Data Hack',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
      links: [
        {
          title: 'Devpost',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://devpost.com/software/my6footprint',
        },
        {
          title: 'ML',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/Wallet6/my6footprint-machine-learning',
        },
        {
          title: 'iOS',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/Wallet6/CarbonWallet',
        },
        {
          title: 'Server',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/Wallet6/wallet6-server',
        },
      ],
    },
    {
      title: 'ETH Waterloo',
      dates: 'October 13th - 15th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
      links: [
        {
          title: 'Organization',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/ethdocnet',
        },
      ],
    },
    {
      title: 'Hack The North',
      dates: 'September 15th - 17th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed a virtual reality application allowing users to see themselves in third person.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Streamer Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/justinmichaud/htn2017',
        },
        {
          title: 'Client Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/RTSPClient',
        },
      ],
    },
    {
      title: 'Hack The 6ix',
      dates: 'August 26th - 27th, 2017',
      location: 'Toronto, Ontario',
      description:
        'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/ShareShip/ShareShip',
        },
        {
          title: 'Site',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://share-ship.herokuapp.com/',
        },
      ],
    },
    {
      title: 'Stupid Hack Toronto',
      dates: 'July 23rd, 2017',
      location: 'Toronto, Ontario',
      description:
        'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/nsagirlfriend/nsagirlfriend',
        },
      ],
    },
    {
      title: 'Global AI Hackathon - Toronto',
      dates: 'June 23rd - 25th, 2017',
      location: 'Toronto, Ontario',
      description:
        'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
      win: '1st Place Winner',
      links: [
        {
          title: 'Article',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/TinySamosas/',
        },
      ],
    },
    {
      title: 'McGill AI for Social Innovation Hackathon',
      dates: 'June 17th - 18th, 2017',
      location: 'Montreal, Quebec',
      description:
        'Developed realtime facial microexpression analyzer using AI',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
      links: [],
    },
    {
      title: 'Open Source Circular Economy Days Hackathon',
      dates: 'June 10th, 2017',
      location: 'Toronto, Ontario',
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
      win: '1st Place Winner',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/genecis',
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: 'May 19th - 21st, 2017',
      location: 'International',
      description: 'Improved PocketDoc and submitted to online competition',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
      win: 'Top 10 Finalist | Honourable Mention',
      links: [
        {
          title: 'Medium Article',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a',
        },
        {
          title: 'Devpost',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://devpost.com/software/pocketdoc-react-native',
        },
        {
          title: 'YouTube',
          icon: <Icons.youtube className="h-4 w-4" />,
          href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/pocketdoc-react-native',
        },
      ],
    },
    {
      title: 'HackMining',
      dates: 'May 12th - 14th, 2017',
      location: 'Toronto, Ontario',
      description: 'Developed neural network to optimize a mining process',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
      links: [],
    },
    {
      title: 'Waterloo Equithon',
      dates: 'May 5th - 7th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
      links: [
        {
          title: 'Devpost',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://devpost.com/software/pocketdoc-react-native',
        },
        {
          title: 'YouTube',
          icon: <Icons.youtube className="h-4 w-4" />,
          href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/pocketdoc-react-native',
        },
      ],
    },
    {
      title: 'SpaceApps Waterloo',
      dates: 'April 28th - 30th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/earthwatch',
        },
      ],
    },
    {
      title: 'MHacks 9',
      dates: 'March 24th - 26th, 2017',
      location: 'Ann Arbor, Michigan',
      description:
        'Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/threejs-planes',
        },
      ],
    },
    {
      title: 'StartHacks I',
      dates: 'March 4th - 5th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png',
      win: '1st Place Winner',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Source (Mobile)',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mattBlackDesign/recipic-ionic',
        },
        {
          title: 'Source (Server)',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mattBlackDesign/recipic-rails',
        },
      ],
    },
    {
      title: 'QHacks II',
      dates: 'February 3rd - 5th, 2017',
      location: 'Kingston, Ontario',
      description:
        'Developed a mobile game which enables city-wide manhunt with random lobbies',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Source (Mobile)',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/human-huntr-react-native',
        },
        {
          title: 'Source (API)',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mattBlackDesign/human-huntr-rails',
        },
      ],
    },
    {
      title: 'Terrible Hacks V',
      dates: 'November 26th, 2016',
      location: 'Waterloo, Ontario',
      description:
        'Developed a mock of Windows 11 with interesting notifications and functionality',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/justinmichaud/TerribleHacks2016-Windows11',
        },
      ],
    },
    {
      title: 'Portal Hackathon',
      dates: 'October 29, 2016',
      location: 'Kingston, Ontario',
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/UWPortalSDK/crowmark',
        },
      ],
    },
  ],
} as const;
