var Log = null;
var Exception = null;

Java.perform(function () {
	Log = Java.use("android.util.Log");
	Exception = Java.use("java.lang.Exception");
});


function addTraceToBasicToast() {
	var MainActivity = Java.use("com.blog.basiccalculator.MainActivity");
	MainActivity.BasicToast.implementation = function (view) {

		var bt = Log.getStackTraceString(Exception.$new());
		console.log("\nBacktrace:\n" + bt);
		this.BasicToast(view);
	}
}


Java.perform(function () {
	console.log("se cambia 2");
	addTraceToBasicToast();
});