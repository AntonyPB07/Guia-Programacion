/*
! Creación de Elementos:
document.createElement(): Crea un nuevo elemento HTML.
document.createTextNode(): Crea un nuevo nodo de texto.
element.appendChild(): Agrega un nuevo elemento hijo al final de un elemento padre.
element.insertBefore(): Inserta un nuevo elemento hijo antes de un elemento hijo específico.
element.cloneNode(): Clona un elemento.

! Obtención y Modificación de Hijos (Childs):
element.children: Obtiene una colección de los elementos hijos de un elemento.
element.firstChild: Obtiene el primer elemento hijo de un elemento.
element.lastChild: Obtiene el último elemento hijo de un elemento.
firstElementChild: Obtiene el primer elemento hijo del elemento especificado, omitiendo los nodos de texto.
lastElementChild: Obtiene el último elemento hijo del elemento especificado, omitiendo los nodos de texto.
childNodes: Obtiene una colección en vivo (Live NodeList) de todos los nodos secundarios de un elemento (incluyendo nodos de texto y elementos).
parentElement: Obtiene el elemento padre (elemento padre inmediato) del elemento especificado.
element.nextSibling: Obtiene el siguiente elemento hermano de un elemento.
element.previousSibling: Obtiene el elemento hermano anterior de un elemento.
element.replaceChild(): Reemplaza un elemento hijo por otro.
element.removeChild(): Elimina un elemento hijo.
childElementCount: Obtiene el número de elementos hijos de un elemento.
remove(): Elimina un elemento hijo de sí mismo.
hasChildNodes(): Comprueba si un elemento tiene nodos secundarios (hijos).

! Propiedades de Parents (Padres):
element.parentNode: Obtiene el elemento padre de un elemento.

! Propiedades de Siblings (Hermanos):
nextElementSibling: Obtiene el siguiente nodo hermano que es un elemento, omitiendo nodos de texto.
previousElementSibling: Obtiene el nodo hermano anterior que es un elemento, omitiendo nodos de texto.
element.nextSibling: Obtiene el siguiente elemento hermano de un elemento.
element.previousSibling: Obtiene el elemento hermano anterior de un elemento.

! Extra
closest es un método útil para buscar elementos ancestros que coincidan con un selector CSS específico.
*/