// index.js

// Function to load gems from data.js and generate gem cards
function loadGemsAndGenerateCards() {
    const gemCardsContainer = document.getElementById('cards-container');
  
    // Loop through hiddenGems and generate gem cards
    hiddenGems.forEach((gem, index) => {
      const gemCard = document.createElement('div');
      gemCard.classList.add('gem-card');
  
      // Create a link to geminfo.html with the gem's index as a query parameter
      const gemLink = document.createElement('a');
      gemLink.href = `geminfo.html?gemIndex=${index}`;
  
      // Create an image element
      const gemImage = document.createElement('img');
      gemImage.src = gem.image;
      gemImage.alt = `${gem.name} Image`;
  
      // Create a text container
      const textContainer = document.createElement('div');
      textContainer.classList.add('text-container');
      
      // Create h2 element for gem name
      const gemName = document.createElement('h2');
      gemName.textContent = gem.name;
  
      // Create p element for gem blurb
      const gemBlurb = document.createElement('p');
      gemBlurb.textContent = gem.blurb;
  
      // Append elements to their respective parents
      textContainer.appendChild(gemName);
      textContainer.appendChild(gemBlurb);
      gemLink.appendChild(gemImage);
  
      // Append the gemLink and textContainer to the gemCard
      gemCard.appendChild(gemLink);
      gemCard.appendChild(textContainer);
  
      // Append the gemCard to the gemCardsContainer
      gemCardsContainer.appendChild(gemCard);
    });
  }
  
  
  // Call the function to load gems and generate cards when the DOM is ready
  document.addEventListener('DOMContentLoaded', loadGemsAndGenerateCards);
  