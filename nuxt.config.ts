// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["nitro-cloudflare-dev", '@nuxt/eslint'],

  css: ['~/assets/scss/theme.scss'],

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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/uikit@3.21.6/dist/js/uikit.min.js', defer: true },
        { src: 'https://cdn.jsdelivr.net/npm/uikit@3.21.6/dist/js/uikit-icons.min.js', defer: true },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SportsOrganization",
                "name": "Støvring eSport",
                "url": "https://www.støvring-esport.dk/",
                "logo": "https://www.støvring-esport.dk/logo.png",
                "description": "Fremmer børns sociale kundskaber og it færdigheder igennem gaming.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Grangårdscentret 27",
                  "addressLocality": "Støvring",
                  "postalCode": "9530",
                  "addressCountry": "DK"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "general inquiries",
                  "email": "adm@stoevring-esport.dk",
                  "areaServed": "DK",
                  "availableLanguage": "Danish"
                },
                "sameAs": [
                  "https://www.facebook.com/stoevringesport"
                ]
              },
              {
                "@type": "WebSite",
                "url": "https://www.støvring-esport.dk/",
                "mainEntity": {
                  "@type": "ItemList",
                  "name": "Main Pages",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                        "@id": "https://www.støvring-esport.dk/tilmeld/",
                        "name": "Tilmeld"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "item": {
                        "@id": "https://www.støvring-esport.dk/fortnite/",
                        "name": "Fortnite"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "item": {
                        "@id": "https://www.støvring-esport.dk/minecraft/",
                        "name": "Minecraft"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "item": {
                        "@id": "https://www.støvring-esport.dk/counter-strike/",
                        "name": "Counter-Strike"
                      }
                    },
                  ]
                }
              }
            ]
          })
        }
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
