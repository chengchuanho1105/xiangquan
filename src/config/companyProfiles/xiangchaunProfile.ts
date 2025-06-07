import type { CompanyProfile } from '@/types/companyProfile'

const companyProfile: CompanyProfile = {
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
    homepageRouterLink: '',
    fullUrl: 'https://www.chaun.life', // 完整 URL
    description: '祥銓生活服務工作室官方網站，提供最新服務資訊與聯絡方式。',
    sitemapUrl: 'https://www.chaun.life/sitemap.xml', // Sitemap URL
  },

  // 社群與連結
  socialLinks: {
    line: 'https://line.me/ti/p/~0Chuan', // LINE
    youtube: 'https://www.youtube.com/@Chuan._.1105/', // YouTube
    instagram: 'https://www.instagram.com/x._.1105._.q', // Instagram
    facebook: 'https://www.facebook.com/cheng.1105.chuan', // Facebook
    linkedin: 'https://www.linkedin.com/in/晟全-何-a03665191', // LinkedIn
    twitter: 'https://x.com/xiangquan10', // Twitter
  },

  // 公司品牌資產
  branding: {
    logoUrl: '/favicons/xiangchuan.ico', // 網站 logo 路徑或 URL
    faviconUrl: '/favicons/xiangchuan.ico', // favicon 路徑或 URL
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
