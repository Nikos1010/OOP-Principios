//Setters y Getters

class Course {
    constructor({ name, classes = [] }) {
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName === "Curso Malo de Programación Básica") {
            console.error("Web... no");
        } else {
            this._name = newName;
        }
    }
}

const cursoProgramacionBasica = new Course({
    name: "Curso Gratis de Programación Básica",
});

// cursoProgramacionBasica.name = "Curso Malo de Programación Básica"; //Utiliza el setter
console.log(cursoProgramacionBasica.name);
