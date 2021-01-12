const h1 = document.querySelector("h1")
const button = document.querySelector("button")

function randInt() { 
    return (Math.floor(Math.random() * 226)); 
}

function color() { 
    const r1 = randInt();
    const r2 = randInt();
    const r3 = randInt();
    
    const str = `Rgb(${r1}, ${r2}, ${r3})`;
    const body = document.querySelector("body")
    body.style.backgroundColor = str;
    h1.innerText = str;
}

button.addEventListener('click', color);