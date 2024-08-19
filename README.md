# NLP Sentiment Analysis Project

## Project Description

This project is a web application that analyzes the sentiment of articles from provided URLs. The application validates the URL and then returns key sentiment analysis information such as:

- **Agreement**: Whether the text expresses agreement or disagreement.
- **Confidence**: Confidence level of the analysis.
- **Score Tag**: Polarity of the sentiment (e.g., Positive, Neutral, Negative).
- **Subjectivity**: Indicates if the content is subjective or objective.
- **Snippet Text**: A short excerpt from the article.

The sentiment analysis is powered by the [MeaningCloud Sentiment Analysis API](https://www.meaningcloud.com/products/sentiment-analysis).

## How to Run the App

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AbdalrahmanMohammad/evaluate-news-nlp.git
   cd evaluate-new-nlp/mainProject
2. **Install Dependencies**
   ```bash
   npm install
   Set Up Environment Variables


3. **Create a .env file in the root directory and add your MeaningCloud API key:**
   ```bash
    API_KEY=your_meaningcloud_api_key

4. **Build the Project**
   ```bash
    npm run build-prod

5. **Start the Server**
   ```bash
    npm start

6. **Access the Application**
   ```bash
    Open your browser and go to http://localhost:8000.

    
7. **Run Tests**
   ```bash
    npm run test


## Dependencies

- **Node.js**: Server-side environment.
- **Express.js**: Web framework for Node.js.
- **Webpack**: Module bundler for the frontend.
- **Jest**: Testing framework.
- **Axios**: HTTP client for making API requests.
- **MeaningCloud API**: External API for sentiment analysis.
