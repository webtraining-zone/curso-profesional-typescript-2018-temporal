class Person {
    firstName;

    constructor(firstName) {
        this.firstName = firstName;
    }

    getName() {
        console.log('name', this.firstName);
    }
}

new Person('Luis').getName();