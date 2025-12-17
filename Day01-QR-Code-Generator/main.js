let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');

const recognition = window.SpeechRecognition || window.webkitSpeechRecognition ? new (window.SpeechRecognition || window.webkitSpeechRecognition)() : null;

if (recognition) {
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  document.getElementById("micBtn").onclick = () => recognition.start();

  recognition.onresult = e => {
    document.getElementById("qrText").value = e.results[0][0].transcript;
  };
} else alert("Speech not supported");

const generateQR = ()=>{
    if(qrText.value.length > 0){
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
    imgBox.classList.add('show-img');
}  
else{
    qrText.classList.add('error')
    setTimeout(()=>{
 qrText.classList.remove('error')
    },1000)
}}