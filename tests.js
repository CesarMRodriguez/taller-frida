Java.perform(function () {
	var MainActivity = Java.use("com.blog.basiccalculator.MainActivity");
	MainActivity.add.implementation = function (int1, int2) {
		console.log("entra al metodo con" + int1 + " y " + int2);
		var resultado = this.add(int1,int2); 
		console.log("resultado: " + resultado);
		return resultado;
	}
});



Java.perform(function () {
	var MainActivity = Java.use("com.blog.basiccalculator.MainActivity");
	MainActivity.sub.implementation = function (int1, int2) {
		
		var Integer = Java.use("java.lang.Integer");
		//return Integer.valueOf(int1 + int2);
		return Integer.$new(int1 + int2);
	}
});


Java.perform(function () {
	var MainActivity = Java.use("com.blog.basiccalculator.MainActivity");
	MainActivity.sub.implementation = function (int1, int2) {
		return int1 + int2;
	}
});



Java.perform(function () {
	var MainActivity = Java.use("com.blog.basiccalculator.MainActivity");
	MainActivity.BasicToast.implementation = function (view) {

		var bt = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
		console.log("\nBacktrace:\n" + bt);
		this.BasicToast(view);
	}
});



var Log = null;
var Exception = null;

Java.perform(function () {
	Log = Java.use("android.util.Log");
	Exception = Java.use("java.lang.Exception");
});


Java.perform(function () {
	var MainActivity = Java.use("com.blog.basiccalculator.MainActivity");
	MainActivity.BasicToast.implementation = function (view) {

		var bt = Log.getStackTraceString(Exception.$new());
		console.log("\nBacktrace:\n" + bt);
		this.BasicToast(view);
	}
});



var bt = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
				console.log("\nBacktrace:\n" + bt);

Java.perform(function () {
	
	var Integer = Java.use("java.lang.Integer");
	var myInteger = Integer.$new(2+3);
	console.log(myInteger);
})


metodo() {

	linea1
	linea2 <--- objeto.Sumar(int1,int2); //sssssss
	linea3
	linea4
}

new Integer(int1 + int2)
