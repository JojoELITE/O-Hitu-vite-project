import React from "react";
import { Button } from "@/components/ui/button"


function Home() {

  return (
    < div className="py-12 px-28 bg-[#F2FAFC]">

        <nav className="flex justify-between items-center">

            <div className="flex gap-14 items-center">

                <img src="assets/Group_9__5_-removebg-preview 1.png" alt="logo"/>

                <div className="">
                    <Button className="text-[16px] gap-4" variant="online">
                        <img className="h-[66px] mt-8" src="assets/Search.png" alt="logo"/>
                        <span className="mt-8">Rechercher une structure sanitaire</span>
                    </Button>
                </div>

            </div>


            <div className=""> 
                <Button className="gap-4 w-[189px] h-[50px]" variant="">            
                    <img src="assets/ph_star-fill.png" alt="logo"/>
                    <span className="text-[12px]"> LAISSER UN AVIS</span>
                </Button>
            </div>

        </nav>


        <div className="py-24 flex justify-between">

            <div>

                <div className="text-[54.8px]">
                    <h1>Notez et choisissez <br/> votre structure sanitaire</h1>
                </div>


                <div className="py-2">
                    <h6 >
                        Et si vous aviez le pouvoir de choisir le meilleur établissement de santé pour votre santé ? <br/>
                            <span className="font-bold">O’Hitu</span> vous aide à faire votre choix en rassemblant les avis des patients et la note général<br/>
                        de Connexions 4.0.  
                    </h6>
                </div>

                <div className="flex items-center gap-8">

                    <div className="py-10 flex">
                        <Button className=" w-[426.04px] h-[80px] border-2 text-[16px] gap-4" variant="online">
                            <img className="h-[66px]" src="assets/material-symbols-light_search.png" alt="logo"/>
                            <span className="mr-32 mb-4">Rechercher une structure</span>
                        </Button>
                        
                        <Button className=" w-[222.28px] h-[80px] border-2 text-[16px]" variant="online">
                            <span className="mr-14 mb-4">Localisation</span>
                            <img className="h-[44px]" src="assets/fluent_location-20-regular.png" alt="logo"/>
                        </Button>
                    </div>

                        <img className="h-[90px] mt-4" src="assets/Search.png" alt="logo"/>

                </div>


                <div className="flex gap-4 ">
                    <Button className="w-[141.25px] h-[48px] bg-[#1A2E35]" variant="">Hopital</Button>
                    <Button className="w-[141.25px] h-[48px] bg-[#1A2E35]" variant="">Clinique</Button>
                    <Button className="w-[141.25px] h-[48px] bg-[#1A2E35]" variant="">Pharmacie</Button>
                    <Button className="w-[141.25px] h-[48px] bg-[#1A2E35]" variant="">PMI</Button>
                </div>


            </div>

            <div>

                <div className="w-[520px] h-[500px] bg-white"> 
                    <h2 className="text-[#4B4B61] text-center py-10 text-[24px]">Filtrez: Les mieux notés</h2>

                </div>

                <a className="" href="#">
                    <span className="text-[#DB4C4C] px-44">Afficher plus de structure </span>
                </a>

            </div>

         

        </div>

    </div>
  )
}

export default Home;
