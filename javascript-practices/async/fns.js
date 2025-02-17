/*
    비동기 함수
    1. fn01: callback 지원 비동기함수
    2. fn02: promise 지원 비동기함수
*/


exports.fn01 = function(params, callback) {
    /*
    비동기 코드... ex) file io, network, SQL to DB, setTimer
    */
    console.log("fn01: some code run....");

    setTimeout(function(){
        
        if (params != null) {
            // result: success
            callback(null, {result: 'success'});
        } else {
            // result: error
            callback(new Error('fail'), null);
        }

    }, 3000);
}

exports.fn02 = function(params) {
    
    return new Promise((resolve, reject) => {
    /*
    비동기 코드... ex) file io, network, SQL to DB, setTimer
    */
    console.log("fn01: some code run....");

    setTimeout(function(){
        
        if (params != null) {
            // result: success
            resolve({result: 'success'});
        } else {
            // result: error
            reject(new Error('fail'));
        }

    }, 3000);
    })
}