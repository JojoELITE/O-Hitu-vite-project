import React from "react";
import { Button } from "@/components/ui/button"
import Footer from "./components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



function Home() {

  return (
    <div className="block md:hidden lg:block">


        <nav className="flex items-center lg:fixed sm:fixed gap-4 lg:gap-0 py-4 lg:py-4 px-8 lg:px-28  bg-[#F2FAFC]">

            <div className="items-center ">

                <img className="sm:py-10 " src="assets/Group_9__5_-removebg-preview 1.png" alt="logo"/>

            </div>


            <div className="lg:ml-8">
                <Button className="text-[16px] gap-4 flex" variant="online">
                    <img className="h-[40px] lg:h-[66px] mt-2 ml-10 lg:ml-0" src="assets/Search.png" alt="logo"/>

                    <div>
                        <span className="mb-4 hidden lg:block text-[#BDBDBD]">Rechercher une structure sanitaire</span>
                    </div>
                </Button>
            </div>


            <div className="ml-0 lg:ml-[900px]"> 
                <Button className="gap-2 lg:gap-4 w-[110px] lg:w-[189px] h-[30px] lg:h-[50px]" variant="">            
                    <img className="sm:h-18" src="assets/ph_star-fill.png" alt="logo"/>
                    <span className="text-[8px] lg:text-[12px]"> LAISSER UN AVIS</span>
                </Button>
            </div>

        </nav>


















        <div className="py-2 lg:py-60 px-8 lg:px-28 block lg:flex justify-between bg-[#F2FAFC]">

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







                <div className="lg:flex items-center">

                    <div className="lg:py-10 block lg:flex">
                        <div className=" w-[300px] lg:w-[426.04px] flex lg:h-[70px] border-2 text-[16px] gap-0 lg:gap-4" variant="online">
                            <img className="lg:h-[66px] ml-2 lg:ml-0 bg-white" src="assets/material-symbols-light_search.png" alt="logo"/>
                            <input className="py-2 px-4 outline-none " type="text" placeholder="Rechercher une structure" />

                        </div>
                        
                        <div className=" flex w-[300px] lg:w-[426.04px] lg:h-[70px] border-2 text-[16px] gap-0 lg:gap-4 mt-1 lg:mt-0 " variant="online">
                            <img className="lg:h-[44px] sm:block lg:hidden ml-2 lg:ml-0 bg-white" src="assets/fluent_location-20-regular.png" alt="logo"/>
                            <input className="py-2 px-4 outline-none" type="text" placeholder="Localisation" />
                            <img className="lg:h-[44px] lg:block hidden" src="assets/fluent_location-20-regular.png" alt="logo"/>
                        </div>


                        <Button className=" w-[300px] h-[px] border-2 text-[16px] gap-4 bg-black mt-1 lg:hidden" variant="online">
                            <span className="text-center text-white">Rechercher une structure</span>
                            <img className="" src="assets/material-symbols-light_search.png" alt="logo"/>
                        </Button>
                    </div>


                    <Button variant="online ">
                        <img className="h-[90px] mt-4 lg:block hidden" src="assets/Search.png" alt="logo"/>
                    </Button>

                </div>








                <div className="flex gap-4">
                    <Button className=" w-[100px] lg:w-[141.25px] h-[48px] bg-[#1A2E35] text-[10px] lg:text-0" variant="">Hopital</Button>
                    <Button className=" w-[100px] lg:w-[141.25px] h-[48px] bg-[#1A2E35] text-[10px] lg:text-0" variant="">Clinique</Button>
                    <Button className=" w-[100px] lg:w-[141.25px] h-[48px] bg-[#1A2E35] text-[10px] lg:text-0" variant="">Pharmacie</Button>
                    <Button className=" w-[100px] lg:w-[141.25px] h-[48px] bg-[#1A2E35] lg:block hidden" variant="">PMI</Button>
                </div>

                <div className="flex lg:hidden gap-4 mt-4">
                    <Button className="w-[100px] h-[48px] bg-[#1A2E35] text-[10px] lg:text-0" variant="">PMI</Button>
                    <Button className="w-[100px] h-[48px] bg-[#1A2E35] text-[10px] lg:text-0" variant="">Cabinet</Button>
                    <Button className="w-[100px] h-[48px] bg-[#1A2E35] text-[10px] lg:text-0" variant="">Centre d'examen</Button>
                </div>

            </div>














            <div className="mt-10 lg:mt-0">

                <div className="h-[430px] lg:h-[560px] bg-white rounded-b-lg shadow-lg"> 
                    <h2 className="text-[#4B4B61] text-center py-10 text-[20px] lg:block hidden">Filtrez: Les mieux notés</h2>
                    <h2 className="text-[#4B4B61] text-center py-6 lg:py-10 text-[20px]  sm:block lg:hidden">Les mieux notés</h2>









        <Tabs defaultValue="account" className="w-[300px] lg:w-full">
            <TabsList className="gap-2 lg:gap-4 border-b-2 border-black w-full lg:w-full">
                <TabsTrigger value="account">Hopitaux</TabsTrigger>
                <TabsTrigger value="cliniques">Cliniques</TabsTrigger>
                <TabsTrigger value="pharmacies">Pharmacies</TabsTrigger>
                <TabsTrigger value="pmi">Pmi</TabsTrigger>
                <TabsTrigger className="lg:block hidden" value="cabinet">Cabinet</TabsTrigger>
                <TabsTrigger className="lg:block hidden" value="centre d'examen">Centre d'examen</TabsTrigger>



            </TabsList>
            <TabsContent value="account">


                        <div className="py-2 lg:py-6 px-3 flex justify-between border-b-2 border">
                            <div className="">
                                <h1 className="font-bold text-xl lg:text-2xl">CHUL</h1>
                                <h6 className="text-[#585858] text-[10px] lg:text-[16px]">Centre Hospitalier Universitaire de Libreville</h6>
                            </div>

                            <div className="flex mr-3 gap-4 mt-5 lg:mt-3">
                                <img className="h-2.5 lg:h-5 mt-2 lg:mt-1" src="assets/Vector.png" alt="logo"/>
                                <h1 className="font-bold text-xl lg:text-2xl">4,5</h1>
                                <img className="h-3 lg:h-6 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo"/>

                            </div>

                        </div>


                        <div className="py-2 lg:py-4 px-3 flex justify-between border-b-2 border">
                            <div className="">
                                <h1 className="font-bold text-xl lg:text-2xl">CHUO</h1>
                                <h6 className="text-[#585858] text-[10px] lg:text-[16px]">Centre Hospitalier Universitaire d’Owendo</h6>
                            </div>

                            <div className="flex mr-3 gap-4 mt-5 lg:mt-3">
                                <img className="h-2.5 lg:h-5 mt-2 lg:mt-1" src="assets/Vector.png" alt="logo"/>
                                <h1 className="font-bold text-xl lg:text-2xl">4,5</h1>
                                <img className="h-3 lg:h-6 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo"/>

                            </div>

                        </div>


                        <div className="py-2 lg:py-4 px-3 flex justify-between border-b-2 border">
                            <div className="">
                                <h1 className="font-bold text-xl lg:text-2xl">CHUA</h1>
                                <h6 className="text-[#585858] text-[10px] lg:text-[16px]">Centre Hospitalier Universitaire d’Akanda</h6>
                            </div>

                            <div className="flex mr-3 gap-4 mt-4 lg:mt-3">
                                <img className="h-2.5 lg:h-5 mt-3 lg:mt-2" src="assets/Vector Rouge.png" alt="logo"/>
                                <h1 className="font-bold text-xl lg:text-2xl">2,5</h1>
                                <img className="h-3 lg:h-6 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo"/>

                            </div>

                        </div>


                        <div className="py-2 lg:py-4 px-3 flex justify-between">
                            <div className="">
                                <h1 className="font-bold text-xl lg:text-2xl">NTENGUE</h1>
                                <h6 className="text-[#585858] text-[10px] lg:text-[16px]">Hôpital Régional de Ntengue</h6>
                            </div>

                            <div className="flex mr-3 gap-4 mt-4 lg:mt-3 items-center">
                                <img className="h-2.5 lg:h-5 mt-2 lg:mt-1 mr-4" src="assets/Vector Rouge.png" alt="logo"/>
                                <h1 className="font-bold text-xl lg:text-2xl">1</h1>
                                <img className="h-3 lg:h-6 mt-0 lg:mt-0" src="assets/ph_star-fill.png" alt="logo"/>

                            </div>

                        </div>
            </TabsContent>
            <TabsContent value="cliniques">2 Change your password here.</TabsContent>
            <TabsContent value="pharmacies">3 Change your password here.</TabsContent>
            <TabsContent value="pmi">4 Change your password here.</TabsContent>
            <TabsContent value="cabinet">5 Change your password here.</TabsContent>
            <TabsContent value="centre d'examen">6 Change your password here.</TabsContent>


        </Tabs>



                </div>

                <div className="lg:py-4 mt-3 lg:mt-0">

                    <a className="" href="#">
                        <span className="text-[#DB4C4C] px-14 lg:px-44 text-[16px] lg:text-[20px] underline">Afficher plus de structure</span>
                    </a>

                </div>

            </div>
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
