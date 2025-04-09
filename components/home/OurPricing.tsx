import React from "react";
import { Shield, Zap, Star, CircleCheckBig } from "lucide-react";

const OurPricing = () => {
    const packages = [
        {
            icon: <Shield className="w-12 h-12 text-primary" />,
            title: "Basic Service Package",
            description: "Essential AC maintenance and cleaning services to keep your system running efficiently.",
            price: "$99",
            features: [
                "Regular maintenance check-ups",
                "Air filter cleaning and replacement",
                "Basic performance optimization",
            ],
            cta: "Book Basic Service",
        },
        {
            icon: <Zap className="w-12 h-12 text-primary" />,
            title: "Standard Service Package",
            description: "Comprehensive AC care with repairs and preventive maintenance for optimal performance.",
            price: "$199",
            features: [
                "Full system inspection and diagnosis",
                "Repairs and parts replacement",
                "Preventive maintenance service",
            ],
            cta: "Book Standard Service",
            featured: true,
        },
        {
            icon: <Star className="w-12 h-12 text-primary" />,
            title: "Premium Service Package",
            description: "Complete AC care solution with priority service and annual maintenance coverage.",
            price: "$299",
            features: [
                "24/7 emergency repair service",
                "Complete system overhaul",
                "Annual maintenance plan included",
            ],
            cta: "Book Premium Service",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-16 lg:py-20" id="pricing">
            {/* <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Affordable</span> Prices</h2>
                <p className="text-gray-600">
                    Keep your air conditioning system in perfect condition with our professional service packages. We offer
                    comprehensive AC maintenance, repair, and installation solutions to ensure your comfort year-round.
                </p>
            </div> */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">

                <div>
                    <h2 className="text-4xl md:text-5xl leading-[1.1] font-medium mb-4">
                        Our <span className="text-primary">Affordable</span> Prices
                    </h2>
                </div>
                <div>
                    <p className="text-gray-700 text-lg">
                        Keep your air conditioning system in perfect condition with our professional service packages.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col justify-between border p-6 rounded-lg shadow-md ${pkg.featured ? "border-primary" : "border-gray-200"} h-full`}
                    >
                        {pkg.featured && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                                    Most Popular
                                </span>
                            </div>
                        )}

                        <div className="mb-4 text-center">
                            <div className="mx-auto mb-4 bg-blue-50 inline-block p-2 rounded-md">{pkg.icon}</div>
                            <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                            <p className="text-gray-600 mb-4">{pkg.description}</p>
                            <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                        </div>

                        <div className="flex-grow pt-4">
                            <ul className="space-y-4">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <CircleCheckBig className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4">
                            <button
                                className={`cursor-pointer w-full py-2 mt-4 ${pkg.featured ? "bg-primary " : "bg-gray-900 hover:bg-gray-800"} text-white rounded`}
                            >
                                {pkg.cta}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurPricing;
