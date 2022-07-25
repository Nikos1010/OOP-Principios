function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juan = new Student('Juan Diego', 9, [
    "Curso de introducción a la producción de videojuegos",
    "Curso de creación de personajes"
]);
