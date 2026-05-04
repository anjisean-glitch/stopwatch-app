 let timer = 0;
 let interval;

 document.getElementById("startButton").onclick = function() {
   if (interval) return;
  interval = setInterval(counter, 1000);

  function formatTime(unit) {
  return unit < 10 ? "0" + unit : unit;
}

  function counter() {
    timer = timer + 1;
    let hours = Math.floor(timer / 3600);
  let minutes = Math.floor((timer % 3600) / 60);
  let seconds = timer % 60;
 

   document.getElementById("timerText").textContent =  formatTime(hours) + ":" +formatTime(minutes) + ":" +formatTime(seconds);
  }
 }

 document.getElementById("stopButton").onclick = function() {
  clearInterval(interval);
  interval = null;
}

document.getElementById("resetButton").onclick = function() {
  clearInterval(interval);   
  interval = null;           
  timer = 0;                
  document.getElementById("timerText").textContent = "00:00:00"; 
}