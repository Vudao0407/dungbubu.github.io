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
var root = document.querySelector(':root');

switch (localStorage.getItem("data-theme")) {
  case null:
    root.setAttribute('data-theme', 'light');
    localStorage.setItem("data-theme", "light");
    break;
  case "dark":
    root.setAttribute('data-theme', 'dark');
    $("#toggleDarkmode").html('lightmode');
    break;
  case "light":
    root.setAttribute('data-theme', 'light');
    $("#toggleDarkmode").html('darkmode');
}

window.onload = function () {
  const toggleDarkmode = document.getElementById('toggleDarkmode');
  toggleDarkmode.addEventListener('click', function () {
    let theme = localStorage.getItem("data-theme");
    
    if (theme === "light") {
      root.setAttribute('data-theme', 'dark');
      $("#toggleDarkmode").html('lightmode');
      localStorage.setItem("data-theme", "dark");
    
    } else {
      root.setAttribute('data-theme', 'light');
      $("#toggleDarkmode").html('darkmode');
      localStorage.setItem("data-theme", "light");
    }
  });
};