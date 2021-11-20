import { Ajax } from "../dist/Ajax.js";

const $elem = document.getElementById("result");
const $btn1 = document.getElementById("btn1");
const $btn2 = document.getElementById("btn2");
const $btn3 = document.getElementById("btn3");

$btn1.addEventListener("click", () => {
  const Ajx = new Ajax("Get", "https://jsonplaceholder.typicode.com/todos/1");
  Ajx.then((response) => {
    const retour = JSON.parse(response.responseText);
    $elem.innerText = retour.title;
    console.log("Objet ", response);
  });
  Ajx.send()
});

$btn2.addEventListener("click", (e) => {
  const Ajx = new Ajax("Get", "https://jsonplaceholder.typicode.com/os/1");

  Ajx.send().then((response) => {
    const retour = JSON.parse(response.responseText);
    $elem.innerText = retour.title;
    console.log("Objet ", response);
  });

  Ajx.catch((error) => {
    $elem.innerText = "Erreur bien recue "  + String (error.status);
    console.log("Objet ", error);
  });
});

$btn3.addEventListener("click", (e) => {
  const Ajx = new Ajax("Get", "http://jplaceholder.typicode.com/os/1");

  Ajx.send()
    .then((response) => {
      const retour = JSON.parse(response.responseText);
      $elem.innerText = retour.title;
      console.log("Objet ", response);
    })
    .catch((error) => {
      $elem.innerText = "Erreur URL " + String (error.status);
      console.log("Objet ", error);
    });
});
