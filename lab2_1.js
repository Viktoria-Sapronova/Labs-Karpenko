
function matrix(m) {

	this.m = m;

	this.mult = function(n) {
		var r = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

		for(i = 0; i < 2; i++)
			for(j = 0; j < 2; j++) {
				r[i][j] = this.m[i][0] * n.m[0][j] + this.m[i][1] * n.m[1][j] + this.m[i][2] * n.m[2][j];
			}

		this.m = r;
	}

	this.tr = function() {
		var r = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

		for(i = 0; i < 2; i++)
			for(j = 0; j < 2; j++) {
				r[i][j] = this.m[j][i];
			}

		this.m = r;
	}

	this.det = function() {
		var a = this.m;
		return a[0][0] * (a[1][1] * a[2][2] - a[1][2] * a[2][1]) -
			   a[1][0] * (a[0][1] * a[2][2] - a[0][2] * a[2][1]) +
			   a[2][0] * (a[1][1] * a[0][2] - a[1][2] * a[0][1]);
	}

	this.max = function() {
		var a = this.m;
		return Math.max(a[0][0], a[0][1], a[0][2], a[1][0], a[1][1], a[1][2], a[2][0], a[2][1], a[2][2]);
	}

}


var m1 = new matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
var m2 = new matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
m2.tr();
m1.mult(m2);

if (m1.m[0][0] == 1 && m1.m[1][0] == 0 && m1.m[2][0] == 0 && 
	m1.m[0][1] == 0 && m1.m[1][1] == 1 && m1.m[2][1] == 0 && 
	m1.m[0][2] == 0 && m1.m[1][2] == 0 && m1.m[2][2] == 1) {

	console.log('Entity');
} else {
	console.log('Not entity');
}

