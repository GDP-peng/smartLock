import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "a20",
    name: "A20",
    series: "AI 智能系列",
    tagline: "3D 人脸识别 AI 智能锁 CNC 精雕工艺",
    price: 1680,
    images: ["/images/products/A20/1.jpg", "/images/products/A20/2.jpg", "/images/products/A20/3.jpg"],
    detailImages: [
      "/images/products/A20/1.jpg",
      "/images/products/A20/2.jpg",
      "/images/products/A20/3.jpg",
      "/images/products/A20/4.jpg",
      "/images/products/A20/5.jpg",
      "/images/products/A20/6.jpg",
      "/images/products/A20/7.jpg",
      "/images/products/A20/8.jpg",
      "/images/products/A20/9.jpg",
      "/images/products/A20/10.jpg",
      "/images/products/A20/11.jpg",
      "/images/products/A20/12.jpg",
    ],
    specifications: [
      {
        category: "安全性能",
        specs: [
          { name: "人脸识别", value: "3D 结构光人脸识别" },
          { name: "掌静脉识别", value: "支持" },
          { name: "指纹容量", value: "100 枚" },
          { name: "密码容量", value: "100 组" },
          { name: "加密方式", value: "AES-128 位加密" },
        ],
      },
      {
        category: "智能功能",
        specs: [
          { name: "智能语音", value: "小德同学 AI 语音" },
          { name: "APP 控制", value: "支持 iOS/Android" },
          { name: "远程开锁", value: "支持" },
          { name: "临时密码", value: "支持" },
        ],
      },
      {
        category: "显示屏幕",
        specs: [
          { name: "室内显示屏", value: "4.5 英寸高清屏" },
          { name: "室外灵动屏", value: "1.8 英寸表情屏" },
          { name: "摄像头", value: "高清广角摄像头" },
        ],
      },
      {
        category: "电源续航",
        specs: [
          { name: "电池类型", value: "锂电池" },
          { name: "续航时间", value: "6-12 个月" },
          { name: "应急供电", value: "Type-C" },
        ],
      },
      {
        category: "物理规格",
        specs: [
          { name: "面板材质", value: "CNC 精雕铝合金" },
          { name: "表面处理", value: "磨砂黑/大理石纹" },
          { name: "产品尺寸", value: "420 x 72 x 28 mm" },
          { name: "适用门厚", value: "40-120mm" },
        ],
      },
    ],
    features: [
      {
        icon: "face",
        title: "3D 人脸识别",
        description: "3D 结构光人脸识别技术，刷脸开锁，解放双手。",
      },
      {
        icon: "scan",
        title: "掌静脉识别",
        description: "扫描手掌静脉血管图，安全系数更高，不受身高限制。",
      },
      {
        icon: "monitor",
        title: "主动监控对讲",
        description: "门锁异常 APP 实时提醒，远程可视对讲。",
      },
      {
        icon: "screen",
        title: "双屏显示",
        description: "1.8 英寸灵动外屏 + 4.5 英寸室内大屏，门外访客一目了然。",
      },
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    slug: "a30",
    name: "A30",
    series: "AI 智能系列",
    tagline: "3D 人脸识别 AI 智能锁 掌静脉识别",
    price: 1880,
    images: ["/images/products/A30/1.jpg", "/images/products/A30/2.jpg", "/images/products/A30/3.jpg"],
    detailImages: [
      "/images/products/A30/1.jpg",
      "/images/products/A30/2.jpg",
      "/images/products/A30/3.jpg",
      "/images/products/A30/4.jpg",
      "/images/products/A30/5.jpg",
      "/images/products/A30/6.jpg",
      "/images/products/A30/7.jpg",
      "/images/products/A30/8.jpg",
      "/images/products/A30/9.jpg",
      "/images/products/A30/10.jpg",
      "/images/products/A30/11.jpg",
      "/images/products/A30/12.jpg",
    ],
    specifications: [
      {
        category: "安全性能",
        specs: [
          { name: "人脸识别", value: "3D 结构光人脸识别" },
          { name: "掌静脉识别", value: "支持" },
          { name: "指纹容量", value: "150 枚" },
          { name: "密码容量", value: "150 组" },
          { name: "加密方式", value: "AES-128 位加密" },
        ],
      },
      {
        category: "智能功能",
        specs: [
          { name: "智能语音", value: "小德同学 AI 语音" },
          { name: "APP 控制", value: "支持 iOS/Android" },
          { name: "远程开锁", value: "支持" },
          { name: "临时密码", value: "支持" },
        ],
      },
      {
        category: "显示屏幕",
        specs: [
          { name: "室内显示屏", value: "4.5 英寸高清屏" },
          { name: "室外灵动屏", value: "1.8 英寸表情屏" },
          { name: "摄像头", value: "高清广角摄像头" },
        ],
      },
      {
        category: "电源续航",
        specs: [
          { name: "电池类型", value: "大容量锂电池" },
          { name: "续航时间", value: "8-12 个月" },
          { name: "应急供电", value: "Type-C" },
        ],
      },
      {
        category: "物理规格",
        specs: [
          { name: "面板材质", value: "CNC 精雕铝合金" },
          { name: "表面处理", value: "磨砂黑/幻影灰" },
          { name: "产品尺寸", value: "420 x 75 x 28 mm" },
          { name: "适用门厚", value: "40-120mm" },
        ],
      },
    ],
    features: [
      {
        icon: "face",
        title: "3D 人脸识别",
        description: "3D 结构光人脸识别技术，刷脸开锁，解放双手。",
      },
      {
        icon: "scan",
        title: "掌静脉识别",
        description: "扫描手掌静脉血管图，安全系数更高，不受身高限制。",
      },
      {
        icon: "monitor",
        title: "主动监控对讲",
        description: "门锁异常 APP 实时提醒，远程可视对讲。",
      },
      {
        icon: "screen",
        title: "双屏显示",
        description: "1.8 英寸灵动外屏 + 4.5 英寸室内大屏，门外访客一目了然。",
      },
    ],
    isFeatured: true,
    isNew: false,
  },
  {
    slug: "a40",
    name: "A40",
    series: "高端定制系列",
    tagline: "3D 人脸识别 AI 智能锁 大理石纹定制",
    price: 2180,
    images: ["/images/products/A40/1.jpg", "/images/products/A40/2.jpg", "/images/products/A40/3.jpg"],
    detailImages: [
      "/images/products/A40/1.jpg",
      "/images/products/A40/2.jpg",
      "/images/products/A40/3.jpg",
      "/images/products/A40/4.jpg",
      "/images/products/A40/5.jpg",
      "/images/products/A40/7.jpg",
      "/images/products/A40/8.jpg",
      "/images/products/A40/9.jpg",
      "/images/products/A40/10.jpg",
      "/images/products/A40/11.jpg",
      "/images/products/A40/12.jpg",
      "/images/products/A40/13.jpg",
    ],
    specifications: [
      {
        category: "安全性能",
        specs: [
          { name: "人脸识别", value: "3D 结构光人脸识别" },
          { name: "掌静脉识别", value: "支持" },
          { name: "指纹容量", value: "200 枚" },
          { name: "密码容量", value: "200 组" },
          { name: "加密方式", value: "AES-128 位加密" },
        ],
      },
      {
        category: "智能功能",
        specs: [
          { name: "智能语音", value: "小德同学 AI 语音" },
          { name: "APP 控制", value: "支持 iOS/Android" },
          { name: "远程开锁", value: "支持" },
          { name: "临时密码", value: "支持" },
        ],
      },
      {
        category: "显示屏幕",
        specs: [
          { name: "室内显示屏", value: "4.5 英寸高清屏" },
          { name: "室外灵动屏", value: "1.8 英寸表情屏" },
          { name: "摄像头", value: "高清广角摄像头" },
        ],
      },
      {
        category: "电源续航",
        specs: [
          { name: "电池类型", value: "大容量锂电池" },
          { name: "续航时间", value: "8-12 个月" },
          { name: "应急供电", value: "Type-C" },
        ],
      },
      {
        category: "物理规格",
        specs: [
          { name: "面板材质", value: "CNC 精雕铝合金" },
          { name: "表面处理", value: "大理石纹/磨砂黑 双色可选" },
          { name: "产品尺寸", value: "420 x 72 x 28 mm" },
          { name: "适用门厚", value: "40-120mm" },
          { name: "把手盖", value: "标配双色把手盖" },
        ],
      },
    ],
    features: [
      {
        icon: "face",
        title: "3D 人脸识别",
        description: "3D 结构光人脸识别技术，刷脸开锁，解放双手。",
      },
      {
        icon: "scan",
        title: "掌静脉识别",
        description: "扫描手掌静脉血管图，安全系数更高，不受身高限制。",
      },
      {
        icon: "palette",
        title: "定制外观",
        description: "大理石纹/磨砂黑双色可选，标配合金把手盖。",
      },
      {
        icon: "screen",
        title: "双屏显示",
        description: "1.8 英寸灵动外屏 + 4.5 英寸室内大屏，门外访客一目了然。",
      },
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    slug: "mate10",
    name: "Mate 10",
    series: "经典系列",
    tagline: "3D 人脸识别 AI 智能锁 经典实用",
    price: 1380,
    images: ["/images/products/Mate10/1.png", "/images/products/Mate10/2.png"],
    detailImages: [
      "/images/products/Mate10/1.png",
      "/images/products/Mate10/2.png",
      "/images/products/Mate10/3.png",
      "/images/products/Mate10/4.jpg",
      "/images/products/Mate10/5.jpg",
      "/images/products/Mate10/6.jpg",
      "/images/products/Mate10/7.jpg",
      "/images/products/Mate10/8.jpg",
      "/images/products/Mate10/9.jpg",
      "/images/products/Mate10/10.jpg",
      "/images/products/Mate10/11.jpg",
    ],
    specifications: [
      {
        category: "安全性能",
        specs: [
          { name: "人脸识别", value: "3D 结构光人脸识别" },
          { name: "掌静脉识别", value: "支持" },
          { name: "指纹容量", value: "100 枚" },
          { name: "密码容量", value: "100 组" },
          { name: "加密方式", value: "AES-128 位加密" },
        ],
      },
      {
        category: "智能功能",
        specs: [
          { name: "智能语音", value: "小德同学 AI 语音" },
          { name: "APP 控制", value: "支持 iOS/Android" },
          { name: "远程开锁", value: "支持" },
          { name: "临时密码", value: "支持" },
        ],
      },
      {
        category: "显示屏幕",
        specs: [
          { name: "室内显示屏", value: "4.5 英寸高清屏" },
          { name: "摄像头", value: "高清广角摄像头" },
        ],
      },
      {
        category: "电源续航",
        specs: [
          { name: "电池类型", value: "锂电池" },
          { name: "续航时间", value: "6-10 个月" },
          { name: "应急供电", value: "Type-C" },
        ],
      },
      {
        category: "物理规格",
        specs: [
          { name: "面板材质", value: "铝合金" },
          { name: "表面处理", value: "磨砂黑" },
          { name: "产品尺寸", value: "410 x 70 x 26 mm" },
          { name: "适用门厚", value: "40-100mm" },
        ],
      },
    ],
    features: [
      {
        icon: "face",
        title: "3D 人脸识别",
        description: "3D 结构光人脸识别技术，刷脸开锁，解放双手。",
      },
      {
        icon: "scan",
        title: "掌静脉识别",
        description: "扫描手掌静脉血管图，安全系数更高。",
      },
      {
        icon: "monitor",
        title: "主动监控对讲",
        description: "门锁异常 APP 实时提醒，远程可视对讲。",
      },
      {
        icon: "screen",
        title: "室内大屏",
        description: "4.5 英寸室内显示屏，门外访客一目了然。",
      },
    ],
    isFeatured: false,
    isNew: false,
  },
  {
    slug: "mate20",
    name: "Mate 20",
    series: "经典系列",
    tagline: "3D 人脸识别 AI 智能锁 双色可选",
    price: 1480,
    images: ["/images/products/Mate20/hei1.png", "/images/products/Mate20/jin1.png", "/images/products/Mate20/hei2.png"],
    detailImages: [
      "/images/products/Mate20/1.jpg",
      "/images/products/Mate20/2.jpg",
      "/images/products/Mate20/3.jpg",
      "/images/products/Mate20/4.jpg",
      "/images/products/Mate20/5.jpg",
      "/images/products/Mate20/6.jpg",
      "/images/products/Mate20/7.jpg",
      "/images/products/Mate20/8.jpg",
      "/images/products/Mate20/9.jpg",
      "/images/products/Mate20/10.jpg",
      "/images/products/Mate20/11.jpg",
    ],
    video: "/videos/mate20.mp4",
    specifications: [
      {
        category: "安全性能",
        specs: [
          { name: "人脸识别", value: "3D 结构光人脸识别" },
          { name: "掌静脉识别", value: "支持" },
          { name: "指纹容量", value: "100 枚" },
          { name: "密码容量", value: "100 组" },
          { name: "加密方式", value: "AES-128 位加密" },
        ],
      },
      {
        category: "智能功能",
        specs: [
          { name: "智能语音", value: "小德同学 AI 语音" },
          { name: "APP 控制", value: "支持 iOS/Android" },
          { name: "远程开锁", value: "支持" },
          { name: "临时密码", value: "支持" },
        ],
      },
      {
        category: "显示屏幕",
        specs: [
          { name: "室内显示屏", value: "4.5 英寸高清屏" },
          { name: "摄像头", value: "高清广角摄像头" },
        ],
      },
      {
        category: "电源续航",
        specs: [
          { name: "电池类型", value: "锂电池" },
          { name: "续航时间", value: "6-10 个月" },
          { name: "应急供电", value: "Type-C" },
        ],
      },
      {
        category: "物理规格",
        specs: [
          { name: "面板材质", value: "铝合金" },
          { name: "表面处理", value: "磨砂黑/香槟金" },
          { name: "产品尺寸", value: "410 x 70 x 26 mm" },
          { name: "适用门厚", value: "40-100mm" },
        ],
      },
    ],
    features: [
      {
        icon: "face",
        title: "3D 人脸识别",
        description: "3D 结构光人脸识别技术，刷脸开锁，解放双手。",
      },
      {
        icon: "scan",
        title: "掌静脉识别",
        description: "扫描手掌静脉血管图，安全系数更高。",
      },
      {
        icon: "colors",
        title: "双色可选",
        description: "磨砂黑/香槟金两种颜色可选，适配不同家装风格。",
      },
      {
        icon: "screen",
        title: "室内大屏",
        description: "4.5 英寸室内显示屏，门外访客一目了然。",
      },
    ],
    isFeatured: false,
    isNew: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getAllProducts(): Product[] {
  return products;
}
