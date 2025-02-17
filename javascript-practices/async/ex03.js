/*
    promise 지원 비동기 함수 사용 II: async ~ await
*/

const {fn02} = require('./fns');

//test: success
const fn = async (param) => {
    const result = await fn02(param); //await 없으면 js는 여기서 blocking 안 됨
    console.log(result);
}

fn('param~~'); //success
fn(null); //fail

console.log('wait...');