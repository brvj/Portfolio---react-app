import StandardLayout from "../layouts/StandardLayout";

const WorkPage = () => {
    return(
        <StandardLayout>
            <div className="mx-max">
                <p className="text-blue-800 text-6xl pt-4 text-center">- - - Work - - -</p>
            </div>
            <div className="bg-yellow-50 mx-8 sm:mx-10 md:mx-40 lg:mx-56 xl:mx-96 mt-8 shadow-2xl rounded-xl">
                <div className="mx-8 pb-4">
                    <p className="border-b-2 border-blue-500 pb-3 text-blue-800 text-4xl pt-4"></p>
                    <ul className="mt-2 ml-5 list-disc">
                        <li className="text-black text-xl mt-2 ml-6 mr-6">
                            Internship at VegaIT Sourcing based in Novi Sad for the duration of 3 weeks. At the
                            internship I worked on
                            fullstack web application using Spring Boot framework for back-end part of the application
                            and React library for front-end part of the application. Task was
                            <a className="underline italic" href="kyoScan-_9_._14_._2021-_9_._16_._05.pdf"
                               download> successfully</a> finished.
                        </li>
                        <li className="text-black text-xl mt-2 ml-6 mr-6">
                            Course project - Online bookstore. Technologies used: Spring Boot and Thymeleaf template
                            engine.
                            For this project I manually made MySQL schema and used JDBC to establish connection
                            to my database and handle transactions. I implemented internationalization supporting
                            Serbian
                            and English language. I also got to work on tracking user session in controllers.
                        </li>
                        <li className="text-black text-xl mt-2 ml-6 mr-6">
                            Course project - eStudentService. Technologies used: Spring Boot and Angular. Team project
                            of 4
                            students. For authentication and access-control we used Spring Security framework. We used
                            Hibernate for mapping entities in database and Java Persistence Api as query service.
                        </li>
                        <li className="text-black text-xl mt-2 ml-6 mr-6">
                            Course project - Information security. Client e-mail application implemented in Java. I
                            worked on
                            sending digitally signed and ciphered messages via gmail service. User can choose which
                            message
                            he wants to read with program and then as a result get subject and body as deciphered plain
                            text
                            and signature confirmation from received message. Tool used for creating KeyStore and
                            Certificates
                            is Portecle.
                        </li>
                    </ul>
                </div>
            </div>
        </StandardLayout>
    )
}

export default WorkPage;