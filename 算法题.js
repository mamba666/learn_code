
log=(x)=>{
	console.log(x)
}

console.log('script start')
// 微任务
async function async1() {
  await async2()
  console.log('async1 end')
}
// 微任务
async function async2() {
  console.log('async2 end')
}
async1()
//宏任务
setTimeout(function() {
  console.log('setTimeout')
}, 0)
// 微任务
new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')

/* function foo(b){
	let a=5
	return a*b+10
}
function bar(x){
	let y=3
	return foo(x*y)
}
log(bar(6)) */


/* function foo(){
	log(1)
	bar()
	log(2)
}
function bar(){
	log(3)
}
foo() */

/* // 定义promise的三个状态
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

// 定义promise函数
function MyPromise(fn){
	const that=this
	that.state=PENDING
	that.value=null
	that.resolvedCallbacks=[]
	that.rejectedCallbacks=[]
	// resolve、reject函数
	function resolve(value){
		if(that.state===PENDING){
			that.state=RESOLVED
			that.value=value
			that.resolvedCallbacks.map(cb=>cb(that.value))
		}
	}
	function reject(value){
		if(that.state===PENDING){
			that.state=REJECTED
			that.value=value
			that.rejectedCallbacks.map(cb=>cb(that.value))
		}
	}
	// 执行传入的参数并且将之前两个函数当做参数传进去
	try{
		fn(resolve,reject)
	}catch(e){
		reject(e)
	}
}

// 实现then方法
MyPromise.prototype.then=function(onFulfilled, onRejected){
	const that=this
	onFullfilled=typeof onFulfilled === 'function' ? onFulfilled : v => v
	onRejected=typeof onRejected === 'function'
      ? onRejected
      : r => {
          throw r
        }
	if (that.state === PENDING) {
		that.resolvedCallbacks.push(onFulfilled)
		that.rejectedCallbacks.push(onRejected)
	}
	if (that.state === RESOLVED) {
		onFulfilled(that.value)
	}
	if (that.state === REJECTED) {
		onRejected(that.value)
	}
}

let x=new MyPromise(()=>1)
log(x.then()) */

/* let setT=()=>{
	setInterval(()=>{log(1)},2000)
}
setT() */

/* let a=0
let b=async ()=>{
	a+=await 10
	log(a)
}
b()
a++
log(a) */

/* async function x(y){}
log(x(1)) */

/* let p=new Promise((resolve, reject) => {
  console.log('new Promise')
  resolve('success')
}).then(resolve=>{
	log("hello promise")
}).then(resolve=>{
	log(resolve)
}) */

/* let fun1=(,()=>{
	log(1)
	fun2(y,()=>{
		log(2)
		fun3(z,()=>{
			log(3)
		})
	})
})
fun1(1) */

/* function *foo(x) {
  let y = 2 * (yield (x + 1))
  let z = yield (y / 3)
  return (x + y + z)
}
let it = foo()
console.log(it.next())
console.log(it.next(1))
console.log(it.next(13)) */

/* function* helloGenerator(){
	yield "hello"
	yield "world"
	return "ending"
	yield "!!!!!"
}
let hw=helloGenerator()
log(hw)
log(hw.next())
log(hw.next())
log(hw.next())
log(hw.next())
let hw1=function(){}
log(hw1) */

/* function* idMaker(){
    let index = 0;
    while(true)
        yield index++;
}

let gen = idMaker(); // "Generator { }" */

/* console.log(gen.next().value); 
// 0
console.log(gen.next().value); 
// 1
console.log(gen.next().value);  */
// 2

/* const array1 = [1, 2, 3, 4];
const reducer = (acc, cur) => acc + cur;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15 */

/* let arr=["xx","xxx","xxxx","xxxxx"]
let arr1=arr.filter(x=>x.length>3)
log(arr)
log(arr1) */

/* let arr=[1,4,9,16]
arr.map(x=>x*2)
log(arr) */

/* let obj={}
Reflect.set(obj,"x","y")
log(obj)
Reflect.set(obj,"x",1)
log(obj)

let arr=["x","y","z"]
Reflect.set(arr,2,"a")
log(arr) */


/* var x = {p: 1};
var obj = new Proxy(x, {
  get(t, p, r) {
	  log(t)
	  log(p)
	  log(r)
  },
  set(t,p,v){
	  log(t)
	  log(p)
	  log(v)
  }
});
Reflect.get(obj, "foo");  // "foobar"
Reflect.set(obj,"p",1000) */

/* let obj={
	x:1,
	y:"edison"
}
let b=Reflect.get(obj,"edison")
log(b) */
// 定义一个onWatch函数
/* let onWatch=(obj,setBind,getLogger)=>{
	// 定义一个handler对象，里面有set、get两个函数
	let handler={
		get(target, property, receiver){
			getLogger(target, property)
			// Reflect.get方法允许你从一个对象中取属性值。
			// target：需要取值的目标对象
			// propertyKey：需要获取的值的键值
			// receiver：如果target对象中指定了getter，receiver则为getter调用时的this值。
			return Reflect.get(target,property,receiver)
		},
		set(target, property, value, receiver) {
			setBind(value, property)
			return Reflect.set(target, property, value)
		}
	}
	return new Proxy(obj, handler)
}
let obj = { a: 1 }
let p = onWatch(
  obj,
  (v, property) => {
    console.log(`监听到属性${property}改变为${v}`)
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`)
  }
) */

/* log(a)
var a=1
function a(){}	
log(window.a) */

/* function a(){}
var a
log(a)
a=10 */


/* console.log(a)
let a = 1 */

/* let a={
	x:new RegExp('\\w+'),
	y:"edison",
	z:function(){},
	v:undefined,
	b:NaN
}
log(JSON.stringify(a)) */

/* var test = {
name: 'a',
date: [new Date(), new Date(1540047600000)],
};

let b = JSON.parse(JSON.stringify(test))
log(b) */

/* let a={
	x:1,
	y:{
		q:10
	}
}
let b=JSON.parse(JSON.stringify(a))
a.y.q=20
log(b) */

/* let a={
	x:1,
	y:{
		q:10
	}
}
let b={...a}
a.x=10
a.y.q=20
log(b) */

/* let a={
	x:1,
	y:{
		q:2
	}
}
let b=Object.assign({},a)
a.y.q=10
log(b) */

/* let a={
	x:1,
	y:2
}
let b=Object.assign({},a)
a.x=3
log(b) */

/* for(var i=0;i<5;i++){
	;(function(j){
		setTimeout(function timer(){
			log(j)
		},)
	})(i)
} */

/* let a=()=>{
	log(1)
	log(this)
}
a()
function b(){
	log(this)
}
b() */

/* function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo() */

/* log(typeof(null))
log(typeof(function(){}))
log({} instanceof Object)
log(1 instanceof number) */

/* function test(person) {
	// p1传进来
	// p1的age被改变
	// 最后实际上返回的是{name: 'yyy',age: 30}
  person.age = 26
  person = {
    name: 'yyy',
    age: 30
  }

  return person
}
// p1实际上存放的是一个指针
const p1 = {
  name: 'yck',
  age: 25
}
const p2 = test(p1)
console.log(p1) // -> ?
console.log(p2) // -> ? */

/* function a() {
	log(1)
  return () => {
	  log(2)
    return () => {
		log(3)
      console.log(this)
		log(4)
	}
  } */

// 调用了三次函数
// 箭头函数没有this
// 箭头函数的this取决于最外面包裹的函数，在这里也就是a。因为a是直接调用的，所以this指向window
// 另外对箭头函数使用 bind 这类函数是无效的。
/* console.log(a()()()) */

/* function foo() {
  console.log(this.a)
}
// a变量提升
// 但是此刻没有赋值
var a = 1
// 直接调用，this指向window
foo()

const obj = {
  a: 2,
  foo: foo
}
// 谁调用了函数，谁就是 this。所以this指向obj
obj.foo()

// this绑定在了c
const c = new foo() */

// instanceof就可以准确判断出对象的类型,返回布尔值
// 因为它是根据原型链去判断的
/* log(function(){} instanceof Function)
log({} instanceof Object)
log(new String("hello") instanceof String) */


// 除了null，typeof都可以正确显示
// typeof 对于对象来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型
/* log(typeof(true))
log(typeof(null))
log(typeof(undefined))
log(typeof(1))
log(typeof("hello"))
log(typeof(Symbol("hello"))) */

//首先，函数传参是传递对象指针的副本
/* function test(person) {
	// p1传进来
	// p1的age被改变
	// 最后实际上返回的是{name: 'yyy',age: 30}
  person.age = 26
  person = {
    name: 'yyy',
    age: 30
  }

  return person
}
// p1实际上存放的是一个指针
const p1 = {
  name: 'yck',
  age: 25
}
const p2 = test(p1)
console.log(p1) // -> ?
console.log(p2) // -> ? */
// 


/* // a为引用类型，a实际上是一个指针
const a = [] 
// b的值为a存放的的指针
const b = a
// 这里改变了b，但是b跟a指向的都是一个内存控件
// 所以a 的值也发生了改变
b.push(1)
log(b)
log(a) */

/* 
log(typeof(null)) */


/* log(0.1+0.2) */

/* for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}

for (var i = 1; i <= 5; i++) {
  ;(function(j) {
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
} */


/* function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()()) */

/* function foo() {
  console.log(this.a)
}
var a = 1
foo() */


/* function test(person) {
  person.age = 26
  person = {
    name: 'yyy',
    age: 30
  }

  return person
}
const p1 = {
  name: 'yck',
  age: 25
}
const p2 = test(p1)
console.log(p1)
console.log(p2) */

//二维数组
 
/* let c=[]
c[0]=[]
c[0][0]=1
c[0][1]=2
c[0][2]=3
c[0][3]=4
c[0][4]=5
c[1]=[]
c[1][0]=6
c[1][1]=7
c[1][2]=8
c[1][3]=9
c[1][4]=10
console.log(c.length)
let x=array=>{
	for(let i=0;i<array.length;i++){
		for(let j=0;j<array[i].length;j++){
			console.log(array[i][j])
		}
	}
}

x(c)       */   


// 三维数组

/* let a=[]
let i,j,k=0
for(i=0;i<3;i++){
	a[i]=[]
	for(j=0;j<3;j++){
		a[i][j]=[]
		for(k=0;k<3;k++){
			a[i][j][k]=1
		}
	}
}
console.log(a) */


// map |  forEach  辨析

/* let a=[1,2,3,4,5,6]
let b=a.map(e=>{
	return e+=1
})
console.log(a)  // a还是a
console.log(b)  // b是新数组，所以map生成了新的数组，原数组不变
let c=a.forEach(e=>{
	return e+=1
})
console.log(a)  // a还是a
console.log(c)  // c为undefined，所以forEach没有生成新数组              */


// reduce

/* let a=[1,2,3,4]
let b=a.reduce((acc,cur)=>{return acc+cur})
console.log(b) */


// for ... of

/* let a=[1,2,3,4]
for(let n of a){
	break
	console.log(n)
}
a.forEach(n=>{
	break
	console.log(n)
}) */


// entries keys values
/* let a=[1,2,3,4]
let b=a.values()
console.log(b.next())
console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().value) */


// from

/* let a=[1,2,3,4,9]
let b=Array.from(a,x=>x+=2)
console.log(b) */


// fill
/* let a=[1,2,3,4,9]
a.fill(0,2)
console.log(a)
 */
// copyWhthin

/* let a=[1,2,3,4,5,6,7]
// 从2开始到3（不包括3）结束：3
// 复制其到索引为1的地方
// a=[1,3,3,4,5,6,7]
a.copyWithin(2,3,5)
console.log(a) */


//排序  sort

/* let a=[1,2,3,9,5,7,11,12,21,22]
a.sort()
console.log(a) */
/* 
let a={
	{}
} */



// 十进制->二进制

/* function DecimalConToBin(decimal){
	let remStack=new WeakMap(),
		rem,
		binaryString=""
	//首先判断传进来的十进制数是否大于0
	//如果小于等于0，就直接返回binary
	while(decimal>0){
		//计算rem（余数）值
		rem=Math.floor(decimal%2)
		//将rem放入remStack栈中
		remStack.push(rem)
		//在做完一轮后，这个循环需要继续，所以要求出decimal的值
		//由于js不分浮点和整数，所以要使用floor
		decimal=Math.floor(decimal/2)
	}
	//开始判断remStack是否为空
	while(!remStack,isEmpty()){
		binaryString+=remStack.pop().toString()
	}
	return binaryString
}
DecimalConToBin(10) */

/* var findRepeatNumber = function(nums) {
    for(let i=0;i<nums.length-1;i++){
        let num=nums[i]
        for(let j=i+1;j<nums.length;j++){
           if(num===nums[j]){
               console.log(num)
               break
           } 
        }
    }
};
findRepeatNumber([1,2,3,12,3,6,3,1]) */

/* function x(){
	let num=1
	function y(){
		console.log(num)
	}
	num++
	return y
}
let z=x()
z() */

/* function x(){
	let y=function(){
		console.log(hello)
	}
	let hello="hello world"
	return y
}
let z=x()
z() */

/* function x(){
	let private=0
	this.y=function(){
		return private
	}
	this.z=function(){
		return ++private
	}
}
let a=new x()
console.log(a.private)
console.log(a.y())
console.log(a.z()) */

/* class Phone{
	constructor(size){
		this.size=size
	}
	call(){
		console.log("call"+this.size)
	}
}
let iphone=new Phone(5)
console.log(iphone.call)
iphone.call("lwj")

class PhoneSon extends Phone{

}

let iphone11=new PhoneSon(20)
console.log(iphone11)
iphone11.call() */


/* class Father {
	say(){
		console.log("hello1")
	}
} */
/* class Son{
	constructor(x,y){
		this.x=x
		this.y=y
	}
	say(){
		console.log(123)
	}
}
let son1=new Son(1,2)
console.log(son1)
console.log(son1.__proto__)
console.log(Object.getPrototypeOf(son1))
Object.getPrototypeOf(son1).sing=function(){
	console.log(1234)
}
son1.sing()
let son2=new Son(1,2)
son2.sing() */

/* class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log(value);
  }
}
let myclass=new MyClass()
myclass.prop=55
console.log(myclass.prop) */



/* class Foo {
  #x=1
  say(){
	  console.log(x)
  }
  static classMethod() {
    console.log("hello")
  }
}
let a=new Foo()
a.say()
Foo.classMethod() */

/* function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}
let person= Person("edison")
console.log(person.name) */


/* class Dictionary{
	constructor(items){
		this.items=[]
	}
	// 添加元素
	set(key,value){
		this.items[key]=value
	}
	// 通过键值删除字典中相对应的元素
	delete(key){
		if(this.has(key)){
			delete items[key]
			return true
		}else{
			return false
		}
	}
	// 通过键值查询是否存在某个元素，返回true||false
	has(key){
		return key in this.items
	}
	// 通过键值查询某个元素并且返回
	get(key){
		if(this.has(key)){
			return items[key]
		}else{
			return undefined
		}
	}
	// 删除字典中所有的元素
	// 返回字典中所有元素的数量
	// 将字典所包含的所有键名以数组方式返回
	// 将字典所包含的所有数值以数组方式返回
	values(){
		let values=[]
		for(let x in items){
			if(this.has(x)){
				values.push(this.items[x])
			}
		}
	}
}
let dic=new Dictionary()
dic.set("edison",18)
dic.set("kobe",19)
dic.set("obama",20)
console.log(dic.has("kobe"))
console.log(dic)
 */
 
 
 
 
// 散列表
// 就是字典的一种散列表实现方式

/* class HashMap{
	constructor(){
		this.map=[]
	}
	// 散列函数
	loseloseHashCode(key){
		let hash=0
		for(let i=0;i<key.length;i++){
			hash+=key.charCodeAt(i)
		}
		return hash%37
	}
	// put 增加一个新的项
	put(key,value){
		let keyHash=this.loseloseHashCode(key)
		console.log("hash"+keyHash)
		this.map[keyHash]=value
	}
	// remove 根据键值移除一个项
	remove(key){
		delete this.map[key]
	}
	// get 返回根据键值查询到的值
	get(key){
		return this.  map[key]
	}
}
let map=new HashMap()
console.log(map)
map.put("a",12)
console.log(map)
map.put("b",13)
map.remove("b")
console.log(map) */

/* function A(name){
	this.name=name
	this.sing=()=>{
		console.log(1)
	}
}
let a=new A("edison")
A.say=()=>{
	console.log(2)
}
console.log(a.name)
a.sing()

a.say() */
/* 
function A(name){
	this.name=name
}
A.prototype={
	constructor:A,
	sing:function(){}
}
let a=new A()
Object.prototype.age=18
log(a.age) */

/* 
Array.prototype.sum=function(){
	let total=0
	for(let i=0;i<this.length;i++){
		total+=this[i]
	}
	return total
}
let arr=[1,2,3,]
let arr1=["edison","lwj"]
log(arr.sum())
log(arr1.sum()) */
/* 
function A(y,z){
	log(this.x)
	log(y)
	log(z)
}
let o={
	x:1
}
A.call(o,2,3) */




/* let person={
	test:function(){
		log("done")
	}
}
let p={}
 */
 
 /* 
function A(name){
	this.name=name
	console.log(this)
}
function a(name){
	A.call(this,name)
}
let son=new a("edison")
log(son.name) */


/* 
function A(name){
	this.name=name
}
A.prototype.say=function(){
	log(this.name)
}
function a(name){
	A.call(this,name)
}
a.prototype=new A("kobe")
let x=new a("edison")
/* log(x)
log(a.prototype)
log(a.prototype.say())
log(x.__proto__) */
/* x.__proto__=a.prototype
x.say() */
/* log(x.__proto__===a.prototype)
log(x.__proto__)
log(a.prototype)
log(a.prototype==new A("kobe"))
x.say()  */

/* 
let obj={
    x:1,
	y:2,
	z:3
}
Object.defineProperty(obj,"x",{
	value:1000,
	writable:false,
	
})
Object.defineProperty(obj,"phoneNum",{
	value:15611111111,
	writable:false,
	enumerable:false
})
obj.x=1000000
console.log(obj) */



/* 
let o={
	x:1,
	y:2
}
function fn(arr){
	console.log(this)
	log(arr)
}
fn.apply(o,["xx","yy"]) */

/* 
let arr=[1,2,9,4,5]
let arrMax=Math.max.apply(null,arr)
log(arrMax) */



/* 
let obj={
    x:1,
	y:2,
	z:3
}
function fn(){
	log(this)
}
let f=fn.bind(obj)
f() */


/* 
function bubble(arr){
	let len=arr.length
	let temp
	for(let i=0;i<len-1;i++){
		for(let j=i;j<len-1;j++){
			if(arr[i]>arr[j]){
				temp=arr[i]
				arr[i]=arr[j]
				arr[j]=temp
			}
		}
	}
}
let x=[1,4,7,2,5]
log(bubble(x)) */


/* 
let bubbleSort=array=>{
	let len=array.length
	let temp
	for(let i=0;i<len-1;i++){
		for(let j=0;j<len-1-i;j++){
			if(array[j]>array[j+1]){
                  temp=array[j];
                  array[j]=array[j+1];
                  array[j+1]=temp;
            }	
		}
	}
}
let array=[1,2,3,6,8,5,4]
console.log(bubbleSort(array)) */


/* function fn(a,b,cb){
	log(a+b)
	cb&&cb()
}
fn(1,2,function(){
	log("cb")
})
 */
 
 
/* function fn(){
	let x=1
	function fn1(){
		let y=2
		log()
	}
	fn1()
}
log(fn()) */

/* 
function fn(){
	let x=1
	function fn1(){
		let y=2
		log(x+y)
	}
	return fn1
}
let fn2=fn()() */


/* let li=[1,2,3,4,5]
for(let i=0;i<li.length;i++){
	(function(i){
		setTimeout(function(){
			console.log(i)
		},3000)
	})(i)
}
 */
 
/*  
let cost=(function (){
	let initial=13,total,extra
	return function(meter){
		if(meter>3){
			extra=meter-3
			return total=initial+extra*5
		}else{
			return total=initial
		}
	}
})()
log(cost(10)) */
/* let name="xxxx"
let obj={
	name:"xxx",
	fn:function(){
		let that=this
		return function(){
			log(this)
		}
	}
}
obj.fn()()
 */
 
/* let num=1;
(function fn(){
	console.log(num)
	if(num<=6){
		num++
		fn()
	}
	return
})() */


/* let total=1,x=1,n=5;
(function fn(){
	total *= x+1;
	log(total);
	if(x<n){
		x++
		fn()
	}
	return
})() */

/* 
let jsonData=[
	{
		id:1,
		name:"笔",
		goods:[
			{
				id:11,
				name:"毛笔"
			},
			{
				id:12,
				name:"钢笔"
			}
		]
	},{
		id:2,
		name:"纸"
	},{
		id:3,
		name:"墨"
	}
];
let o={}
function getObj(data,id){
	data.forEach(item=>{
		if(id===item.id){
			o=item
		}else if(item.goods){
			getObj(item.goods,id)
		}
	})
	return o
}
	
log(getObj(jsonData,12)) */
/* let o={},
	value={
		a:"123",
		b:{
			a1:"123"
		}
	}
function delLong(data){
	for()
	return o
}
log(delLong(value)) */
/* let o={
		a:"123",
		b:{
			a1:123,
			a2:"123456",
			c:{
				a2:123123,
				a22:"1231231231231" 
			}
		}
	}
function delLong(data){
	log(1)
	for(let key in data){
		log(2)
		if(data[key] instanceof Object){
			log(3)
			delLong(data[key])
			log(4)
		}else{
			log(5)
			log(typeof(data[key]))
			if(typeof(data[key])==="string"){
				log(6)
				data[key]="123123"
			}
		}
	}
	return data
} */
// 这里不能用 instanceof 去判断类型
// 可能是node环境问题，要对for in循环深入了解才能找出为什么。
/* log(delLong(o)) */

/* let a={
	x:1,
	y:{
		xx:1
	}
}
let b=a
for (let key in b){
	log(typeof(b[key]))
	log(typeof(b.key))
	log(key instanceof Object)
}
log(typeof(a.y))
log(typeof(b.y))
log(b.y instanceof Object) */



/* let obj={
	id:1,
	name:2
}
/* let o=obj
log(o) */
/* for(let k in obj){
	log(k)
} */
/* let o={}
Object.assign(o,obj)
log(o)  */



/* let obj={
	id:1,
	name:{
		id:11,
		name:{
			id:111
		}
	}
}
let o={}
function deepCopy(obj){
	for(let key in obj){
		o[key]=obj[key]
		if(obj.key){
			deepCopy(obj.name)
		}
	}
	return o
}
log(deepCopy(obj))
obj.name={id:111111}
log(o) */




/* let obj={
	id:1,
	name:{
		id:11,
		name:{
			id:111
		}
	}
}
let o={}
function deepCopy(newObj,oldObj){
	Object.assign(newObj,oldObj)
	if(oldObj.name){
		deepCopy(newObj,oldObj.name)
	}
	return newObj
}
deepCopy(o,obj)
log(o) */


/* 
let re=/^123$/
log(re.test(1123))
log(re.test(1233))
log(re.test(12123))
log(re.test(12323))
log(re.test(123123)) */

/* let re=/^[a-zA-Z0-9_-]/
log(re.test("A"))
log(re.test("aafb-__"))
log(re.test("aa"))
log(re.test("be"))
log(re.test("v")) */
/* 
let re=/^[a-zA-Z0-9_-]{3,16}$/
log(re.test("aaaaa")) */


/* 
let re=/^\d{3}-\d{8}|\d{4}-\d{7}$/
log(re.test("1232-2345678")) */

/* let re=/你妈死了/g
let str="你妈死了臭傻逼，你妈死了"
let newStr=str.replace(re,"**")
log(newStr)
 */

/* 
let person={
	name:"edison",
	age:20
}
let {name:n,age:a}=person
log(n)
 */


/* function fn(a,... b){
	log(a)
	log(b)
}
fn(1,2,3) */



/* let ary=[1,2,3]
log(...ary) */


/* let name=`edison`
let sayHello=`u can call me ${name}`
log(sayHello) */

/* let ary=[1,2,3,3,5,5]
let set=new Set(ary)
log(ary)
log(set) */





/* var moveZeroes = function(nums) {
	let index=0
    for(let i=0;i<nums.length;i++){
		if(nums[i]!=0){
			nums.splice(i，)
		}
	}
};
let a=moveZeroes([0,1,0,3,12])

log(a) */



/* let obj={
	a:"123",
	b:{
		b1:"长度大于100",
		b2:123,
		b3:function(){},
		c:{
			c1:"长度大于100",
			c2:123,
			c3:function(){}
		}
	}
}
function spliceStr(data){
	for(let key in data){
		if(typeof(data[key])==="object"){
			spliceStr(data[key])
		}else if(typeof(data[key])==="string"&&data[key].length>4){
			data[key]=""
		}
	}
	return data
}
log(spliceStr(obj)) */
/* for(var i=0;i<10;i++){
	let j=i
	log(j+"xx")
	setTimeout(()=>{
		log(i)
	},10)
} */

/* a=2
log(a) */

/* log(x)
let x=2 */



/* (function(){
	log(a)
	var a=1
	log(a)
	log(b)
	var b=2
	log(b)
})();


(function(){
	let c=1
	log(c)
	let d=2
	log(d)
})();

let e = 'global'
{
  console.log(e) // Uncaught ReferenceError: x is not defined
  let e = 1
} */


/* class A{}
let a=new A
log(Object.getPrototypeOf(a))
log(a.__proto__) */


/* let s=new Set()
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
} */

/* const set = new Set([1, 2, 3, 4, 4]);
log([...set]) //[1,2,3,4]
// add方法  添加某个值，返回 Set 结构本身。
set.add(1).add(7)
log([...set]) //[ 1, 2, 3, 4, 7 ]
// delete方法  删除某个值，返回一个布尔值，表示删除是否成功。
log(set.delete(7))  // true
// has方法 返回一个布尔值，表示该值是否为Set的成员。
log(set.has(7)) //false 之前已经被delete
log(set.has(6)) //false 不存在6
log(set.has(1)) //true
//clear方法  清除所有成员，没有返回值 
set.clear()
log([...set]) //[]  空


const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
log(items.size) // 5 */


/* // 直接使用Symbol
let s=Symbol()
log(s) // Symbol()
// 给Symbol带一个参数，必须是字符串、数值、对象
// 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。
let a=Symbol("hello")
let n=Symbol(1)
let o=Symbol({})
log(a) // Symbol(hello)
log(n) // Symbol(1)
log(o) // Symbol(Obejct)
// 注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。


let s=Symbol() */



/* for(var i=0;i<5;i++){
	setTimeout(()=>{
		log(i)
	},10)
}
for(let j=0;j<5;j++){
	setTimeout(()=>{
		log(j)
	},10)
} */

/* 
function debounce(fn,delay){
	log(1)
	let timer=null
	log(timer)
	return(...args)=>{
		log(args)
		clearTimeout(timer)
		timer=setTimeout(()=>{
			fn.apply(this,args)
		},delay)
	}
}

let debounce=(fn,delay)=>{
	let timer=null
	clearTimeout(timer)
	timer=setTimeout(()=>{
		fn.apply(this)
	},delay)
}

let debounce=(fn,delay)=>{
	let timer=null
	return (...args)=>{
		clearTimeout(timer)
		timer=setTimeout(()=>{
			fn.apply(this,args)
		},delay)
	}
} */


/* let throttle=(fn,delay)=>{
	let flag=true
	return (...args)=>{
		// 当flag为false时 直接 return
		// 但是上面flag为true，所以，第一次执行的时候肯定不会return的
		if(!flag) return
		flag =flase
		setTimeout(()=>{
			fn.apply(this,args)
			flag=true
		},delay)
		
	} */

/* 

防抖：clearTimeout的作用就是，只要触发，就将timer清空，导致这个fn不可能被触发。但是一旦
当防抖函数没有被触发后，就会导致clearTimeout不会被触发，所以，setTimeout在delay后就会执行fn

什么意思呢？就是说，只要不触发debounce，这个fn就会被执行。

节流：只要触发节流，就返回一个setTimeout, */


/* 
let arr=['1','2','3','4','1']
log([...new Set(arr)]) */
/* 
function fn(n){
	if(n==1) return 1
	return n+fn(n-1)
}
log(fn(4)) */

