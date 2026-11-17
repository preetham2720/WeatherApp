# Weather Report App

A responsive weather application built with React and Vite. This app allows users to search for any city and view the current weather details, including the main weather condition, temperature, and description.

## Overview

Weather Report is a simple frontend project designed for quick weather lookup. It uses the OpenWeatherMap API to fetch live weather data and presents it in a clean, modern interface with a purple-themed layout and responsive design.

## Features

- Search weather by city name
- Display current weather condition, temperature, and brief description
- Real-time API-based data fetching
- Validation for empty inputs and invalid city names
- Responsive interface for desktop and mobile devices
- Clean UI built with Tailwind CSS
- React Context API for managing location and weather state

## Tech Stack

- React
- Vite
- JavaScript
- Axios
- Tailwind CSS
- OpenWeatherMap API

## Project Structure

```bash
WeatherApp/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Locationcontext.jsx
│   │   ├── Mainheader.jsx
│   │   └── Weather.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

The app will start in development mode and can be opened in your browser at the local Vite URL.

### Production build

```bash
npm run build
```

## API Configuration

This project fetches weather data from the OpenWeatherMap API. If needed, update the API key in the weather-fetching logic in the relevant component before running the app in a production environment.

## Usage

1. Open the app in your browser.
2. Type a city name in the search field.
3. Click the Search button.
4. View the current weather report for that city.

## Notes

- The app focuses on a lightweight weather lookup experience.
- Error handling is included for empty values and invalid city names.
- Styling is intentionally simple and modern to make the project easy to customize.

## License

This project is for educational and personal use.
