const { supabase } = require('./supabase');

const insertArticle = async () => {
  const articles = [
    {
      title: 'SpaceX Launches New Starship',
      url: 'https://spacex.com/new-starship',
    },
    {
      title: 'NASA Announces Artemis Updates',
      url: 'https://nasa.gov/artemis-updates',
    },
  ];

  for (const article of articles) {
    console.log('Inserting article:', article); // Debugging log

    const { data, error } = await supabase
      .from('articles') // Use lowercase "articles" here
      .insert([{ title: article.title, url: article.url }]);

    if (error) {
      // Log the full error object for more details
      console.error('Error inserting article:', error.message, error);
    } else {
      console.log('Inserted article:', data);
    }
  }
};

insertArticle();
