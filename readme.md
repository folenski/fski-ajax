# fski-ajax

## Fonctionnalités

- Utilisation de  [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) compatible avec ES5

## Nagivateurs testés

Chrome | Firefox | Edge| IE |
--- | --- | --- | --- |
Latest ✔ | Latest ✔ |  Latest ✔ | 11 ✔ |

## Installation

Using npm:

```bash
$ npm install fski-ajax
```

## Example

```js
import { Ajax } from "fski-ajax";
```

utilisation d'une requête `GET` 

```js
  const Ajx = new Ajax("Get", "https://jsonplaceholder.typicode.com/todos/1");

  Ajx.then((response) => {
    try {
      const retour = JSON.parse(response.responseText);
      $elem.innerText = retour.title;
    } catch(e) {
      $elem.innerText = "error";
    }
    console.log("Objet ", response);
  });

  Ajx.catch(function (error) {
    console.log(error);
  });

  Ajx.send()

```

## Resources

## License
[MIT](LICENSE)