export interface CompanyProfile {
  basic: {
    name: string
    shortName: string
    enName: string
    establishedYear: number
    owner: string
    taxId: string
    businessScope: string
  }

  contact: {
    address: string
    mapUrl: string
    phone: string
    mobile: string
    fax: string
    email: string
    serviceHours: string
    businessHours: string
  }

  website: {
    domain: string
    fullUrl: string
    homepageRouterLink: string
    description: string
    sitemapUrl: string
  }

  socialLinks: {
    line: string
    youtube: string
    instagram: string
    facebook: string
    linkedin: string
    twitter: string
  }

  branding: {
    logoUrl: string
    faviconUrl: string
    themeColor: string
  }

  legal: {
    businessLicenseUrl: string
    privacyPolicyUrl: string
    termsOfServiceUrl: string
  }

  misc: {
    defaultLanguage: string
    timeZone: string
  }
}
