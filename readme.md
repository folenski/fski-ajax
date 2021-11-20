# fski-ajax

## Fonctionnalités

- Utilisation de  [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) compatible avec ES5

## Nagivateurs testés

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) |  ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- |
Latest ✔ | Latest ✔ |  Latest ✔ | 11 ✔ |

## Installation

Using npm:

```bash
$ npm install fski-ajax
```

## Example

```js
import { Ajax } from "Ajax";
```

utilisation d'une requête `GET` 

```js
  const Ajx = new Ajax("Get", "https://jsonplaceholder.typicode.com/todos/1");

  Ajx.then((response) => {
    const retour = JSON.parse(response.responseText);
    $elem.innerText = retour.title;
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