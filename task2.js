let timer;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let lapCount = 0;

function startStop() {
    if (isRunning) {
      clearInterval(timer);
      document.getElementById("startStop").textContent = "Start";
      isRunning = false;
    } else {
      if (elapsedTime === 0) {
        startTime = Date.now();
      } else {
        startTime = Date.now() - elapsedTime;
      }
      timer = setInterval(updateDisplay, 10);
      document.getElementById("startStop").textContent = "Stop";
      isRunning = true;
    }
  }
  
  
  

  function updateDisplay() {
    let elapsedTimeInSeconds = Math.floor((Date.now() - startTime) / 1000); 
    let milliseconds = (Date.now() - startTime) % 1000;
    const minutes = Math.floor(elapsedTimeInSeconds / 60);
    const seconds = elapsedTimeInSeconds % 60;
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(3, "0").slice(0, 2)}`;
    document.getElementById("display").textContent = formattedTime;
  }
  

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const millisecondsFormatted = date.getMilliseconds().toString().padStart(3, "0").slice(0, 2);
  return `${minutes}:${seconds}:${millisecondsFormatted}`;
}

function reset() {
  clearInterval(timer);
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStop").textContent = "Start";
  lapCount = 0;
  isRunning = false;
  document.getElementById("laps").innerHTML = "";
  elapsedTime = 0;
}

function lap() {
  if (isRunning) {
    lapCount++;
    const lapTime = document.createElement("li");
    lapTime.textContent = `Lap ${lapCount}: ${document.getElementById("display").textContent}`;
    document.getElementById("laps").appendChild(lapTime);
  }
}
