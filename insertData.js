const { supabase } = require('./supabase');

const insertArticle = async () => {
  const articles = [
    {
      title: 'SpaceX Launches New Starship',
      url: 'https://spacex.com/new-starship',
      description: 'SpaceX successfully launches its latest Starship rocket.',
    },
    {
      title: 'NASA Announces Artemis Updates',
      url: 'https://nasa.gov/artemis-updates',
      description: 'NASA reveals new updates about the Artemis lunar program.',
    },
  ];

  for (const article of articles) {
    const { data, error } = await supabase
      .from('Articles')
      .insert([{ title: article.title, url: article.url, description: article.description }]);

    if (error) {
      console.error('Error inserting article:', error);
    } else {
      console.log('Inserted article:', data);
    }
  }
};

insertArticle();
