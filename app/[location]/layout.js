export default function Layout({ children ,aqi, temperature, wind, weather}) {
    return (
        <div className="wrapper">
            {children}
            {aqi}
            {temperature}
            {weather}
            {wind}
        </div>
    );
}