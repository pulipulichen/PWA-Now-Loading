/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/* global self, caches, Promise, fetch */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v20240609-083339';
const RUNTIME = 'runtime';

/**
 * How to build cache list?
 * 
 * 1. FilelistCreator 
 * 2. String replace
 */

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  "dist/asset/Lato-Bold.ttf",
  "dist/asset/Lato-BoldItalic.ttf",
  "dist/asset/Lato-Italic.ttf",
  "dist/asset/Lato-Regular.ttf",
  "dist/asset/brand-icons.eot",
  "dist/asset/brand-icons.svg",
  "dist/asset/brand-icons.ttf",
  "dist/asset/brand-icons.woff",
  "dist/asset/brand-icons.woff2",
  "dist/asset/digital-7.mono.ttf",
  "dist/asset/digital-7.regular.ttf",
  "dist/asset/favicon.png",
  "dist/asset/flags.png",
  "dist/asset/icons.eot",
  "dist/asset/icons.svg",
  "dist/asset/icons.ttf",
  "dist/asset/icons.woff",
  "dist/asset/icons.woff2",
  "dist/asset/list-complated.png",
  "dist/asset/list-todo.png",
  "dist/asset/main.gif",
  "dist/asset/outline-icons.eot",
  "dist/asset/outline-icons.svg",
  "dist/asset/outline-icons.ttf",
  "dist/asset/outline-icons.woff",
  "dist/asset/outline-icons.woff2",
  "dist/asset/tsuyokaze.gif",
  "dist/components/ClockWidget.js",
  "dist/components/ClockWidget.js.map",
  "dist/components/ConfigurationPanel.js",
  "dist/components/ConfigurationPanel.js.map",
  "dist/components/ConfigurationToggleButton.js",
  "dist/components/ConfigurationToggleButton.js.map",
  "dist/components/Converter.js",
  "dist/components/CountdownTimer.js",
  "dist/components/CountdownTimer.js.map",
  "dist/components/CoverImage.js",
  "dist/components/CoverImage.js.map",
  "dist/components/DashboardPanel.js",
  "dist/components/DashboardPanel.js.map",
  "dist/components/IframeWidget.js",
  "dist/components/IframeWidget.js.map",
  "dist/components/MessagePanel.js",
  "dist/components/MessagePanel.js.map",
  "dist/components/NavigationBar.js",
  "dist/components/NextMessage.js",
  "dist/components/NextMessage.js.map",
  "dist/components/NoteMessage.js",
  "dist/components/NoteMessage.js.map",
  "dist/components/NowMessage.js",
  "dist/components/NowMessage.js.map",
  "dist/components/PublicMessage.js",
  "dist/components/RolloutPanel.js",
  "dist/components/RolloutWidget.js",
  "dist/components/RolloutWidget.js.map",
  "dist/components/ScheduleMessage.js",
  "dist/index.js",
  "dist/index.js.map",
  "dist/vendors/semantic-ui-niwsf.js",
  "dist/vendors/semantic-ui-niwsf.js.map",
  "dist/vendors~components/Converter.js",
  "dist/vendors~components/NoteMessage.js",
  "dist/vendors~components/NoteMessage.js.map",
  "dist/vendors~components/PublicMessage.js",
  "index.html",
  "manifest.json",
  "service-worker.js"
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});