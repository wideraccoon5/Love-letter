const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const letter = document.getElementById("letter");

function showFirstLetter() {
  letter.classList.remove("landscape");
  letter.innerHTML = `
    <h1>Do you love me?</h1>
    <img src="Cute cartoon.gif" alt="Cute cartoon" class="gif">  <!-- make sure path matches -->
    <div class="buttons">
      <button id="yesBtn">Yes</button>
      <button id="noBtn">No</button>
    </div>
  `;

  addButtonListeners(); // reattach events
}

function showSecondLetter() {
  letter.classList.add("landscape");
  letter.innerHTML = `
    <h1>I know you do!!</h1>
    <img src="Cute hug.gif" alt="Cute hug" class="gif">
    <div class="buttons">
      <button id="returnBtn">Return</button>
    </div>
  `;

  // add return button event
  document.getElementById("returnBtn").addEventListener("click", showFirstLetter);
}

function addButtonListeners() {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  yesBtn.addEventListener("click", showSecondLetter);

  noBtn.addEventListener("click", () => {
    // get old position before moving
    const rect = noBtn.getBoundingClientRect();
    const oldX = rect.left + rect.width / 2;
    const oldY = rect.top + rect.height / 2;

    // create heart where button was
    const heart = document.createElement("div");
    heart.innerHTML = "❤";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    heart.style.left = `${oldX}px`;
    heart.style.top = `${oldY}px`;

    setTimeout(() => heart.remove(), 800);

    // instantly teleport to new random spot
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
}

// initialize
addButtonListeners();
