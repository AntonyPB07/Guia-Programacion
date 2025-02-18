/*
! PRIMERA PARTE
Window Methods:
Manipulation: window.open(), window.close(), window.resizeTo(), window.moveTo()
Location: window.location.href, window.location.pathname, window.location.search
Navigation: window.history.back(), window.history.forward(), window.history.go()
Dialogs: window.alert(), window.confirm(), window.prompt()
Timers: window.setTimeout(), window.setInterval(), window.clearInterval()

Document Methods:
DOM Manipulation: document.getElementById(), document.createElement(), document.querySelector(), document.addEventListener()
Styling: document.style.backgroundColor, document.style.color, document.style.display
Forms: document.forms[0].submit(), document.getElementById('name').value

AJAX Methods:
XMLHttpRequest.open(), XMLHttpRequest.send(), XMLHttpRequest.responseText
Fetch API: fetch('https://example.com').then(response => response.json())

Geolocation Methods:
navigator.geolocation.getCurrentPosition(), navigator.geolocation.watchPosition()

Canvas and Graphics Methods:
CanvasRenderingContext2D.drawImage(), CanvasRenderingContext2D.fillRect(), CanvasRenderingContext2D.fillText()

Web Storage Methods:
localStorage.setItem(), localStorage.getItem(), localStorage.removeItem()
sessionStorage.setItem(), sessionStorage.getItem(), sessionStorage.removeItem()

Media Methods:
navigator.mediaDevices.getUserMedia(), AudioContext.createAudioBuffer(), VideoElement.play()
! SEGUNDA PARTE
1. Manipulación del DOM (Document Object Model)
document.getElementById(id)
document.getElementsByClassName(className)
document.getElementsByTagName(tagName)
document.querySelector(selector)
document.querySelectorAll(selector)
element.innerHTML
element.textContent
element.setAttribute(name, value)
element.getAttribute(name)
element.appendChild(child)
element.removeChild(child)
element.classList.add(className)
element.classList.remove(className)
element.style.property
2. Eventos y EventListeners
element.addEventListener(event, callback)
element.removeEventListener(event, callback)
event.preventDefault()
event.stopPropagation()
event.target
event.currentTarget
KeyboardEvent, MouseEvent, TouchEvent (y otros tipos de eventos)
3. Comunicación HTTP
fetch(url, options)
XMLHttpRequest
FormData
Response
Request
4. Almacenamiento Local y Cookies
localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.removeItem(key)
sessionStorage
document.cookie
navigator.cookieEnabled
5. Navegación y Historial
history.pushState(stateObj, title, url)
history.replaceState(stateObj, title, url)
window.location
window.reload()
window.history.back()
window.history.forward()
6. Geolocalización y Dispositivos
navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
navigator.mediaDevices.getUserMedia(constraints)
MediaStream API
DeviceOrientationEvent
DeviceMotionEvent
7. Notificaciones y Servicio de Registro
Notification.requestPermission()
navigator.serviceWorker.register(scriptURL)
8. Web Workers y Procesamiento en Segundo Plano
new Worker(scriptURL)
WorkerGlobalScope.postMessage()
Worker.onmessage
SharedWorker
9. Canvas y Gráficos
<canvas> element
CanvasRenderingContext2D
CanvasGradient, CanvasPattern
Métodos para dibujar y manipular gráficos en el canvas
10. Multimedia
<audio> element
<video> element
AudioContext, WebAudio API
Métodos para reproducir, controlar y manipular audio/video
11. Almacenamiento de Datos Estructurados
IndexedDB
IDBDatabase, IDBObjectStore, IDBTransaction
Métodos para almacenar y recuperar grandes cantidades de datos estructurados
12. Otros APIs y Métodos
navigator.userAgent
navigator.language
performance.timing
console.log(), console.warn(), console.error()
setTimeout(), setInterval(), clearTimeout(), clearInterval()
13. CSS Manipulación y Animaciones
element.style.setProperty(propertyName, value)
element.classList.toggle(className)
CSSOM (CSS Object Model)
*/