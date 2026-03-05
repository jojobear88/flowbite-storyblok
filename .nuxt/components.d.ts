
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AppLogo: typeof import("../app/components/AppLogo.vue")['default']
export const TemplateMenu: typeof import("../app/components/TemplateMenu.vue")['default']
export const ArticleOverview: typeof import("../app/storyblok/ArticleOverview.vue")['default']
export const FeatureArticles: typeof import("../app/storyblok/FeatureArticles.vue")['default']
export const MainArticle: typeof import("../app/storyblok/MainArticle.vue")['default']
export const MainFeature: typeof import("../app/storyblok/MainFeature.vue")['default']
export const MainGrid: typeof import("../app/storyblok/MainGrid.vue")['default']
export const MainPage: typeof import("../app/storyblok/MainPage.vue")['default']
export const MainTeaser: typeof import("../app/storyblok/MainTeaser.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAppLogo: LazyComponent<typeof import("../app/components/AppLogo.vue")['default']>
export const LazyTemplateMenu: LazyComponent<typeof import("../app/components/TemplateMenu.vue")['default']>
export const LazyArticleOverview: LazyComponent<typeof import("../app/storyblok/ArticleOverview.vue")['default']>
export const LazyFeatureArticles: LazyComponent<typeof import("../app/storyblok/FeatureArticles.vue")['default']>
export const LazyMainArticle: LazyComponent<typeof import("../app/storyblok/MainArticle.vue")['default']>
export const LazyMainFeature: LazyComponent<typeof import("../app/storyblok/MainFeature.vue")['default']>
export const LazyMainGrid: LazyComponent<typeof import("../app/storyblok/MainGrid.vue")['default']>
export const LazyMainPage: LazyComponent<typeof import("../app/storyblok/MainPage.vue")['default']>
export const LazyMainTeaser: LazyComponent<typeof import("../app/storyblok/MainTeaser.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@_7176bc1a0d6b9a05b3ccca4588e34790/node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
