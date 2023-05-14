

function printResult(num:number):void{
    console.log('result：' + num)
}

function add (n1:number,n2:number):number{
    return n1 + n2
}
// console.log(printResult(add(5,12)))
// let combineValues:Function;//これだと、どんな関数も指定できる。
// let combineValues;
// let combineValues = add; //こう書いたら、add関数のみになってしまう。
let combineValues:(a:number,b:number) => number//最終こう書けば、型の指定ができる！
combineValues = add;
console.log(combineValues(5,8))


//コールバック関数の指定の仕方
function addAndCB(n1:number,n2:number,cb:(num:number) => void){
    const result = n1 + n2
    cb(result)
}

//実際の利用
addAndCB(
    10,
    20,
    (temp)=>{
        console.log(temp)
        return temp//ここ、cbでvoidを返却値にしているので、返しても返さなくてもok.
    }
)
