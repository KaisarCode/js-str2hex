// Text to hexadecimal
function str2hex(str){
    str = str || '';
    var out = '';
    var hex = '';
    for (var i = 0; i < str.length; i++) {
        hex = str.charCodeAt(i).toString(16);
        out += ('000'+hex).slice(-4);
    } return out;
}
