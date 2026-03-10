// 中英文翻译文件

export type Language = 'zh' | 'en';

export interface Translation {
  // Navigation
  nav: {
    home: string;
    products: string;
    technology: string;
    about: string;
    contact: string;
  };

  // Common
  common: {
    buyNow: string;
    viewDetails: string;
    viewAllProducts: string;
    new: string;
    hot: string;
    price: string;
    copyright: string;
    brandSlogan: string;
  };

  // Hero Section
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    features: string;
    buyNow: string;
    viewProducts: string;
  };

  // Featured Products
  featuredProducts: {
    sectionBadge: string;
    sectionTitle1: string;
    sectionTitle2: string;
    description: string;
    viewAll: string;
  };

  // Technology Highlights
  technology: {
    sectionBadge: string;
    sectionTitle1: string;
    sectionTitle2: string;
    description: string;
    features: {
      face: string;
      faceDesc: string;
      smart: string;
      smartDesc: string;
      security: string;
      securityDesc: string;
      battery: string;
      batteryDesc: string;
      unlock: string;
      unlockDesc: string;
      monitor: string;
      monitorDesc: string;
    };
  };

  // Brand Philosophy
  brand: {
    aboutBadge: string;
    sectionTitle1: string;
    sectionTitle2: string;
    description: string;
    stats: {
      families: string;
      accuracy: string;
      support: string;
      satisfaction: string;
    };
    values: {
      security: {
        title: string;
        desc: string;
      };
      user: {
        title: string;
        desc: string;
      };
      innovation: {
        title: string;
        desc: string;
      };
      service: {
        title: string;
        desc: string;
      };
    };
  };

  // Products Page
  productsPage: {
    title1: string;
    title2: string;
    description: string;
  };

  // About Page
  aboutPage: {
    title1: string;
    title2: string;
    description: string;
    stats: {
      families: string;
      accuracy: string;
      support: string;
      warranty: string;
    };
    values: {
      title: string;
      description: string;
      mission: { title: string; desc: string };
      innovation: { title: string; desc: string };
      user: { title: string; desc: string };
    };
    team: {
      title: string;
      description: string;
      product: { name: string; role: string };
      tech: { name: string; role: string };
      design: { name: string; role: string };
      service: { name: string; role: string };
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };

  // Technology Page
  technologyPage: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    tech: {
      encryption: { title: string; desc: string; stats: string };
      face: { title: string; desc: string; stats: string };
      smart: { title: string; desc: string; stats: string };
      alarm: { title: string; desc: string; stats: string };
      battery: { title: string; desc: string; stats: string };
      ai: { title: string; desc: string; stats: string };
    };
    milestones: {
      title: string;
      items: {
        year: string;
        title: string;
        desc: string;
      }[];
    };
  };

  // Contact Page
  contactPage: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    wechat: {
      name: string;
      description: string;
    };
    otherTitle: string;
    hotline: { label: string; value: string };
    business: { label: string; value: string };
    hours: { label: string; value: string };
  };

  // Product Detail Page
  productDetail: {
    buyNow: string;
    freeShipping: string;
    warranty: string;
    returnPolicy: string;
    coreFeatures: string;
    specifications: string;
    productDetails: string;
  };

  // Footer
  footer: {
    productsTitle: string;
    allProducts: string;
    aiSeries: string;
    classicSeries: string;
    companyTitle: string;
    about: string;
    technology: string;
    contact: string;
    brandDesc: string;
  };
}

export const translations: Record<Language, Translation> = {
  zh: {
    // Navigation
    nav: {
      home: '首页',
      products: '产品中心',
      technology: '技术亮点',
      about: '关于我们',
      contact: '联系我们',
    },

    // Common
    common: {
      buyNow: '立即购买',
      viewDetails: '查看详情',
      viewAllProducts: '查看全部产品',
      new: '新品',
      hot: '热销',
      price: '价格',
      copyright: '版权所有',
      brandSlogan: '专注智能锁具 · 守护家庭安全',
    },

    // Hero Section
    hero: {
      badge: '丽贝卡智能锁 · 守护家庭安全',
      title1: '智能锁',
      title2: '选丽贝卡',
      description: '为您的家庭提供全方位的安全守护',
      features: '3D 人脸识别 · 掌静脉解锁 · AI 智能语音 · 远程监控',
      buyNow: '立即购买',
      viewProducts: '查看产品',
    },

    // Featured Products
    featuredProducts: {
      sectionBadge: '产品中心',
      sectionTitle1: '热门',
      sectionTitle2: '推荐',
      description: '探索丽贝卡智能锁系列产品，3D 人脸识别、掌静脉解锁、AI 智能语音，为您的家庭提供全方位的安全守护',
      viewAll: '查看全部产品',
    },

    // Technology Highlights
    technology: {
      sectionBadge: '技术亮点',
      sectionTitle1: '核心科技',
      sectionTitle2: '守护安全',
      description: '丽贝卡智能锁采用先进的生物识别技术和 AI 智能系统，为您的家庭提供全方位的安全守护',
      features: {
        face: '3D 人脸识别',
        faceDesc: '3D 结构光人脸识别技术，0.3 秒快速解锁，99.9% 准确率',
        smart: '智能互联',
        smartDesc: '支持 APP 远程控制，小德同学 AI 语音，智能家居联动',
        security: '金融级安全',
        securityDesc: 'AES-128 位加密，防撬报警，全方位守护家庭安全',
        battery: '持久续航',
        batteryDesc: '大容量锂电池，6-12 个月超长续航，Type-C 应急供电',
        unlock: '多种开锁方式',
        unlockDesc: '人脸/掌静脉/指纹/密码/IC 卡/钥匙，满足全家需求',
        monitor: '实时监控',
        monitorDesc: '门外逗留抓拍，APP 实时推送，远程可视对讲',
      },
    },

    // Brand Philosophy
    brand: {
      aboutBadge: '关于丽贝卡',
      sectionTitle1: '专注智能锁具',
      sectionTitle2: '守护家庭安全',
      description: '丽贝卡（Rebekey）是一家专注于智能门锁研发与制造的品牌，致力于为用户提供安全、便捷、智能的门锁解决方案',
      stats: {
        families: '服务中国家庭',
        accuracy: '识别准确率',
        support: '全天候守护',
        satisfaction: '客户满意度',
      },
      values: {
        security: {
          title: '金融级安全标准',
          desc: '采用 AES-128 位加密技术，防撬报警，全方位守护家庭安全',
        },
        user: {
          title: '以人为本的设计理念',
          desc: '简洁易用的交互设计，老人小孩都能轻松使用',
        },
        innovation: {
          title: '持续创新研发',
          desc: '专注生物识别技术，不断推出行业领先的智能锁产品',
        },
        service: {
          title: '全国联保服务',
          desc: '24/7 客户支持，全国联保，让您无后顾之忧',
        },
      },
    },

    // Products Page
    productsPage: {
      title1: '我们的',
      title2: '产品',
      description: '探索丽贝卡智能锁全系列，从 AI 智能系列到经典系列，为您的家庭提供全方位的安全守护',
    },

    // About Page
    aboutPage: {
      title1: '关于',
      title2: '丽贝卡',
      description: '丽贝卡（Rebekey）是一家专注于智能门锁研发与制造的品牌，致力于为用户提供安全、便捷、智能的门锁解决方案',
      stats: {
        families: '服务中国家庭',
        accuracy: '识别准确率',
        support: '全天候守护',
        warranty: '联保服务',
      },
      values: {
        title: '核心价值',
        description: '指引我们前进的理念',
        mission: { title: '我们的使命', desc: '让每个家庭都能享受到智能科技带来的安全与便捷' },
        innovation: { title: '创新驱动', desc: '持续投入研发，不断推出领先的生物识别技术和 AI 智能产品' },
        user: { title: '用户至上', desc: '以用户需求为中心，提供优质的产品和贴心的服务' },
      },
      team: {
        title: '专业团队',
        description: '用心打造每一款产品',
        product: { name: '产品团队', role: '专业研发' },
        tech: { name: '技术团队', role: '创新突破' },
        design: { name: '设计团队', role: '精工美学' },
        service: { name: '服务团队', role: '贴心支持' },
      },
      cta: {
        title: '选择丽贝卡 选择安全',
        description: '探索我们的智能锁系列产品，为您的家庭提供全方位的安全守护',
        button: '查看产品',
      },
    },

    // Technology Page
    technologyPage: {
      badge: '技术亮点',
      title1: '核心科技',
      title2: '守护安全',
      description: '丽贝卡智能锁采用先进的生物识别技术和 AI 智能系统，为您的家庭提供全方位的安全守护',
      tech: {
        encryption: { title: '金融级加密', desc: 'AES-128 位加密技术，金融级别的安全防护，保护您的数据免受未授权访问', stats: '128-bit' },
        face: { title: '3D 人脸识别', desc: '3D 结构光人脸识别技术，毫秒级解锁速度，99.9% 识别准确率', stats: '99.9%' },
        smart: { title: '智能互联', desc: '支持 WiFi、蓝牙等多种连接方式，无缝对接智能家居系统', stats: '多协议' },
        alarm: { title: '防撬报警', desc: '内置高灵敏度传感器，检测到撬动立即报警并推送 APP 通知', stats: '< 100ms' },
        battery: { title: '持久续航', desc: '智能功耗管理系统，大容量锂电池，6-12 个月超长续航', stats: '6-12 月' },
        ai: { title: 'AI 智能语音', desc: '内置小德同学 AI 语音助手，支持语音控制、天气查询等功能', stats: 'AI 智能' },
      },
      milestones: {
        title: '发展历程',
        items: [
          { year: '2020', title: '品牌创立', desc: '丽贝卡（Rebekey）品牌创立，专注于智能门锁研发与制造' },
          { year: '2021', title: '产品上市', desc: '首款智能锁产品上市，获得市场认可' },
          { year: '2023', title: '技术突破', desc: '3D 人脸识别、掌静脉识别等核心技术取得突破' },
          { year: '2024', title: '服务 10W+ 家庭', desc: '累计服务超过 10 万中国家庭，用户满意度达 99.9%' },
        ],
      },
    },

    // Contact Page
    contactPage: {
      badge: '联系我们',
      title1: '添加',
      title2: '企业微信',
      description: '扫描二维码添加我们的企业微信，获取产品咨询、报价、安装等一对一专属服务',
      wechat: {
        name: '企业微信',
        description: '扫描二维码添加企业微信',
      },
      otherTitle: '其他联系方式',
      hotline: { label: '服务热线', value: '400-XXX-XXXX' },
      business: { label: '商务合作', value: 'business@rebekey.com' },
      hours: { label: '工作时间', value: '周一至周日 9:00-21:00' },
    },

    // Product Detail Page
    productDetail: {
      buyNow: '立即购买',
      freeShipping: '全国包邮',
      warranty: '全国联保',
      returnPolicy: '7 天无理由退换',
      coreFeatures: '核心功能',
      specifications: '产品参数',
      productDetails: '产品详情',
    },

    // Footer
    footer: {
      productsTitle: '产品中心',
      allProducts: '全部产品',
      aiSeries: 'AI 智能系列',
      classicSeries: '经典系列',
      companyTitle: '关于我们',
      about: '关于我们',
      technology: '技术亮点',
      contact: '联系我们',
      brandDesc: '丽贝卡智能锁，专注于智能门锁研发与制造，为您的家庭安全保驾护航',
    },
  },

  en: {
    // Navigation
    nav: {
      home: 'Home',
      products: 'Products',
      technology: 'Technology',
      about: 'About Us',
      contact: 'Contact',
    },

    // Common
    common: {
      buyNow: 'Buy Now',
      viewDetails: 'View Details',
      viewAllProducts: 'View All Products',
      new: 'New',
      hot: 'Hot',
      price: 'Price',
      copyright: 'All Rights Reserved',
      brandSlogan: 'Smart Locks · Home Security',
    },

    // Hero Section
    hero: {
      badge: 'Rebekey Smart Lock · Home Security Guardian',
      title1: 'Smart Lock',
      title2: 'Choose Rebekey',
      description: 'Comprehensive security protection for your family',
      features: '3D Face Recognition · Palm Vein Unlock · AI Voice · Remote Monitor',
      buyNow: 'Buy Now',
      viewProducts: 'View Products',
    },

    // Featured Products
    featuredProducts: {
      sectionBadge: 'Products',
      sectionTitle1: 'Featured',
      sectionTitle2: 'Products',
      description: 'Explore Rebekey smart lock series with 3D face recognition, palm vein unlock, and AI voice for comprehensive home security',
      viewAll: 'View All Products',
    },

    // Technology Highlights
    technology: {
      sectionBadge: 'Technology',
      sectionTitle1: 'Core Technology',
      sectionTitle2: 'Security Guard',
      description: 'Rebekey smart locks use advanced biometric and AI technology for comprehensive home security',
      features: {
        face: '3D Face Recognition',
        faceDesc: '3D structured light face recognition, 0.3s unlock, 99.9% accuracy',
        smart: 'Smart Connection',
        smartDesc: 'APP remote control, AI voice assistant, smart home integration',
        security: 'Bank-level Security',
        securityDesc: 'AES-128 encryption, anti-theft alarm, comprehensive protection',
        battery: 'Long Battery Life',
        batteryDesc: 'Large capacity lithium battery, 6-12 months续航，Type-C emergency power',
        unlock: 'Multiple Unlock Methods',
        unlockDesc: 'Face/Palm vein/Fingerprint/Password/IC card/Key for family needs',
        monitor: 'Real-time Monitor',
        monitorDesc: 'Door detection capture, APP push notification, video intercom',
      },
    },

    // Brand Philosophy
    brand: {
      aboutBadge: 'About Rebekey',
      sectionTitle1: 'Smart Lock Specialist',
      sectionTitle2: 'Home Security Guardian',
      description: 'Rebekey is a brand focused on smart door lock R&D and manufacturing, committed to providing secure, convenient, and intelligent solutions',
      stats: {
        families: 'Families Served',
        accuracy: 'Recognition Rate',
        support: '24/7 Support',
        satisfaction: 'Satisfaction',
      },
      values: {
        security: {
          title: 'Bank-level Security',
          desc: 'AES-128 encryption, anti-theft alarm, comprehensive home protection',
        },
        user: {
          title: 'User-focused Design',
          desc: 'Simple interaction design, easy for elderly and children to use',
        },
        innovation: {
          title: 'Continuous Innovation',
          desc: 'Focused on biometric technology, launching industry-leading products',
        },
        service: {
          title: 'Nationwide Warranty',
          desc: '24/7 customer support, nationwide warranty, no worries',
        },
      },
    },

    // Products Page
    productsPage: {
      title1: 'Our',
      title2: 'Products',
      description: 'Explore Rebekey smart lock series, from AI smart series to classic series, comprehensive security for your family',
    },

    // About Page
    aboutPage: {
      title1: 'About',
      title2: 'Rebekey',
      description: 'Rebekey is a brand focused on smart door lock R&D and manufacturing, providing secure and intelligent solutions',
      stats: {
        families: 'Families Served',
        accuracy: 'Recognition Rate',
        support: '24/7 Support',
        warranty: 'Warranty Service',
      },
      values: {
        title: 'Core Values',
        description: 'Guiding principles',
        mission: { title: 'Our Mission', desc: 'Bring smart security to every family' },
        innovation: { title: 'Innovation', desc: 'Continuous R&D in biometric and AI technology' },
        user: { title: 'User First', desc: 'Quality products and thoughtful service' },
      },
      team: {
        title: 'Professional Team',
        description: 'Crafting every product with care',
        product: { name: 'Product Team', role: 'R&D' },
        tech: { name: 'Tech Team', role: 'Innovation' },
        design: { name: 'Design Team', role: 'Aesthetics' },
        service: { name: 'Service Team', role: 'Support' },
      },
      cta: {
        title: 'Choose Rebekey, Choose Security',
        description: 'Explore our smart lock series for comprehensive home security',
        button: 'View Products',
      },
    },

    // Technology Page
    technologyPage: {
      badge: 'Technology',
      title1: 'Core Technology',
      title2: 'Security Guard',
      description: 'Rebekey smart locks use advanced biometric and AI technology for home security',
      tech: {
        encryption: { title: 'Bank-level Encryption', desc: 'AES-128 encryption for data protection', stats: '128-bit' },
        face: { title: '3D Face Recognition', desc: '3D structured light, millisecond unlock, 99.9% accuracy', stats: '99.9%' },
        smart: { title: 'Smart Connection', desc: 'WiFi, Bluetooth, smart home integration', stats: 'Multi-protocol' },
        alarm: { title: 'Anti-theft Alarm', desc: 'High-sensitivity sensor with APP notification', stats: '< 100ms' },
        battery: { title: 'Long Battery Life', desc: 'Smart power management, 6-12 months', stats: '6-12 Months' },
        ai: { title: 'AI Voice Assistant', desc: 'Built-in voice assistant with various functions', stats: 'AI Smart' },
      },
      milestones: {
        title: 'Milestones',
        items: [
          { year: '2020', title: 'Brand Founded', desc: 'Rebekey brand established, focused on smart locks' },
          { year: '2021', title: 'Product Launch', desc: 'First smart lock product launched' },
          { year: '2023', title: 'Technology Breakthrough', desc: '3D face recognition and palm vein breakthrough' },
          { year: '2024', title: '100K+ Families', desc: 'Over 100K families served, 99.9% satisfaction' },
        ],
      },
    },

    // Contact Page
    contactPage: {
      badge: 'Contact Us',
      title1: 'Add',
      title2: 'Enterprise WeChat',
      description: 'Scan QR code to add our enterprise WeChat for product consultation and service',
      wechat: {
        name: 'Enterprise WeChat',
        description: 'Scan to add enterprise WeChat',
      },
      otherTitle: 'Other Contact Methods',
      hotline: { label: 'Hotline', value: '400-XXX-XXXX' },
      business: { label: 'Business', value: 'business@rebekey.com' },
      hours: { label: 'Working Hours', value: 'Mon-Sun 9:00-21:00' },
    },

    // Product Detail Page
    productDetail: {
      buyNow: 'Buy Now',
      freeShipping: 'Free Shipping',
      warranty: 'Nationwide Warranty',
      returnPolicy: '7-day Return',
      coreFeatures: 'Core Features',
      specifications: 'Specifications',
      productDetails: 'Product Details',
    },

    // Footer
    footer: {
      productsTitle: 'Products',
      allProducts: 'All Products',
      aiSeries: 'AI Smart Series',
      classicSeries: 'Classic Series',
      companyTitle: 'Company',
      about: 'About Us',
      technology: 'Technology',
      contact: 'Contact',
      brandDesc: 'Rebekey smart locks, focused on R&D and manufacturing for home security',
    },
  },
};
