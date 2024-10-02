'use client'
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
    const [loading, setLoading] = useState(false);
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams(searchParams);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                params.set('latitude', position.coords.latitude);
                params.set('longitude', position.coords.longitude);
                setLoading(false);
                router.push(`/current?${params.toString()}`);
            })
        }
    }, [router, searchParams, pathName]);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#FAFAFA] text-slate-700">
            {
                loading && (
                    <>
                        <Image
                            src="/loading.gif"
                            alt="Loading..."
                            height={500}
                            width={500}
                            className="my-4"
                        />
                        <p className="text-xl text-center tracking-widest">Detecting Location...</p>
                    </>
                )
            }
        </div>
    )

};

export default LocationDetector;