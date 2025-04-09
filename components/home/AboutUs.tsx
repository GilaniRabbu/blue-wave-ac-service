import { Clock, DollarSign, UserCheck } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="bg-white py-16" id="about">
            <div className="max-w-7xl mx-auto px-5 xl:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6 lg:pr-10">
                        {/* <h2 className="text-primary text-xl font-medium">About Us</h2> */}
                        <h3 className="text-4xl md:text-5xl font-medium leading-[1.1]">
                            We Give <span className="text-primary ">The Best  </span> Service  Solutions
                        </h3>
                        <div className="text-gray-700 space-y-4">
                            <p>
                                We are committed to keeping your home and office cool and comfortable all year
                                round. With years of experience in AC repair, installation, and maintenance, our team of certified
                                technicians delivers fast, reliable, and affordable solutions for all
                            </p>

                        </div>
                        <div className="grid grid-cols-3 gap-8 my-6">
                            <div className="">
                                <div className="text-3xl font-bold text-primary">1,000+</div>
                                <div className="text-sm text-primary mt-1">Successful Projects</div>
                            </div>
                            <div className="">
                                <div className="text-3xl font-bold text-primary">500+</div>
                                <div className="text-sm text-primary mt-1">AC Units Serviced</div>
                            </div>
                            <div className="">
                                <div className="text-3xl font-bold text-primary">98%</div>
                                <div className="text-sm text-primary mt-1">Customer Satisfaction</div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-full">
                        {/* Card 1 */}
                        <div className="bg-primary p-6 flex flex-col justify-start h-[300px] lg:h-full">
                            <Clock className="text-white w-8 h-8 mb-5" />

                            <h4 className="text-white text-xl font-semibold leading-tight">24/7 Emergency Service</h4>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-200 p-6 flex flex-col justify-end h-[300px] lg:h-full">
                            <UserCheck className="text-primary w-8 h-8 mb-5" />

                            <h4 className="text-primary text-xl font-semibold leading-tight">
                                Licensed &<br />
                                Experienced
                                <br />
                                Technician
                            </h4>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-primary p-6 flex flex-col justify-start h-[300px] lg:h-full">
                            <DollarSign className="text-white w-8 h-8 mb-5" />

                            <h4 className="text-white text-xl font-semibold leading-tight">
                                Affordable &<br />
                                Transparent
                                <br />
                                Pricing
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

