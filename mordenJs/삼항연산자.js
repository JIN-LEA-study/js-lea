'''
삼항연산자

condition(조건) ? true : false

const array = [1, 2];

ex1)

let text = '';
if (array.lenght === 0) {
    text = '배열이 비어있습니다.'
} else {
    text = '배열이 비어있지 않습니다.';
}
console.log(text);

ex2)

let text = array.lenth === 0
    ? '배열이 비어있습니다.'
    : '배열이 비어있지 않습니다.'


ex3)

const condition1 = false;
const condition2 = false;

const value = condition1
    ? '와우!'
    : condition2
        ? 'blabla'
        : 'foo'

'''