// ------------ ------------ ------------ ------------ ------------ ------------
// Thiết lập Slick Carousel
$('.carouselGiangVien').slick(
  {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: false,
    variableWidth: true
  });

$('.carouselFeedback, .carouselBlog').slick(
  {
    infinite: true,
    autoplay: true,
    speed: 1000,
    centerMode: true,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: false,
    variableWidth: true
  });


// ------------ ------------ ------------ ------------ ------------ ------------
// Hàm add/remove trạng thái Active khi "click" vào các nút trên Menu
let menuItemActive = [...document.getElementsByClassName("itemMenu")];
let burgerFilling = [...document.getElementsByClassName("burger-filling")];

menuItemActive[0].classList.add("active");
burgerFilling[0].classList.add("active");

menuItemActive.forEach(function(element) 
  {
    element.addEventListener("click",function()
      {
        element.classList.add("active");
        
        var sibling = menuItemActive[0];
        while (sibling) 
        {
            if (sibling.nodeType === 1 && sibling !== element) 
              {
                sibling.classList.remove("active");
              }
            sibling = sibling.nextSibling
        }
      });
  });


// ------------ ------------ ------------ ------------ ------------ ------------
// Hàm add/remove trạng thái Active khi "scroll" qua các vị trí trên trang
let idOffSet = [document.getElementById("idTrangChu").getBoundingClientRect().top,
                document.getElementById("idGioiThieu").getBoundingClientRect().top,
                document.getElementById("idGiangVien").getBoundingClientRect().top,
                document.getElementById("idNoiDung").getBoundingClientRect().top,
                document.getElementById("idHocVien").getBoundingClientRect().top,
                document.getElementById("idLienHe").getBoundingClientRect().top,
                document.getElementById("idBaiViet").getBoundingClientRect().top];

window.addEventListener("scroll",function()
  {
    let windowViewpoint = window.pageYOffset;

    menuItemActive.forEach(function(element)
      {
        element.classList.remove("active");
      });
    burgerFilling.forEach(function(element)
      {
        element.classList.remove("active");
      });

    if (idOffSet[1] > windowViewpoint && windowViewpoint >= idOffSet[0])
      {
        menuItemActive[0].classList.add("active");
        burgerFilling[0].classList.add("active");
      }
    else if (idOffSet[2] > windowViewpoint && windowViewpoint >= idOffSet[1])
      {
        menuItemActive[1].classList.add("active");
        burgerFilling[1].classList.add("active");
      }
    else if (idOffSet[3] > windowViewpoint && windowViewpoint >= idOffSet[2])
      {
        menuItemActive[2].classList.add("active");
        burgerFilling[2].classList.add("active");
      }
    else if (idOffSet[4] > windowViewpoint && windowViewpoint >= idOffSet[3])
      {
        menuItemActive[3].classList.add("active");
        burgerFilling[3].classList.add("active");
      }
    else if (idOffSet[5] > windowViewpoint && windowViewpoint >= idOffSet[4])
      {
        menuItemActive[4].classList.add("active");
        burgerFilling[4].classList.add("active");
      }
    else if (idOffSet[6] > windowViewpoint && windowViewpoint >= idOffSet[5])
      {
        menuItemActive[5].classList.add("active");
        burgerFilling[5].classList.add("active");
      }
    else
      {
        menuItemActive[6].classList.add("active");
        burgerFilling[6].classList.add("active");
      }
  });


  // ------------ ------------ ------------ ------------ ------------ ------------
  // Hàm tạo hiệu ứng cho Humburger menu ------------ ------------
  function hamburgerFunction() 
    {
      document.querySelector(".burger-menu").classList.toggle("burger-menu-toggle");
      document.querySelector(".burger-menu-content").classList.toggle("burger-menu-toggle");
      document.querySelector(".burger-menu-blackscreen").classList.toggle("burger-menu-toggle");
    }


  // ------------ ------------ ------------ ------------ ------------ ------------
  // Hàm ẩn Humburger menu khi ấn vào từng menu con ------------ ------------
  document.querySelectorAll(".burger-menu-content a").forEach(function(element)
    {
      element.addEventListener("click" ,function()
        {
          setTimeout(function(){ hamburgerFunction(); }, 600);
        });
    });