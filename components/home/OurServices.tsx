// import Image from "next/image"
// import { ArrowRight } from "lucide-react"
// export default function OurServices() {
//     const services = [
//         {
//             id: 1,
//             title: "AC Repair Service",
//             imageUrl: "/images/ac-repair.jpg",
//             link: "/services/repair",
//         },
//         {
//             id: 2,
//             title: "AC Cleaning Service",
//             imageUrl: "/images/ac-clean.png",
//             link: "/services/cleaning",
//             // title: "AC Maintenance Service",
//             // imageUrl: "/images/service-card-2.png",
//             // link: "/services/maintenance",
//         },
//         {
//             id: 3,

//             title: "AC Installation Service",
//             imageUrl: "/images/ac-install.png",
//             link: "/services/installation",
//         },
//         // {
//         //     id: 4,

//         //     title: "AC Cleaning Service",
//         //     imageUrl: "/images/service-card-4.png",
//         //     link: "/services/cleaning",
//         // },
//     ]

//     return (
//         <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-16" id="services">
//             {/* <h2 className="text-primary text-xl font-medium mb-5">Our Services</h2> */}


//             <div className="text-center max-w-3xl mx-auto mb-12">
//                 <h2 className="text-4xl md:text-5xl font-medium mb-4 leading-[1.1]">Professional <span className="text-primary">AC Solutions</span> for Every Need</h2>
//                 <p className="text-gray-600">
//                     Stay cool and comfortable with our expert AC repair services. We provide fast, reliable, and long-lasting
//                     solutions to keep your air conditioning running smoothly.
//                 </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {services.map((service, index) => (
//                     <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200">
//                         <div className="h-[400px]">
//                             <Image src={service.imageUrl || "/placeholder.svg"} height={300} width={300} alt={service.title} className="object-cover h-full w-full" />
//                         </div>
//                         <div className="p-4 flex justify-between items-center">
//                             <h3 className="text-xl font-medium text-gray-800">{service.title}</h3>
//                             <div className="bg-primary cursor-pointer text-white p-2 rounded-full flex items-center justify-center  transition-colors"
//                                 aria-label={`Learn more about ${service.title}`}
//                             >
//                                 <ArrowRight className="w-5 h-5 transform -rotate-45" />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }




import Image from "next/image"
import { ArrowRight } from "lucide-react"
export default function OurServices() {
    const services = [
        {
            id: 1,
            title: "AC Clean Service",
            imageUrl: "/images/ac-clean.png",
            link: "/services/repair",
        },
        {
            id: 2,

            title: "AC Reapir Service",
            imageUrl: "/images/ac-repair2.jpg",
            link: "/services/maintenance",
        },
        {
            id: 3,

            title: "AC Installation Service",
            imageUrl: "/images/ac-install.png",
            link: "/services/installation",
        },
        {
            id: 4,


            title: "AC Maintenance Service",
            imageUrl: "/images/ac-repair.jpg",
            link: "/services/cleaning",
        },
    ]

    return (
        <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-16" id="services">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl md:text-5xl font-medium mb-4 leading-[1.1]">Professional <span className="text-primary">AC Solutions</span> for Every Need</h2>
                <p className="text-gray-600">
                    Stay cool and comfortable with our expert AC repair services. We provide fast, reliable, and long-lasting
                    solutions to keep your air conditioning running smoothly.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                        <div className="h-[350px]">
                            <Image src={service.imageUrl || "/placeholder.svg"} height={300} width={300} alt={service.title} className="object-cover h-full w-full" />
                        </div>
                        <div className="p-4 flex justify-between items-center">
                            <h3 className="text-xl font-medium text-gray-800">{service.title}</h3>
                            <div className="bg-primary cursor-pointer text-white p-2 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                                aria-label={`Learn more about ${service.title}`}
                            >
                                <ArrowRight className="w-5 h-5 transform -rotate-45" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}


