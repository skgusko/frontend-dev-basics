/*
    let & const II

*/

try {
    if (true) {
        const NUM = 10;
    }

    console.log(NUM);
} catch(e) {
    console.error('error:' + e);
}

// 2. 대입(Assignment) 에러
try {
    const NUM = 20;
    NUM = 30;
} catch(e) {
    console.error('error:' + e);
}

const o = {};

o.name = {};