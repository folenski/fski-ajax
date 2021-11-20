/**
 * Class Ajax basée sur la classe XMLHttpRequest
 * permet d'encaspculer les appels AJAX
 *
 * le 27/11 - re ecriture en typescript
 */

type callback = (reponse: XMLHttpRequest) => void;

export class Ajax {
  private request?: XMLHttpRequest;
  private defTimeout: number = 5000 as const;

  /**
   * Initialise la classe AJAX
   * @param methode = GET ou POST
   * @param url  = l'url à appeller
   * @returns void
   */
  constructor(methode: string, url: string) {
    methode = methode.toUpperCase();
    if (methode != "POST" && methode != "GET") {
      console.error("Class Ajax : Méthode ", methode, " non supportée");
      return;
    }
    this.request = new XMLHttpRequest();
    this.request.open(methode, url);
  }

  then(cb: callback): this {
    if (!this.request) return this;

    this.request.onerror = function () {
      cb(this);
    };

    this.request.onload = function (evt) {
      if (this.status == 200) {
        cb(this);
      } else {
        if (this.onerror) {
          this.onerror(evt);
        }
      }
    };
    return this;
  }

  catch(cb: callback): this {
    if (!this.request) return this;
    this.request.onerror = function () {
      cb(this);
    };
    return this;
  }

  json(): this {
    if (!this.request) return this;
    this.request.setRequestHeader(
      "Content-type",
      "application/json; charset=utf-8"
    );
    return this;
  }

  send(data?: string, timeout?: number): this | null {
    if (!this.request) return this;
    if (!timeout) timeout = this.defTimeout;
    this.request.timeout = timeout;
    this.request.send(data);
    return this;
  }
}
