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
            studentName: this._name,
        });
        comment.publicar();
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
            studentRole: "profesor",
        });
        comment.publicar();
    }
}
