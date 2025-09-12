import Image from "next/image";

export const Heroes = () => {
    return ( 
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:h-[350px] 
                sm:w-[350px] md:w-[400px] md:h-[400px]">
                    <Image 
                        src="/paintlight.png"
                        fill
                        alt="paintlight"
                        className="object-contain dark:hidden"
                    />
                    <Image 
                        src="/paintdark.png"
                        fill
                        alt="paintdark"
                        className="object-contain hidden dark:block"
                    />
                </div>
                <div className="relative w-[300px] h-[300px] sm:h-[350px]
                sm:w-[350px] md:w-[400px] md:h-[400px] hidden md:block">
                    <Image 
                        src="/fastlight.png"
                        fill
                        alt="Fastlight"
                        className="object-contain dark:hidden"
                    />
                    <Image 
                        src="/fastdark.png"
                        fill
                        alt="Fastdark"
                        className="object-contain hidden dark:block"
                    />
                </div>
            </div>
        </div>
    );
}