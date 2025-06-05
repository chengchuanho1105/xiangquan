// src/config/companyProfile.js

const companyProfile = {
  // 公司基本資訊
  basic: {
    name: '祥銓生活服務工作室', // 公司正式名稱
    shortName: '祥銓生活', // 公司簡稱
    enName: 'Xiang Chuan Life',
    establishedYear: 2015, // 成立年份
    owner: '何晟全', // 負責人姓名
    taxId: '', // 統一編號
    businessScope: '網頁設計、生活服務', // 營業項目簡述
  },

  // 聯絡資訊
  contact: {
    address: '', // address
    mapUrl: '',
    phone: '', // telephone
    mobile: '+886908911153', // mobile
    fax: '', // fax
    email: 'chengchuanho1105@gmail.com', // email
    serviceHours: '週一至週五 09:00-18:00', // 客服服務時間
    businessHours: '週一至週五 09:00-18:00', // 營業時間
  },

  // 公司網站
  website: {
    domain: 'chaun.life', // 公司網站 URL
    fullUrl: 'https://www.chaun.life', // 完整 URL
    description: '祥銓生活服務工作室官方網站，提供最新服務資訊與聯絡方式。',
    sitemapUrl: 'https://www.chaun.life/sitemap.xml', // Sitemap URL
  },

  // 社群與連結
  socialLinks: {
    line: 'https://line.me/ti/p/', // LINE
    youtube: 'https://www.youtube.com/channel/', // YouTube
    instagram: 'https://www.instagram.com/', // Instagram
    facebook: 'https://www.facebook.com/', // Facebook
    linkedin: 'https://www.linkedin.com/company/', // LinkedIn
    twitter: 'https://twitter.com/', // Twitter
  },

  // 公司品牌資產
  branding: {
    logoUrl: '/logo.svg', // 網站 logo 路徑或 URL
    faviconUrl: '/favicon.ico', // favicon 路徑或 URL
    themeColor: '#2563eb', // 主色（可用於 meta theme-color）
  },

  // 法律資訊（依需求可擴充）
  legal: {
    businessLicenseUrl: '/docs/business-license.pdf', // 營業執照掃描檔
    privacyPolicyUrl: '/privacy-policy.html', // 隱私權政策頁面
    termsOfServiceUrl: '/terms-of-service.html', // 服務條款頁面
  },

  // 其他設定
  misc: {
    defaultLanguage: 'zh-TW',
    timeZone: 'Asia/Taipei',
  },
}

export default companyProfile
