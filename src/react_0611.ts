// // asで型アサーションした場合の挙動

type User_asser = {username:string; address:{town:string}}

const str  = `{"username":"party","town":"maple town"}`;
const member_info:unknown = JSON.parse(str)
console.log(member_info);

const user_asser = member_info as User_asser;
console.log(user_asser);
//user_asserにはtownはないからここのtownでエラーになる。
// console.log(user_asser.town)



//isの使い方
// isStringを通ることでfooはstringとして推論される
const isString = (test: unknown): test is string => {
	return typeof test === "string";
  };
  
const example = (foo: unknown) => {
	  if (isString(foo)) {
		console.log(foo.length); 
	}
};


//as constすると、read onlyになる。
const colors = ["red", "green", "blue"] as const;
type Color = typeof colors[number]; // = "red" | "green" | "blue"

declare const input: Color;
if (colors.includes(input)) {
  // do something
}
