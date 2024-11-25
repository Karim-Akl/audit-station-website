/** @type {import('next-sitemap').IConfig} */
 module.exports = {
     siteUrl: 'https://audit-station-website.vercel.app', // Replace with your site URL
     generateRobotsTxt: true, // (optional) Generate a robots.txt file
     sitemapSize: 5000, 
     changefreq: 'daily', // (optional) Change frequency of the URLs
     priority: 0.7, // (optional) Priority of the URLs
     exclude: ['/admin/*'], // (optional) Exclude specific paths
     robotsTxtOptions: {
       additionalSitemaps: [
         'https://audit-station-website.vercel.app/ar',
         'https://audit-station-website.vercel.app/en',
       ],
     },
   };
