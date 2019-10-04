define(function () {
    return {
        fibonacci: function(n) {

            if (n === 1) {
                return [0, 1];
            } else {
                var s = fibonacci(n - 1);
                s.push(s[s.length - 1] + s[s.length - 2]);
                return s;
            }
        },
        isPrime: function(num) {
            for (var i = 2; i < num; i++)
                if (num % i === 0) return false;
            return num !== 1 && num !== 0;
        },
        isEven: function(n) {
            return n % 2 == 0;
        },
        isOdd: function(n) {
            return Math.abs(n % 2) == 1;
        },
        toLowerCase: function(str) {
            return str.toLowerCase();
        },
        toUpperCase: function(str) {
            return str.toUpperCase();
        },
        contains: function(str, substring, fromIndex) {
            return str.indexOf(substring, fromIndex) !== -1;
        },
        repeat: function(str, n) {
            return (new Array(n + 1)).join(str);
        },
        throwsTypeError: function() {
            throw new TypeError('A type error');
        }
    };
});