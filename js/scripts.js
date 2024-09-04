///////////////////
// Accessing elements in the DOM, const variables.
///////////////////
const traffic_simulatorImage = document.getElementById('traffic_simulator');

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');


///////////////////
// Functions
///////////////////



///////////////////
// Event listeners
///////////////////
traffic_simulatorImage.addEventListener('mouseover', ev => {
    traffic_simulatorImage.src = "img/trafficsim_01.gif";
    traffic_simulatorImage.style.width = "700px";
    traffic_simulatorImage.style.height = "auto";
})

traffic_simulatorImage.addEventListener('mouseout', ev => {
    traffic_simulatorImage.src = "img/trafficsim_00.png";
    traffic_simulatorImage.style.width = "700px";
    traffic_simulatorImage.style.height = "auto";
})