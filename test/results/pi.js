var calcPi, pi;
calcPi = function (callback) {
    var f;
    f = function (x, callback) {
        var d;
        process.nextTick(function () {
            if (x > 10000) {
                return callback(0);
            }
            f(x + 4, function () {
                d = arguments[0];
                callback(d + (1 / x - 1 / (x + 2)) * 4);
            });
        });
    };
    f(1, callback);
};
calcPi(function () {
    pi = arguments[0];
    console.log(pi);
});