// ------------ ------------ ------------ ------------ ------------ ------------
// Thêm trạng thái Active cho Menu đang được mở ------------ ------------
navItem[3].classList.add("active");


// ------------ ------------ ------------ ------------ ------------ ------------
// Hàm chạy thư viện Slick ------------ ------------
$('.multiple-items').slick(
  {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    focusOnSelect: true
  });