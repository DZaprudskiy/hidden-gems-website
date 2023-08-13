// geminfo.js

// Function to parse query parameters from URL
function parseQueryString() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    return params.get('gemIndex');
  }
  
  // Function to create star elements based on the rating
  function createStars(rating) {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.textContent = i <= rating ? '☆' : '★';
      star.classList.add(i <= rating ? 'star-filled' : 'star-empty');
      starsContainer.appendChild(star);
    }
    
    return starsContainer.outerHTML;
  }
  
 // Function to display reviews and ratings
function displayReviews(reviews) {
    // Sort reviews by date (newest first)
    const sortedReviews = reviews.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  
    const reviewsContainer = document.createElement('div');
    reviewsContainer.classList.add('reviews-container');
  
    sortedReviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        
        const reviewHeader = document.createElement('div');
        reviewHeader.classList.add('review-header');
        reviewHeader.innerHTML = `
          <div class="username">${review.name}</div>
          <div class="date">${review.date}</div>
        `;
        
        const reviewComment = document.createElement('div');
        reviewComment.classList.add('review-comment');
        reviewComment.innerHTML = `
          <p>${review.comment}</p>
        `;
        
        const rating = document.createElement('div');
        rating.classList.add('rating');
        rating.innerHTML = `${createStars(review.rating)}`;
      
        // Append the review header, rating, and comment to the reviewItem
        reviewItem.appendChild(reviewHeader);
        reviewItem.appendChild(rating);
        reviewItem.appendChild(reviewComment);
        
        reviewsContainer.appendChild(reviewItem);
      });
  
    return reviewsContainer;
}


  // Function to generate HTML list items for places to visit
  function generatePlacesToVisitList(places) {
    let placesHtml = '';

    for (const place of places) {
      placesHtml += `<li><strong>${place.title}</strong>: ${place.description}</li>`;
    }
  
    return placesHtml;
  }
  
  // Function to display gem information
  function displayGemInfo(gem) {
    const gemInfoContainer = document.getElementById('gem-info-container');
    const gemInfo = document.createElement('div');
    gemInfo.classList.add('gem-info');
  
    gemInfo.innerHTML = `
    <img src="${gem.image}" alt="${gem.name} Image">
    <h2>${gem.name}</h2>
    <p>${gem.blurb}</p>
    <h3>Description:</h3>
    <p>${gem.description}</p>
    <h3>History:</h3>
    <p>${gem.history}</p>
    <h3>Directions:</h3>
    <p>Walking: ${gem.directions.walking}</p>
    <p>Driving: ${gem.directions.driving}</p>
    <p>Transit: ${gem.directions.transit}</p>
    <h3>Places to Visit:</h3>
    <ul>
        ${generatePlacesToVisitList(gem.visit)}
    </ul>
  `;
  
    gemInfoContainer.appendChild(gemInfo);
  
    const reviewsSection = document.createElement('section');
    reviewsSection.classList.add('reviews-section');
    reviewsSection.innerHTML = `
      
    `;
  
    const reviewsContainer = displayReviews(gem.reviews);
    reviewsSection.appendChild(reviewsContainer);
  
    // Append both gem info and reviews side by side
    gemInfoContainer.appendChild(gemInfo);
    gemInfoContainer.appendChild(reviewsSection);
  
    // Update title and header dynamically
    document.title = `${gem.name} Information`;
    const headerTitle = document.querySelector('header h1');
    headerTitle.textContent = `${gem.name} Information`;
  }
  
  // Call the function to get the gem index from the query parameter
  const gemIndex = parseQueryString();
  
  // Display the gem information
  const gem = hiddenGems[gemIndex];
  if (gem) {
    displayGemInfo(gem);
  } else {
    console.error('Invalid gem index or gem not found.');
  }
  
  // Function to handle review form submission
function handleReviewSubmission(event) {
    event.preventDefault();
  
    const userName = document.getElementById('user-name').value;
    const rating = parseInt(document.getElementById('rating').value);
    const comment = document.getElementById('comment').value;
    const currentDate = new Date().toLocaleDateString();
  
    const newReview = {
      name: userName,
      date: currentDate,
      rating: rating,
      comment: comment,
    };
  
    // Add the new review to the gem's reviews array
    hiddenGems[gemIndex].reviews.push(newReview);
  
    // Clear the form fields
    document.getElementById('user-name').value = '';
    document.getElementById('rating').value = '1';
    document.getElementById('comment').value = '';
  
    // Display the updated reviews
    const reviewsSection = document.querySelector('.reviews-section');
    const newReviewsContainer = displayReviews(hiddenGems[gemIndex].reviews);
    reviewsSection.innerHTML = ''; // Clear the existing reviews
    reviewsSection.appendChild(newReviewsContainer);
  }
  
  // Attach event listener to the review form
  const reviewForm = document.getElementById('review-form');
  reviewForm.addEventListener('submit', handleReviewSubmission);
  

  // Add event listeners to stars for rating selection
const starRating = document.getElementById('star-rating');
const stars = starRating.getElementsByClassName('star');

for (const star of stars) {
  star.addEventListener('click', () => {
    const selectedRating = star.getAttribute('data-rating');
    document.getElementById('rating').value = selectedRating;
    updateStarRating(selectedRating);
  });
}

// Function to update star rating display
function updateStarRating(selectedRating) {
  for (const star of stars) {
    const starRating = parseInt(star.getAttribute('data-rating'));
    if (starRating <= selectedRating) {
      star.textContent = '★';
    } else {
      star.textContent = '☆';
    }
  }
}