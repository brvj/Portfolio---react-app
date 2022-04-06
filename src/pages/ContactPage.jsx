import StandardLayout from "../layouts/StandardLayout";

const ContactPage = () =>{
    return(
        <StandardLayout>
            <div className="mx-max">
                <p className="text-blue-800 text-6xl pt-4 text-center">- - - Contact - - -</p>
            </div>
            <div className="bg-yellow-50 mx-8 sm:mx-10 md:mx-40 lg:mx-56 xl:mx-96 mt-8 shadow-2xl rounded-xl">
                <div className="mx-8 pb-4">
                    <p className="border-b-2 border-blue-500 pb-3 text-blue-800 text-4xl pt-4"></p>

                    <div className="flex justify-center items-center">
                        <img src={require('../img/img.png')} alt="Profile picture" className="w-48 rounded-full m-2 shadow-lg "/>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="pb-3 mt-2 text-blue-800 text-2xl">Phone: +381 64 555 69 15</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="pb-3 mt-2 text-blue-800 text-2xl">E-Mail: jankovicb0230@gmail.com</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="pb-3 mt-2 text-blue-800 text-2xl"><a
                            href="https://www.linkedin.com/in/boris-jankovi%C4%87-6994a8205/">LinkedIn </a></p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="pb-3 mt-2 text-blue-800 text-2xl"><a href="https://github.com/brvj">GitHub</a></p>
                    </div>
                </div>
            </div>
        </StandardLayout>
    )
}

export default ContactPage;