// Câu chào trong Console
console.clear();
console.log("%c😎 Hey, hi there!","font-size: 24px;",);
console.log("%cWhatcha Doin'?","font-size: 12px;");
console.log("%cWould you like a cup of coffee ☕?","font-size: 12px;");

window.onload = function () {
  //Chuyển đổi chế độ Darkmode
  var root = document.querySelector(':root');

  switch (localStorage.getItem("data-theme")) {
    case null:
      $('.decorBg').css({"width":"0", "height":"0"});
      root.setAttribute('data-theme', 'light');
      localStorage.setItem("data-theme", "light");
      break;
    case "dark":
      $('.decorBg').css({"width":"200vmax", "height":"200vmax"});
      root.setAttribute('data-theme', 'dark');
      $("#toggleDarkmode").html('lightmode');
      break;
    case "light":
      $('.decorBg').css({"width":"0", "height":"0"});
      root.setAttribute('data-theme', 'light');
      $("#toggleDarkmode").html('darkmode');
  }

  $(".toggleDarkmode").on('click', function () {
    let theme = localStorage.getItem("data-theme");
    
    if (theme === "light") {
      root.setAttribute('data-theme', 'dark');
      $(".toggleDarkmode").html('lightmode');
      localStorage.setItem("data-theme", "dark");
      $('.decorBg').css({"width":"200vmax", "height":"200vmax"});
    
    } else {
      root.setAttribute('data-theme', 'light');
      $(".toggleDarkmode").html('darkmode');
      localStorage.setItem("data-theme", "light");
      $('.decorBg').css({"width":"0", "height":"0"});
    }
  });


  //Chuyển đổi chế độ Soundmode
  $(".toggleSoundmode").on('click', function () {
    var song = new Audio();
    song.src = './audio/Merry go round of life - Morunas.mp3';
    song.play();
  });
};


// Humburger menu
function hamburgerFunction() {
  $(".burgerMenu").toggleClass('toggle');
  $(".modal").toggleClass('toggle');
}


// Thay đổi con trỏ chuột
$(window).mousemove(function(e) { 
  $('.cursor').css({left: e.pageX, top: e.pageY })

  $('a, .flip-box')
  .on('mouseenter', function() {$('.cursor').addClass('focus')})
  .on('mouseleave', function() {$('.cursor').removeClass('focus')})
})