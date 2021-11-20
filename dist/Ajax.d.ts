/**
 * Class Ajax basée sur la classe XMLHttpRequest
 * permet d'encaspculer les appels AJAX
 *
 * le 27/11 - re ecriture en typescript
 */
declare type callback = (reponse: XMLHttpRequest) => void;
export declare class Ajax {
    private request?;
    private defTimeout;
    /**
     * Initialise la classe AJAX
     * @param methode = GET ou POST
     * @param url  = l'url à appeller
     * @returns void
     */
    constructor(methode: string, url: string);
    then(cb: callback): this;
    catch(cb: callback): this;
    json(): this;
    send(data?: string, timeout?: number): this | null;
}
export {};
