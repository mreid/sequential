// Runs some basic tests

define(['maths'], function(maths) {
	function meantest(weights, x, expected) {
		equal(
			maths.mean(weights,x), 
			expected, 
			"mean([" + weights + "],[" + x + "]) = " + expected + "."
		);
	};

	test("Maths Tests", function() {
		var w = [1,2,3];
		var x1 = [1,1,1];
		var x2 = [1,1,3];
		meantest(w,x1,1);
		meantest(w,x2,2);
	});
});
