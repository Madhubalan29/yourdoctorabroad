#!/usr/bin/env node
/**
 * IndexNow Submission Script (Node.js) for yourdoctorabroad.com
 *
 * What this does:
 *   Instantly notifies Bing, Yandex, Seznam, and IndexNow search engines
 *   that all site URLs are published/updated, fast-tracking crawl & indexing.
 *
 * How to run:
 *   node indexnow-submit.js
 */

const https = require('https');

const DOMAIN = 'yourdoctorabroad.com';
const KEY = '373927f10d5847fdb97feab0c7de2106';
const KEY_LOCATION = `https://${DOMAIN}/${KEY}.txt`;

const PAGES = [
  '',
  'about.html',
  'blogs.html',
  'book.html',
  'careers.html',
  'dr-tayyab-altaf.html',
  'free-consultation.html',
  'how-it-works.html',
  'long-term-plan.html',
  'online-doctor-europe.html',
  'online-doctor-florence.html',
  'online-doctor-france.html',
  'online-doctor-germany.html',
  'online-doctor-milan.html',
  'online-doctor-naples.html',
  'online-doctor-netherlands.html',
  'online-doctor-paris.html',
  'online-doctor-pisa.html',
  'online-doctor-rome.html',
  'privacy-policy.html',
  'support.html',
  'terms-and-conditions.html',
  'what-we-treat.html',
  'blog-urgent-medical-help-in-europe.html',
  'blog-finding-care-as-an-expat.html',
  'blog-health-insurance-for-expats.html',
  'blog-how-pharmacies-work-in-italy.html',
  'blog-jet-lag-and-time-zones.html',
  'blog-managing-a-chronic-condition-overseas.html',
  'blog-mental-health-while-living-abroad.html',
  'blog-seasonal-allergies-on-the-move.html',
  'blog-traveling-with-prescriptions.html',
  'blog-vaccinations-before-you-travel.html',
  'blog-when-to-see-a-doctor-abroad.html'
];

const urlList = PAGES.map(p => (p ? `https://${DOMAIN}/${p}` : `https://${DOMAIN}/`));

const payload = JSON.stringify({
  host: DOMAIN,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList
});

console.log(`Submitting ${urlList.length} URLs to IndexNow API (api.indexnow.org)...`);

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = https.request(options, res => {
  let responseData = '';
  res.on('data', chunk => {
    responseData += chunk;
  });
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log(`✅ Success! IndexNow accepted ${urlList.length} URLs. Status code: ${res.statusCode}`);
      console.log('Search engines (Bing, Yandex, etc.) will fast-track crawling these pages.');
    } else {
      console.log(`⚠️ IndexNow responded with Status Code: ${res.statusCode}`);
      if (responseData) console.log(`Response: ${responseData}`);
    }
  });
});

req.on('error', err => {
  console.error(`❌ Request failed: ${err.message}`);
});

req.write(payload);
req.end();
