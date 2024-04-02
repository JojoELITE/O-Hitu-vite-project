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

                <div className="flex items-center">

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


                    <Button variant="online">
                        <img className="h-[90px] mt-4" src="assets/Search.png" alt="logo"/>
                    </Button>

                </div>


                <div className="flex gap-4 ">
                    <Button className="w-[141.25px] h-[48px] bg-[#1A2E35]" variant="">Hopital</Button>
                    <Button className="w-[141.25px] h-[48px] bg-[#1A2E35]" variant="">Clinique</Button>
                    <Button className="w-[141.25px] h-[48px] bg-[#1A2E35]" variant="">Pharmacie</Button>
                    <Button className="w-[141.25px] h-[48px] bg-[#1A2E35]" variant="">PMI</Button>
                </div>


            </div>

            <div>

                <div className="h-[560px] bg-white rounded-b-lg shadow-lg"> 
                    <h2 className="text-[#4B4B61] text-center py-10 text-[20px]">Filtrez: Les mieux notés</h2>

                    <div className="flex gap-4 items-center border-b-2 border-black">
                        <Button className="w-[120px] h-[48px] font-bold text-xl rounded" variant="">Hopitaux</Button>
                        <Button className="w-[120px] h-[48px] font-bold text-xl rounded" variant="online">Cliniques</Button>
                        <Button className="w-[120px] h-[48px] font-bold text-xl rounded ml-4" variant="online">Pharmacies</Button>
                        <Button className="w-[100px] h-[48px] font-bold text-xl rounded" variant="online">Pmi</Button>
                        <Button className="h-[48px] font-bold text-xl rounded" variant="online">
                            <img className="h-6" src="assets/ph_caret-up-bold.png" alt="logo"/>
                        </Button>
                    </div>




                    <div className="py-6 px-3 flex justify-between border-b-2 border">
                        <div className="">
                            <h1 className="font-bold text-2xl">CHUL</h1>
                            <h6 className="text-[#585858] text-[16px]">Centre Hospitalier Universitaire de Libreville</h6>
                        </div>

                        <div className="flex mr-3 gap-4">
                            <img className="h-5 mt-2" src="assets/Vector.png" alt="logo"/>
                            <h1 className="font-bold text-2xl">4,5</h1>
                            <img className="h-6" src="assets/ph_star-fill.png" alt="logo"/>

                        </div>

                    </div>


                    <div className="py-4 px-3 flex justify-between border-b-2 border">
                        <div className="">
                            <h1 className="font-bold text-2xl">CHUO</h1>
                            <h6 className="text-[#585858] text-[16px]">Centre Hospitalier Universitaire d’Owendo</h6>
                        </div>

                        <div className="flex mr-3 gap-4">
                            <img className="h-5 mt-2" src="assets/Vector.png" alt="logo"/>
                            <h1 className="font-bold text-2xl">4,5</h1>
                            <img className="h-6" src="assets/ph_star-fill.png" alt="logo"/>

                        </div>

                    </div>


                    <div className="py-4 px-3 flex justify-between border-b-2 border">
                        <div className="">
                            <h1 className="font-bold text-2xl">CHUA</h1>
                            <h6 className="text-[#585858] text-[16px]">Centre Hospitalier Universitaire d’Akanda</h6>
                        </div>

                        <div className="flex mr-3 gap-4">
                            <img className="h-5 mt-2" src="assets/Vector Rouge.png" alt="logo"/>
                            <h1 className="font-bold text-2xl">2,5</h1>
                            <img className="h-6" src="assets/ph_star-fill.png" alt="logo"/>

                        </div>

                    </div>


                    <div className="py-4 px-3 flex justify-between">
                        <div className="">
                            <h1 className="font-bold text-2xl">NTENGUE</h1>
                            <h6 className="text-[#585858] text-[16px]">Hôpital Régional de Ntengue</h6>
                        </div>

                        <div className="flex mr-3 gap-4">
                            <img className="h-5 mt-2 mr-4" src="assets/Vector Rouge.png" alt="logo"/>
                            <h1 className="font-bold text-2xl">1</h1>
                            <img className="h-6" src="assets/ph_star-fill.png" alt="logo"/>

                        </div>

                    </div>
                    



                </div>

                <div className="py-4">

                    <a className="" href="#">
                        <span className="text-[#DB4C4C] px-44 text-[20px] underline">Afficher plus de structure</span>
                    </a>

                </div>

            </div>

         

        </div>

    </div>
  )
}

export default Home;
