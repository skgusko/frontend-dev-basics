/*
    Array 확장(prototype 기반의 확장)
    
    ex) List 함수 지원하기

*/
Array.prototype.remove = function(index) {
    this.splice(index, 1); //여기 this는 아래 코드에서 a를 의미
}

Array.prototype.insert = function(index, value) {
    if (value instanceof Array) {
        // for (var i = 0; i < value.length; i++) {
        //     this.splice(index+i, 0, value[i]);
        // }

        // 오류!!
        // 콜백 함수에서의 this는 어휘상의 this와 일치하지 않는다.
        // value.forEach(function(e) {
        //     this.splice(index++, 0, e);
        // });

        // 해결방법1:
        // var _this = this; //외부에서 세팅 (여기서 this는 a)
        // value.forEach(function(e) {
        //     _this.splice(index++, 0, e);
        // });

        // 해결방법2:
        value.forEach(function(e) { //f가 호출될 때 this는 얘야 (여기서 this는 a)
            this.splice(index++, 0, e);
        }.bind(this)); //bind : 함수 호출 때 this를 세팅해줌

    } else {
        this.splice(index, 0, value);
    }
}


// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, ['a', 'b', 'c']);
console.log(a); // [1, 2, 'a', 'b', 'c', 4]
