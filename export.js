//1.we can export classes
export class Myclass{
	//1.property
	
	//2. constructor
	
	//3. method
	showName(){
		console.log('Hello from shoeName method');
	}
	
}
//2. we can Export class object
class MyClass2{
	showName2(){
		console.log("Hello from MyClass2 and showname2 Method");
	}
}
export var myclassobj2 = new MyClass2();

//3.we can export functions
function priyanka(){
	console.log('Hello');
}
//4.we can export js object {}
export var student = {
	//1. p:v
	
	//2. Methods
	displayName:function(){
		console.log(`Hello $(name) from Display Name`);
		
	},
	displayName2:function displayName2(){
		console.log('Hello from Display Name2')
	} 	

	
};
//5.we can export variables
export var name = 'priyanka yadav';
export('priyanka');
