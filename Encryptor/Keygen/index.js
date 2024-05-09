function decimalToHexString(number) {

}

document.getElementById("Generator").onclick = async function(){
    var r = "";
    for(let i = 0; i < 10; i++){
        var random;
        random = Math.floor(Math.random()*16);
        r = `${r}${random.toString(16)}`;
    }
    document.getElementById("output").textContent = r;
    await navigator.clipboard.writeText(r);
}