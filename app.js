const blogButton = document.getElementById("item-1");
const githubButton = document.getElementById("item-2");
const linkedinButton = document.getElementById("item-3");

blogButton.addEventListener("click", () => {
    window.location.replace("https://aldrinmcaalim.medium.com");
});

githubButton.addEventListener("click", () => {
    window.location.replace("https://github.com/aldrinmcaalim");
});

linkedinButton.addEventListener("click", () => {
    window.location.replace("https://www.linkedin.com/in/aldrin-caalim-2b42b4119/")
});

