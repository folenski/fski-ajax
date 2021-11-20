(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // dist/Ajax.js
  var require_Ajax = __commonJS({
    "dist/Ajax.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Ajax = void 0;
      var Ajax2 = function() {
        function Ajax3(methode, url) {
          this.defTimeout = 5e3;
          methode = methode.toUpperCase();
          if (methode != "POST" && methode != "GET") {
            console.error("Class Ajax : M\xE9thode ", methode, " non support\xE9e");
            return;
          }
          this.request = new XMLHttpRequest();
          this.request.open(methode, url);
        }
        Ajax3.prototype.then = function(cb) {
          if (!this.request)
            return this;
          this.request.onerror = function() {
            cb(this);
          };
          this.request.onload = function(evt) {
            if (this.status == 200) {
              cb(this);
            } else {
              if (this.onerror) {
                this.onerror(evt);
              }
            }
          };
          return this;
        };
        Ajax3.prototype.catch = function(cb) {
          if (!this.request)
            return this;
          this.request.onerror = function() {
            cb(this);
          };
          return this;
        };
        Ajax3.prototype.json = function() {
          if (!this.request)
            return this;
          this.request.setRequestHeader("Content-type", "application/json; charset=utf-8");
          return this;
        };
        Ajax3.prototype.send = function(data, timeout) {
          if (!this.request)
            return this;
          if (!timeout)
            timeout = this.defTimeout;
          this.request.timeout = timeout;
          this.request.send(data);
          return this;
        };
        return Ajax3;
      }();
      exports.Ajax = Ajax2;
    }
  });

  // tests/test-app.js
  var import_Ajax = __toModule(require_Ajax());
  var $elem = document.getElementById("result");
  var $btn1 = document.getElementById("btn1");
  var $btn2 = document.getElementById("btn2");
  var $btn3 = document.getElementById("btn3");
  $btn1.addEventListener("click", () => {
    const Ajx = new import_Ajax.Ajax("Get", "https://jsonplaceholder.typicode.com/todos/1");
    Ajx.then((response) => {
      const retour = JSON.parse(response.responseText);
      $elem.innerText = retour.title;
      console.log("Objet ", response);
    });
    Ajx.send();
  });
  $btn2.addEventListener("click", (e) => {
    const Ajx = new import_Ajax.Ajax("Get", "https://jsonplaceholder.typicode.com/os/1");
    Ajx.send().then((response) => {
      const retour = JSON.parse(response.responseText);
      $elem.innerText = retour.title;
      console.log("Objet ", response);
    });
    Ajx.catch((error) => {
      $elem.innerText = "Erreur bien recue " + String(error.status);
      console.log("Objet ", error);
    });
  });
  $btn3.addEventListener("click", (e) => {
    const Ajx = new import_Ajax.Ajax("Get", "http://jplaceholder.typicode.com/os/1");
    Ajx.send().then((response) => {
      const retour = JSON.parse(response.responseText);
      $elem.innerText = retour.title;
      console.log("Objet ", response);
    }).catch((error) => {
      $elem.innerText = "Erreur URL " + String(error.status);
      console.log("Objet ", error);
    });
  });
})();
