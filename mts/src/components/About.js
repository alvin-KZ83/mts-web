// src/components/About.js

const About = () => {
    const values = [
        { colorClass: "bg-blue-500", backgroundClass: "bg-blue-300", textColorClass: "bg-blue-100", letter: "S", description: "TRIVE FOR EXCELLENCE", info: "Constantly seeking to surpass our standards of quality." },
        { colorClass: "bg-green-500", backgroundClass: "bg-green-300", textColorClass: "bg-green-100", letter: "P", description: "ROFESSIONALISM", info: "Upholding the highest standards in our work and communications." },
        { colorClass: "bg-yellow-500", backgroundClass: "bg-yellow-300", textColorClass: "bg-yellow-100", letter: "R", description: "ESPECT AND TEAMWORK", info: "Fostering a collaborative environment with mutual respect." },
        { colorClass: "bg-red-500", backgroundClass: "bg-red-300", textColorClass: "bg-red-100", letter: "I", description: "NTEGRITY", info: "Conducting ourselves with honesty and honor in all situations." },
        { colorClass: "bg-purple-500", backgroundClass: "bg-purple-300", textColorClass: "bg-purple-100", letter: "N", description: "O DEFECTS", info: "Committing to the highest quality standards and flawless execution." },
        { colorClass: "bg-indigo-500", backgroundClass: "bg-indigo-300", textColorClass: "bg-indigo-100", letter: "G", description: "O! GO! GO TO THE GOAL!", info: "Focused and driven to achieve our objectives efficiently." }
    ];

    return (
        <div className="container my-auto mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>

            {/* Vision Section */}
            <div id="vision" className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-700">
                    <span className="font-semibold">To become a globally recognized leader in leaf spring manufacturing,</span> renowned for our 
                    unwavering commitment to quality, innovation, and sustainability. Our goal is to set industry benchmarks in both domestic and
                    international markets, ensuring unparalleled reliability and excellence in every product we deliver.
                </p>
            </div>

            {/* Mission Section */}
            <div id="mission" className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-700">
                    <span className="font-semibold">Preferred Industry Partner:</span> We aim to be the first choice for clients by delivering high-quality leaf spring products consistently on time and at competitive prices.
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Adherence to 'SPRING' Values:</span> Upholding our highest company value, "SPRING," in all our dealings. This involves applying these principles both internally within our team and externally with our partners and customers.
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Environmental Responsibility:</span> Committing to being an environmentally friendly company. We focus on reducing our ecological footprint and promoting sustainable manufacturing and business practices.
                </p>
            </div>

            {/* Values Section */}
            <div id="spring" className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <table className="table-fixed w-full">
                    <tbody>
                        {values.map((value, index) => (
                            <tr key={index}>
                                <td className={`${value.colorClass} text-white p-2 text-center font-semibold w-12 h-12 align-middle`}>{value.letter}</td>
                                <td className={`${value.backgroundClass} p-2 font-semibold align-middle`}>{value.description}</td>
                                <td className={`${value.textColorClass} p-2 text-right font-light`}>{value.info}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default About;

