// popup.js

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener("DOMContentLoaded", function() {

    // Örnek bir buton ekleyelim
    const button = document.createElement("button");
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";

    // Butona tıklama olayı ekle
    button.addEventListener("click", function() {
        alert("Butona tıkladınız!"); // Uyarı göster
    });

    // Butonu body'ye ekle
    document.body.appendChild(button);
});
