// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: [
        '~/assets/tailwind.css',
        '~/assets/index.scss',
        '~/assets/heroBanner.scss',
        '~/assets/responsive.scss',
        '~/assets/themes.scss',
    ],
    app: {
      rootAttrs: {
          id: 'mainScreen',
          class: 'screen'
      }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    nitro: {
        preset: 'cloudflare-pages'
    }
})
