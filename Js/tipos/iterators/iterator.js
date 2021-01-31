// Well known symbols
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

// Symbol iterator

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Utilizando um iterador para percorer objetos iteráveis

while (true)
{
    let {value, done} = it.next(); // Destructuring
    console.log(value);

    if (value.done)
    {
        break;
    }
}

const str = "Digital Innovation One";

for (let value of str)
{
    console.log(value);
}

const arr = [1, 2, 3, 4];
const arr2 = [...str, ...arr];
console.log(arr2);

// Função iteradora em um objeto literal

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                return {
                    value: this.values[i++],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

for (let value of obj)
{
    console.log(value);
}

const arr2 = [...obj];
console.log(arr2);