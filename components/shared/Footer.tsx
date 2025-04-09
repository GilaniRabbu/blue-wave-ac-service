import { RiFacebookLine, RiInstagramLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="block bg-slate-900 text-gray-100">
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 py-16 2xl:px-0 md:py-20">
                {/* Footer Content */}
                <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
                    <div className="flex max-w-sm flex-col items-start justify-start gap-8 lg:mr-10">
                        <div className="flex flex-col items-start gap-6">
                            <a href="#home" className="flex items-center gap-2">
                                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">AC</div>
                                <span className="font-medium">Ac Service</span>
                            </a>
                            <p className="text-gray-300">
                                Providing expert AC installation, maintenance, and repair services to keep your space cool and comfortable all year round.
                            </p>
                        </div>
                        <div className="mt-12 grid max-w-52 grid-flow-col grid-cols-4 gap-8 mb-8 md:mb-0">
                            <a href="#home" className="mx-auto flex max-w-6 flex-col items-center justify-center text-gray-100">
                                <RiFacebookLine size={24} color="white" />
                            </a>
                            <a href="#home" className="mx-auto flex max-w-6 flex-col items-center justify-center text-gray-100">
                                <RiInstagramLine size={24} color="white" />
                            </a>
                            <a href="#home" className="mx-auto flex max-w-6 flex-col items-center justify-center text-gray-100">
                                <RiTwitterLine size={24} color="white" />
                            </a>
                            <a href="#home" className="mx-auto flex max-w-6 flex-col items-center justify-center text-gray-100">
                                <RiLinkedinLine size={24} color="white" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start font-semibold">
                        <div className="mb-4">
                            <p className="font-bold">Our Services</p>
                        </div>
                        <a href="#" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            AC Installation
                        </a>
                        <a href="#" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            AC Repair
                        </a>
                        <a href="#" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            Maintenance & Cleaning
                        </a>
                        <a href="#" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            Emergency Services
                        </a>
                    </div>
                    <div className="flex flex-col items-start font-semibold">
                        <div className="mb-4">
                            <p className="font-bold">Support</p>
                        </div>
                        <a href="#home" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            Service Plans
                        </a>
                        <a href="#home" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            Troubleshooting Guide
                        </a>
                        <a href="#home" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            Warranty Information
                        </a>
                        <a href="#home" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            Contact Support
                        </a>
                    </div>
                    <div className="flex flex-col items-start font-semibold">
                        <div className="mb-4">
                            <p className="font-bold">Resources</p>
                        </div>
                        <a href="#home" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            AC Buying Guide
                        </a>
                        <a href="#home" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            Energy Saving Tips
                        </a>
                        <a href="#home" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            Maintenance Checklist
                        </a>
                        <a href="#home" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            Seasonal AC Care
                        </a>
                    </div>
                    <div className="flex flex-col items-start font-semibold">
                        <div className="mb-4">
                            <p className="font-bold">Company</p>
                        </div>
                        <a href="#" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            About Us
                        </a>
                        <a href="#" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            Blog
                        </a>
                        <a href="#" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            Careers
                        </a>
                        <a href="#" className="py-2 text-sm font-normal text-gray-300 transition hover:text-blue-600">
                            Customer Reviews
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="mb-14 mt-16 w-full border-b border-gray-500"></div>
                <div className="flex md:flex-row  justify-between sm:flex-col flex-col-reverse md:items-center">
                    <p className="text-sm sm:text-base">
                        © {new Date().getFullYear()} AC Service. All rights reserved.
                    </p>
                    <div className="flex flex-wrap font-semibold gap-2 lg:gap-5 mb-2">
                        <a href="#home" className="inline-block  font-normal text-gray-300  transition hover:text-blue-600 ">
                            Terms of Service
                        </a>
                        <a href="#home" className="inline-block font-normal text-gray-300  transition hover:text-blue-600 ">
                            License
                        </a>
                        <a href="#home" className="inline-block  font-normal text-gray-300  transition hover:text-blue-600 ">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
