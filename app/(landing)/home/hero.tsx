import Button from "../ui/button";
import { FiFastForward } from "react-icons/fi";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section id="hero-section" className="container mx-auto min-h-screen flex">
            <div className="relative self-center">
                <Image 
                    src="/images/img-basketball-transparent.png"
                    alt="basketball"
                    width={432}
                    height={423}
                    className="grayscale absolute left-0 -top-20"
                />

                <div className="relative ml-40 w-full">
                    <div className="text-primary italic">Friday Sale, 50%</div>
                    <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent leading-[100px] mt-6">
                        WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
                    </h1>
                    <p className="w-1/2 mt-10 leading-loose">
                        Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.
                    </p>
                    <div className="flex gap-5 mt-14">
                        <Button className="flex items-center gap-2">
                            Explore more <FiFastForward />
                        </Button>
                        <Button variant="ghost">
                            Watch Video{" "}
                            <Image src="/images/icon-play-video.svg" alt="icon play video" width={29} height={29} />
                        </Button>
                    </div>
                </div>
                <Image 
                    src="/images/img-hero.png" 
                    alt="image sporton hero " 
                    width={623} 
                    height={687}
                    className="absolute -right-5 top-1/2 -translate-y-1/2"
                />
            </div>
            <Image
                src="/images/img-ornament-hero.svg"
                alt="shape hero background"
                width={420}
                height={420}
                className="absolute -right-[200px] top-1/2 -translate-y-1/2"
            />
        </section>
    )
}

export default HeroSection;