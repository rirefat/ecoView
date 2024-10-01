import Image from "next/image";

export default function Layout({ children, aqi, temperature, wind, weather }) {
    return (
        <div className="wrapper">
            {/* image background and overlay  */}
            <Image
                src="/images/bg.jpg"
                className="bg-img"
                alt="bg image"
                width={700}
                height={1200}
            />
            <div class="overlay"></div>
            {/* image background and overlay  */}

            <main className="!z-50 w-full">
                <div className="container">
                    <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
                        {children}
                        {weather}
                        {aqi}
                        {wind}
                        {temperature}
                    </div>
                </div>
            </main>
        </div>
    );
}