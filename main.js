fetch('https://api.spaceflightnewsapi.net/v4/articles')
  .then(response => response.json())
  .then(data => {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = data.results.slice(0, 5).map(article => 
      `<p>${article.title}</p>`
    ).join('');
  })
  .catch(error => {
    console.error('Error fetching articles:', error);
  });
