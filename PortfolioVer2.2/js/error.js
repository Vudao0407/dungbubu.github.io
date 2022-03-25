// Content cho Watermark
function watermarkContent() {
  $('.watermark').append('01101100 01101111 01110110 01100101 00100000 01110101 00100000 01101101 01100001 01101110 01100111 01101111 01110011 01110100 01100101 01100101 01101110 00001101 00001010');
  const watermarkText = document.querySelector('.watermark');
  watermarkText.innerHTML = watermarkText.textContent.replace(/\S/g,"<span class=\"watermark-letter\">$&</span>");
}

  
// Cắt chuỗi chữ để tạo hiệu ứng chữ xoay tròn
const circleText = document.querySelector('.circle-Text');
circleText.innerHTML = circleText.textContent.replace(/\S/g,"<span class=\"circle-letter\">$&</span>");

let element = document.querySelectorAll('.circle-Text span');
for (let i = 0 ; i < element.length ; i++) {
  element[i].style.transform = "rotate(" + i * (360 / element.length) + "deg)";
}