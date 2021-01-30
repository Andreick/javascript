function fn()
{
    return "Code here";
}

// Equivalente à declaração acima
const arrowFn = () => "Code here";
const arrowFn2 = () => {
    // Mais de uma expressão
    return "Code here";
}

// Funções também são objetos
fn.prop = "Posso criar propriedades";

console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logValue("Value here");
logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {

    if (allowed)
    {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Exucutará a função fn
handleFnExecution(); // Não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam)
{
    return function(allowed)
    {
        if (allowed)
        {
            fnParam();
        }
    }
}