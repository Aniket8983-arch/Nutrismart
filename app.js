// Log navigation clicks
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    console.log(`Navigated to ${link.getAttribute("href")}`);
  });
});

// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
