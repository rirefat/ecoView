# Weather App - EcoView

A dynamic weather application built using **Next.js**, designed to provide real-time weather updates along with air pollution readings, current temperature and wind speed. The app leverages the **GeoLocation API** to fetch the user's current location, fetches weather data from the **Current Weather API**, and tracks air pollution using the **Air Pollution API**. This project implements **parallel routes** in Next.js and is styled using **Tailwind CSS**.

[Live Preview](https://ecoview.vercel.app/) | [GitHub Repository](https://github.com/rirefat/ecoView)


## Features

- **Location-based Weather**: Automatically retrieves the user's current location using the GeoLocation API and provides real-time weather data.
- **Air Pollution Monitoring**: Displays air pollution readings based on the user's geographical coordinates.
- **Parallel Routes in Next.js**: Leverages Next.js 13+ parallel routing for optimized page navigation.
- **Big Data Integration**: Tracks and analyzes location-based data using latitude and longitude values.
- **Responsive UI**: Built with Tailwind CSS for a mobile-first, responsive design.

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for designing a responsive user interface.
- **GeoLocation API**: Retrieves the user's current location.
- **Current Weather Data API**: Provides real-time weather updates.
- **JavaScript**: Core languages for implementing the app logic.

## Installation

To run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/rirefat/ecoView.git
    ```

2. Navigate to the project directory:
    ```bash
    cd ecoView
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Add your API keys for GeoLocation, Air Pollution, and Weather Data APIs in the `.env.local` file.

5. Run the development server:
    ```bash
    npm run dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Usage

- **Get Current Location**: On loading the page, the app automatically requests permission to access the user's location. If granted, it fetches weather and air pollution data based on that location.
- **Track Location Data**: The app uses latitude and longitude values for tracking and data visualization.

## APIs Used

- **GeoLocation API**: To get the current location coordinates of the user.
- **Air Pollution API**: To fetch air quality information for a specific location.
- **Current Weather API**: To display real-time weather conditions based on geographic coordinates.

