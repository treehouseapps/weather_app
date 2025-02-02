# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/weather-app.git
Navigate to the project directory

bash
Copy
Edit
cd weather-app
Install dependencies

bash
Copy
Edit
npm install
Create an .env file for API keys

Add your weather API key (e.g., OpenWeatherMap) in the .env file:
bash
Copy
Edit
VITE_WEATHER_API_KEY=your-api-key-here
Run the development server

bash
Copy
Edit
npm run dev
Open your browser and go to http://localhost:3000 to view the app.

Usage
Enter the name of a city in the search bar to get the current weather information.
The app will display the temperature in Celsius, the weather condition, and the rain probability.
Contributing
Feel free to fork the repository and submit pull requests if you would like to contribute. Any improvements or bug fixes are welcome!

License
This project is open-source and available under the MIT License.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
