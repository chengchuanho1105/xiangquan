// src/config/companyProfile.js

const companyProfile = {
  // 公司基本資訊
  basic: {
    name: 'Crazy Clown', // 公司正式名稱
    shortName: 'Crazy Clown', // 公司簡稱
    enName: 'Crazy Clown',
    establishedYear: 2023, // 成立年份
    owner: '何晟全', // 負責人姓名
    taxId: '', // 統一編號
    businessScope: '戰隊、公會', // 營業項目簡述
  },

  // 聯絡資訊
  contact: {
    address: '', // address
    mapUrl: '',
    phone: '', // telephone
    mobile: '', // mobile
    fax: '', // fax
    email: '', // email
    serviceHours: '', // 客服服務時間
    businessHours: '', // 營業時間
  },

  // 公司網站
  website: {
    domain: 'chaun.life/crazyclown', // 公司網站 URL
    fullUrl: 'https://www.chaun.life/crazyclown', // 完整 URL
    homepageRouterLink: '/crazyclown',
    description: '',
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
