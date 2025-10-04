// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["nitro-cloudflare-dev", "@fedorae/nuxt-uikit", '@nuxt/eslint', '@nuxtjs/seo'],

  app: {
    head: {
      title: 'Støvring eSport',
      meta: [
        { name: 'description', content: 'Fremmer børns sociale kundskaber og it færdigheder igennem gaming.' },
        { name: 'keywords', content: 'støvring, esport, gaming, fortnite, minecraft, csgo' },
      ],
      htmlAttrs: {
        lang: 'da',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  }
})