const pencil = document.getElementById('pencil');
const askBtn = document.getElementById('askBtn');
const response = document.getElementById('response');
const bgMusic = document.getElementById('bg-music');
const whisper1 = document.getElementById('whisper1');
const whisper2 = document.getElementById('whisper2');

let bgPlaying = false;

askBtn.addEventListener('click', () => {
  const question = document.getElementById('question').value.trim();
  if (!question) return;

  // Start background music only once
  if (!bgPlaying) {
    bgMusic.volume = 0.3;
    bgMusic.play();
    bgPlaying = true;
  }

  // Random answer
  const answer = Math.random() > 0.5 ? 'Yes' : 'No';
  response.textContent = `Charlie says: ${answer}`;
  response.style.opacity = 1;

  // Reset rotation
  pencil.style.transform = 'rotate(0deg)';

  // Whisper
  const whisper = Math.random() > 0.5 ? whisper1 : whisper2;
  whisper.volume = 0.5;
  whisper.play();

  // Rotate pencil
  const rotationAngle = answer === 'Yes' ? 45 : -45;
  pencil.style.transform = `rotate(${rotationAngle}deg)`;

  // Fade response
  setTimeout(() => { response.style.opacity = 0; }, 4000);
});


  setTimeout(() => {
    response.textContent = `Charlie says: ${result}`;
  }, 1500);
});
