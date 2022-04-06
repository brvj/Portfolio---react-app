import StandardLayout from "../layouts/StandardLayout";

const AboutPage = () => {
    return(
        <StandardLayout>
            <div className="mx-max">
                <p className="text-blue-800 text-6xl pt-4 text-center">- - - About - - -</p>
            </div>
            <div className="bg-yellow-50 mx-8 sm:mx-10 md:mx-40 lg:mx-56 xl:mx-96 mt-8 shadow-2xl rounded-xl">
                <div className="mx-8 pb-4">
                    <p className="border-b-2 border-blue-500 pb-3 text-blue-800 text-4xl pt-4">Summary</p>
                    <p className="mt-2 text-black text-xl">Student Software Developer with solid knowledge in software
                        and information technologies. Very adaptable, flexible person who embraces teamwork, but also
                        enjoys working independently. Highly motivated, eager to learn new skills and
                        improve existing ones.</p>
                    <p className="border-b-2 border-blue-500 pb-3 mt-10 text-blue-800 text-4xl">Skills</p>
                    <ul className="mt-2 ml-5 list-disc">
                        <li className="text-black text-xl mt-2">
                            Java (SpringBoot, SpringSecurity)
                        </li>
                        <li className="text-black text-xl mt-2">
                            C# (Windows forms)
                        </li>
                        <li className="text-black text-xl mt-2">
                            Python (Basics)
                        </li>
                        <li className="text-black text-xl mt-2">
                            JavaScript (JSON, AJAX, jQuery, React (Basics))
                        </li>
                        <li className="text-black text-xl mt-2">
                            Angular (Basics)
                        </li>
                        <li className="text-black text-xl mt-2">
                            SQL (MicrosoftSQL, MySQL)
                        </li>
                        <li className="text-black text-xl mt-2">
                            Git
                        </li>
                    </ul>
                    <p className="border-b-2 border-blue-500 pb-3 mt-10 text-blue-800 text-4xl">Education</p>
                    <p className="mt-2 text-black text-xl">Professional Bachelor in Electrical and Computer Engineering,
                        Fakultet
                        tehničkih nauka - Novi Sad</p>
                    <ul className="mt-2 ml-5 list-disc">
                        <li className="text-black text-xl mt-2">
                            Jul 2018 - present
                        </li>
                    </ul>
                    <p className="mt-2 text-black text-xl">Computer Technician, Tehnička škola Kikinda – Kikinda</p>
                    <ul className="mt-2 ml-5 list-disc">
                        <li className="text-black text-xl mt-2">
                            Sep 2013 - Jun 2017
                        </li>
                    </ul>
                    <p className="border-b-2 border-blue-500 pb-3 mt-10 text-blue-800 text-4xl">Languages</p>
                    <ul className="mt-2 ml-5 list-disc mb-20">
                        <li className="text-black text-xl mt-2">
                            Serbian (Native)
                        </li>
                        <li className="text-black text-xl mt-2">
                            English (Fluent)
                        </li>
                    </ul>
                </div>
            </div>
        </StandardLayout>
    )
}

export default AboutPage;