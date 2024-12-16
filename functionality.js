fetch('https://api.spaceflightnewsapi.net/v4/articles')
  .then(response => response.json())
  .then(data => {
    const articlesList = document.getElementById('articles');
    articlesList.innerHTML = data.results.map(article => `
      <li>
        ${article.title} - 
        <a href="${article.url}" target="_blank">Read More</a>
        <button class="save-btn" data-title="${article.title}" data-url="${article.url}">Save</button>
      </li>
    `).join('');
    
    const saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(button => {
      button.addEventListener('click', saveArticle);
    });
  });

function saveArticle(event) {
  const title = event.target.getAttribute('data-title');
  const url = event.target.getAttribute('data-url');
  
  fetch('/api/save-article', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, url }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      console.error('Error saving article:', data.error);
    } else {
      alert('Article saved successfully!');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
