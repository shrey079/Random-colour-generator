const h1 = document.querySelector("h1")
const h3 = document.querySelector('h3')
const button = document.querySelector("button")

function randInt() { 
    return (Math.floor(Math.random() * 256)); 
}

function color() { 
    h3.classList.add("hide")
    const r1 = randInt();
    const r2 = randInt();
    const r3 = randInt();

    const str = `Rgb(${r1}, ${r2}, ${r3})`;
    const body = document.querySelector("body")
    const button = document.querySelector("button")
    body.style.backgroundColor = str;
    h1.innerText = str;
    button.style.backgroundColor = str; 
}

button.addEventListener('click', color);