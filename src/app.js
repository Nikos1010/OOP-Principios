class Comment {
    constructor({content, studentName, studentRole = "estudiante"}) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(`${this.studentName} (${this.studentRole})`);
        console.log(`${this.likes} likes`);
        console.log(this.content);
    }
}

function videoPlay(id) {
    const urlSecret = "https://www.estoesplatzi.com/";
    console.log(`Se esta reproduciendo la url ${urlSecret}`);
}

function videoStop(id) {
    const urlSecret = "https://www.estoesplatzi.com/";
    console.log(`Se pauso la url ${urlSecret}`);
}

class PlatziClass {
    constructor({name, videoId}){
        this.name = name;
        this.videoId = videoId;
    }

    reproducir() {
        videoPlay(this.videoId);
    }

    pausar() {
        videoStop(this.videoId);
    }
}

class Classes {
    constructor({ name, comments = [] }) {
        this._name = name;
        this.comments = comments;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

class Course {
    constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const cursoProgramacionBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true
});

const cursoDefinitivoHTMLCSS = new Course({
    name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTMLCSS = new Course({
    name: "Curso Práctico de HTML y CSS",
    lang: "english"
});

const cursoResponsiveDesign = new Course({
    name: "Curso de Responsive Design",
});

class LearningPaths {
    constructor({ name, courses = [] }) {
        this._name = name;
        this.courses = courses;
    }

    addCourse(newCourse) {
        this.courses.push(newCourse);
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
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

//Students

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
        this._name = name;
        this._email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    set name(newName) {
        this._name = newName;
    }

    set email(newEmail) {
        this._email = newEmail;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this._name
        });
        comment.publicar();
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo siento ${this.name}, solo puedes tomar cursos gratuitos.`);
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(
                `Lo siento ${this.name}, no puedes tomar cursos en inglés.`
            );
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this._name,
            studentRole: "profesor"
        })
        comment.publicar();
    }
}


const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juan.com",
    twitter: "fjuandc",
    learningPaths: [escuelaWeb, escuelaVgs],
});

const miguel = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@miguel.com",
    instagram: "miguelito_feliz",
    learningPaths: [escuelaWeb, escuelaData],
});

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "Freddier",
    email: "f@dep.com",
    instagram: "Freddiervega",
});