
//基础类型：布尔值，数字，字符串，数组，元组 Tuple，枚举，Any，Void，Null 和 Undefined，Never，Object，类型断言
let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0O744;

let names: string = "bob";
let name1 = "smith";

let names1: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello,my name is ${name}
I'll be ${ age + 1} years old next month.
`

let listTest: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3]

//元组
let x: [string, number];
x = ['hello', 10]
// 错误示范 x = [10,'hello'];
console.log(x[0].substr(1))
// 错误示范 console.log(x[1].substr(1))

enum Color { Red, Green, Blue }
let c: Color = Color.Green;

enum Color1 { Red = 1, Green, Blue }
let colorName: string = Color[2];
console.log(colorName);

//any 还不清楚类型的变量指定一个类型,允许你在编译时可选择地包含或移除类型检查
//不能够在它上面调用任意的方法
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let listAny: any[] = [1, true, "free"];
listAny[1] = 100;


//void类型像是与any类型相反，它表示没有任何类型
//没有返回值的方法，通常其返回值是viod
function warnUser(): void {
    console.log("this is my warning message");
}
//只能为它赋予undefined和null
let unusable: void = undefined;

// Null 和 Undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：

// // Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。

// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。 再次说明，稍后我们会介绍联合类型。

// 注意：我们鼓励尽可能地使用--strictNullChecks，但在本手册里我们假设这个标记是关闭的。


//Never never类型表示的是那些永不存在的值的类型

//never类型是任何类型的子类型，也可以赋值给任何类型；
//然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) { }
}

//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
//使用object类型，就可以更好的表示像Object.create这样的API。

declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
//错误示范 create(42);
//create(42); // Error
//create("string"); // Error
//create(false); // Error
//create(undefined); // Error

//类型断言
//两种形式是等价的。
//当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
let strLength1: number = (someValue as string).length
