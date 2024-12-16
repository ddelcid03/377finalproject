fetch('https://api.spaceflightnewsapi.net/v4/articles')
  .then(response => response.json())
  .then(data => {
    const articlesList = document.getElementById('articles');
    articlesList.innerHTML = data.results.map(article => `<li>${article.title} - <a href="${article.url}" target="_blank">Read More</a></li>`).join('');
  });