import { Play } from "lucide-react";
import Image from "next/image"

export default function WhyChooseUs() {
    const features = [
        {
            number: "01",
            title: "Experienced & Certified",
            description: "Our team consists of highly skilled and certified professionals with years of experience in AC repair and maintenance."
        },
        {
            number: "02",
            title: "Fast & Reliable Service",
            description: "We prioritize quick response times and efficient repairs to ensure your AC system is up and running with minimal downtime."
        },
        {
            number: "03",
            title: "Affordable Pricing",
            description: "We offer competitive pricing with no hidden charges, providing top-quality service that fits your budget."
        },
        {
            number: "04",
            title: "Customer Satisfaction Guaranteed",
            description: "We are committed to providing excellent service and ensuring complete customer satisfaction with every job we undertake."
        }
    ];


    return (
        <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-16" id="about">
            <div className="relative mb-10">
                <h2 className="text-4xl md:text-5xl font-medium text-center">
                    <span className="text-navy-blue">Why</span>{" "}
                    <span className="text-primary">Choose Us</span>
                </h2>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Left Side: Title, Image, Button */}
                <div className="relative flex flex-col gap-5">

                    <p>
                        Our team is dedicated to providing top-quality AC repair and maintenance services with a focus on expertise, efficiency, and affordability. With certified professionals, we ensure reliable solutions tailored to your needs. Our fast response times minimize downtime, keeping your AC system running smoothly.
                    </p>

                    {/* Image Container */}
                    <div className="relative h-80 md:h-[415px]  overflow-hidden rounded-lg">
                        <Image
                            src="/images/why-choose-us.webp"
                            alt="AC technician working on an air conditioning unit"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>

                </div>

                {/* Right Side: Features List */}
                <div className="space-y-8 flex flex-col justify-end">
                    {features.map((feature, index) => (
                        <div key={index} className="relative">
                            <div className="flex gap-4 items-start">
                                <span className="text-gray-400 font-medium relative top-1">
                                    ({feature.number})
                                </span>
                                <div className="space-y-2">
                                    <h3 className="text-xl md:text-2xl font-medium text-navy-blue">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                            {/* <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-gray-900/20 to-transparent" /> */}
                        </div>
                    ))}
                    <div className="flex items-center gap-2 mt-5">
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
                        <button
                            className=" text-white bg-black size-10 rounded-full flex items-center justify-center transition-colors"
                            aria-label="Watch video"
                        >
                            <Play className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
