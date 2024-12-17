//donde quiero renderizar
const app = document.querySelector("#app");
console.log("app", app);

//que quiero renderizar
const h1 = document.createElement("h1");
h1.textContent = "H1 desde javascript";
console.log("h1", h1);

//renderizar
app.appendChild(h1);
