const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/light/blog-list', changefreq: 'weekly', priority: 0.8 },
  { url: '/light/home-startup-onepage', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/light/page-error404', changefreq: 'monthly', priority: 0.5 },
  { url: '/FAQS', changefreq: 'monthly', priority: 0.7 },
  { url: '/services', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/web-services-details', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/Digital-marketing-details', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/app-development-details', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/seo-details', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/ui-ux-details', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/email-marketing-details', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/lead-generation-details', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/graphic-design-details', changefreq: 'monthly', priority: 0.7 },
  { url: '/team', changefreq: 'monthly', priority: 0.6 },
  { url: '/portfolio', changefreq: 'monthly', priority: 0.6 },
  { url: '/portfolio/empowercare', changefreq: 'monthly', priority: 0.6 },
  { url: '/portfolio/westack', changefreq: 'monthly', priority: 0.6 },
  { url: '/portfolio/unitedestates', changefreq: 'monthly', priority: 0.6 },
  { url: '/portfolio/barebeauty', changefreq: 'monthly', priority: 0.6 },
  { url: '/portfolio/itgenics', changefreq: 'monthly', priority: 0.6 },
  { url: '/portfolio/coretal', changefreq: 'monthly', priority: 0.6 },
  { url: '/portfolio/beastmodesoccer', changefreq: 'monthly', priority: 0.6 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms', changefreq: 'yearly', priority: 0.5 }, // Changed to lowercase
];


const stream = new SitemapStream({ hostname: 'https://unitechdigitalstudio.com' });

streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), data)
);

console.log('Sitemap generated successfully!');
