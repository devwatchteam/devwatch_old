(function($win, $doc) {
  'use strict';

  // selection helper
  const $ = (selector, bool=true ) => bool ? [...$doc.querySelectorAll(`${selector}`)] : $doc.querySelector(`${selector}`);

  // find the desired selectors
  const btn = $('.site-nav-choice .site-nav-link');
  // const ajax = $('.post-list', false);
  // //const ajax = $doc.getElementById('ajax');
  // const siteUrl = ($doc.location.href);
  //
  // // set up a request
  // const request = new XMLHttpRequest();
  //
  // // keep track of the request
  // request.onreadystatechange = () => {
  //   // check if the response data send back to us
  //   if(request.readyState === 4) {
  //     // console.log(request);
  //     // check if the request is successful
  //     if(request.status === 200) {
  //       // update the HTML of the element
  //       ajax.innerHTML = request.responseText;
  //     } else {
  //       // otherwise display an error message
  //       ajax.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
  //     }
  //   }
  // }

  // register an event
  btn.map(index => {
    index.addEventListener('click', function(e) {
      $('.site-nav-link_active', false).classList.remove('site-nav-link_active');
      e.target.classList.add('site-nav-link_active');
      $doc.body.classList.remove('filter-tuts', 'filter-arts', 'filter-all');
      if (e.target.dataset.page === "tutorials") {
        $doc.body.classList.add('filter-tuts');
      } else if (e.target.dataset.page === "articles") {
        $doc.body.classList.add('filter-arts');
      } else {
        $doc.body.classList.add('filter-all');
      }
      // // specify the type of request
      // request.open('Get', `${siteUrl}${e.target.dataset.page}`);
      // // send the request
      // request.send();
    });
  });

  const postTuts = $('.tuts', false);
  const postArts = $('.arts', false);
  if (postTuts && !postArts || postArts && !postTuts) {
    $('.site-nav-choice', false).style.display = "none";
  }

  const navLinks = $('.cats .site-nav-link');
  const currentLocation = $doc.location.pathname.split("/");
  switch (currentLocation[currentLocation.length - 2]) {
    case 'html':
    $('.html', false).classList.add('site-nav-link_active');
    break;
    case 'javascript':
    $('.javascript', false).classList.add('site-nav-link_active');
    break;
    case 'web-design':
    $('.web-design', false).classList.add('site-nav-link_active');
    break;
    case 'css':
    $('.css', false).classList.add('site-nav-link_active');
    break;
    case 'sass':
    $('.sass', false).classList.add('site-nav-link_active');
    break;
    default:
    console.log("home is where the heart is.");
  }

  // navLinks.map(link => {
  //   link.addEventListener('click', () => {
  //     navLinks.map(navLink => {
  //       navLink.classList.remove('site-nav-link_active');
  //     });
  //     //.classList.add('site-nav-link_active');
  //   });
  // });

})(window, document);
