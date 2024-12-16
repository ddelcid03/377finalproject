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
    console.log('Inserting article:', article); 

    const { data, error } = await supabase
      .from('articles') 
      .insert([{ title: article.title, url: article.url }]);

    if (error) {
      console.error('Error inserting article:', error.message, error);
    } else {
      console.log('Inserted article:', data);
    }
  }
};

insertArticle();
