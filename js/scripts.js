///////////////////
// Accessing elements in the DOM, const variables.
///////////////////
const traffic_simulatorImage = document.getElementById('traffic_simulator');

const nextButton = document.getElementById('next');
const spanElement = document.getElementById('span');
const prevButton = document.getElementById('prev');

let index = 0;
spanElement.textContent = 0;

let moduleSelectionToolMaxImages = 3;


///////////////////
// Functions
///////////////////
function navigate(projectTitle, direction) {

    if (direction == "next") 
        index += 1;
    else 
        index -= 1;

    switch(projectTitle) {
        case "module_selection_tool": changeImage(projectTitle, moduleSelectionToolMaxImages);
        
        case "e_commerce_system":

        case "cafe_oasis":

        case "media_oasis":

        case "frontend_lab":
    
    }
}

function changeImage(projectTitle, max) {
    const img = document.getElementById(projectTitle);
    //console.log(img);

    if (index > max) {
        index = 0;
    } else if (index < 0) {
        index = max;
    }

    spanElement.textContent = index;
    img.src = `img/2_modulesel/modulesel_${index}.png`;
}


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

nextButton.addEventListener('click', ev => {
    const project = ev.target.parentElement.parentElement.firstElementChild.id; // traverse around the DOM tree to locate the img alt text stored in another <div> element.
    navigate(project, "next");
})

prevButton.addEventListener('click', ev => {
    const project = ev.target.parentElement.parentElement.firstElementChild.id; // traverse around the DOM tree to locate the img alt text stored in another <div> element.
    navigate(project, "prev");
})
