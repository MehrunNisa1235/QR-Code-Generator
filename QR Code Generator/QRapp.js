
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImg");
let input = document.getElementById("input")

function getQRCode(){

    if(input.value.length > 0){

        //go to qr code js api and paste the url here:-
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + input.value;
    }else{
        alert("Plzzz Enter Any Text or URL");
    }
    
}