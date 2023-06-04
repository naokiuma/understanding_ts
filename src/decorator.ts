
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

	//クラスが定義されたときではなく、インスタンスかされた時に実行するように変更した。
	//クラスを置き換える処理 113より。

	//これはオブジェクトですが、newキーワードを使って、オブジェクトを作れるコンストラクタ関数です。ということを、newを使って伝える。
	return function<T extends {new(...args:any[]):{user_name:string}}> (originalConstructor:T){
		//クラスデコレータやメソッッデコレーターは値を返すことができる。
		//ここに書いているclassは、コンストラクタ関数のシンタックスシュガーである。
		//元のクラスの定義を引き継いで、新しいコンストラクタを返せる。
		return class extends originalConstructor{
			constructor(..._:any[]){
				super();//オリジナルのコンストラクタを引き継ぐ。
				console.log('ログ出力中3・・・')	
				const hookEl = document.getElementById(hookId)
				// const p = new originalConstructor();
				if(hookEl){
					hookEl.innerHTML  = template
					// hookEl.querySelector('h1')!.textContent = this.user_name
				}
			}

		}

	}
}

//複数組み合わせることができる
@Logger('logstring')
@WithTemplate('<hi>hellow</hi>','app')
class Person{
	user_name = 'max';
	constructor(){
		console.log('personオブジェクトを作成中5・・・')
	}
}

const pers = new Person()



//さまざまな場所にデコレーター------------
//プロパティデコレータ
function Log(target:any,propertyName:string|Symbol){
	console.log('Log_プロパティデコレーター開始')
	console.log(target)
	console.log('propertyName')
	console.log(propertyName)
}

//アクセスデコレータ
//PropertyDescriptorはtsの定義。
function Log2(target:any,name:string,descriptor:PropertyDescriptor){
	console.log('アクセサデコレーター開始')
	console.log(target)
	console.log(name)
	console.log(descriptor)
}

function Log3(target:any,name:string,descriptor:PropertyDescriptor){
	console.log('メソッドデコレーター開始')
	console.log(target)
	console.log(name)
	console.log(descriptor)
}

function Log4(target:any,methodname:string | Symbol,position:number){
	console.log('おパラメータデコレーター開始')
	console.log(target)
	console.log(methodname)
	console.log(position)
}



// ロガーを配置できる箇所
//配置箇所によって、使用できる引数が違う
class Product{

	//プロパティデコレーター。ここにおくと、このクラスがコンストラクトされた時に実行される。
	//デコレーターには「クラスのプロトタイプ」と、publicなプロパティが渡ってくる
	//なお、インスタンスかstaticかで渡ってくる値が違う
	@Log 
	title:string;
	private _price:number //こういうふうに_をつけることで、認識してるけど使わないよと伝えることができる
	
	constructor(t:string,p:number){
		this.title = t;
		this._price = p
	}

	@Log2
	set price(val:number){
		if(val > 0){
			this._price　= val
		}else{
			throw new Error("不正な値です。");
		}
	}
	//関数
	@Log3
	getPriceWithTax(@Log4 tax:number){
		 return this._price * (1 +tax)
	}
}


// const product = new Product('game',3000)


function Autobind(target:any,methodName:string,descriptor:PropertyDescriptor){
	console.log('メソッドデコレーター、Autobind:開始')
	console.log(target)
	console.log(methodName)
	console.log(descriptor)

	console.log('ここでのthis はwindowを見てしまうが')
	console.log(this)

	const originalMethod = descriptor.value;
	const adjDescriptor:PropertyDescriptor = {
		configurable:true,
		enumerable:false,
		//こういうふうに書くと、ここでのthisは、このメソッドが属している関数を指定してくれる。
		get(){
			//オリジナルの関数に、this、つまりこのfunction Auotobindを絞りつける。
			const boundFn = originalMethod.bind(this);
			return boundFn;
		}
	}

	console.log('メソッドデコレーター、Autobind:完了')

	//ここまでの記述をすることで、本来のメソッドの
	return adjDescriptor;

}

class Printer {
	message = 'クリックしました';
	@Autobind
	showMessage(){
		console.log(this.message)
	}
}
const p = new Printer();



const button = document.getElementsByClassName('btn_area')[0]!;
console.log(button)

button?.addEventListener('click',
	p.showMessage //これだと、classでのthisがbuttonそのものになるので、bindしておく必要があル。
	// こういうふうに。わざわざbindしないといけない
	// p.showMessage.bind(p) 
)



//バリデーションでデコレーターを作る-----------------------------

interface validatorConfig{
	[prop:string]:{//class名
		[validatableProp:string]:string[]//['required','positive']
	}
}


const registeredValidators:validatorConfig = {}

//デコレータ関数1。プロパティ向け
function Required(target:any,propertyName:string){
	registeredValidators[target.constructor.name] = {
		[propertyName]:['required']
	}
}
//デコレータ関数2。プロパティ向け
function PositiveNumber(target:any,propertyName:string){
	registeredValidators[target.constructor.name] = {
		[propertyName]:['positive']
	}
}



class Course{
	@Required
	title:string;
	
	@PositiveNumber
	price:number;

	constructor(t:string,p:number){
		this.title = t;
		this.price = p;
	}
}

const courseFrom = document.querySelector('form')!;
courseFrom.addEventListener('submit',event =>{
	event.preventDefault();
	const titleEl = document.getElementById('title') as HTMLInputElement;
	const priceEl = document.getElementById('price') as HTMLInputElement;

	const title = titleEl.value;
	const price = +priceEl.value;//+をつけることでnumber型にしておける。

	const createdCourse = new Course(title,price)
	console.log(createdCourse)



})