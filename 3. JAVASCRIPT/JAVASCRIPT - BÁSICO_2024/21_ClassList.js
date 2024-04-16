//? La propiedad classList es un objeto de tipo DOMTokenList que representa la lista de clases de un elemento HTML.

/*
* Métodos de classList:

! add(class1, class2, ...): Agrega una o más clases al elemento.
element.classList.add('newClass');

! remove(class1, class2, ...): Elimina una o más clases del elemento.
element.classList.remove('oldClass');

! toggle(class, force): Alterna la presencia de una clase; si la clase existe, la elimina, de lo contrario, la agrega. También se puede pasar un segundo argumento booleano opcional para forzar la adición o eliminación de la clase.
element.classList.toggle('active');

! contains(class): Verifica si el elemento tiene una clase específica.
if (element.classList.contains('active')) {
    Hacer algo si tiene la clase 'active'
}

! item(index): Devuelve la clase en la posición especificada en la lista de clases.
var secondClass = element.classList.item(1);

! replace(oldClass, newClass): Reemplaza una clase existente por una nueva.
element.classList.replace('oldClass', 'newClass');
*/