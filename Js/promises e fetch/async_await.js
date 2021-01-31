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