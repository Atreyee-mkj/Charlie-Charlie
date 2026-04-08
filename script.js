const pencil = document.getElementById('pencil');
const askBtn = document.getElementById('askBtn');
const response = document.getElementById('response');
const bgMusic = document.getElementById('bg-music');
const whisper1 = document.getElementById('whisper1');
const whisper2 = document.getElementById('whisper2');

let bgPlaying = false;

askBtn.addEventListener('click', () => {
  const questionInput = document.getElementById('question');
  const question = questionInput.value.trim();

  if (!question) {
    response.textContent = "Ask something first...";
    response.style.opacity = 1;
    return;
  }

  // Start background music only once
  if (!bgPlaying) {
    bgMusic.volume = 0.3;
    bgMusic.play().catch(() => {}); // prevents browser errors
    bgPlaying = true;
  }

  // Suspense 👀
  response.textContent = "Charlie is thinking...";
  response.style.opacity = 1;

  setTimeout(() => {
    // Better spooky answers
    const answers = [
      "Yes...",
      "No...",
      "Ask again...",
      "He is watching...",
      "Definitely yes 😈",
      "Absolutely not 👀"
    ];

    const answer = answers[Math.floor(Math.random() * answers.length)];
    response.textContent = `Charlie says: ${answer}`;

    // Whisper sound
    const whisper = Math.random() > 0.5 ? whisper1 : whisper2;
    whisper.volume = 0.5;
    whisper.play().catch(() => {});

    // Rotate pencil
    let rotationAngle = 0;
    if (answer.includes("Yes")) rotationAngle = 0;     // points to top YES
    else if (answer.includes("No")) rotationAngle = 90; // points to right NO
    else rotationAngle = Math.random() * 90 - 45; // random spooky angle

    pencil.style.transform = `rotate(${rotationAngle}deg)`;

    // Fade out after time
    setTimeout(() => {
      response.style.opacity = 0;
    }, 4000);

  }, 2000); // delay = suspense 😭

});

// RANDOM jumpscare (20% chance 😈)
if (Math.random() < 0.2) {
  const jumpscare = document.getElementById("jumpscare");
  const sound = document.getElementById("jumpsound");

  jumpscare.style.opacity = 1;
  sound.play().catch(() => {});

  setTimeout(() => {
    jumpscare.style.opacity = 0;
  }, 1000);
}



