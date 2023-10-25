const dateInput = document.getElementById("date");
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

let countdownInterval;

function updateCountdown(eventDate) {
  const now = new Date();

  // If the chosen date and time has been reached, stop the countdown.
  if (now >= eventDate) {
    clearInterval(countdownInterval);
    daysSpan.textContent = "0";
    hoursSpan.textContent = "0";
    minutesSpan.textContent = "0";
    secondsSpan.textContent = "0";
    return;
  }

  const totalSeconds = (eventDate - now) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysSpan.textContent = days;
  hoursSpan.textContent = hours;
  minutesSpan.textContent = minutes;
  secondsSpan.textContent = seconds;
}

function startCountdown() {
  clearInterval(countdownInterval); // Stop any existing countdown.
  const eventDate = new Date(dateInput.value);
  updateCountdown(eventDate); // Run the countdown immediately.
  countdownInterval = setInterval(() => updateCountdown(eventDate), 1000); // Then update every second.
}

dateInput.addEventListener("change", () => {
  localStorage.setItem("countdown", dateInput.value); // Store the chosen date and time.
  startCountdown();
});

// Initialization function that runs when the page loads
function initializeCountdown() {
  // Retrieve the chosen date and time from local storage, if it exists.
  const storedDate = localStorage.getItem("countdown");
  if (storedDate) {
    dateInput.value = storedDate;
    startCountdown();
  }
}

initializeCountdown();
