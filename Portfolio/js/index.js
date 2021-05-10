// ------------ ------------ ------------ ------------ ------------ ------------
// Dark Mode ------------ ------------
let darkModeItem = [document.querySelector("body")];

function updateTime() 
  {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();

    if (window.matchMedia('(prefers-color-scheme: dark)').matches || hour >= 20 && minutes >= 0)
    // Check xem Window có đang ở chế độ DarkMode hay không hoặc sau 10pm thì tự động chuyển chế độ
      {
        darkModeItem.forEach(function(element)
          {
            element.classList.add("darkMode");
          });         
      }
  }
updateTime();
setInterval(updateTime, 1000); // Update theo từng giây