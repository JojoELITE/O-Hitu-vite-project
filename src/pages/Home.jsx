import React from "react";
import { Button } from "@/components/ui/button"
import NavBar from "@/Components/NavBar";
import Tableau from "@/Components/Tableau";
import Search from "@/Components/Search";
import Footer from "@/Components/Footer";


function Home() {

  return (
    <div className="block md:hidden lg:block">


       <NavBar/>


        <div className="py-2 lg:py-12 px-8 lg:px-28 block lg:flex justify-between bg-[#F2FAFC]">

            <div>

                <div className="text-[30px] lg:text-[54.8px]">
                    <h1>Notez et choisissez <br/> votre structure sanitaire</h1>
                </div>


                <div className="py-2 text-[12px] lg:text-[0px]">
                    <h6 className="lg:block hidden">
                        Et si vous aviez le pouvoir de choisir le meilleur établissement de santé pour votre santé ? <br/>
                            <span className="font-bold">O’Hitu</span> vous aide à faire votre choix en rassemblant les avis des patients et la note général<br/>
                        de Connexions 4.0.  
                    </h6>

                    <h6 className="lg:hidden">
                        Et si vous aviez le pouvoir de choisir le meilleur <br/>établissement de santé pour votre santé ?
                        <br/><span className="font-bold">O’Hitu</span> vous aide à faire votre choix en rassemblant <br/>les avis des patients et la note général
                        <br/>de Connexions 4.0.  
                    </h6>
                </div>


            <Search/>


            </div>


            <Tableau/>

        </div>
        

        <div className=" bg-[#F2FAFC] h-20 sm:block lg:hidden"></div>



        <div className="py-6 bg-[#F6F8FB] hidden lg:block">

            <h1 className="font-bold text-4xl text-center">Trouvez l'hôpital ou la clinique qui prendra <br/>
                soin de vous grâce aux avis des patients
            </h1>


            <h6 className="text-center text-sm text-[#212529] py-6">Tous les établissements de santé délivrent des soins mais quelle est la qualité du prendre soin ? Hospitalidée rassemble<br/>
                les avis des patients pour éclairer votre choix.            
            </h6>


            <div className="flex items-center justify-center">
                <img className="" src="assets/Icon [trouvez-l-hopital-ou-la-clinique].png" alt="logo"/>
            </div>

            <h6 className="text-center text-sm text-[#212529] py-20">Parfois, mieux vaut faire quelques kilomètres de plus pour bénéficier d'une prise en charge de qualité et en toute <br/>
                sécurité!            
            </h6>
  
        </div>


        <div className="bg-white flex justify-center py-20 hidden lg:flex">
            <div className="">
                <img className="" src="assets/enfin-de-la-transparence.png" alt="logo"/>
            </div>

            <div>

            <h1 className="font-bold text-4xl ">Enfin de la <br/>
                transparence !
            </h1>

            <h6 className="text-sm text-[#212529] py-16">
                Découvrez le véritable palmarès des établissements de santé près de vou. <br/>
                La note générale tient compte de la note des patients et de la <br/>
                note général de Connexions 4.0.
            </h6>

            <Button className="text-sm">
                Je découvre l'établissement qui prendra le mieux soin de moi 
            </Button>

            </div>
        </div>


        <Footer/>


    </div>

  )
}

export default Home;






