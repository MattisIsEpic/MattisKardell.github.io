function XOR(a, b) {
    var aList = a.split("");
    var bList = b.split("");
    var r = "";
    for (let i = 0; i < a.length; i++) {
        var ac = aList[i]
        var bc = bList[i]
        if(bc == "0") {
            var r2 = ac;
        }
        if(bc == "1") {
            if(ac == "1") {
                var r2 = "0";
            }
            if(ac == "0") {
                var r2 = "1";
            }
        }
        r = `${r}${r2}`;
    }
    return r
}

function FormatNumber(int) {
    var bin = int.toString(2);
    var binLengthR = 16-bin.length;
    return `${Array(binLengthR+1).join("0")}${bin}`
}

function AddToString(a, b) {
    return `${a}${b}`;
}

function EncryptSingle(a, b) {
    //return XOR(FormatNumber(a.charCodeAt(0)),FormatNumber(b.charCodeAt(0)))
    return String.fromCharCode(parseInt(XOR(FormatNumber(a.charCodeAt(0)),FormatNumber(b.charCodeAt(0))), 2));
}

function Mod(a, b) {
    var div = Math.floor(a/b)*b
    return a-div
}

function Encrypt(x, Key) {
    var xList = x.split("");
    var keyList = Key.split("");
    var r = "";
    for (let i = 0; i < xList.length; i++) {
        var xc = xList[i];
        var kc = keyList[Mod(i, Key.length)];
        var xored = EncryptSingle(xc, kc);
        r = AddToString(r, xored);
    }
    return r
}

export const Encryption = Encrypt