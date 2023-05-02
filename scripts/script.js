const textarea = document.getElementById("text-input");
const noContent = document.getElementById("no-content");
const result = document.getElementById("result");
const message = document.getElementById("message");
const copyButton = document.getElementById("copy-button");
  
textarea.addEventListener("input", function() {
    const text = textarea.value;
    const decryptButton = document.getElementById("decrypt");

    if (text.length > 0){
        decryptButton.disabled = false;
    } else {
        decryptButton.disabled = true;
        result.style.display = 'none';
        noContent.style.display = 'block';
    }
});

const values = {
    a : 'ai',
    e : 'enter',
    i : 'imes',
    o : 'ober',
    u : 'ufat'
}

const encrypt = () => {
    const text = textarea.value;

    if (text===''){
        return
    }

    const letters = text.split('');
    
    const encryptedLetters = letters.map(letter=> values[letter]?values[letter]:letter);
    
    const encryptedMessage = encryptedLetters.join('');

    message.value = encryptedMessage
    result.style.display = 'flex';
    noContent.style.display = 'none';
}

const reverseValues = {};

for (const [key, value] of Object.entries(values)) {
    reverseValues[value] = key;
}

const decrypt = () => {
    const text = textarea.value;

    console.log(reverseValues)
    
    // Buscar los valores y reemplazar por las llaves

}

copyButton.addEventListener('click', function(){
    message.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
})