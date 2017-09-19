function resolveAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x);
		}, 2000);
	});
};


var add = async function(x) { // async function expression assigned to a variable
	var a = await resolveAfter2Seconds(20);
	var b = await resolveAfter2Seconds(30);
	return x + a + b;
};

add(10).then(v => {
	console.log(v);  // prints 60 after 4 seconds.
});


(async function(x) { // async function expression used as an IIFE
	var p_a = resolveAfter2Seconds(20);
	var p_b = resolveAfter2Seconds(30);
	return x + await p_a + await p_b;
})(10).then(v => {
	console.log(v);  // prints 60 after 2 seconds.
});