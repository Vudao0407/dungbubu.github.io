// Cắt chuỗi chữ
const circleText = document.querySelector('.circle-Text');
circleText.innerHTML = circleText.textContent.replace(/\S/g,"<span class=\"circle-letter\">$&</span>");

const element = document.querySelectorAll('.circle-letter');
for (let i = 0 ; i < element.length ; i++) {
    element[i].style.transform = "rotate(" + i * (360 / element.length) + "deg)";
}

const watermarkText = document.querySelector('.watermark');
watermarkText.innerHTML = watermarkText.textContent.replace(/\S/g,"<span class=\"watermark-letter\">$&</span>");