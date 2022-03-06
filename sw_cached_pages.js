
const cacheName = 'v1';

const cacheAssets = [
  'index.html',
  'about.html',
  '/css/style.css',
  '/js/main.js',
]

// Call Install Event: 
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

// Call Activate Event: 
self.addEventListener('activate', (e) => {
  console.log('Service Worker: Activated');
});