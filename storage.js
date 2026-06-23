// Un manejador de almacenamiento universal extremadamente simple
const StorageHelper = {
    // Obtiene los datos del LocalStorage o retorna un arreglo vacío si no existen
    get: (key) => JSON.parse(localStorage.getItem(key)) || [],
    
    // Guarda cualquier arreglo de datos en la llave especificada
    save: (key, data) => localStorage.setItem(key, JSON.stringify(data))
};
