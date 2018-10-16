'use strict';

self.addEventListener('install', function (event) {
    console.log('Service worker installing...');
    // Add a call to skipWaiting here
});

self.addEventListener('activate', function (event) {
    console.log('Service worker activating...');
});