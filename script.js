// Function to create the wobbly container and add the image
function createWobblyContainer(imageSrc, top, left) {
    // Create container div
    const container = document.createElement('div');
    container.classList.add('wobbly-container');
    container.style.top = top;
    container.style.left = left;
  
    // Create image element and set its source
    const img = document.createElement('img');
    img.src = imageSrc;
    container.appendChild(img);
  
    // Append the container to the body
    document.body.appendChild(container);
  }
  
  // Wait 10 seconds and then add the beer image to the top-left corner
  setTimeout(() => {
    createWobblyContainer('./images/beer.png', '10px', '10px');
  }, 10000); // 10 seconds delay
  
  // Wait another 10 seconds and then add the spliff image to the bottom-right corner
  setTimeout(() => {
    createWobblyContainer('./images/splif.png', 'calc(100% - 60px)', 'calc(100% - 60px)');
  }, 20000); // 20 seconds total delay
  
  // Wait another 10 seconds and then add the footy image to the top-right corner
  setTimeout(() => {
    createWobblyContainer('./images/footy.png', '10px', 'calc(100% - 60px)');
  }, 30000); // 30 seconds total delay
  
  // Wait another 10 seconds and then add the rain image to the bottom-left corner
  setTimeout(() => {
    createWobblyContainer('./images/rain.png', 'calc(100% - 60px)', '10px');
  }, 40000); // 40 seconds total delay
  