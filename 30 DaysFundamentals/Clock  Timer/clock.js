function displayClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  
  
  document.querySelector("#hours").textContent = hours.toString() ;
  document.querySelector("#minutes").textContent = minutes.toString();
  document.querySelector("#seconds").textContent = seconds.toString() ;
}
setInterval(displayClock, 1000);
displayClock();


document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector("#toggle-theme");
  const body = document.querySelector("body");
  const div = document.querySelector(".clock-container");
  
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme) {
    body.classList.add(savedTheme);
    if(body.classList.contains("dark-mode")) {
      div.classList.add("clock-container-toggle");
    }
    themeToggle.src = savedTheme === "dark-mode" ? "img/IMG-theme2.jpg" : "img/IMG-theme.jpg"
  }
  
  
  themeToggle.addEventListener("click", () => {
    
    body.classList.toggle("dark-mode");
    div.classList.toggle("clock-container-toggle");
    
    const theme = body.classList.contains("dark-mode") ? "dark-mode" : "";
    
    localStorage.setItem("theme",theme);
    
    themeToggle.src = theme === "dark-mode" ? "img/IMG-theme2.jpg" : "img/IMG-theme.jpg"
    
    // if(body.classList.contains("dark-mode")) {
    //   themeToggle.src = "img/IMG-theme2.jpg";
    // } else {
    //   themeToggle.src = "img/IMG-theme.jpg";
    // }
    
  })
});