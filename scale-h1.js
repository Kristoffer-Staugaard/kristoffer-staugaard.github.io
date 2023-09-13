function fitH1ToParent() {
    const parentDiv = document.querySelector('.header-profile');
    const h1Element = document.querySelector('#fit-h1');
  
    const parentWidth = parentDiv.clientWidth - (parseInt(getComputedStyle(parentDiv).paddingLeft) + parseInt(getComputedStyle(parentDiv).paddingRight));
    const parentHeight = parentDiv.clientHeight - (parseInt(getComputedStyle(parentDiv).paddingTop) + parseInt(getComputedStyle(parentDiv).paddingBottom));
  
    let fontSize = 75; // Initial font size in pixels
    h1Element.style.fontSize = fontSize + 'px';
  
    while (h1Element.offsetWidth > parentWidth || h1Element.offsetHeight > parentHeight) {
      fontSize -= 1; // Decrease font size by 1 pixel
      h1Element.style.fontSize = fontSize + 'px';
    }
  }
  
  // Call the function to fit the h1 text when the page loads or whenever needed
  fitH1ToParent();
  