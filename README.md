🌍 Currency Converter

A simple and interactive Currency Converter Web App built with HTML, CSS, and JavaScript.
It uses the ExchangeRate API
 to fetch live exchange rates and allows users to convert between multiple currencies with real-time flag updates.

🚀 Features

🌐 Real-time exchange rates using ExchangeRate API.

🔄 Currency conversion from any currency to any other.

🏳️ Dynamic country flags update automatically on currency selection.

📱 Responsive design for mobile and desktop.

🎛️ Default selection: USD → INR for quick conversions.

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript

API: ExchangeRate API

Flags: FlagsAPI

📂 Project Structure
currency-converter/
│── index.html        # Main HTML file
│── style.css         # Styling for UI
│── script.js         # JavaScript logic
│── countryList.js    # Currency → Country code mapping
│── README.md         # Documentation

⚙️ Installation & Usage

Clone this repository:

git clone https://github.com/gauranshsahu/currency-converter.git


Open index.html in your browser.

Select currencies and enter the amount to convert.

🔑 API Setup

This project uses a free ExchangeRate API key.
You can get your own API key from 👉 exchangerate-api.com
.

Replace the API key in script.js:

const BASE_URL =
  "https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD";


💡 Future Enhancements

📊 Add historical exchange rate charts.

⭐ Save favorite currency pairs.

🌙 Dark mode support.

👨‍💻 Author

Gauransh Sahu
📌 LinkedIn
 | GitHub
