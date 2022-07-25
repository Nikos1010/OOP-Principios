// No es viable
const juan = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design",
            ],
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso Introducción a la producción Vgs",
                "Curso de Unreal Engine",
                "Curso de Unity en 3D",
            ],
        },
    ],
};

const miguel = {
    name: "Miguelito",
    username: "miguelitofeliz",
    points: 100,
    socialMedia: {
        twitter: "miguelitofeliz",
        instagram: "miguelito_feliz",
        facebook: undefined,
    },
    approvedCourses: ["Curso de DataBusiness", "Curso de DataViz"],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design",
                "Curso de Sistemas de Diseño",
            ],
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso de DataBusiness",
                "Curso de DataViz",
                "Curso de Tableau",
            ],
        },
    ],
};

const noith = {
    name: "Nicolas",
    age: 22,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    // aprobarCurso: function(nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso);
    // },
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    },
};

noith.cursosAprobados.push("Curso de Responsive Design - Curso de CSS Grid");
console.log(noith);