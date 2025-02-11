// const intervalid = setInterval(() => {
//     console.log("interval");

// },500)

// const timeoutId = setTimeout(()=> {
//     clearInterval(intervalid)
// }, 1500);

// clearTimeout(timeoutId)

// creating a promises
// console.log('here we will just understand syntax of creating a promise.')
// // const promise = new Promise()

// function promiseCallback(resolved,rejected){

// }

// const promise = new Promise(promiseCallback);
// console.log('pending promise',promise)

// function promiseCallback(resolved,rejected){
//     resolved()
// }

// const promise1 = new Promise(promiseCallback);
// console.log('promise fulfilled',promise1)

// function promiseCallback2(resolved,rejected){
//     rejected()
// }

// const promise2 = new Promise(promiseCallback2);

// console.log('promise rejected',promise2)



const promise3 = new Promise((resolved,rejected)=>{
    const randomvalue = Math.ceil(Math.random()*10);
    console.log(randomvalue)
    if (randomvalue%2===0){
        resolved({even: randomvalue})
    } else {
        rejected('odd')
    }
})
const array = [1,2,3]
console.log('promise3',promise3)

function success(value){
    console.log("promise success", value)
}
function error(value){
    console,log("promise error",value)
}

promise3.then (success).catch(error);