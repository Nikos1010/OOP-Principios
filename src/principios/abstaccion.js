class Classes {
    constructor({ name, comments = [] }) {
        this.name = name;
        this.comments = comments;
    }
}

class Course {
    constructor({ name, classes = [] }) {
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgramacionBasica = new Course({
    name: "Curso Gratis de Programación Básica",
});

const cursoDefinitivoHTMLCSS = new Course({
    name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTMLCSS = new Course({
    name: "Curso Práctico de HTML y CSS",
});

const cursoResponsiveDesign = new Course({
    name: "Curso de Responsive Design",
});

class LearningPaths {
    constructor({ name, courses = [] }) {
        this.name = name;
        this.courses = courses;
    }

    addCourse(newCourse) {
        this.courses.push(newCourse);
    }
}

const escuelaWeb = new LearningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgramacionBasica,
        cursoDefinitivoHTMLCSS,
        cursoPracticoHTMLCSS,
        cursoResponsiveDesign,
    ],
});

const escuelaVgs = new LearningPaths({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgramacionBasica,
        "Curso Introducción a la producción Vgs",
        "Curso de Unreal Engine",
        "Curso de Unity en 3D",
    ],
});

const escuelaData = new LearningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProgramacionBasica,
        "Curso de DataBusiness",
        "Curso de DataViz",
        "Curso de Tableau",
    ],
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

const miguel = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@miguel.com",
    instagram: "miguelito_feliz",
    learningPaths: [escuelaWeb, escuelaData],
});
