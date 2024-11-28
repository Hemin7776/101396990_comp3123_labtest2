# Weather App - Lab Test 2

## Description

This is a simple, user-friendly weather application built using **ReactJS**. The app integrates with the **OpenWeatherMap API** to provide real-time weather data, including current weather conditions and a 5-day forecast for any city. The project demonstrates API integration, React state management, and a responsive UI.

## Features

- **Current Weather**: Displays temperature, weather conditions, and an icon representing the current weather.
- **5-Day Forecast**: Shows predicted weather with icons, temperatures, and descriptions for the next 5 days.
- **Search Functionality**: Dynamically updates the weather data based on the city entered by the user.
- **Responsive Design**: Works seamlessly across devices with a professional UI/UX design.

## Technologies Used

- ReactJS
- OpenWeatherMap API
- Axios for API calls
- CSS for styling

## Setup Instructions

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Hemin7776/101396990_comp3123_labtest2.git
   ```

Navigate to the project directory:
cd 101396990_comp3123_labtest2

Install dependencies:
npm install
Create a .env file in the project root and add your OpenWeatherMap API key:
REACT_APP_WEATHER_API_KEY=b6b9c33a8652e8e702aab4a408e7ec20

Start the application:
npm start

Open your browser and navigate to:
http://localhost:3000

Screenshots
Current Weather View

5-Day Forecast View

Postman Response (Current Weather API)

Postman Response (5-Day Forecast API)

API Endpoints
Current Weather:
https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=b6b9c33a8652e8e702aab4a408e7ec20&units=metric

5-Day Forecast:
https://api.openweathermap.org/data/2.5/forecast?q=Toronto&appid=b6b9c33a8652e8e702aab4a408e7ec20&units=metric
Author

Hemin7776
COMP3123 - Full Stack Development I
George Brown College
