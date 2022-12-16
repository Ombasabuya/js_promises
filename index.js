let q = new Promise((resolve,reject) => {
    let c = 2 + 5
    if(c == 3){
        resolve('Success')
    }else {
        reject('Failed')
    }
})
q.then((message) => {
    console.log(`This is the then` + message)
}).catch((message) => {
    console.log(`This is the catch` + message)
})