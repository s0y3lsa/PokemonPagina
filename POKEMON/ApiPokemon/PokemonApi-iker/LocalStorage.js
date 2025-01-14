import { Equipo } from './Equipo.js';
// el id sera la cantidad de equipos que haya mas 1
// depende del tipo(maquina o humano)
// los pokemons son el unico campo que puede pasarse como nulo
function crearEquipo(id, nombre, pokemons, tipo, generacion) {
    try {
        return new Equipo(id, nombre, pokemons, tipo, generacion);
    } catch (error) {
        console.error(`Error al crear el equipo: ${error.message}`);
    }
}

//este metodo recibe el id del equipo a actualizar y el nuevo nombre que se 
function actualizarNombreEquipo(equipoId, nuevoNombre) {
    try {
        for (let equipo of equipos) {
            if (equipo.id == equipoId) {
                equipos.nombre = nuevoNombre;
            }
        }
    } catch (error) {
        console.error(`Error al actualizar el nombre: ${error.message}`);
    }
}

function actualizarPokemonEquipo(equipoId, posicionId, pokemonId) {
    try {
        for (let equipo of equipos) {
            if (equipo.id == equipoId) {
                equipos.pokemons[posicionId] = pokemonId;
            }
        }
    } catch (error) {
        console.error(`Error al actualizar el nombre: ${error.message}`);
    }
}



function borrarEquipo() {

}

function buscarEquipo() {

}
const equipos = [];
