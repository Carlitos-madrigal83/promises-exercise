# Promises exercise ✨

In this challenge you'll need to create promises to pass all the tests.
First of all open the `SpecRunner.html`, you'll see that all the errors are failing ❌, to pass the tests you have to complete the functions inside `src/index.js` file.

## Tasks 📝

1️⃣ **First Part**

- Inside the `firstPromise()` function you'll need to create and return a promise that **resolve with a string with `done`**

- Inside the `secondPromise()` function you'll need to create and return a promise that **reject with a string with `error`**

- Inside the `thirdPromise()` function you'll need to create and return a promise that return resolve with a string with `done` if the variable `isError`, received as argument, is false and reject with a string with `error` if the variable `isError` is true

Dentro de la función `thirdPromise()` necesitarás crear y devolver una promesa que devuelva la resolución con una cadena con `hecho` si la variable `isError`, recibida como argumento, es falsa y rechazar con una cadena con `error` si la variable `isError` es verdadera

2️⃣ **Second Part**

- Change `fourthPromise()` from `.then()` to `async/await`

- Change `fifthPromise()` implement try/catch statement and it should return a promise that return resolve with a string with `done` if the variable `isError`, received as argument, is false and reject with a string with `error` if the variable `isError` is true
