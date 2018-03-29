
function getPi(method) {
	var currentPi;

	switch(method) {
		case 1:
			return {
				'name': 'Метод Монте-Карло',
				'compute': function() {
					var N = 10000;
					var s = 0;
					for(i = 0; i < N; i++) {
						var x = Math.random();
						var y = Math.random();
						if(x * x + y * y <= 1) {
							s++;
						}
					}
					return 4 * s / N;
				}
			};

		case 2:
			return {
				'name': 'Формула Виета',
				'compute': function() {
					var pi = 2;
					var m = 0;
					for(i = 0; i < 10; i++) {
						m = Math.sqrt(m + 2);
						pi *= 2/m;
					}
					return pi;
				}
			};

		case 3:
			return {
				'name': 'Произведения (1-я формула)',
				'compute': function() {
					var pi = 3 * Math.sqrt(3) / 2;
					for(i = 1; i < 10; i++) {
						pi *= (i * i) / (i * i - 1/9);
					}
					return pi;
				}
			};
	}
}

function print(x) {
	if(x instanceof Object && x.name) {
		console.log(x.name);
	} else {
		console.log(x);
	}
}

method1 = getPi(1);
method2 = getPi(2);
method3 = getPi(3);

//print(method1());
//print(method2());
//print(method3());

print(method1.compute());
print(method2.compute());
print(method3.compute());
