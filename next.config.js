
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    cssModules: true,
    publicRuntimeConfig: {
        DISQUS_SHORTNAME : process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
        APP_NAME :process.env.NEXT_PUBLIC_APP_NAME,
        DOMAIN : process.env.NEXT_PUBLIC_PRODUCTION ? process.env.NEXT_PUBLIC_DOMAIN_PRODUCTION : process.env.NEXT_PUBLIC_DOMAIN_DEVELOPMENT,
        API : process.env.NEXT_PUBLIC_PRODUCTION ? process.env.NEXT_PUBLIC_API_PRODUCTION : process.env.NEXT_PUBLIC_API_DEVELOPMENT,
    },
    future: { webpack5: true },
})