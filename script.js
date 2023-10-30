document.getElementById("copiarImagen").addEventListener("click", async () => {
    const img = document.querySelector('img');
    try {
        const blob = await fetch(img.src).then(response => response.blob());
        const item = new ClipboardItem({ 'image/png': blob });

        await navigator.clipboard.write([item]);
        console.log('Imagen copiada al portapapeles')
    } catch (err) {
        console.error('Error al copiar la imagen al Portapapeles:', err);
    }
});