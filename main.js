document.getElementById('enviar').addEventListener('click' , ()=>{
    hablar(document.getElementById('texto').value);
} )

    

function hablar(texto) {
    console.log('ok '+texto);
    speechSynthesis.speak(
            new SpeechSynthesisUtterance('hola')
        );
    console.log('ok2');

}

