let rotationDegree = 0;

function rotateElement() {
   rotationDegree += 45;
   document.getElementById("rotate-div").style.transform = `rotate(${rotationDegree}deg)`;
}

function toggleFade() {
   const div = document.getElementById('fade-div');
   div.classList.toggle('visible');
}

function togglePulse() {
   const div = document.getElementById('pulse-div');
   div.classList.toggle('pulsing');
}

function zoomIn() {
   const div = document.getElementById('zoom-div');
   div.classList.add('zooming')
}