const blogButton = document.getElementById("item-1");
const githubButton = document.getElementById("item-2");
const linkedinButton = document.getElementById("item-3");

blogButton.addEventListener("click", () => {
    window.open("https://aldrinmcaalim.medium.com", "_blank");
    // window.location.replace("https://aldrinmcaalim.medium.com");
});

githubButton.addEventListener("click", () => {
    window.open("https://github.com/aldrinmcaalim", "_blank");
});

linkedinButton.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/aldrin-caalim-2b42b4119/", "_blank");
});

