//function for text-speech conversion
function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US"; //setting the language
    speech.text = msg;
    speech.volume = 1; //setting the volume of the output speech
    speech.rate = 1; //setting the speed of the output speech
    speech.pitch = 1; //setting the pitch of the output speech
    window.speechSynthesis.speak(speech);
}

//function to play the sound files
function play(element) {
    var audio = document.getElementById(element);
    audio.play();
}