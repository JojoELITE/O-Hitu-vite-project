import React from "react"
import { Link } from "react-router-dom";

function Footer() {

  return (
    <>

        <footer className="bg-black flex hidden lg:flex">

            <div className="flex py-12 px-28 gap-60">
                
                <div className="">
                    <div>
                        <img src="assets/Group_9__6_-removebg-preview 1.png" alt="logo"/>
                    </div>
                </div>

                
                <div className="text-white">
                    <div>                    
                        <Link to="#">Qui sommes-nous ?</Link>
                    </div>

                    <div className="mt-6">                    
                        <Link to="#">Presse</Link>
                    </div>

                    <div className="mt-6">
                        <Link to="#">Mentions légales</Link>
                    </div>

                </div>
            </div>


            <div className="flex py-12 px-28 gap-60">
                <div className="text-white">

                    <div>
                        <Link to="#">Conditions générales d'utilisation</Link>
                    </div>

                    <div className="mt-6">
                        <Link to="#">Politique de confidentialité</Link>
                    </div>

                </div>


                <div>
                    <h6 className="text-sm text-[#9E4141]">Contactez-nous :</h6>

                    <div className="mt-3">
                        <Link className="text-white " to="#">contact@cnx4-0.com</Link>
                    </div>

                    <h6 className="text-sm text-[#9E4141] mt-5">Suivez-nous sur les réseaux</h6>


                    <div className="flex gap-3 items-center mt-3">

                        <div>
                            <Link to="#">
                                <img className="" src="assets/fa Icon.png" alt="logo"/>
                            </Link>
                        </div>
                        

                        <div>
                            <Link to="#">
                                <img className="" src="assets/Twitter Vector.png" alt="logo"/>
                            </Link>
                        </div> 
                        
                        
                        <div>
                            <Link to="#">
                                <img className="" src="assets/in Vector (1).png" alt="logo"/>
                            </Link>
                        </div>
                        
                    
                    </div>

                </div>
            </div>

        </footer>


        <div className="bg-black p-6 hidden lg:block">
            <h1 className="font-bold text-white text-center">© 2024 - CONNEXIONS 4.0</h1>
        </div>

    </>
  )
}

export default Footer;
