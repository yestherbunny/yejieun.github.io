// script.js

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const currentPath = window.location.pathname.split("/").pop();
  
    links.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("메시지가 성공적으로 전송되었습니다! (실제 전송 기능은 구현되지 않았습니다.)");
        form.reset();
      });
    }
  });

  