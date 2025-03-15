const baybayinMap = {
    "a": "ᜀ", "b": "ᜊ", "k": "ᜃ", "d": "ᜇ", "e": "ᜁ", 
    "g": "ᜄ", "h": "ᜑ", "i": "ᜁ", "l": "ᜎ", "m": "ᜋ", 
    "n": "ᜈ", "o": "ᜂ", "p": "ᜉ", "r": "ᜇ", "s": "ᜐ", 
    "t": "ᜆ", "u": "ᜂ", "w": "ᜏ", "y": "ᜌ"
};

function translateToBaybayin() {
    let inputText = document.getElementById("inputText").value.toLowerCase();
    let outputText = "";

    for (let char of inputText) {
        outputText += baybayinMap[char] || char; // Convert or keep original
    }

    document.getElementById("output").innerText = outputText;
}
