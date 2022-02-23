// Câu chào trong Console
console.clear();
console.log("%c😎 Hi there!","font-size: 24px;",);
console.log("%cDesigned & coded by myself.","font-size: 12px;");

// Humburger menu
function hamburgerFunction() {
  $(".burgerMenu").toggleClass('toggle');
  $(".modal").toggleClass('toggle');
}

// Thay đổi con trỏ chuột
$(window).mousemove(function(e) { 
  $('.cursor').css({left: e.pageX, top: e.pageY })
})

$('a, .flip-box, .projectMenu')
.on('mouseenter', function() {$('.cursor').addClass('focus')})
.on('mouseleave', function() {$('.cursor').removeClass('focus')})

//Chuyển đổi chế độ Darkmode
window.onload = function () {
  const toggleDarkmode = document.getElementById('toggleDarkmode');
  toggleDarkmode.addEventListener('click', function () {
    // Lấy thuộc tính data-theme
    const root = document.querySelector(':root');
    const isLightMode = root.getAttribute('data-theme') === 'dark' ? false : true;
    // Toggle theme mode
    if (isLightMode) {
      root.setAttribute('data-theme', 'dark');
      $("#toggleDarkmode").html('lightmode');
    } else {
      root.setAttribute('data-theme', 'light');
      $("#toggleDarkmode").html('darkmode');
    }
    // Thay đổi trạng thái của button
    this.classList.toggle('active');
  });
};

// function toggleDark() {
//     const container = document.body;
//     const dataTheme = container.getAttribute("data-theme");
//     let theme = localStorage.getItem("data-theme");
  
//   if (theme === "light") {
//     container.setAttribute("data-theme", "dark");
//     document.getElementById("night").style.display = "block";
//     document.getElementById("light").style.display = "none";
//     localStorage.setItem("data-theme", "dark");
  
//   } else {
  
//     container.setAttribute("data-theme", "light");
//     document.getElementById("night").style.display = "none";
//     document.getElementById("light").style.display = "block";
//     localStorage.setItem("data-theme", "light");
//     }
//   }