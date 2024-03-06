// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const customDarkTheme = {
    dark: true,
    colors: {
        primary: "#f74780",
        error: "#e74c3c",
    },
};

const customLightTheme = {
    dark: false,
    colors: {
        primary: "#f74780",
        error: "#e74c3c",
    },
};

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        theme: {
            defaultTheme: 'custom-light',
            themes: {
                'custom-dark': customDarkTheme,
                'custom-light': customLightTheme,
            },
        },
        defaults: {
            VTextField: {
                variant: 'outlined',
            },
            VSelect: {
                variant: 'outlined',
            },
            VTextarea: {
                variant: 'outlined',
            },
        },
    })
    app.vueApp.use(vuetify)
})
