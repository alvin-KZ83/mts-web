// src/components/About.js

const About = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
            <div className="space-y-4">
                {/* Vision Section */}
                <div id="vision">
                    <h3 className="text-2xl font-semibold">Our Vision</h3>
                    <p className="text-gray-600">
                        Your company's vision statement goes here. This should be an aspirational and 
                        inspirational statement that clearly articulates the future landscape and 
                        overarching aim of the company.
                    </p>
                </div>

                {/* Mission Section */}
                <div id="mission">
                    <h3 className="text-2xl font-semibold">Our Mission</h3>
                    <p className="text-gray-600">
                        The mission statement of your company. It should provide a clear and concise 
                        description of the organization's purpose and the unique value proposition 
                        it offers to its customers or stakeholders.
                    </p>
                </div>

                {/* Values Section */}
                <div id="values">
                    <h3 className="text-2xl font-semibold">Our Values</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Value 1 - Description of this value.</li>
                        <li>Value 2 - Description of this value.</li>
                        <li>Value 3 - Description of this value.</li>
                        {/* Add more values as needed */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
