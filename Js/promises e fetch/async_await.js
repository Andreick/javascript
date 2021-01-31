// ES7 - Async / Await

const simpleFunc = async () => {
    //throw new Error("Oh no!");
    const data = await asyncTimer();
    return data;
};

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
});

// EventEmitter

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("User logged", data => {
    console.log(data);
});

emitter.emit("User logged", { user: "Roberto James" });

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit("User logged", data);
        }, 2000);
    }
}

const users = new Users();

users.once("User logged", data => { // Once executa apenas o primeiro evento
    console.log(data);
});

users.userLogged({ user: "Roberto James" });
users.userLogged({ user: "Valente Marques" });