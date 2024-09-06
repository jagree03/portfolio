///////////////////
// Accessing elements in the DOM, const variables.
///////////////////
const traffic_simulatorImage = document.getElementById('traffic_simulator');

const nextButton = document.getElementById('next');
const spanElement = document.getElementById('span');
const prevButton = document.getElementById('prev');

let moduleSelectionIndex = 0;
let moduleSelectionToolMaxImages = 3;
spanElement.textContent = 0;


///////////////////
// Functions
///////////////////
function navigate(projectTitle, direction) {

    switch(projectTitle) {
        case "module_selection_tool": 
            if (direction == "next") 
                moduleSelectionIndex += 1;
            else 
                moduleSelectionIndex -= 1;
                
            if (moduleSelectionIndex > moduleSelectionToolMaxImages) {
                moduleSelectionIndex = 0;
            } else if (moduleSelectionIndex < 0) {
                moduleSelectionIndex = moduleSelectionToolMaxImages;
            }

            changeImage(projectTitle, moduleSelectionIndex);
        
        case "e_commerce_system":

        case "cafe_oasis":

        case "media_oasis":

        case "frontend_lab":
    
    }
}

function changeImage(projectTitle, index, delay = 0) {
    const img = document.getElementById(projectTitle);
    spanElement.textContent = index;

    // fade out
    img.classList.add('fade');

    // wait for the fade out transition to complete
    setTimeout( () => {
        img.src = `img/2_modulesel/modulesel_${index}.png`;
        img.onload = () => {
            // fade in the new image by removing the fade added on the previous image.
            img.classList.remove('fade');
        };
    }, 100); // 100 milliseconds (0.1 s) Timeout duration matches the CSS transition duration
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
