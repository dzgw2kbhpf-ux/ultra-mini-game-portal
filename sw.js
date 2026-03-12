const cacheName="arcade-v1"

self.addEventListener("install",e=>{

e.waitUntil(

caches.open(cacheName)

)

})

self.addEventListener("fetch",e=>{

e.respondWith(

caches.match(e.request)
.then(r=>r||fetch(e.request))

)

})
