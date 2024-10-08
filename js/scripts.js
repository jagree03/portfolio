///////////////////
// Accessing elements in the DOM, const variables.
///////////////////
const traffic_simulatorImage = document.getElementById('traffic_simulator');

const nextButtons = document.querySelectorAll('.next');
const spanElements = document.querySelectorAll('.span');
const prevButtons = document.querySelectorAll('.prev');

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

///////////////////
// Functions
///////////////////
function navigate(projectTitle, direction, span) {

    switch(projectTitle) {
        case "traffic_simulator":
            if (direction == "next") 
                trafficSimIndex += 1;
            else 
                trafficSimIndex -= 1;
                
            if (trafficSimIndex > trafficSimMaxImages) {
                trafficSimIndex = 0;
            } else if (trafficSimIndex < 0) {
                trafficSimIndex = trafficSimMaxImages;
            }

            span.textContent = trafficSimIndex;
            changeImage(projectTitle, trafficSimIndex);
            break;

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

            span.textContent = moduleSelectionIndex;
            changeImage(projectTitle, moduleSelectionIndex);
            break;
        
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
            
            span.textContent = eCommerceIndex;
            changeImage(projectTitle, eCommerceIndex);
            break;

        case "cafe_oasis":
            if (direction == "next") 
                cafeOasisIndex += 1;
            else 
                cafeOasisIndex -= 1;
                
            if (cafeOasisIndex > cafeOasisMaxImages) {
                cafeOasisIndex = 0;
            } else if (cafeOasisIndex < 0) {
                cafeOasisIndex = cafeOasisMaxImages;
            }

            span.textContent = cafeOasisIndex;
            changeImage(projectTitle, cafeOasisIndex);
            break;

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

            span.textContent = mediaOasisIndex;
            changeImage(projectTitle, mediaOasisIndex);
            break;

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

            span.textContent = projectorPalaceIndex;
            changeImage(projectTitle, projectorPalaceIndex);
            break;
    }
}

function changeImage(projectTitle, index, delay = 0) {
    const img = document.getElementById(projectTitle);
    // console.log("traf: " + trafficSimIndex);
    // console.log("modul: " + moduleSelectionIndex);
    // console.log("ecom: " + eCommerceIndex);
    // console.log("cafe: " + cafeOasisIndex);
    // console.log("mediaoasis: " + mediaOasisIndex);
    // console.log("projector: " + projectorPalaceIndex);

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

function resetSpanTextContent(span) {
    span.textContent = 0;
}

function findMatchingSpan(id) {
    for (const span of spanElements) {
        let span_id = span.parentNode.parentNode.firstChild.nextSibling.id; // capture img element's id of each span of all span elements
        if (span_id == id) { // check if the img element id, matches the passed in id.
            return span;
        }
    }
}


///////////////////
// Event listeners
///////////////////

// traffic_simulatorImage.addEventListener('mouseover', ev => {
//     traffic_simulatorImage.src = "img/trafficsim_01.gif";
//     traffic_simulatorImage.style.width = "700px";
//     traffic_simulatorImage.style.height = "auto";
// })

// traffic_simulatorImage.addEventListener('mouseout', ev => {
//     traffic_simulatorImage.src = "img/trafficsim_00.png";
//     traffic_simulatorImage.style.width = "700px";
//     traffic_simulatorImage.style.height = "auto";
// })

nextButtons.forEach(next => {
    next.addEventListener('click', ev => {
        const projectId = ev.target.parentElement.parentElement.firstElementChild.id; // traverse around the DOM tree to locate the img alt text stored in another <div> element.
        const matchingSpan = findMatchingSpan(projectId);
        //console.log("Project: " + projectId);
        navigate(projectId, "next", matchingSpan);
    })
})

prevButtons.forEach(prev => {
    prev.addEventListener('click', ev => {
        const projectId = ev.target.parentElement.parentElement.firstElementChild.id; // traverse around the DOM tree to locate the img alt text stored in another <div> element.
        const matchingSpan = findMatchingSpan(projectId);
        //console.log("Project: " + projectId);
        navigate(projectId, "prev", matchingSpan);
    })
})


///////////////////
// On-load - On-Start
///////////////////
spanElements.forEach(span => span.textContent = 0);
