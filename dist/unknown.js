"use strict";
let age;
age = 30;
let userInput;
let userName;
userInput = 5;
userInput = 'maxaaa';
userName = 'kevin';
if (typeof userInput === 'string') {
    userInput = userName;
}
//neverは、それが絶対にあり得ない。明示的に値を返すことがないと明確に表せられる。
//voideでも動作はするが、neverの方が質が高い
//エラーを投げる関数。エラーを投げたときにスクリプトをクラッシュさせるか、try
function generateError(msg, code) {
    throw { message: msg, errorCode: code };
}
// generateError('エラーが発生！',500)
//# sourceMappingURL=unknown.js.map