// JS scripts placed here
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  if (window.innerWidth < 800) {
  console.log('Smaller Screen - Scrolling');
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight / 3);

    // Add the id attribute to the element with the id "contact-page"
    document.getElementById('contact-page').id = 'contact-page';
   }, 100);
  } else {
    if (document.body.id === 'contact-page') {
      console.log('Contact Page - Scrolling');
      // Run the scroll code only for the contact page
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight / 2);
      }, 100);
    }
  }

  // if (window.innerWidth < 800) {
  //   setTimeout(() => {
  //     window.scrollTo(0, document.body.scrollHeight / 4);
  //   }, 100);
  // } else {
  //   if (document.body.id === 'contact-page') {
  //     // Run the scroll code only for the contact page
  //     setTimeout(() => {
  //       window.scrollTo(0, document.body.scrollHeight / 2);
  //     }, 100);
  //   }
  // }

  