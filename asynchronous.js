// Get the countdown element
const countdown = document.getElementById('countdown');

// Set the initial count
let count = 10;
countdown.textContent = count;


// Set the interval function to decrease the count and update the text
const intervalID = setInterval(() => {
    count--;
    countdown.textContent = count;

    // If the count reaches 0, stop the interval and turn the text red
    if (count === 0) {
      clearInterval(intervalID);
      countdown.style.color = 'red';
      counterElem.classList.add("flash");
    }
  }, 1000);