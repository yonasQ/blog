import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const API = publicRuntimeConfig.API;
export const DOMAIN = publicRuntimeConfig.DOMAIN ;
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;

