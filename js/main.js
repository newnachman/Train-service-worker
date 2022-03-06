
// Make sure sw are supported
if ('serviceWorker' in navigator) {
  // console.log('SERVICE WORKER IS SUPPORTED');

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw_cached_pages.js')
      .then(reg => console.log('Service Worker: Registered (Pages)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}
