
// Make sure sw are supported
if ('serviceWorker' in navigator) {
  // console.log('SERVICE WORKER IS SUPPORTED');

  window.addEventListener('load', () => {
    navigator.serviceWorker
      // Register all pages that are requested:
      // .register('../sw_cached_site.js')
      // Path for github pages production to work:
      .register('/Train-service-worker/sw_cached_site.js')
      // Register only explicits pages:
      // .register('../sw_cached_pages.js')
      .then(reg => console.log('Service Worker: Registered (Pages)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}
