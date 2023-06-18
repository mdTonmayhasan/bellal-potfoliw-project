

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
  
    // Original:
    // const sectionTop = current.offsetTop - 50;
    //  
    // Alex Turnwall's update:
    // Updated original line (above) to use getBoundingClientRect instead of offsetTop, based on:
    // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
    // https://newbedev.com/difference-between-getboundingclientrect-top-and-offsettop
    // This allows the use of sections inside a relative parent, which I'm not using here, but needed for a project
    //
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
    
  });
};

// backgorund color add 
window.onscroll = () =>{
    let header = document.querySelector(".header");
    let Section = document.querySelector("section")
    header.classList.toggle("sticky", window.scrollY > 100)
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
    
   
}

// navbar slider function 

let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
}



// Get all the sections with the 'scroll-section' class
const sectionm = document.querySelectorAll('section');
// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Loop through each section
  sectionm.forEach((section) => {
    // Calculate the position of the section relative to the viewport
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');
    const scrollPosition = window.pageYOffset;

    // Check if the section is visible in the viewport
    if (
      scrollPosition >= sectionTop - sectionHeight * 0.25 &&
      scrollPosition < sectionTop + sectionHeight * 0.75
    ) {
      // Add a class to the section
      section.classList.add('active');
      footer.classList.add('acitve');
      // add the class to section navigation link
      document
        .querySelector(`a[href="#${sectionId}"]`)
        .classList.add('active');
    } else {
      // Remove the class from the section
      section.classList.add('active')
      // remove the class from section navigation link
      document
        .querySelector(`a[href="#${sectionId}"]`)
         section.classList.remove('active')
    }
  });
});
