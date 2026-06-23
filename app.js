// === LOGICA PRINCIPAL DE LA APLICACIÓN ===

document.addEventListener("DOMContentLoaded", () => {
    // 1. Navegación usando "Delegación de Eventos" (un solo listener para todo el menú)
    document.querySelector(".nav-links").addEventListener("click", (e) => {
        if(e.target.tagName === 'A') {
            e.preventDefault();
            document.querySelectorAll(".nav-links a").forEach(l => l.classList.remove("active"));
            document.querySelectorAll(".view-section").forEach(s => s.classList.remove("active"));
            
            e.target.classList.add("active");
            document.getElementById(e.target.getAttribute("data-target")).classList.add("active");
        }
    });

    // 2. Actualizar Dashboard General
    function actualizarDashboard() {
        document.getElementById("dash-insumos").textContent = StorageHelper.get('vo_insumos').length;
        document.getElementById("dash-platillos").textContent = StorageHelper.get('vo_platillos').length;

        // Filtrar pedidos de hoy usando .filter()
        const hoy = new Date().toISOString().slice(0, 10);
        document.getElementById("dash-pedidos").textContent = StorageHelper.get('vo_pedidos')
            .filter(p => p.fecha.startsWith(hoy)).length;
    }

    actualizarDashboard();
    
    // Escuchar múltiples eventos con un arreglo
    ['inventarioActualizado', 'platillosActualizados', 'pedidosActualizados']
        .forEach(evento => document.addEventListener(evento, actualizarDashboard));
});
