// Câu chào trong Console
console.clear();
console.log("%c😎 Hi there!","font-size: 24px;",);
console.log("%cDesigned & coded by myself.","font-size: 12px;");

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
  $(".toggleDarkmode").on('click', function () {
    let theme = localStorage.getItem("data-theme");
    
    if (theme === "light") {
      root.setAttribute('data-theme', 'dark');
      $(".toggleDarkmode").html('lightmode');
      localStorage.setItem("data-theme", "dark");
    
    } else {
      root.setAttribute('data-theme', 'light');
      $(".toggleDarkmode").html('darkmode');
      localStorage.setItem("data-theme", "light");
    }
  });
};

//Chuyển đổi chế độ Soundmode
$(".toggleSoundmode").on('click', function () {
  var song = new Audio();
  song.src = './audio/Merry go round of life - Morunas.mp3';
  song.play();
});

// Humburger menu
function hamburgerFunction() {
  $(".burgerMenu").toggleClass('toggle');
  $(".modal").toggleClass('toggle');
}

// Thay đổi con trỏ chuột
$(window).mousemove(function(e) { 
  $('.cursor').css({left: e.pageX, top: e.pageY })
})

$('a, .flip-box')
.on('mouseenter', function() {$('.cursor').addClass('focus')})
.on('mouseleave', function() {$('.cursor').removeClass('focus')})