// Simple interactivity: show alert when nav links clicked
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    console.log(`Navigated to ${link.getAttribute("href")}`);
  });
});

// Example feature: scroll to section smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
