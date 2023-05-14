console.log('ここにコードを追加');
function add(n1,n2){
    if(typeof n1 !== 'number'){
        throw new Error('異なる。')
    }
    return n1 +n2;
}

const num = '5';
const num2 = 10;

console.log(add(num,num2));