console.log('ここにコードを追加');
function add_basic(n1:number,n2:number){
    if(typeof n1 !== 'number'){
        throw new Error('異なる。')
    }
    return n1 +n2;
}

const num = 5;
const num2 = 10;

console.log(add_basic(num,num2));