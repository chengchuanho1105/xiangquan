import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: string
    role?: string
    title?: string
    nav?: {
      label: string
      showInNavbar?: boolean
      order?: number
    }
  }
}
