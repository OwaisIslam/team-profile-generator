const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', gitHub = '') {
        super(name);

        this.gitHub = gitHub;
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}