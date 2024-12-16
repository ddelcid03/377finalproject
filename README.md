# 377finalproject

Title: Spaceflight News

Description: SpaceFlight is a web application that collects and displays the latest space exploration news articles from various sources. Users can view, save, and access news articles about space missions, satellite launches, and other space-related activities. The app allows users to save articles for later viewing, and it connects to a Supabase database to store these saved articles.


Target Browsers: The application supports all modern desktop browsers (Chrome, Firefox, Safari, Edge) and mobile browsers on iOS and Android.



Developer Manual:

This manual is for developers who will be working on the SpaceFlight project after the initial development phase. It will guide you through setting up the application, running it on a server, running tests, and interacting with the API.

---

## 1. Setting Up the Application Locally

### Prerequisites
Before you begin, make sure you have the following installed on your machine:
- **Node.js** (version 16 or higher)
- **npm** (Node Package Manager)
- A GitHub account and access to the repository.

### 1.1 Cloning the Repository

1. Clone the SpaceFlight project repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/spaceflight.git
Navigate into the project directory:
bash
Copy code
cd spaceflight
1.2 Installing Dependencies
Install all the necessary dependencies using npm:

bash
Copy code
npm install
This will install dependencies listed in the package.json file, including:

express: Web framework for Node.js.
@supabase/supabase-js: JavaScript client for interacting with the Supabase API.
Other utility libraries as needed.
1.3 Configuration for Supabase
Ensure you have the following Supabase environment variables set up:

SUPABASE_URL: Your Supabase instance URL.
SUPABASE_ANON_KEY: Your Supabase anonymous key for interacting with the database.
These variables can be set in a .env file in the root of the project:

makefile
Copy code
SUPABASE_URL=https://your-project-url.supabase.co
SUPABASE_ANON_KEY=your-anon-key
Make sure to add this .env file to .gitignore to avoid sharing sensitive information.

2. Running the Application
2.1 Running Locally
To run the application locally:

Start the development server using npm:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to see the app running.

2.2 Running in Production (e.g., on Vercel)
To deploy the app to production:

Push your changes to the GitHub repository.
Link your GitHub repository to Vercel, which will automatically deploy your app.
Configure your Supabase environment variables in the Vercel dashboard under your project settings.
3. Running Tests
If your application includes automated tests (e.g., using Mocha or Jest), follow these steps to run them.

3.1 Install Testing Dependencies (if applicable)
If you're using a testing framework like Mocha or Jest, ensure it's installed by running:

bash
Copy code
npm install --save-dev mocha chai
3.2 Running Tests
To run the test suite, use the following command:

bash
Copy code
npm test
This will run all the test files and output the results to the terminal.

4. API Documentation
The SpaceFlight project exposes the following RESTful API endpoints for interacting with the backend:

4.1 GET /articles
Retrieves a list of all saved articles.

Response:
200 OK with a JSON array of article objects.
Each article includes: id, title, url, date_saved.
Example response:

json
Copy code
[
  {
    "id": 1,
    "title": "NASA's Latest Mission to Mars",
    "url": "https://example.com/nasa-mars-mission",
    "date_saved": "2024-12-15T08:00:00Z"
  },
  {
    "id": 2,
    "title": "SpaceX Launches New Satellite",
    "url": "https://example.com/spacex-satellite-launch",
    "date_saved": "2024-12-14T14:00:00Z"
  }
]
4.2 POST /articles
Saves a new article to the database.

Request Body:
title: The title of the article.
url: The URL of the article.
Example request body:

json
Copy code
{
  "title": "New Satellite Technology Announced",
  "url": "https://example.com/satellite-tech"
}
Response:
201 Created with the saved article data.
4.3 DELETE /articles/:id
Deletes a specific article by its ID.

Response:
200 OK with a success message.
4.4 GET /articles/:id
Retrieves a specific article by its ID.

Response:
200 OK with the article data.
5. Known Bugs and Future Development Roadmap
Known Bugs:
Duplicate Articles: The application may sometimes save duplicate articles if the same article is added more than once.
Real-Time Updates: Saved articles do not update in real-time without refreshing the page.
Roadmap for Future Development:
User Authentication: Add support for user accounts and authentication, so each user has a personalized list of saved articles.
Article Categories: Implement functionality for categorizing articles, such as "Launches", "Missions", etc.
Search Functionality: Add search functionality to allow users to search for articles by keywords or tags.
Improve Real-Time Updates: Implement WebSockets or polling to update the saved articles list in real-time without needing a page refresh