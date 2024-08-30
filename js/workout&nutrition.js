/*=============== SHOW MENU ===============*/
const headerToggle = document.getElementById('header-toggle'),
      main = document.getElementById('main'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(headerToggle){
    headerToggle.addEventListener('click', () =>{
        main.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        main.classList.remove('show-menu')
    })
}


/*=============== SEARCH BAR JS ===============*/
const toggleSearch = (search, button) =>{
    const searchBar = document.getElementById(search),
        searchButton = document.getElementById(button) 

        searchButton.addEventListener('click', () =>{
        // we add the show-search class, so that the search bar expands
        searchBar.classList.toggle('show-search')
    })

}

toggleSearch('search-bar','search-button')

/*=============== Notifications Bar ===============*/

const notificationEl = document.querySelector('.notification');
const notificationsContainerEl = document.querySelector('.notifications-container');

notificationEl.addEventListener('click', function() {
  notificationsContainerEl.style.display = 'block';
});

document.addEventListener('click', function(event) {
  const targetEl = event.target;
  
  if (targetEl !== notificationEl && !notificationsContainerEl.contains(targetEl)) {
    notificationsContainerEl.style.display = 'none';
  }
});


/*=============== dayDots===============*/


const hamburger = document.querySelector(".hamburger");
const navDays = document.querySelector(".nav-days");

hamburger.onclick = function () {
  navDays.classList.toggle("active");
};

document.onclick = function (event) {
  const targetElement = event.target;
  if (!targetElement.classList.contains("hamburger")) {
    navDays.classList.remove("active");
  }
};


/*=============== Swipper===============*/

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


/*=============== Swipper===============*/
const sections = document.querySelectorAll('section[id')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav-days a[href*=' + sectionId + ']')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active')
        }else{
            sectionsClass.classList.remove('active')
        }      
    })
}




// Get the header element
const header = document.getElementsByClassName(".days-header");

// Get the initial position of the header
const headerOffsetTop = header.offsetTop;

// Function to handle scroll events
function handleScroll() {
  // Get the current scroll position
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Check if the scroll position has passed the header's initial position
  if (scrollPosition > headerOffsetTop) {
    // If yes, fix the header position
    header.style.position = 'fixed';
    header.style.top = '0';
  } else {
    // If no, restore the header's original position
    header.style.position = 'relative';
    header.style.top = 'auto';
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);



