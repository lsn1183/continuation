var fs, i, err, text;
fs = require('fs');
i = 0;
function loop_0(loop_0_cont) {
    if (i < 4) {
        fs.readFile('continuation.js', 'utf-8', function () {
            err = arguments[0];
            text = arguments[1];
            console.log(err, text);
            i++;
            loop_0(loop_0_cont);
        });
    } else {
        loop_0_cont();
    }
}
loop_0(function () {
    console.log('Done');
});