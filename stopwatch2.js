window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var mins= 00;
  var hrs = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var appmins = document.getElementById("mins")
  var apphrs = document.getElementById("hrs")

  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    mins = "00";
    hrs = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    appmins.innerHTML = mins;
    apphrs.innerHTML = hrs;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9 && seconds <60){
      appendSeconds.innerHTML = seconds;
    }
  
  if(seconds >59){
    mins++;
    appmins.innerHTML = "0" + mins;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }
  if(mins>59){
    hrs++;
    apphrs.innerHTML= "0" + hrs;
    mins = 0;
    appmins.innerHTML = "0" + 0;
  }
  }
  

}