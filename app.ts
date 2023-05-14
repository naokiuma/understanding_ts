let userInput:unknown;
let userName:string;

userInput = 5;
userInput = 'max';
userInput = userName;

// if(typeof userInput === 'string'){

// }


//neverは、それが絶対にあり得ない。明示的に値を返すことがないと明確に表せられる。
//voideでも動作はするが、neverの方が質が高い
//エラーを投げる関数。エラーを投げたときにスクリプトをクラッシュさせるか、try
function generateError(msg:string,code:number):never{
    throw {message:msg,errorCode:code}
}

generateError('エラーが発生！',500)
