const button = document.getElementById('askButton');
const response = document.getElementById('charlieResponse');
const bgmusic = document.getElementById('bgmusic3');
const whisper1 = document.getElementById('whisper1');
const whisper2 = document.getElementById('whisper2');

window.onload = () => {
  bgmusic.volume = 0.4;
  bgmusic.play().catch(() => console.log("Autoplay blocked until user interacts."));
};

button.addEventListener('click', () => {
  const question = document.getElementById('question').value.trim();
  if (!question) {
    response.textContent = "You must ask a question...";
    return;
  }

  response.textContent = "";
  const answers = ["Yes", "No"];
  const result = answers[Math.floor(Math.random() * answers.length)];

  // Random creepy whisper
  const whisper = Math.random() > 0.5 ? whisper1 : whisper2;
  whisper.volume = 0.7;
  whisper.play();

  setTimeout(() => {
    response.textContent = `Charlie says: ${result}`;
  }, 1500);
});
