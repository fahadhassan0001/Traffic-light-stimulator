let currentLight = 0; // Start with red light
const lights = document.querySelectorAll('.light');

// Function to change the traffic light
function changeLight() {
  // Reset all lights to inactive
  lights.forEach(light => light.classList.remove('active'));

  // Activate the current light
  lights[currentLight].classList.add('active');

  // Update to the next light in the cycle
  currentLight = (currentLight + 1) % lights.length;
}

// Change light every 3 seconds
setInterval(changeLight, 3000);
