// // asで型アサーションした場合の挙動
const str = `{"username":"party","town":"maple town"}`;
const member_info = JSON.parse(str);
console.log(member_info);
const user_asser = member_info;
console.log(user_asser);
//user_asserにはtownはないからここのtownでエラーになる。
// console.log(user_asser.town)
//isの使い方
// isStringを通ることでfooはstringとして推論される
const isString = (test) => {
    return typeof test === "string";
};
const example = (foo) => {
    if (isString(foo)) {
        console.log(foo.length);
    }
};
const colors = ["red", "green", "blue"];
if (colors.includes(input)) {
    // do something
}
//# sourceMappingURL=react_0611.js.map