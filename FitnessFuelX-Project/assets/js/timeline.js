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


/*=============== LIKE REACTION ===============*/

const likeBtns = document.querySelectorAll('.like');

likeBtns.forEach(function(likeBtn) {
  const likeIcon = likeBtn.querySelector('i');
  const likeParagraph = likeBtn.querySelector('p');
  let isLiked = false;
  
  likeBtn.addEventListener('click', function() {
    if (isLiked) {
      likeIcon.style.color = '';
      likeParagraph.style.color = '';
      likeIcon.style.transform = '';
      isLiked = false;
    } else {
      likeIcon.style.color = ' #ff0000';
      likeParagraph.style.color = ' #ff0000';
      likeIcon.style.transform = 'rotateY(40deg)';
      setTimeout(function() {
        likeIcon.style.transform = '';
      }, 500);
      isLiked = true;
    }
  });
});


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


/*=============== Comments Bar ===============*/

const posts = document.querySelectorAll('.comment-box');
for (let post of posts) {
  post.addEventListener('click', () => {
    const input = post.closest('.post__maker').querySelector('.comment__input');
    input.focus();
  });
}


/*=============== likes Bar ===============*/

// get all the likes elements
const likes = document.querySelectorAll('.likes');

// loop over the likes elements and add a click event listener to each one
likes.forEach(like => {
  // get the likes-container element for this like
  const container = like.querySelector('.likes-container');
  
  // add a click event listener to the like element
  like.addEventListener('click', (event) => {
    event.stopPropagation(); // prevent the click event from bubbling up to the document object
    container.style.display = 'block'; // show the likes-container element
  });
  
  // add a click event listener to the document object
  document.addEventListener('click', () => {
    container.style.display = 'none'; // hide the likes-container element
  });
});





/*=============== comments Bar ===============*/


// get all the comments elements
const comments = document.querySelectorAll('.comments');

// loop over the comments elements and add a click event listener to each one
comments.forEach(comment => {
  // get the likes-container element for this like
  const container = comment.querySelector('.comments-container');
  
  // add a click event listener to the comment element
  comment.addEventListener('click', (event) => {
    event.stopPropagation(); // prevent the click event from bubbling up to the document object
    container.style.display = 'block'; // show the comments-container element
  });
  
  // add a click event listener to the document object
  document.addEventListener('click', () => {
    container.style.display = 'none'; // hide the comments-container element
  });
});







document.getElementById('fileButton').addEventListener('click', function() {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function() {
  var fileName = this.value.split('\\').pop();
  if (fileName) {
    // Display the selected file name or perform any other desired action
    console.log('Selected file:', fileName);
  }
});





