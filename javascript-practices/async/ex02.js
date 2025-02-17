/*
    promise 지원 비동기 함수 사용 I: ~ then ~ catch 
*/

const {fn02} = require('./fns');

//test: success
fn02('params~~')
    .then((result) => { //성공했을 때
        console.log('result:' + result);
    })
    .catch((error) => { //실패했을 때
        console.error(error);
    });

//test: fail
    fn02(null)
    .then((result) => { //성공했을 때
        console.log('result:' + result);
    })
    .catch((error) => { //실패했을 때
        console.error(error);
    });

console.log('wait....');