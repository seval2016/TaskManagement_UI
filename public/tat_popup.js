
document.addEventListener('DOMContentLoaded', function () {

    const button = document.getElementById('myButton');
    
    if (button) {
        button.addEventListener('click', function () {
         
            alert('Butona tıklandı!');
        });
    }

    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.textContent = 'Hoş geldiniz!';
    }
});
