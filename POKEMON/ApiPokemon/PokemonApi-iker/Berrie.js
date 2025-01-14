class Berry {
    constructor(id, name, flavors, firmness) {
        this.id = id; // ID de la baya (int)
        this.name = name; // Nombre de la baya (string)
        this.flavors = flavors; // Lista de sabores con potencia
        this.firmness = firmness; // Firmeza de la baya
    }

    // Método estático para crear una Berry desde datos de la API
    static async fromApi(id) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/berry/${id}`); // URL para la API de la baya
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            const data = await response.json();

            // Crear instancia de Berry desde los datos obtenidos
            return new Berry(
                data.id, // ID de la baya
                data.name, // Nombre de la baya
                data.flavors.map(flavor => ({ 
                    flavor: flavor.flavor.name, 
                    potency: flavor.potency 
                })), // Sabores y la potencia
                { name: data.firmness.name, url: data.firmness.url } // Firmeza
            );
        } catch (error) {
            console.error(`Error al obtener los datos de la baya desde la API: ${error.message}`);
        }
    }

    // Método para mostrar los datos de la baya como string
    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Flavors: [${this.flavors.map(f => `${f.flavor} (Potency: ${f.potency})`).join(", ")}], Firmness: ${this.firmness.name}`;
    }
}

let berryExample = Berry.fromApi(1);  