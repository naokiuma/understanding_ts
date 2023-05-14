var userInput;
var userName;
userInput = 5;
userInput = 'max';
userInput = userName;
// if(typeof userInput === 'string'){
// }
//エラーを投げる関数
function generateError(msg, code) {
    throw { messagedaa: msg, errorCode: code };
}
generateError('エラーが発生！', 500);
