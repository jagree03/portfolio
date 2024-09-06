///////////////////
// Accessing elements in the DOM, const variables.
///////////////////
const traffic_simulatorImage = document.getElementById('traffic_simulator');

const nextButton = document.getElementById('next');
const spanElement = document.getElementById('span');
const prevButton = document.getElementById('prev');


///////////////////
// Mutable variable declarations
///////////////////

// Traffic Simulator
let trafficSimIndex = 0;
let trafficSimMaxImages = 3;

// Module Selection tool
let moduleSelectionIndex = 0;
let moduleSelectionToolMaxImages = 3;

// E-commerce System Prototype
let eCommerceIndex = 0;
let eCommerceMaxImages = 3;

// Cafe Oasis Mobile App
let cafeOasisIndex = 0;
let cafeOasisMaxImages = 3;

// Media Oasis Mobile App
let mediaOasisIndex = 0;
let mediaOasisMaxImages = 3;

// Projector Palace Front End Website
let projectorPalaceIndex = 0;
let projectorPalaceMaxImages = 3;

spanElement.textContent = 0;


///////////////////
// Functions
///////////////////
function navigate(projectTitle, direction) {

    switch(projectTitle) {
        case "traffic_simulator":

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
            if (direction == "next") 
                eCommerceIndex += 1;
            else 
                eCommerceIndex -= 1;
                
            if (eCommerceIndex > eCommerceMaxImages) {
                eCommerceIndex = 0;
            } else if (eCommerceIndex < 0) {
                eCommerceIndex = eCommerceMaxImages;
            }

            changeImage(projectTitle, eCommerceIndex);

        case "cafe_oasis":
            if (direction == "next") 
                cafeOasisIndex += 1;
            else 
                cafeOasisIndex -= 1;
                
            if (cafeOasisIndex > cafeOasisMaxImages) {
                cafeOasisIndex = 0;
            } else if (moduleSelectionIndex < 0) {
                cafeOasisIndex = cafeOasisMaxImages;
            }

            changeImage(projectTitle, cafeOasisMaxImages);

        case "media_oasis":
            if (direction == "next") 
                mediaOasisIndex += 1;
            else 
                mediaOasisIndex -= 1;
                
            if (mediaOasisIndex > mediaOasisMaxImages) {
                mediaOasisIndex = 0;
            } else if (mediaOasisIndex < 0) {
                mediaOasisIndex = mediaOasisMaxImages;
            }

            changeImage(projectTitle, mediaOasisIndex);

        case "projector_palace":
            if (direction == "next") 
                projectorPalaceIndex += 1;
            else 
                projectorPalaceIndex -= 1;
                
            if (projectorPalaceIndex > projectorPalaceMaxImages) {
                projectorPalaceIndex = 0;
            } else if (projectorPalaceIndex < 0) {
                projectorPalaceIndex = projectorPalaceMaxImages;
            }

            changeImage(projectTitle, projectorPalaceIndex);
    
    }
}

function changeImage(projectTitle, index, delay = 0) {
    const img = document.getElementById(projectTitle);
    spanElement.textContent = index;

    // fade out
    img.classList.add('fade');

    // wait for the fade out transition to complete
    setTimeout( () => {
        img.src = `img/${projectTitle}/${index}.png`;
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
