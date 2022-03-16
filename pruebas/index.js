function resolveAfter2Seconds(x) {
    return new Promise((res) => {
        setTimeout(() => {
            res(x);
        },2000);
    });
};

const myPromise = async function add1(x) {
    const a = await resolveAfter2Seconds(5);
    console.log('> Va por: ', a)
    const b = await resolveAfter2Seconds(2);
    console.log('> Va por: ', b)
    console.log('> Y el total de a + b + x es igual a...')
    return x + a + b;
};

myPromise(1).then(function (res) {
    console.log(res);
});