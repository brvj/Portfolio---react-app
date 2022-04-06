import {NavLink, useLocation} from "react-router-dom";


const Navigation = () => {
    const location = useLocation();

    const navigationItems = [
        {
            starts:'/about',
            content: (<div className="col flex-1
                                      mr-0 md:mr-2
                                      mt-2 md:mt-4">
                            <NavLink className="text-center block border-b-4 border-blue-500 text-blue-500
                                                hover:text-blue-800 hover:border-blue-800
                                                font-bold py-2 px-4 rounded-full
                            " to ="/about">
                                About
                            </NavLink>
                    </div>)
        },
        {
            starts:'/work',
            content: (<div className="col flex-1
                                      mr-0 md:mr-2
                                      mt-2 md:mt-4">
                            <NavLink className="text-center block border-b-4 border-blue-500 text-blue-500
                                                hover:text-blue-800 hover:border-blue-800
                                                font-bold py-2 px-4 rounded-full
                            " to ="/work">
                                Work
                            </NavLink>
                    </div>)
        },
        {
            starts:'/contact',
            content: (<div className="col flex-1
                                      mr-0 md:mr-2
                                      mt-2 md:mt-4">
                            <NavLink className="text-center block border-b-4 border-blue-500 text-blue-500
                                                hover:text-blue-800 hover:border-blue-800
                                                font-bold py-2 px-4 rounded-full
                            " to ="/contact">
                                Contact
                            </NavLink>
                    </div>)
        }
    ];

    const addActive = (item, key) =>
        <div key={key} className={location.pathname.startsWith(item.starts) ? 'itemActive' : 'item'}>
             {item.content}
        </div>;

    const NavigationItemComponent = () => <>{navigationItems.map(addActive)}</>;

    return(
        <nav>
            <div className="grid
                        grid-cols-1
                        md:grid-cols-3
                        mx-8
                        sm:mx-10
                        md:mx-40
                        lg:mx-56
                        xl:mx-96">
             <NavigationItemComponent/>
            </div>
        </nav>
    )
}

export default Navigation;