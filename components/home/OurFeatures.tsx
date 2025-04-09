import { Layers, CheckCircle, MessageCircle, FileText, Package, Brain } from "lucide-react";

const features = [
    {
        icon: Layers,
        title: "Multi-Layered Protection",
        description: "Our AC units are safeguarded with advanced filtration and security layers.",
    },
    {
        icon: CheckCircle,
        title: "Strict Quality Control",
        description: "Each AC unit undergoes rigorous testing to ensure optimal performance and durability.",
    },
    {
        icon: MessageCircle,
        title: "24/7 Customer Support",
        description: "Our expert support team is available around the clock to assist with any AC-related queries.",
    },
    {
        icon: FileText,
        title: "Comprehensive User Manual",
        description: "Every unit comes with a detailed maintenance guide to help you keep your AC in top condition.",
    },
    {
        icon: Package,
        title: "Safe & Timely Delivery",
        description: "We ensure your AC unit arrives safely and on time, ready for immediate installation.",
    },
    {
        icon: Brain,
        title: "Smart AI Integration",
        description: "Control and monitor your AC remotely with our AI-powered system for maximum efficiency.",
    },
];

const OurFeatures = () => {
    return (
        <section className="py-16 lg:py-20 px-5 xl:px-0 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-center text-4xl md:text-5xl font-medium leading-[1.1] mb-16">
                    <span className="text-gray-900">Premium AC Services, </span>
                    <span className="text-gray-400">ensuring</span>
                    <br />
                    <span className="text-gray-400">comfort & efficiency</span>
                </h2>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-500">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurFeatures;
