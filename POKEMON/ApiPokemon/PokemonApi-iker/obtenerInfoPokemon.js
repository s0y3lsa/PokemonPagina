async function obtenerItems() {
    try {

        // Sin await response es una promesa
        const response = await fetch("https://pokeapi.co/api/v2/item");
       
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Sin await data es una promesa
        const data = await response.json();

        console.log("Datos recibidos:", data);

    } catch (error) {

        console.error("Error al realizar la solicitud:", error.message);
    }
}

async function obtenerBerrys() {
    try {

        // Sin await response es una promesa
        const response = await fetch("https://pokeapi.co/api/v2/berry");
       
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Sin await data es una promesa
        const data = await response.json();

        console.log("Datos recibidos:", data);

    } catch (error) {

        console.error("Error al realizar la solicitud:", error.message);
    }
}
const items=obtenerItems();
obtenerBerrys();