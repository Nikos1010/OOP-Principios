<h1>
	<center>POO en JS</center>
</h1>

La programación orientada a objetos es un paradigma de programación con la finalidad de resolver los problemas mediante objetos, esta tiene cuatro principios los cuales son:

- Abstracción.
- Encapsulamiento.
- Herencia.
- Polimorfismo.

Estos principios son los que nos ayudaran a reutilizar el codigo, para no repetirlo, tambien nos permitira tener el codigo de nuestras aplicaciones de una manera ordenada y permitir que estas crezcan. Pero en Javascript esto no se maneja con clases, si no que se maneja por prototipos, mas esto no significa que no podemos utilizar la palabra reservada `class` en javascript, la podemos utilizar, pero esto es una forma en la cual podemos visualizar mejor lo que creamos, pero siguen siendo prototipos por detras de esta palabra.

## Abstracción
Cuando hablamos de abstracción podemos entenderlo como los moldes que haremos de los objetos que encontremos en nuestra aplicación. La abstracción es la obtención de los atributos y elementos de un objeto (puede ser fisico o intangible) para luego hacer un analisis y diferenciar cuales objetos seran los padres y cuales seran los hijos.

Ejemplo:
+ Vamos a hacer una abstracción de un objeto fisico como es una silla, una silla tiene unas caracteristicas, lsa cuales son:
	- Numero de patas (Son la cantidad de patas que tiene la silla).
	- Tipo de espaladar (Puede ser recto, curveado, no tenga).
	- Tiene ruedas (Verdadero o falso).
	- Tipo de material (Madera, plastico, otro).
	- Categoria (Gamer, comedor, mesedora, oficina).
	Tiene estos metodos:
	- Sentarse.
	- Levantarse.
	- Obtener información.

Esa seria la abstracción de un objeto, y asi se veria en Javascript esta abstracción con `prototype`:

```javascript
function Silla({
    numeroPatas,
    tipoEspaldar,
    tieneRuedas,
    tipoMaterial,
    categoria,
}) {
    this.numeroPatas = numeroPatas;
    this.tipoEspaldar = tipoEspaldar;
    this.tieneRuedas = tieneRuedas;
    this.tipoMaterial = tipoMaterial;
    this.categoria = categoria;
}

//Asi se crean los metodos con prototype

Silla.prototype.sentarse = function(name) {
    console.log(`${name} se acaba de sentar.`);
}

Silla.prototype.levantarse = function(name) {
    console.log(`${name} se acaba de levantar.`);
}

Silla.prototype.obtenerInfo = function() {
    console.log(`La Silla es de tipo: ${this.categoria},
    ${this.tieneRuedas? 'si' : 'no'} tiene ruedas, tiene ${this.numeroPatas} patas,
    tiene un espaldar ${this.tipoEspaldar} y esta hecho de ${this.tipoMaterial}`)
}

const gamer = new Silla({
    numeroPatas: 5,
    tipoEspaldar: 'curveado',
    tieneRuedas: true,
    tipoMaterial: 'plastico',
    categoria: 'gamer',
});

gamer.sentarse('Noith'); //Noith se acaba de sentar.
gamer.levantarse('Noith'); //Noith se acaba de levantar.
gamer.obtenerInfo(); //La Silla es de tipo: gamer,
							//si tiene ruedas, tiene 5 patas,
							// tiene un espaldar curveado y esta hecho de plastico
```

Y esta es con `class`:

```javascript
class Silla {
    constructor({
        numeroPatas,
        tipoEspaldar,
        tieneRuedas,
        tipoMaterial,
        categoria,
    }) {
        this.numeroPatas = numeroPatas;
        this.tipoEspaldar = tipoEspaldar;
        this.tieneRuedas = tieneRuedas;
        this.tipoMaterial = tipoMaterial;
        this.categoria = categoria;
    }
    //Asi se crean los metodos con Class

    sentarse(name) {
        console.log(`${name} se acaba de sentar.`);
    }

    levantarse(name) {
        console.log(`${name} se acaba de levantar.`);
    }

    obtenerInfo() {
        console.log(`La Silla es de tipo: ${this.categoria},
    ${this.tieneRuedas ? "si" : "no"} tiene ruedas, tiene ${
            this.numeroPatas
        } patas,
    tiene un espaldar ${this.tipoEspaldar} y esta hecho de ${
            this.tipoMaterial
        }`);
    }
}

const gamer = new Silla({
    numeroPatas: 5,
    tipoEspaldar: "curveado",
    tieneRuedas: true,
    tipoMaterial: "plastico",
    categoria: "gamer",
});

gamer.sentarse('Noith'); //Noith se acaba de sentar.
gamer.levantarse('Noith'); //Noith se acaba de levantar.
gamer.obtenerInfo(); //La Silla es de tipo: gamer,
					//si tiene ruedas, tiene 5 patas,
					// tiene un espaldar curveado y esta hecho de plastico
```

> Utilizar `class` es mucho mejor, ya que es mas entendible y ordenado.

## Encapsulamiento
Esconder los datos de un objeto, para que solo se puedan manipular por los objetos definidos en la clase, el objetivo de esto, es que el objeto no pueda manipular estos datos de una manera tan simple, si no por el contrario, protegerlos, esconderlos o hacerlos invisibles ante estos.

Podemos tener varios tipos de encapsulamiento el getter y setter, los namescapes y los `Object.defineproperties`. Para decir que un dato es privado en JS, ya que esto no existe, se utiliza el _ antes del nombre del dato, ejemplo: `this._name = 'Nikos'`

### Getter y Setter
---
Con los getter podemos obtener este valor oculto, para mostrarlo de forma externa, por el contrario con el setter lo utilizamos para modificar este valor del dato de la clase, aca observaremos un ejemplo:

```javascript
class Persona {
    constructor({ nombre, apellido, edad }) {
        this._nombre = nombre;
        this._apellido = apellido;
        this.edad = edad;
    }

    get nombre() {
        console.log("Hola " + this._nombre);
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get apellido() {
        console.log("Señor/a " + this._apellido);
    }

    set apellido(nuevoApellido) {
        this._apellido = nuevoApellido;
    }
}

const julio = new Persona({nombre: 'Julio', apellido: 'Ramirez', edad: 25});

console.log(julio.nombre); //Julio
julio.nombre = 'Andres';
console.log(julio.nombre); //Andres

console.log(julio.apellido); //Ramirez
julio.apellido = 'Caro';
console.log(julio.apellido); //Caro
```

### Namescapes
---
En proceso...
### Object.defineproperties
---
En proceso...
## Herencia
En proceso...

## Polimorfismo
En proceso...