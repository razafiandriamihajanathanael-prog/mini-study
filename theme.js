function applyMiniStudyTheme(){
  const darkMode =
    localStorage.getItem("miniStudyDarkMode") === "true";

  document.documentElement.classList.toggle("dark-mode", darkMode);
  document.body.classList.toggle("dark-mode", darkMode);
}

applyMiniStudyTheme();

window.addEventListener("storage", function(event){
  if(event.key === "miniStudyDarkMode"){
    applyMiniStudyTheme();
  }
});