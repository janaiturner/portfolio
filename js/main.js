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
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight / 4);
    }, 100);
  } else {
    if (document.body.id === 'contact-page') {
      // Run the scroll code only for the contact page
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight / 2);
      }, 100);
    }
  }

  