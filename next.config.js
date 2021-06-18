 const withCSS=require('@zeit/next-css')
 
 module.exports=withCSS({
     publicRuntimeConfig:{
         APP_NAME:"SEOBLOG",
         API_PRODUCTION:"https://quest-blog.herokuapp.com/api",
         API_DEVELOPMENT:"http://localhost:8000/api",
         PRODUCTION:true,
         DOMAIN_DEVELOPMENT:"http://localhost:3000",
         DOMAIN_PRODUCTION:"http://localhost:3000",
         DISQUS_SHORTNAME:'blog-7690exkuju'
     }
 })