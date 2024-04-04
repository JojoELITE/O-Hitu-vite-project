import React from "react"

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
                <a href="#">Qui sommes-nous ?</a>
            </div>

            <div className="mt-6">                    
                <a href="#">Presse</a>
            </div>

            <div className="mt-6">
                <a href="#">Mentions légales</a>
            </div>

        </div>
    </div>


    <div className="flex py-12 px-28 gap-60">
        <div className="text-white">

            <div>
                <a href="#">Conditions générales d'utilisation</a>
            </div>

            <div className="mt-6">
                <a href="#">Politique de confidentialité</a>
            </div>

        </div>


        <div>
            <h6 className="text-sm text-[#9E4141]">Contactez-nous :</h6>

            <div className="mt-3">
                <a className="text-white " href="#">contact@cnx4-0.com</a>
            </div>

            <h6 className="text-sm text-[#9E4141] mt-5">Suivez-nous sur les réseaux</h6>


            <div className="flex gap-3 items-center mt-3">

                <div>
                    <a href="#">
                        <img className="" src="assets/fa Icon.png" alt="logo"/>
                    </a>
                </div>
                

                <div>
                    <a href="#">
                        <img className="" src="assets/Twitter Vector.png" alt="logo"/>
                    </a>
                </div> 
                
                
                <div>
                    <a href="#">
                        <img className="" src="assets/in Vector (1).png" alt="logo"/>
                    </a>
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
