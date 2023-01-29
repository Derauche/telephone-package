class Phonebook {
    constructor() {
        this.numbers = {};
        this.observers = [];
    }
    addPhoneNumber(name, number) {
        this.numbers[name] = number;
        this.notify(`Added number for ${name}`);
    }
    removePhoneNumber(name) {
        delete this.numbers[name];
        this.notify(`Removed number for ${name}`);
    }
    dialPhoneNumber(name) {
        // console.log(this.numbers[name])
        if (this.numbers[name]) {
            this.notify(`Dialing ${this.numbers[name]}`)
        } else {
            console.log("this number doesn't exist");
        }
    }
    notify(event) {
        this.observers.forEach(observer => observer.update(event));
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
}

class Observer {
    update(event) {
        console.log(`Received event: ${event}`);
    }
}

const phonebook = new Phonebook();
const observer = new Observer();
phonebook.subscribe(observer);
phonebook.addPhoneNumber("John Doe", "123-456-7890");
phonebook.dialPhoneNumber('John Doe')
phonebook.removePhoneNumber("John Doe");