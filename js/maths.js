// maths.js
// Mathematical functions

define(["lib/numeric"], function(n) {
	return {
		// Returns the w-weighted mean of the vector x,
		// that is, $\frac{\sum_i w_i x_i}{\sum w_i}$.
		mean: function(w, x) {
			return n.dot(w, x) / n.sum(w);
		}
	}
});
