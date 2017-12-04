/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","8f22d51c7a0ecfaff5e8a6747aaa7637"],["browserconfig.xml","67c3113b1574fecc6015d56d774e1d38"],["categories/index.xml","f7f87e41f5957088ad63cca96aba8e04"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/images/arrow_effect.svg","1434d178461f70c16b77acb4bdbc51e3"],["css/images/icon-tick.svg","35d4d4728ea80d254508b2bca4109d70"],["css/images/stripe.svg","fa3f32a026b6a1bb04ee98d963432e15"],["css/prism.css","004029c8c70ed2bbaa5d9debcf14f8c7"],["css/styles.css","4a9f58ade51a0d0093a6380aed62ca44"],["files/PageList_v0.1.2.zip","d85cfd13b24ccbf7b6d8835e550916b1"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-512x512.png","42d6b28cc7eb41810a5392c81368340a"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-precomposed.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-icon.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-touch-icon-114x114.png","95804b2192b0cea406b54cb31345c47d"],["images/apple-touch-icon-120x120.png","b5da0625c9e876bdf9768875f7dd9cca"],["images/apple-touch-icon-144x144.png","976151c9ecd72311dc6024917292209d"],["images/apple-touch-icon-152x152.png","8bd6a2e592c1c8463b5205ba8436227e"],["images/apple-touch-icon-180x180.png","56a93f4271dea903196794095e9f9ccc"],["images/apple-touch-icon-57x57.png","977183ab3bfb98da8d79e025f1cb4946"],["images/apple-touch-icon-60x60.png","55e9e05103a9b472a52f4c572a73b2b2"],["images/apple-touch-icon-72x72.png","1ef87a2887baab846f2501beb27445ee"],["images/apple-touch-icon-76x76.png","769826cd7526df4db7f4ba1a820158bd"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/blockquote-bad.png","2dbd02018ccd31a5fc57bc7acc7a5f9e"],["images/blockquote.png","8e6c653632ad801715d184edc00685d2"],["images/browser-chrome-android.svg","3100b2a9c5f0e34982c717fc2aa46d73"],["images/browser-chrome.svg","fa39b4be6727525330e928f582fbe80a"],["images/browser-edge.svg","9e8265ab8f6a701587a4271dd3aa6a73"],["images/browser-firefox-android.svg","452df7b9e83c70a07e8e03b4e8dab9c4"],["images/browser-firefox.svg","d3093eda664be3d0cc6d791e1386420f"],["images/browser-ie.svg","13e192cf2b3fe17e7049a49b7d085caa"],["images/browser-opera.svg","95d65630c9f7deef6a3098af8f5baf9f"],["images/browser-safari-ios.svg","f729e629ec998ec40d313495d7257741"],["images/browser-safari.svg","523ee9491f5a937b8975f4d23aa77f62"],["images/em-dash-context-break.png","4ee43ed2ef3552ad88ab19fc75bb3dfd"],["images/epub2-epub3-pages-regex.png","436c19078ba4d70a23040e4476e88e80"],["images/extra-blank-space-context-break.png","e609961a71573d6c07c4afa9798e1019"],["images/favicon-16x16.png","7a99c20d6c00babddd26d03607b8721d"],["images/favicon-32x32.png","129881474a1bf130027bff7a1e89febd"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","81c46feedbfcc6c6dc9495e4fd5adfad"],["images/icon-info.svg","53a6c555ce41f818556c71ab0dfc533b"],["images/icon-tag.svg","f067bbbc072941b2a0335679300bfc6c"],["images/icon-warning.svg","2a4322abbee9aed694fadb50e98a1f61"],["images/image-context-break.png","f4c1fabd2cec049d4c2ed0805dd71055"],["images/logo-bw.svg","0fe8563fb8434dc2ce31cfc1334790f4"],["images/logo-old-cupper.svg","41f1c1780c2c5efa41d64359dbd651bb"],["images/logo.svg","3d6f2c18dbaf38334dc4c4dc1f6e6e0b"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/ordered-list-2.png","2e48e3449cb398a0e2f84d2e990619a0"],["images/ordered-list.png","430372d166060b6d4464742787d2a12b"],["images/samsung_homescreen.png","5ef40e64a18f966ce5c9084a024256db"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["images/unordered-list.png","31bbeec8c790b2fa07a89a53208daa2c"],["index.html","6f064c2c67d6c3f4318c5f7c8170c846"],["index.xml","10b5cfd1be70eaf10acb37e6455df375"],["js/dom-scripts.js","d1226c17a56c156113ee538031a0b6bf"],["js/prism.js","0c1fb8d3a69ee7c91dbf0f361ded7763"],["js/service-worker-registration.js","d60f01dc1393cbaaf4f7435339074d5e"],["manifest.json","0cc10968aadd3f5b2ba84a936efb2905"],["patterns/cleanup/index.html","c3cf62ccb7d7a64ea2195fb460ea3c9c"],["patterns/cleanup/index.xml","3cae51c3bd41d202f2c4dc209121b52d"],["patterns/epub-2-to-epub-3/check-the-version/index.html","9a0e344c21d0c2315e8c84877f13a6d3"],["patterns/epub-2-to-epub-3/create-epub3/index.html","340bf8aecd28a415f060b4f35994e14b"],["patterns/epub-2-to-epub-3/create-pagelist/index.html","acf5b189a58fc85e82ebd26315b1c316"],["patterns/epub-2-to-epub-3/index.html","56b8800e3af52b6d668ed7450c4966fc"],["patterns/epub-2-to-epub-3/index.xml","34e4cbbc3f7e2a0e0fd9cc59697a9ea6"],["patterns/index.html","fe2b9f0493c712c8fc2cd54692afe897"],["patterns/index.xml","79a783e5c6caf192cf6851a3af1c7a36"],["patterns/metadata/index.html","3161863300d99e63b5b0eb84275d45d8"],["patterns/metadata/index.xml","dc3a5f1dff4430287ec002e4bd7003ee"],["patterns/resources/index.html","4a45c4dbf77506a55efb0a494276738e"],["patterns/setup/index.html","958b6bb73e332a90a9fcf4a9f52a4030"],["patterns/structure-and-semantics/blockquotes/index.html","42f26a491fbc4aa1c3419f4f31e40cc7"],["patterns/structure-and-semantics/bold-italics/index.html","4083dd92553d20906b601b1c0966b18c"],["patterns/structure-and-semantics/context-breaks/index.html","9449fe96ab00bdbb4cb6b1153a821026"],["patterns/structure-and-semantics/images/index.html","2b798a90a88fcfcfbb548f1edb841c02"],["patterns/structure-and-semantics/index.html","ba1283db849fc72833f6fcd2901e2e86"],["patterns/structure-and-semantics/index.xml","d90e8b1c055a59b0f822fc229ab0fa42"],["patterns/structure-and-semantics/intro/index.html","4623c74457694bb231e9bd21b8f78777"],["patterns/structure-and-semantics/landmarks/index.html","17fd51ce715f2dfe14966d5e5502b8bf"],["patterns/structure-and-semantics/lists/index.html","eb0982883ad07c128d2155aca1901477"],["patterns/structure-and-semantics/notes/index.html","14d5d9e08aba4026e18b9ebad4bc2ef0"],["patterns/structure-and-semantics/page-titles/index.html","e7e8d2dfeec20a3df427d1323f4a5eca"],["patterns/structure-and-semantics/sections-and-headings/index.html","e8008a34bc3629267366bcce2252821c"],["patterns/structure-and-semantics/tables/index.html","c959f3a6b15a509f6d74bd633fe4e291"],["print-version/index.html","85827a45e69d71e5a423666c393dcc0c"],["sitemap.xml","55f92fc2b82feefd201b4d0a982a5f33"],["tags/another-tag/index.html","39b7ac415f1642bfd98004a0a6076a64"],["tags/another-tag/index.xml","316f9f6f2f2cff436c20a70f1f5be78d"],["tags/articles/index.html","8839961c033a674bbccac236a4ea12c0"],["tags/articles/index.xml","818601fc29378480b35c497816d13f81"],["tags/bold/index.html","9d5fb6c0dc27304271247f27924bbe99"],["tags/bold/index.xml","af7229e3489aa3f582d627681529aaba"],["tags/breaks/index.html","b5b3db07055e4299c492fd969d5d8405"],["tags/breaks/index.xml","27d91353b94fd580bff3c77514337a20"],["tags/courses/index.html","4fd4a667e12d4e34a9fa3ed0f56c8b96"],["tags/courses/index.xml","6e46114cd32e4596947780ede3de1b3d"],["tags/emphasis/index.html","e289562dda4a654cf2b0e9c7836b3fb9"],["tags/emphasis/index.xml","97c2ee227871237d538189963be69f06"],["tags/example-tag/index.html","579268979e0bf7bfa466f4e89263667d"],["tags/example-tag/index.xml","8513d001f18c5b9c57ca7fd723928cbb"],["tags/horizontal-rule/index.html","016e2d0d4be9c08e1515d4a8cdef817b"],["tags/horizontal-rule/index.xml","d99b1cb41bd3795c04f62b4e5184116d"],["tags/index.xml","21b59a8f8e0e05509640f4327a34121d"],["tags/italics/index.html","5ec878d14f3c0bcaed8149c8f34532f6"],["tags/italics/index.xml","069ab4945c2b8180847806c9c385991b"],["tags/metadata/index.html","bd03ab1ed2c850c1832e8a99b0dc0f3e"],["tags/metadata/index.xml","7827a5374abf6d86a4531fded9b2d877"],["tags/navigation/index.html","144192d7807c7b20732e304bca0d1d31"],["tags/navigation/index.xml","604b44294e371649dafeba959b167781"],["tags/pages/index.html","31bdb82eb9f960cf7897002ca2831a51"],["tags/pages/index.xml","f835709bee45d16bc236400208cdc405"],["tags/plug-ins/index.html","2eb984aa5bef71fb83788bb8f5187fb5"],["tags/plug-ins/index.xml","9e96474a7ccd40251845d764aad86dc7"],["tags/plugins/index.html","3517b64ecf7e8dfb0e87463741775536"],["tags/plugins/index.xml","7c472a37ea5d2c6b525a761871f87778"],["tags/quotes/index.html","e5d3b46efc2fe8ffee04528f17d377f2"],["tags/quotes/index.xml","a2a347f1f1940a135f2f720e041400ab"],["tags/schema.org/index.html","f74b50b76bca6a2a6f4cedb81fedb4e0"],["tags/schema.org/index.xml","d33a8eb00fb4904b0eb5de3438eb5986"],["tags/tools/index.html","d518d9bb026ca5a959f52c3831f5fac1"],["tags/tools/index.xml","5f889d0218febd14b64ee2ba25926e16"],["tags/videos/index.html","75e0bf0a08766873f7b342681481abaa"],["tags/videos/index.xml","fa013c384a7c3151c9240dbb7286da48"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







