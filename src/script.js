// const handleClick = () => {
//     const body = document.querySelector("body");
//     body.innerHTML = `
//         <h1>Hello JAVASCRIPT</h1>
//         <h2> and HELLO WORLD</h2>
//     `;

//     body.style.backgroundColor = '#000';
//     body.style.color = '#fff';
// };

// const el = document.getElementById("btn-start");
// el.addEventListener("mouseover", () => {
//     el.style.position = 'absolute';
//     el.style.top = `${Math.floor(
//         Math.random() * (window.innerHeight - 18)
//     )}px`;
//     el.style.left = `${Math.floor(
//         Math.random() * (window.innerWidth - 36)
//     )}px`;
// });
// el.addEventListener("click", () => handleClick());

// console.log(window)

const handleClick = () => {
    const body = $("body");
    body.HTML(`
        <h1>Hello JAVASCRIPT</h1>
        <h2> and HELLO WORLD</h2>
    `);

    body.css("background-color", "#000");
    body.css("color", "#fff");
};

const startButtonInit = () => {
    const el = $("#btn-start");
    el.on("mouseover", () => {
        el.css("position", "absolute");
        el.css("top", `${Math.floor(Math.random() * (window.innerHeight - 18))}px`);
        el.css("left", `${Math.floor(Math.random() * (window.innerWidth - 36))}px`);
    });
    el.on("click", () => handleClick());
};

const infoButtonInit = () => {
    const el = $("#btn-info");
    const elInitialText = el.html();
    el.on("click", () => { 
        if (el.html() == elInitialText) {
            el.html("OCULTAR INFORMACOES");
        } else { 
            el.html(elInitialText);
        }
        $(".info").fadeToggle();
    });
};

$(document).ready(() => {
    startButtonInit();
    infoButtonInit();


});
// console.log(window)