// PAMIGO - Service Worker Kill Switch
// ãåãÊå ÇáæÍíÏÉ: íáÛí äİÓå æíãÓÍ ßá ÇáßÇÔ

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    // ÇãÓÍ ßá ÇáßÇÔ
    caches.keys().then(names => {
      return Promise.all(names.map(name => caches.delete(name)));
    }).then(() => {
      // ÃáÛí ÊÓÌíá äİÓå
      return self.registration.unregister();
    }).then(() => {
      console.log('? Êã ãÓÍ ßá ÇáßÇÔ æÅáÛÇÁ Service Worker');
    })
  );
});

// ãÊÚÊÑÖÔ Ãí ØáÈÇÊ - ÓíÈåÇ ÊÑæÍ ááÓíÑİÑ ãÈÇÔÑÉ
self.addEventListener('fetch', event => {
  // ãİíÔ ÇÚÊÑÇÖ - ÇáãÊÕİÍ åíÌíÈ ßá ÍÇÌÉ ãä ÇáÓíÑİÑ
  return;
});// PAMIGO - Service Worker Kill Switch
// ãåãÊå ÇáæÍíÏÉ: íáÛí äİÓå æíãÓÍ ßá ÇáßÇÔ

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    // ÇãÓÍ ßá ÇáßÇÔ
    caches.keys().then(names => {
      return Promise.all(names.map(name => caches.delete(name)));
    }).then(() => {
      // ÃáÛí ÊÓÌíá äİÓå
      return self.registration.unregister();
    }).then(() => {
      console.log('? Êã ãÓÍ ßá ÇáßÇÔ æÅáÛÇÁ Service Worker');
    })
  );
});

// ãÊÚÊÑÖÔ Ãí ØáÈÇÊ - ÓíÈåÇ ÊÑæÍ ááÓíÑİÑ ãÈÇÔÑÉ
self.addEventListener('fetch', event => {
  // ãİíÔ ÇÚÊÑÇÖ - ÇáãÊÕİÍ åíÌíÈ ßá ÍÇÌÉ ãä ÇáÓíÑİÑ
  return;
});