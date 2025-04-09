// import React from "react";
// // import { FiMail, FiPhone, FiMapPin, FiChevronDown } from "react-icons/fi";
// import { FiChevronDown } from "react-icons/fi";

// const ContactUs: React.FC = () => {
//     return (
//         <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-16" id="contact">
//             <div className="space-y-8">
//                 <h2 className="text-4xl md:text-5xl mb-10 text-center font-bold">
//                     <span className="text-primary">Contact </span>Us
//                 </h2>
//                 {/* <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 h-full "> */}
//                 {/* Contact Information */}
//                 {/* <div className="space-y-10 flex flex-col   h-full">
//                         <div>
//                             <h3 className="text-2xl font-bold text-gray-800 mb-3">Reach Us</h3>

//                             <div className="flex items-center space-x-4">
//                                 <FiMail className="text-xl text-primary" />
//                                 <p className="text-lg font-medium text-gray-700">contact@example.com</p>
//                             </div>
//                             <div className="flex items-center space-x-4">
//                                 <FiPhone className="text-xl text-primary" />
//                                 <p className="text-lg font-medium text-gray-700">+1 234 567 890</p>
//                             </div>
//                             <div className="flex items-center space-x-4">
//                                 <FiMapPin className="text-xl text-primary" />
//                                 <p className="text-lg font-medium text-gray-700">123 Main Street, City, Country</p>
//                             </div>
//                         </div>
//                         <div>
//                             <h3 className="text-2xl font-bold mb-3 text-gray-800">Office Hours</h3>
//                             <p className="text-lg text-gray-600">Monday to Friday: 9:00 AM - 6:00 PM</p>
//                             <p className="text-lg text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
//                             <p className="text-lg text-gray-600">Sunday: Closed</p>
//                         </div>
//                         <div>
//                             <h3 className="text-2xl font-bold mb-3 text-gray-800">Follow Us</h3>
//                             <p className="text-lg text-gray-600">Stay connected on social media:</p>
//                             <ul className="flex space-x-4 text-lg">
//                                 <li><a href="#" className="text-primary">Facebook</a></li>
//                                 <li><a href="#" className="text-primary">Twitter</a></li>
//                                 <li><a href="#" className="text-primary">Instagram</a></li>
//                             </ul>
//                         </div>
//                     </div> */}
//                 <div className="flex items-center justify-center h-full  ">

//                     {/* Contact Form */}
//                     <form className="md:w-1/2 w-full">
//                         <div className="mb-5">
//                             <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
//                                 Full Name
//                             </label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 id="name"
//                                 placeholder="Full Name"
//                                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                             />
//                         </div>
//                         <div className="mb-5">
//                             <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
//                                 Email Address
//                             </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 placeholder="example@domain.com"
//                                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                             />
//                         </div>
//                         <div className="mb-5">
//                             <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
//                                 Phone Number
//                             </label>
//                             <input
//                                 type="text"
//                                 name="phone"
//                                 id="phone"
//                                 placeholder="Your Phone Number"
//                                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                             />
//                         </div>
//                         <div className="mb-5">
//                             <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
//                                 Address
//                             </label>
//                             <input
//                                 type="text"
//                                 name="address"
//                                 id="address"
//                                 placeholder="Enter your address"
//                                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                             />
//                         </div>
//                         <div className="mb-5">
//                             <label htmlFor="service" className="mb-3 block text-base font-medium text-[#07074D]">
//                                 Service Type
//                             </label>

//                             <div className="relative">
//                                 <select
//                                     name="service"
//                                     id="service"
//                                     className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                 >
//                                     <option value="ac-repair">AC Repair</option>
//                                     <option value="ac-installation">AC Installation</option>
//                                     <option value="ac-maintenance">AC Maintenance</option>
//                                     <option value="ac-maintenance">AC Cleaning</option>

//                                 </select>
//                                 {/* Custom arrow */}
//                                 <FiChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#6B7280] pointer-events-none" />
//                             </div>

//                         </div>

//                         <div className="mb-5">
//                             <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
//                                 Message
//                             </label>
//                             <textarea
//                                 rows={4}
//                                 name="message"
//                                 id="message"
//                                 placeholder="Type your message"
//                                 className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                             ></textarea>
//                         </div>
//                         <div>
//                             <button
//                                 disabled
//                                 className="hover:shadow-form cursor-pointer w-full rounded-md bg-primary py-3 px-8 text-base font-semibold text-white outline-none"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ContactUs;



import { FiChevronDown } from "react-icons/fi"

export default function Contact() {



    return (
        <section className="bg-blue-500 py-16 px-4 md:px-8" id="contact">
            <div className="max-w-7xl  mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Pricing Info */}
                    <div className="space-y-6 text-white">
                        <h2 className="text-xl font-medium">Contact Us for Bookings</h2>
                        <h3 className="text-4xl md:text-5xl font-bold leading-[1.3]">
                            Ready to Book Your<br />AC Service?
                        </h3>
                        <p className="text-white/90">
                            Wwe&apos;re here to ensure your AC is running smoothly. Our expert technicians are available to help you with any AC service needs, whether it&apos;s repair, installation, or maintenance. Get in touch with us today, and we&apos;ll take care of the rest!
                        </p>
                    </div>


                    {/* Right Column - Booking Form */}
                    <div className="bg-white rounded-lg p-6 shadow-lg max-w-xl">
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl text-primary font-semibold">Book Your Service</h4>
                                <p className="text-gray-500 text-sm">Update your details.</p>
                            </div>

                            <form className="space-y-4">

                                {/* Name Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <input
                                            id="firstName"
                                            name="firstName"

                                            placeholder="First Name"
                                            className="w-full outline-none px-3 py-2 border border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Last Name"
                                            className="w-full px-3 outline-none py-2 border border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                {/* Contact Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            className="w-full px-3 py-2 outline-none border border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Phone"
                                            className="w-full px-3 py-2 border outline-none border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                {/* Address Field */}
                                <div>
                                    <label htmlFor="address" className="block  text-sm font-medium text-gray-700 mb-1">
                                        Address
                                    </label>
                                    <input
                                        id="address"
                                        name="address"
                                        placeholder="Enter your address"
                                        className="w-full px-3 py-2 border outline-none border-gray-300 rounded-md"
                                    />
                                </div>

                                {/* Service Selection */}
                                <div className="relative">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Service Type
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            id="service"
                                            className="w-full  appearance-none rounded-md border border-[#e0e0e0] bg-white px-3 py-2 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                                        >
                                            <option value="ac-repair">AC Repair</option>                                     <option value="ac-installation">AC Installation</option>
                                            <option value="ac-maintenance">AC Maintenance</option>
                                            <option value="ac-maintenance">AC Cleaning</option>

                                        </select>
                                        {/* Custom arrow */}
                                        <FiChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#6B7280] pointer-events-none" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Leave us a message..."
                                        rows={6}
                                        className="w-full rounded-md border outline-none border-gray-300 px-3 py-2"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    disabled
                                    className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-md"
                                >
                                    Send Book Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
