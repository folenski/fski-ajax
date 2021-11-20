"use strict";
/**
 * Class Ajax basée sur la classe XMLHttpRequest
 * permet d'encaspculer les appels AJAX
 *
 * le 27/11 - re ecriture en typescript
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ajax = void 0;
var Ajax = /** @class */ (function () {
    /**
     * Initialise la classe AJAX
     * @param methode = GET ou POST
     * @param url  = l'url à appeller
     * @returns void
     */
    function Ajax(methode, url) {
        this.defTimeout = 5000;
        methode = methode.toUpperCase();
        if (methode != "POST" && methode != "GET") {
            console.error("Class Ajax : Méthode ", methode, " non supportée");
            return;
        }
        this.request = new XMLHttpRequest();
        this.request.open(methode, url);
    }
    Ajax.prototype.then = function (cb) {
        if (!this.request)
            return this;
        this.request.onerror = function () {
            cb(this);
        };
        this.request.onload = function (evt) {
            if (this.status == 200) {
                cb(this);
            }
            else {
                if (this.onerror) {
                    this.onerror(evt);
                }
            }
        };
        return this;
    };
    Ajax.prototype.catch = function (cb) {
        if (!this.request)
            return this;
        this.request.onerror = function () {
            cb(this);
        };
        return this;
    };
    Ajax.prototype.json = function () {
        if (!this.request)
            return this;
        this.request.setRequestHeader("Content-type", "application/json; charset=utf-8");
        return this;
    };
    Ajax.prototype.send = function (data, timeout) {
        if (!this.request)
            return this;
        if (!timeout)
            timeout = this.defTimeout;
        this.request.timeout = timeout;
        this.request.send(data);
        return this;
    };
    return Ajax;
}());
exports.Ajax = Ajax;
