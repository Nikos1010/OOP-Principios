//Clases
//Prototipos con la sintaxis de clases
class StudentTwo {
    constructor({name, age, email, cursosAprobados = []}) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguel = new StudentTwo({
    name: "Miguel",
    age: 35,
    email: "miguelito@gmail.com",
    cursosAprobados: [
        "Curso de Análisis de Negocios para Ciencia de Datos",
        "Curso de Principios de Visualización de Datos para BI",
    ]
});

class LearningPaths {
    constructor({ academicName, courses = [] }) {
        this.academicName = academicName;
        this.courses = courses;
    }

    addCourse(newCourse) {
        this.courses.push(newCourse);
    }
}

const escuelaWeb = new LearningPaths({
    academicName: "Escuela de Desarrollo Web",
    courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Design",
    ],
});

const escuelaVgs = new LearningPaths({
    academicName: "Escuela de Videojuegos",
    courses: [
        "Curso Introducción a la producción Vgs",
        "Curso de Unreal Engine",
        "Curso de Unity en 3D",
    ],
});

const escuelaData = new LearningPaths({
    academicName: "Escuela de Data Science",
    courses: ["Curso de DataBusiness", "Curso de DataViz", "Curso de Tableau"],
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juan.com",
    twitter: "fjuandc",
    learningPaths: [escuelaWeb, escuelaVgs],
});

const miguelito = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@miguel.com",
    instagram: "miguelito_feliz",
    learningPaths: [escuelaWeb, escuelaData],
});
