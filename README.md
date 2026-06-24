# Proyecto Restaurante Vegano

Bienvenido a la documentación de tu proyecto **Restaurante Vegano**. Este documento está diseñado para ser tu guía de estudio. Si alguna vez te preguntas *"¿qué hace esta parte del código?"* o *"¿cómo se conecta esto con esto otro?"*, aquí encontrarás la respuesta explicada de forma clara y sencilla, con un enfoque especial en la lógica de JavaScript.

---

## Arquitectura General del Proyecto

Tu aplicación está construida usando **Vanilla JavaScript** (JavaScript puro, sin librerías externas), HTML5 y CSS3. La arquitectura se basa en tres pilares principales que aprendiste en clase:

1. **Almacenamiento Local (LocalStorage):** Para que los datos no se borren cuando recargas la página.
2. **Web Components (Componentes Web):** Para encapsular y reutilizar partes de la interfaz (como las pestañas de inventario, platillos y pedidos).
3. **Eventos (Eventos Personalizados):** Para que las diferentes partes de tu aplicación "hablen" entre sí y se actualicen automáticamente.

---

## Explicación Archivo por Archivo (El Corazón de JS)

### 1. `storage.js` (El Gestor de Datos)
Este archivo es tu puente hacia la memoria del navegador. Aquí se creó un objeto literal llamado `StorageHelper`.

**Conceptos clave utilizados:**
- **Funciones Flecha (`=>`)**: Para escribir métodos más cortos.
- **`JSON.parse()` y `JSON.stringify()`**: LocalStorage solo guarda texto plano. Cuando guardamos un arreglo u objeto, usamos `stringify` para convertirlo a texto. Cuando lo sacamos, usamos `parse` para volverlo a convertir en un objeto de JS.
- **Operador lógico OR (`||`)**: En `JSON.parse(...) || []`, le estamos diciendo a JS: *"Trae los datos, pero si no hay nada (null), devuélveme un arreglo vacío `[]` para que el código no falle más adelante."*

### 2. `app.js` (El Cerebro de Navegación y Resumen)
Este archivo maneja el Dashboard (la vista principal) y la navegación de la página web.

**¿Qué hace exactamente?**
- **Delegación de Eventos (`e.target`)**: En lugar de ponerle un `addEventListener` a cada botón del menú lateral, se lo pones al contenedor completo (`.nav-links`). Luego, con `e.target.tagName === 'A'`, verificas si el usuario hizo clic exactamente en un enlace. Si es así, cambias la clase `active` para mostrar la vista correcta. ¡Esto es muy eficiente!
- **`actualizarDashboard()`**: Esta función lee los arreglos del LocalStorage e imprime su longitud (`.length`) para mostrar cuántos insumos y platillos existen.
- **El método `.filter()`**: Para los "Pedidos del día", el código filtra el arreglo de pedidos completos buscando aquellos cuya fecha coincida con la fecha de hoy.
- **Escuchadores Múltiples**: Al final de `app.js`, usamos un arreglo con los nombres de eventos `['inventarioActualizado', 'platillosActualizados', 'pedidosActualizados']` y los recorremos con un `.forEach()`. Si cualquiera de estos eventos ocurre en la aplicación, el Dashboard se actualiza automáticamente. 

### 3. Carpeta `components/` (Los Web Components)
Los archivos dentro de esta carpeta (`vo-inventario.js`, `vo-platillos.js`, `vo-pedidos.js`) son **Componentes Web**. 

Un Web Component te permite crear tus propias etiquetas HTML (por ejemplo, `<vo-inventario></vo-inventario>`).

**Estructura común de tus componentes:**
- **`class Vo... extends HTMLElement`**: Tu clase hereda los superpoderes de una etiqueta HTML estándar.
- **`constructor()`**: Se llama cuando el componente nace. Aquí clonas el `<template>` correspondiente de tu `index.html` y lo metes dentro del componente.
- **`connectedCallback()`**: Este método es mágico. Se ejecuta automáticamente en cuanto el componente es insertado en la pantalla. Aquí es donde ponemos todos nuestros `addEventListener` y hacemos el primer `.render()`.

---

## Entendiendo la Lógica Compleja de los Componentes

### A. Gestión de Inventario (`vo-inventario.js`)
Aquí se registra la materia prima.
- **`.findIndex()`**: Cuando guardas un insumo, el código usa `.findIndex()` para ver si el código ya existe. Si existe (índice mayor o igual a 0), lo **actualiza** (`insumos[index] = insumo`). Si no existe, lo **agrega** (`insumos.push(insumo)`).
- **Template Literals (` \`...\` `) y `.map().join('')`**: En lugar de hacer un clásico ciclo `for` para crear filas `<tr>`, tomas el arreglo de insumos, le aplicas un `.map()` que transforma cada objeto en un bloque de texto HTML, y finalmente `.join('')` une todo ese texto para inyectarlo directo en el `innerHTML` de la tabla. ¡Es la forma moderna de pintar el DOM!

### B. Gestión de Platillos (`vo-platillos.js`)
La particularidad de los platillos es que necesitan una **lista temporal de ingredientes** antes de ser guardados.
- El componente tiene un arreglo en su memoria llamado `this.ingredientesTemp`.
- Cada que añades un ingrediente al platillo en el formulario, se guarda en este arreglo temporal.
- Cuando le das al botón de "Guardar Platillo", tomas los datos del formulario, adjuntas este arreglo de ingredientes, y lo guardas todo junto en el `LocalStorage`.

### C. Gestión de Pedidos (`vo-pedidos.js`) - *La parte más avanzada*
Aquí es donde la aplicación brilla y conecta todo.
1. **Carrito Temporal**: Al igual que los platillos, tiene un arreglo temporal `this.platillosSeleccionados` que actúa como el carrito de compras de esa mesa.
2. **Método `.reduce()`**: Para calcular el total a pagar del pedido, se usa `.reduce((sum, p) => sum + p.subtotal, 0)`. Esto va acumulando los subtotales de cada platillo del carrito partiendo de cero.
3. **El algoritmo `verificarInventario()`**: 
   - **Paso 1**: Recorre tu carrito temporal y averigua exactamente cuántos gramos/litros de cada ingrediente se van a necesitar en total. Los suma en un objeto literal (`insumosNecesarios`).
   - **Paso 2**: Hace un ciclo `for...in` sobre esos insumos necesarios y revisa en el `StorageHelper` si tienes suficiente cantidad. Si te faltan gramos de Tofu, detiene el pedido con un `return false` y muestra un `alert`.
   - **Paso 3**: Si todo alcanza, descuenta esas cantidades exactas de tu arreglo global de inventario y lo guarda de nuevo. Luego lanza el evento `inventarioActualizado`.

---

## El Patrón de los Eventos Personalizados (La Comunicación)
Notarás que en varias partes del código (cuando guardas o borras algo) aparece esta línea:
\`\`\`javascript
document.dispatchEvent(new Event('inventarioActualizado'));
\`\`\`
**¿Para qué sirve?**
Como el Dashboard (`app.js`) y las listas desplegables necesitan mostrar datos actualizados al momento, esta línea actúa como un megáfono que grita al resto de la página: *"¡Oigan, el inventario cambió!"*.
Cualquier archivo que esté "escuchando" (`document.addEventListener('inventarioActualizado', ...)`), reaccionará inmediatamente. Así logramos que la página sea interactiva sin tener que recargarla.

---

## Resumen Final para tu Defensa
Si en tu presentación te preguntan:
- **¿Cómo se guardan los datos?** -> *"A través de LocalStorage, utilizando JSON.stringify para persistir los arreglos y JSON.parse para recuperarlos".*
- **¿Cómo actualizas la interfaz?** -> *"Utilizando Web Components para mantener todo ordenado, inyectando el HTML dinámico con Template Literals y `.map()`, y disparando Eventos para que todo reaccione en tiempo real."*
- **¿Cómo validas el inventario en los pedidos?** -> *"Haciendo un cálculo previo de requerimientos, comprobando contra el stock actual y descontando la materia prima antes de aprobar el pedido."*

¡Con esto estás listo/a! El código es sólido y demuestra un gran dominio de los fundamentos de JavaScript ES6.
