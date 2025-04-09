import { Star } from "lucide-react";
import Image from "next/image";

export function Testimonial() {
    return (
        <section className="relative">
            <div className="mx-auto max-w-7xl px-5 py-16 lg:px-0 md:py-20">
                {/* Heading Text */}
                <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] mx-auto mb-6 w-full max-w-3xl text-center md:mb-12">
                    What our clients are saying
                </h2>
                {/* Testimonial Wall */}
                <div className="mb-8 gap-5 py-4 md:mb-12 columns-1 c-col-1 sm:columns-2 c-sm-col-2 md:columns-3 c-md-col-3 lg:mb-16">
                    {/* Item */}
                    <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8">
                        <div className="mb-4 flex flex-row">
                            <Image height={100} width={100} src="/images/client-1.jpg" alt="" className="mr-4 inline-block h-16 w-16 object-cover rounded-full" />
                            <div className="flex flex-col">
                                <h6 className="text-base font-semibold">David James</h6>
                                <p className="text-sm text-gray-500">CEO/ Chairman</p>
                            </div>
                        </div>
                        <p className="mb-4 text-sm text-gray-500">
                            The AC repair was quick and professional. My unit is now running smoothly, keeping my home cool all day. Highly recommended!
                        </p>
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} className="mr-1.5 w-4 text-yellow-500" fill="currentColor" />
                            ))}
                        </div>
                    </div>
                    {/* Item */}
                    <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8">
                        <div className="mb-4 flex flex-row">
                            <Image height={100} width={100} src="/images/client-2.jpg" alt="" className="mr-4 inline-block h-16 w-16 object-cover rounded-full" />
                            <div className="flex flex-col">
                                <h6 className="text-base font-semibold">Sarah Miller</h6>
                                <p className="text-sm text-gray-500">Homeowner</p>
                            </div>
                        </div>
                        <p className="mb-4 text-sm text-gray-500">
                            Exceptional service! The technician arrived on time, fixed the issue quickly, and now my AC cools better than ever before.
                        </p>
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} className="mr-1.5 w-4 text-yellow-500" fill="currentColor" />
                            ))}
                        </div>
                    </div>
                    {/* Item */}
                    <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8">
                        <div className="mb-4 flex flex-row">
                            <Image height={100} width={100} src="/images/client-3.jpg" alt="" className="mr-4 inline-block h-16 w-16 object-cover rounded-full" />
                            <div className="flex flex-col">
                                <h6 className="text-base font-semibold">Michael Brown</h6>
                                <p className="text-sm text-gray-500">Restaurant Owner</p>
                            </div>
                        </div>
                        <p className="mb-4 text-sm text-gray-500">
                            Fast response and excellent service! They diagnosed the problem instantly and had my AC up and running in no time. The technician was highly professional, explaining every step of the process clearly. I was impressed by their efficiency and attention to detail. It is rare to find such reliable and knowledgeable service. Highly recommended!                       </p>
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} className="mr-1.5 w-4 text-yellow-500" fill="currentColor" />
                            ))}
                        </div>
                    </div>
                    {/* Item */}
                    <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8">
                        <div className="mb-4 flex flex-row">
                            <Image height={100} width={100} src="/images/client-4.jpg" alt="" className="mr-4 inline-block h-16 w-16 object-cover rounded-full" />
                            <div className="flex flex-col">
                                <h6 className="text-base font-semibold">Jessica Roberts</h6>
                                <p className="text-sm text-gray-500">Office Manager</p>
                            </div>
                        </div>
                        <p className="mb-4 text-sm text-gray-500">
                            Our office AC stopped working, but their team fixed it fast! Now, the workspace stays cool, making it comfortable for everyone.
                        </p>
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} className="mr-1.5 w-4 text-yellow-500" fill="currentColor" />
                            ))}
                        </div>
                    </div>
                    {/* Item */}
                    <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8">
                        <div className="mb-4 flex flex-row">
                            <Image height={100} width={100} src="/images/client-5.jpg" alt="" className="mr-4 inline-block h-16 w-16 object-cover rounded-full" />
                            <div className="flex flex-col">
                                <h6 className="text-base font-semibold">Mark Wilson</h6>
                                <p className="text-sm text-gray-500">Apartment Owner</p>
                            </div>
                        </div>
                        <p className="mb-4 text-sm text-gray-500">
                            Highly skilled professionals! My AC unit was leaking, but they fixed it quickly, and now it is working perfectly again.
                        </p>
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} className="mr-1.5 w-4 text-yellow-500" fill="currentColor" />
                            ))}
                        </div>
                    </div>
                    {/* Item */}
                    <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8">
                        <div className="mb-4 flex flex-row">
                            <Image height={100} width={100} src="/images/client-6.jpg" alt="" className="mr-4 inline-block h-16 w-16 object-cover rounded-full" />
                            <div className="flex flex-col">
                                <h6 className="text-base font-semibold">Lisa Green</h6>
                                <p className="text-sm text-gray-500">Business Owner</p>
                            </div>
                        </div>
                        <p className="mb-4 text-sm text-gray-500">
                            The team provided outstanding service! They cleaned and serviced my AC unit, making it work like new again. I am very happy!
                        </p>
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} className="mr-1.5 w-4 text-yellow-500" fill="currentColor" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
