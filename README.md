# 377finalproject

Title: Spaceflight News

Description: SpaceFlight is a web application that collects and displays the latest space exploration news articles from various sources. Users can view, save, and access news articles about space missions, satellite launches, and other space-related activities. The app allows users to save articles for later viewing, and it connects to a Supabase database to store these saved articles.


Target Browsers: The application supports all modern desktop browsers (Chrome, Firefox, Safari, Edge) and mobile browsers on iOS and Android.



**Developer Manual:**

This manual is for developers who will be working on the SpaceFlight project after the initial development phase. It will guide you through setting up the application, running it on a server, running tests, and interacting with the API.


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

2. Install dependencies with (npm install):
   - express
   - supabase
  
  


Known Bugs:
  - Duplicate Articles: The application may sometimes save duplicate articles if the same article is added more than once.
  - Real-Time Updates: Saved articles do not update in real-time without refreshing the page.

Roadmap for Future Development:
  - User Authentication: Add support for user accounts and authentication so each user has a personalized list of saved articles.
  - Article Categories: Implement functionality for categorizing articles, such as "Launches," "Missions," etc.
  - Search Functionality: Add search functionality to allow users to search for articles by keywords or tags.
  - Improve Real-Time Updates: Implement WebSockets or polling to update the saved articles list in real-time without needing a page refresh.
