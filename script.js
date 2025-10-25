// script.js

// Play sound and rotate pencil when Ask is clicked
document.addEventListener("DOMContentLoaded", () => {
  const askBtn = document.getElementById("askBtn");
  const questionInput = document.getElementById("questionInput");
  const pencil = document.getElementById("pencil");
  const whisper = new Audio("whisper.mp3"); // optional whisper effect
  const bgMusic = new Audio("BGmusic1.mp3");

  bgMusic.loop = true;
  bgMusic.volume = 0.4;
  bgMusic.play();

  if (askBtn) {
    askBtn.addEventListener("click", () => {
      const question = questionInput.value.trim();
      if (!question) return;

      // random yes/no rotation
      const answer = Math.random() > 0.5 ? "yes" : "no";
      pencil.style.transition = "transform 1.5s ease";
      pencil.style.transform = answer === "yes" ? "rotate(45deg)" : "rotate(-45deg)";
      
      whisper.play();

      setTimeout(() => {
        alert(`Charlie says: ${answer.toUpperCase()}...`);
        pencil.style.transform = "rotate(0deg)";
      }, 2000);
    });
  }
});
