self.addEventListener("install",e=>{

e.waitUntil(

caches.open("imc-pro").then(cache=>{

return cache.addAll([
"/",
"index.html",
"style.css",
"script.js"
]);

})

);

});