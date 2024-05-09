import { Encryption } from "./encrypt.js";

document.getElementById("submit").onclick = async function(){
    var Key = document.getElementById("Key").value;
    var String = document.getElementById("String").value;
    var Encrypted = Encryption(String, Key)
    document.getElementById("Output").textContent = Encrypted
    await navigator.clipboard.writeText(Encrypted)
    alert("Copied!")
}