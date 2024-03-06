import { fileURLToPath } from "url"
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    alias: {
        "@": fileURLToPath(new URL("./", import.meta.url)),
    },
    typescript: {
        typeCheck: true
    },
    app: {
        head: {
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
            title: "Martex - Software, App, SaaS & Startup NuxtJS Template",
            script: []
        }
    },
    css: [
      "~/assets/css/vendors/bootstrap.min.css",
      "~/assets/css/vendors/flaticon.css",
      "~/assets/css/vendors/menu.css",
      "~/assets/css/vendors/fade-down.css",
      "~/assets/css/vendors/magnific-popup.css",
      "~/assets/css/vendors/animate.css",
      "~/assets/css/main.scss",
      "~/assets/css/responsive.scss",
      "~/assets/css/color-scheme/blue.scss",
      "~/assets/css/color-scheme/crocus.scss",
      "~/assets/css/color-scheme/green.scss",
      "~/assets/css/color-scheme/magenta.scss",
      "~/assets/css/color-scheme/pink.scss",
      "~/assets/css/color-scheme/skyblue.scss",
      "~/assets/css/color-scheme/violet.scss",
      "~/assets/css/custom/forms.scss",
      "~/assets/css/custom/vuetify.scss",
    ],
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Rubik: {
                        wght: [300, 400, 500, 600, 700]
                    },
                    "Plus+Jakarta+Sans": {
                        wght: [400, 500, 600, 700]
                    },
                    Inter: {
                        wght: [400, 500, 600, 700, 800]
                    },
                    download: true,
                    inject: true
                }
            }
        ],
        "nuxt-swiper",
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({
                    autoImport: true,
                    styles: {
                        configFile: 'assets/css/custom/settings.scss',
                    },
                }))
            })
        },
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
});
