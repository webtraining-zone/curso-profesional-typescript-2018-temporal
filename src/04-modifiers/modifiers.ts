class User {
    readonly MAX_CONNECTIONS: number;

    // Parameter properties
    constructor(protected id: number,
                protected firstName: string,
                protected email?: string) {
        this.MAX_CONNECTIONS = 3;
        // this.id = id;
    }

    public login() {
        console.log('>> login');
    }


}

class Teacher extends User {
    private _tId: string;

    constructor(id: number, firstName: string, tId: string) {
        super(id, firstName);
        this._tId = tId;
        this.id = 10;
    }

    get tId() {
        return this._tId;
    }

    set tId(tId: string) {
        this._tId = tId;
    }
}

class Student extends User {
    private sId: string;

    constructor(id: number, firstName: string, sId: string, email?: string) {
        super(id, firstName, email);
        this.sId = sId;
    }

    // Math.cos()
    // let math = new Math();
    // math.cos()
}

let luis = new Teacher(1, 'Juanito', 'Teacher ID 01');
let esmeralda = new Student(2, 'Esmeralda', 'S02');

luis.tId = 'Teacher ID 1005';
console.log(luis.tId);
console.log(luis.login());