// function declaration
//syntax
//function name() {
// //body
//}

function calculateNumber (initialValue) {
    let x = initialValue;
    x = x + 100;
    x = x / 5;
    return x;
}
console.log(calculateNumber(5));

function calculateCircleArea(circleRadius) {
    return 3.14 * circleRadius ** 2; //** возводит число в степень

}

const circleArea1 = calculateCircleArea(5);
console.log(circleArea1);

const circleArea2 = calculateCircleArea(3);
console.log(circleArea2);

function createHTMLElement(tag = 'button', text ='send', id) {
    const element = document.createElement(tag);
    if (id) {
        element.id = id;
    }
    element.innerText = text;

    return element;
}

const h1Element = createHTMLElement('h1', 'my header', 'header');
//console.log(h1Element);
document.body.append(h1Element);
const element = createHTMLElement();
document.body.append(element);

function logArgsToConsole() {
    //console.log(arguments);
    for (let argument of arguments) { //for of - проходимся по массивовидной структуре и обращаться к каждому элементу по очереди
       // console.log(argument);
        if (!arguments.length) {
            return; // = return undefined
        }
    }
    console.log('no more agruments');
}

logArgsToConsole(1, 5, 9, 9);

//function expression - создание переменной в которую мы помещаем безимянную функцию

const sayHello = function() {
    console.log('Hello');
}
sayHello();

const sayBye = () => {
    console.log('Bye');
}
sayBye();

const brokenLinks = ['vk', 'youtube', 'facebook'];
//http://vk.com

const repairedLinksArray = (linksArray) => {
    const correctLinks = [];
    linksArray.forEach((brokenLink) => {
       correctLinks.push('https://' + brokenLink + '.com');
    })
    return correctLinks;
};

console.log(repairedLinksArray(brokenLinks));

