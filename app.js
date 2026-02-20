// const saludar = new Promise((resolve, reject) => {

//     const happy = true
//     setTimeout(() => {
//         if (happy) {
//             resolve("Estoy feliz")
//         } else {
//             reject("No consegui a nadie")
//         }
//     }, 3000)
// })


// .then y async await
// .THEN

// console.log("Inicio ejecución promise")

// saludar
//     .then((response) => (
//         console.log(response)
//     )).catch((error) => (
//         console.log(error)
//     ))
//     .finally(() => console.log("Despues de la promesa"))


// ASYNC AWAIT


// const saludarDos = new Promise((resolve, reject) => {
//     const numberRadom = Math.floor(Math.random() * 10 + 1)
//     setTimeout(() => {

//         if (numberRadom % 2 == 0) {
//             resolve("Número par, todo salio bien")
//         } else {
//             reject("Impar :(")
//         }
//     }, 2000)
// })



// async function promiseSaludoDos() {
//     try {
//         const response = await saludarDos // espera a que esto responda 
//         console.log(response)

//     } catch (error) {
//         console.log(error)
//     } finally {
//         console.log("Final de la promea")
//     }
// }

// promiseSaludoDos()


function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 1");
        }, 2000);
    });
}
function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 2");
        }, 3000);
    });
}
function promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 3");
        }, 1000);
    });
}

// deveulve la que responde más rapido 
Promise.race([promise1(), promise2(), promise3()])
    .then((value) => console.log(value))
    .catch((err) => console.log(err))



// async function handlingAllPromises() {
//     // let first = await promise1();
//     // let second = await promise2();
//     // let third = await promise3();
//     let [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);

//     console.log(first);
//     console.log(second);
//     console.log(third);
// }
// handlingAllPromises();