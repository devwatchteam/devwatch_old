(function($win, $doc) {
  'use strict';

  // selection helper
  const $ = (selector, bool=true ) => bool ? [...$doc.querySelectorAll(`${selector}`)] : $doc.querySelector(`${selector}`);

  // find the desired selectors
  const btn = $('.site-nav-choice .site-nav-link');
  const ajax = $('.post-list', false);
  //const ajax = $doc.getElementById('ajax');
  const siteUrl = ($doc.location.href);

  // set up a request
  const request = new XMLHttpRequest();

  // keep track of the request
  request.onreadystatechange = () => {
    // check if the response data send back to us
    if(request.readyState === 4) {
      // console.log(request);
      // check if the request is successful
      if(request.status === 200) {
        // update the HTML of the element
        ajax.innerHTML = request.responseText;
      } else {
        // otherwise display an error message
        ajax.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      }
    }
  }

  // register an event
  btn.map(index => {
    index.addEventListener('click', function(e) {
      $('.site-nav-link_active', false).classList.remove('site-nav-link_active');
      e.target.classList.add('site-nav-link_active');
      // specify the type of request
      request.open('Get', `${siteUrl}${e.target.dataset.page}`);
      // send the request
      request.send();
    });
  });

})(window, document);
