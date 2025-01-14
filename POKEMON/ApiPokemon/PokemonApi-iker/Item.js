
class Item {
    

    constructor(id, name, category, attributes, effect) {
        this.id = id; // ID del ítem (int)
        this.name = name; // Nombre del ítem (string)
        this.category = category; // Categoría: objeto con nombre y URL
        this.attributes = attributes; // Lista de atributos del ítem
        this.effect = effect; // Efecto del movimiento Fling con este ítem
    }

    // Método estático para crear un Item desde datos de la API
    static async fromApi(id) {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/item/"+id+"");
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            const data = await response.json();

            return new Item(
                data.id, // ID del ítem
                data.name, // Nombre del ítem
                { name: data.category.name, url: data.category.url }, // Categoría
                data.attributes.map((attr) => attr.name), // Atributos (solo nombres)
                data.fling_effect ? data.fling_effect.name : "No effect" // Efecto de Fling
            );
        } catch (error) {
            console.error(`Error al obtener los datos del ítem desde la API: ${error.message}`);
        }
    }

    // Método para mostrar los datos del ítem como string
    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Category: ${this.category.name}, Attributes: [${this.attributes.join(", ")}], Effect: ${this.effect}`;
    }
}

let masterBall=Item.fromApi(1);
console.log(masterBall);

/*
// ESTO ES UTILIZANDO LOS DATOS DEL JSON QUE SE CREA AL PEDIR TODOS LOS ITEMS
import { datos } from './obtenerInfoPokemon.js';

class Item {
    constructor(id, name, category, attributes, effect) {
        this.id = id; // ID del ítem (int)
        this.name = name; // Nombre del ítem (string)
        this.category = category; // Categoría: objeto con nombre y URL
        this.attributes = attributes; // Lista de atributos del ítem
        this.effect = effect; // Efecto del movimiento Fling con este ítem
    }

    // Método estático para crear un Item desde datos de la API
    static async fromApi(id) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/item/${id}`); // Asegúrate de corregir las llaves ${id}
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            const data = await response.json();

            return new Item(
                data.id, // ID del ítem
                data.name, // Nombre del ítem
                { name: data.category.name, url: data.category.url }, // Categoría
                data.attributes.map((attr) => attr.name), // Atributos (solo nombres)
                data.fling_effect ? data.fling_effect.name : "No effect" // Efecto de Fling
            );
        } catch (error) {
            console.error(`Error al obtener los datos del ítem desde la API: ${error.message}`);
        }
    }

    // Método para mostrar los datos del ítem como string
    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Category: ${this.category.name}, Attributes: [${this.attributes.join(", ")}], Effect: ${this.effect}`;
    }

    // Método para obtener los datos del ítem usando obtenerItems de datos
    static async obtenerPokeBall() {
        try {
            const items = await datos.obtenerItems(); // Aquí se obtiene la lista de items
            const pokeballData = items.find(item => item.name.toLowerCase() === 'pokeball'); // Busca la Pokéball

            if (!pokeballData) {
                throw new Error('Pokéball not found');
            }

            return new Item(
                pokeballData.id, // ID del ítem
                pokeballData.name, // Nombre del ítem
                { name: pokeballData.category.name, url: pokeballData.category.url }, // Categoría
                pokeballData.attributes.map((attr) => attr.name), // Atributos (solo nombres)
                pokeballData.fling_effect ? pokeballData.fling_effect.name : "No effect" // Efecto de Fling
            );
        } catch (error) {
            console.error(`Error al obtener los datos de la Pokéball: ${error.message}`);
        }
    }
}

let masterBall = Item.obtenerPokeBall(); // Obtiene la Pokéball usando el método `obtenerPokeBall()` de datos
*/