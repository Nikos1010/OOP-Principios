<center><h1>POO en JS</h1></center>

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
Para reutilizar codigo podemos utilizar la herencia y abstraer una clase padre o una superclase, la manera de utilizar la herencia en javascript es mediante la palabra clave `extends` y para llamar los datos que tenemos en el constructor de la clase padre, debemos utilizar la palabra clave `super`, un ejemplo seria el siguiente:

+ En una clase hay personas, pero se dividen entre estudiantes y profesores, en si lo unico que cambiaria serian algunos datos, vamos a hacer la abstracción de esto.
	- La clase persona tiene estos datos:
		- nombre.
		- tipo de credencial.
		- edad.
		- materias
		Metodos:
		- Asistir a clase.
		- Obtener informacion.
	- La clase Estudiante tiene estos datos:
		- nombre.
		- tipo de credencial.
		- edad.
		- puesto en la clase.
		- Materias que ve.
		Metodos:
		- Asisitir a clase.
		- Poner atencion.
		- Obtener información.
	- La clase Profesos tiene estos datos:
		- nombre.
		- tipo de credencial.
		- edad.
		- cantidad de alumnos.
		- Materia/s que dicta.
		Metodos:
		- Asisitir a clase.
		- Dictar clase.
		- Obtener información.

Si notamos la abstracción podemos ver que la clase Persona puede ayudar a que utilicemos menos codigo en nuestra aplicación, vamos a mostrar ya este ejemplo en JavaScript:

```javascript
class Persona {
    constructor({nombre, tipoCredencial = 'estudiante', edad, materias = []}) {
        this._nombre = nombre;
        this._tipoCredencial = tipoCredencial;
        this.edad = edad;
        this.materias = materias;
    }

    asistirAClase() {
        console.log(this._nombre +' esta en la clase.');
    }

    obtenerInfo() {
        console.log(this._nombre + ' tiene una credencial de tipo: ' + this._tipoCredencial + '.');
    }
}

class Estudiante extends Persona {  //Palabra clave extends
    constructor({props, puestoClase}) {
        super(props); //Palabra clave super
        this.puestoClase = puestoClase;
    }

    ponerAtencion() {
        console.log(this._nombre + ' esta poniendo atención.');
    }
}

class Profesor extends Persona { //Palabra clave extends
    constructor ({props, cantidadAlumnos}){
        super(props);  //Palabra clave super
        this.cantidadAlumnos = cantidadAlumnos;
    }

    dictarClase() {
        console.log(this._nombre + ' esta dictando clase a ' + this.cantidadAlumnos + ' alumnos.');
    }
}

const julian = new Estudiante({
    props: {
        nombre: 'Julian Comodoro',
        edad: 15,
        materias: ['Español', 'Ingles']
    },
    puestoClase: 5
});

const david = new Profesor({
    props: {
        nombre: 'David Gutierrez',
        tipoCredencial: 'profesor',
        edad: 45,
        materias: ['Español']
    },
    cantidadAlumnos: 30
});

julian.asistirAClase(); //Julian Comodoro esta en la clase.
julian.ponerAtencion(); //Julian Comodoro esta poniendo atención.
julian.obtenerInfo(); //Julian Comodoro tiene una credencial de tipo: estudiante.

david.asistirAClase(); //David Gutierrez esta en la clase.
david.dictarClase(); //David Gutierrez esta dictando clase a 30 alumnos.
david.obtenerInfo(); //David Gutierrez tiene una credencial de tipo: profesor.
```
> Notamos como se puede reutilizar codigo para que no escribamos las mismas lineas una y otra vez.

## Polimorfismo
Si tenemos en una clase padre metodos generales que utilizaran las distintas clases, pero una o varias clases hijas esa misma accion la hacen de manera distinta a la padre, entonces es donde encontramos el polimorfismo, el cual tiene varios tipos:

- adhoc.
- Paramétrico.
- Inclusión.

>Esto lo lei de este [artículo](https://www.instintoprogramador.com.mx/2020/11/polimorfismo-en-javascript.html) sobre polimorfismo.

### Polimorfismo adhoc
---
Cambiar algo de una forma a otra en el acto, para este encontramos los siguientes tres tipos:

- Sobrecarga del operador.
- Sobrecarga de funciones.
- Polimorfismo de coerción.

#### Sobrecarga del Operador
Es cuando podemos hacer mas de una cosa, podemos observar el operador `+` que hace muchas cosas, como puede ser sumar numeros, como tambien concatenar cadenas, un ejemplo seria:


```javascript
console.log( 4 + 2 ); //6
console.log("El resultado de " + 10 +" + " + 6 + " es: " + 10 + 6 ); //El resultado de 10 + 6 es: 106
console.log("El resultado de " + 10 + " + " + 6 + " es: " + (10 + 6)); //El resultado de 10 + 6 es: 16
```
> Si nota la linea de codigo 2, vera que no se suma solo con el `+`, eso se debe a que javascript piensa que solo se estan haciendo concatenaciones, para lograr que se sume hay que colocarlo entre parentesis.
Esto se debe a que JS utiliza el `type` entonces si se utiliza:
`Number` + `Number`, sera `Number`.
`Number` + `String`, sera `String`.

#### Sobrecarga de Funciones
En distintos lenguajes la sobrecarga de funciones, es crear dos o mas funciones con el mismo nombre, pero con diferentes argumentos, en Javascript no se puede hacer esto, entonces es un poco diferente, usamos una funcion, pero cambiamos los resultados de acuerdo a los argumentos que recibimos, un ejemplo sería:
```javascript
function createShape(size, shape) {
    if (shape === "triangle") console.log('Este es un triangulo');
    if (shape === "rectangle") console.log("Este es un rectangulo");
    if (shape === "square") console.log("Este es un cuadrado");
}
```
Entendiendo esto, podemos ver el `if` y el  `switch` hacen sobrecarga de funciones, ya que estos dependiendo de los argumentos dan ciertos resultados.

#### Polimorfismo de Coerción
Javascript tiene una coerción de tipo. Convierte valor de un tipo a otro mientras los evalúa. Por ejemplo, cualquier expresión dentro de una declaración `if`, JavaScript la convierte en `true` o `false`:
```javascript
const num = 3;
if(num) { //true
    console.log(num) //3
}
```

### Polimorfismo Paramétrico
---
Este se divide en dos partes:
1. Datos que pueden contener muchos tipos de datos.
2. Funciones que pueden trabajar con muchos tipos de datos.

#### Datos que pueden contener muchos tipos de datos
En Javascript todo son Objetos. Por lo tanto, los objetos son paramétricos, se pueden convertir en otros tipos de datos.
Los objetos también pueden guardar varios tipos, no importa que valores se almacenen.
```javascript
const object = {
  string: 'hello',
  number: 123,
  boolean: true,
  symbol: Symbol(),
  und: undefined,
  nul: null,
  bigint: BigInt(Number.MAX_SAFE_INTEGER)
}
```
Esto tambien aplica con las arreglos, son paramétrcos, estos aceptan cualquier tipo de datos.
```javascript
const arreglo = ['string', 25, true, undefined, null, BigInt(Number.MAX_SAFE_INTEGER)]
```
#### Funciones que pueden trabajar con muchos tipos de datos
Estas se denominan como funciones polimórficas, no les interesa que tipos de datos se pasen. Aplicarán la transformación que se le dice y dan un resultado.
```javascript
const doubled = [1, 2, 3].map(num => num * 2); // [ 2, 4, 6 ]
```
### Polimorfismo subtipo o inclusión
---
Crear objetos derivados a partir de un objeto principal. Los metodos derivados pueden anular el metodo del padre y seguira funcionando.
Un ejemplo en Javascript seria este:

```javascript
class Person {
    constructor(name) {
        this._name = name;
    }

    saludar() {
        console.log(`Hola! mi nombre es ${this._name}`);
    }
}

class Desarrollador extends Person {
    saludar() {
        console.log(`Hola! mi nombre es ${this._name}. Yo soy un desarrollador.`);
    }
}

class Designer extends Person {
    saludar() {
        console.log(`Hola! mi nombre es ${this._name}. Yo soy un diseñador.`);
    }
}

const zell = new Person('Zell')
const vincy = new Desarrollador("Vincy");
const tim = new Designer('Tim')

zell.saludar() // Hola! mi nombre es Zell.
vincy.saludar() // Hola! mi nombre es Vincy. Yo soy un desarrollador.
tim.saludar() // Hola! mi nombre es Tim. Yo soy un diseñador.
```