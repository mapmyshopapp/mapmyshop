'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4708a6ad5b684c37fd89f6b1977a3813",
"assets/AssetManifest.bin.json": "476398a3600d3c2fa9cdd223d650b39c",
"assets/AssetManifest.json": "4cbe8630b09b9ef5bffe795b269f9729",
"assets/assets/images/24hr.png": "b9074b16362250b7c146ae253472a73c",
"assets/assets/images/android.png": "8d091d952dd197e48d749ea2ca47d9c9",
"assets/assets/images/buy1.gif": "12a0e0ccc7bec97c77dda765ef13a5ba",
"assets/assets/images/category.png": "5252b2d415f395a295d4f90885e4235a",
"assets/assets/images/Chart.gif": "9f813c8cc409ae4ce5d2a2c6e6d18828",
"assets/assets/images/cname.gif": "4e27865a1990cf16779a384a636e049d",
"assets/assets/images/company_logo.png": "951f5e901d4501d227227e40ff9c8d22",
"assets/assets/images/company_logo_transparent.png": "efd80d6475531b9dee33384731ef7968",
"assets/assets/images/customer_management.png": "5b69545acfb773904796b474b97c9324",
"assets/assets/images/earth.gif": "a4770ec2eed371a01aa8e16bf90a87d2",
"assets/assets/images/easy.gif": "8e6920118a1dbdc5d7dc1a89c01df3da",
"assets/assets/images/feature.png": "17a896378b17c737cdcd11d7662a58cc",
"assets/assets/images/feedback.gif": "8ba2cfd8b248ee4a80c46432549ca808",
"assets/assets/images/g.gif": "3e1e9e7eb7fe7cf598ce9085220ec7da",
"assets/assets/images/gpay.png": "e7372f5bd0273c7d69b1f358aee8dd06",
"assets/assets/images/hoteljpg.jpg": "075b29326892656d9478cc6c0502e095",
"assets/assets/images/ignor.jpg": "d4cf859a11b33c3b938ad0b56dcbffa2",
"assets/assets/images/image.png": "08ffd504dd053d2e90aa6c1e42697d6a",
"assets/assets/images/instragram.gif": "962980cb229082d7981bfd510885421b",
"assets/assets/images/know.gif": "0d19a46b2d9560cadacd49f4e10983b9",
"assets/assets/images/know_shop.gif": "08b7401bcfc2e1ceb8b81c3ed0dad149",
"assets/assets/images/linkdin.gif": "533d2db1a08562c7e0453f273d751c03",
"assets/assets/images/list.gif": "749d55c515abcf3213c78f611ab3ab89",
"assets/assets/images/logo.png": "a2e2c78031e24c7c99e9832f9512d90f",
"assets/assets/images/more.gif": "14cd38bb3e0982ebcbbe45038173a374",
"assets/assets/images/msme.jpg": "48412dace7ac6d33866ec2b2028a3890",
"assets/assets/images/n.gif": "bf7605d7c76b2b20845d1850b578409a",
"assets/assets/images/new.gif": "d00309445a641b6913ce42017aa3c3e2",
"assets/assets/images/order.gif": "1f187f8b38c57aac8675dd887c1b36ca",
"assets/assets/images/ppay.png": "84610ba7dc2a9378f205f7197ba2087e",
"assets/assets/images/prduct_management.png": "143931f5a3af4bb7c583bf796e222dcf",
"assets/assets/images/profile.png": "951f5e901d4501d227227e40ff9c8d22",
"assets/assets/images/restive.gif": "e9e50acdc55fe971d62a155b56ec278e",
"assets/assets/images/screenshot.png": "dbbb420d38d91d27def73cd9dba987b4",
"assets/assets/images/selltag.gif": "73ce2994d474b1432780d13c31429dc1",
"assets/assets/images/shop.gif": "721e64a82dd0a22be28d7f617a89f938",
"assets/assets/images/spoffer.gif": "9214a516aee9e14f20646f927966649a",
"assets/assets/images/thanks.gif": "2860b75ab058112744a79fb6b9fabda6",
"assets/assets/images/Views_management.png": "f40f47deace8b395ad46c328a42d386b",
"assets/assets/images/walkbuy.gif": "c83705e91868c0c716a460cb3a3c4ff2",
"assets/assets/images/workinprogress.gif": "af18a9bbb96a57720ed3573369d4ba4e",
"assets/assets/images/youtube.gif": "8da585c2b5d5320772fabcbe7602eb4b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7b56fb9bfbcfadba00b422e28e1613cf",
"assets/NOTICES": "8f5e761922ab7fac0cd6fa9effaa806e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "9274b4a1d4b12743623ac74f00cf745d",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ebbac7940dd72d09712636220c0a9557",
"icons/icon-512.png": "cdea01fc4e833d32c57458b4acb093ef",
"icons/Icon-maskable-192.png": "ebbac7940dd72d09712636220c0a9557",
"icons/Icon-maskable-512.png": "cdea01fc4e833d32c57458b4acb093ef",
"index.html": "63184246e557f92bc34836cb33e196c0",
"/": "63184246e557f92bc34836cb33e196c0",
"main.dart.js": "bd3c3e5aaed4745e741727fba6b028b9",
"manifest.json": "872a9efef6fcefd019f6a1997aca05e2",
"version.json": "47f062cb92c33e9d1f1e3f5d086fdbb2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
