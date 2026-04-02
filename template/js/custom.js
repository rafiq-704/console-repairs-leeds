$(document).ready(function () {
  // Start writing your custom functions here.
  // All the necessary pluigns are already loaded.
});

const icons = document.querySelectorAll(".accordian-icon");
const texts = document.querySelectorAll(".accordion-text");

if (texts.length > 0 && icons.length > 0) {
  texts[0].style.maxHeight = texts[0].scrollHeight + "px";
  icons[0].classList.add("active");
  icons[0].textContent = icons[0].textContent.replace("+", "–");
}
document.querySelectorAll(".accordian-icon").forEach((icon, index) => {
  const texts = document.querySelectorAll(".accordion-text");

  icon.addEventListener("click", () => {
    texts.forEach((text, i) => {
      const otherIcon = document.querySelectorAll(".accordian-icon")[i];

      if (i !== index) {
        text.style.maxHeight = null;
        otherIcon.classList.remove("active");

        if (otherIcon.textContent.includes("–")) {
          otherIcon.textContent = otherIcon.textContent.replace("–", "+");
        }
      }
    });

    const content = texts[index];

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.classList.remove("active");

      icon.textContent = icon.textContent.replace("–", "+"); // Show +
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add("active");

      icon.textContent = icon.textContent.replace("+", "–"); // Show –
    }
  });
});



AOS.init({
  duration: 2000,
  // once: true,
  offset: 200
});

// Refresh AOS after all images have loaded
window.addEventListener('load', function () {
  AOS.refresh();
});

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", () => {
    AOS.refresh();
  });
});