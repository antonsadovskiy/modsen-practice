class University {
    name;
    faculties;

    constructor(name, faculties) {
        this.name = name;
        this.faculties = faculties;
    }

    addNewFaculty(faculty) {
        this.faculties.push(faculty);
    }

    removeFaculty(facultyId) {
        this.faculties = this.faculties.filter((faculty) => faculty.id !== facultyId);
    }

    getAllFaculties() {
        return this.faculties;
    }
}

const bntu = new University('BNTU', [{name: "FITR", id: 1}, {name: 'FTUG', id: 2}])


bntu.addNewFaculty({id: 3, name: "ATF"})

bntu.removeFaculty(2)

console.log(bntu.getAllFaculties())