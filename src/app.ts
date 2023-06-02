
//デコレーターを返すデコレータファクトリー
function Logger(logString:string){
	console.log('ロガーデコレーターファクトリー実行1')
	return function (constructor:Function){
		console.log('ログ出力中4・・・')
		console.log(constructor)
		console.log(logString)
	}
}


//このように、作ったデコレーターは、ライブラリとして世の中に出すこともできる
function WithTemplate(template:string,hookId:string){
	console.log('WithTemplateデコレーターファクトリー実行2')

	return function (constructor:any){
		console.log('ログ出力中3・・・')

		const hookEl = document.getElementById(hookId)
		const p = new constructor();
		if(hookEl){
			hookEl.innerHTML  = template
			// hookEl.querySelector('h1')!.textContent = p.name
		}
	}
}

@Logger('logstring')
@WithTemplate('<hi>hellow</hi>','app')
class Person{
	name = 'max';

	constructor(){
		console.log('personオブジェクトを作成中5・・・')
	}
}

const pers = new Person()



//さまざまな場所にデコレーター
function Log(target:any,propertyName:string|Symbol){
	console.log(target)
	console.log(propertyName)

}

// ロガーを配置できる箇所
//配置箇所によって、使用できる引数が違う
class Product{
	@log
	title:string;
	private _price:number //こういうふうに_をつけることで、認識してるけど使わないよと伝えることができる
	
	constructor(t:string,p:number){
		this.title = t;
		this._price = p
	}

	getPriceWithTax(tax:number){
		return this._price * (1 +tax)
	}

	set price(val:number){
		if(val > 0){
			this._price　= val
		}else{
			throw new Error("不正な値です。");
		}
	}
}