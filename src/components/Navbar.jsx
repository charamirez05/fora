import React from 'react'
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const linkClass = ({ isActive }) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

    
    return (
        <nav style={{ background: '#3F826D', border: 'bold', borderColor: '#3F826D', color: '#FFFFFF' }}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >

                        <a className="flex flex-shrink-0 items-center mr-4"
                            to="/">
                            <img
                                style={{height:"55px"}}
                                
                                src={logo}
                                alt="Fora"
                            />
                            <div>
                                <span
                                style={{
                                    display: "block",
                                    color: "#FFFFFF",
                                    fontSize:"30px",
                                    fontWeight:"bolder",
                                    marginLeft: "10px"

                                }} 
                                    
                                    className="  text-white text-2xl font-bold ml-2">
                                    Fora
                                </span>
                            
                                <p 
                                style={{
                                    display: "block",
                                    color: "#FFFFFF",
                                    fontSize:"15px",
                                    marginLeft: "10px"

                                }}  
                                >
                                    Express your thoughts freely and anonymously
                                </p>
                            </div>


                        </a>
                       
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar