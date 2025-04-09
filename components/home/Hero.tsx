import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative" id="home">
            {/* Hero Image with Overlay */}
            <div className="relative h-[700px] w-full">
                <Image
                    src="/images/air-fix-4.png"
                    alt="Air conditioner technician servicing a unit"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />

                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col max-w-7xl mx-auto justify-center ">
                <div className="max-w-4xl px-5 xl:px-0">
                    
                    <h1 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
                        Reliable Air Conditioner Repair & Maintenance Provider
                    </h1>
                    <p className="text-white/90 mt-4 text-lg">
                        Fast, professional, and affordable air conditioning repair services to keep your home and office comfortable
                        all year round.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <a
                            href="#contact"
                            className="flex items-center rounded-full px-6 py-2.5 text-sm font-medium bg-white text-primary border border-white hover:bg-white/90"
                        >
                            <span>Get in Touch</span>
                            <div className="w-5 h-5 ml-2 rounded-full border border-primary flex items-center justify-center">
                                <span className="sr-only">Arrow right</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center rounded-full px-6 py-2.5 text-sm font-medium bg-blue-500 text-white hover:bg-blue-600"
                        >
                            <span>Book Online</span>
                            <div className="w-5 h-5 ml-2 rounded-full border border-white flex items-center justify-center">
                                <span className="sr-only">Arrow right</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="md:absolute bottom-0 right-0 bg-white p-6 rounded-tl-lg lg:w-1/2">
                <div className="grid grid-cols-3 gap-8 lg:max-w-xl">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary">500+</div>
                        <div className="text-sm text-primary mt-1">Satisfied Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary">20+</div>
                        <div className="text-sm text-primary mt-1">Years of Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary">50+</div>
                        <div className="text-sm text-primary mt-1">Skilled Employees</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
