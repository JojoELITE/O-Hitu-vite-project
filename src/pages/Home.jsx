import React from "react";
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import NavBar from "@/NavBar";
import Selector from "@/Selector";
  



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



                <div className="lg:flex items-center">

                    <div className="lg:py-10 block lg:flex">
                        <Button className=" w-[300px] lg:w-[426.04px] lg:h-[70px] border-2 text-[16px] bg-white" variant="online">
                            <img className="lg:h-[66px]" src="assets/material-symbols-light_search.png" alt="logo"/>
                            <input className="h-8 lg:h-0 py-2 px-4 outline-none" type="text" placeholder="Rechercher une structure" />
                        </Button>
                        
                        <div className=" flex w-[300px] lg:w-[426.04px] h-10 lg:h-[70px] border-2 text-[16px] mt-1 lg:mt-0 bg-white" variant="online">
                            <Button className="sm:block lg:hidden h-[48px] mb-2" variant="online">
                                <img className="h-8 lg:h-[44px] " src="assets/fluent_location-20-regular.png" alt="logo"/>
                            </Button>
                            <Selector/>
                            <Button className="lg:block hidden" variant="online">
                                <img className="lg:h-[44px] mt-1" src="assets/fluent_location-20-regular.png" alt="logo"/>
                            </Button>
                        </div>


                        <Button className=" w-[300px] h-[px] border-2 text-[16px] gap-4 bg-black text-center text-white mt-1 lg:hidden" variant="online">
                            Rechercher une structure
                            <img className="" src="assets/material-symbols-light_search.png" alt="logo"/>
                        </Button>
                    </div>


                    <Button variant="online ">
                        <img className="h-[90px] mt-4 lg:block hidden" src="assets/Search.png" alt="logo"/>
                    </Button>

                </div>



                <div className="flex gap-4">
                    <Button className=" w-[100px] lg:w-[180px] h-[48px] bg-[#1A2E35] " variant="">Hopital</Button>
                    <Button className=" w-[100px] lg:w-[180px] h-[48px] bg-[#1A2E35] " variant="">Clinique</Button>
                    <Button className=" w-[100px] lg:w-[180px] h-[48px] bg-[#1A2E35] " variant="">Pharmacie</Button>
                    <Button className=" w-[100px] lg:w-[180px] h-[48px] bg-[#1A2E35] lg:block hidden" variant="">PMI</Button>
                </div>

                <div className="flex lg:hidden gap-4 mt-4">
                    <Button className="w-[100px] h-[48px] bg-[#1A2E35] text-[10px] lg:text-0" variant="">PMI</Button>
                    <Button className="w-[100px] h-[48px] bg-[#1A2E35] text-[10px] lg:text-0" variant="">Cabinet</Button>
                    <Button className="w-[100px] h-[48px] bg-[#1A2E35] text-[10px] lg:text-0" variant="">Centre d'examen</Button>
                </div>

            </div>




            <div className="mt-10 lg:mt-0">

                <div className="h-[430px] lg:h-[560px] bg-white rounded-b-lg shadow-lg"> 


                    <form class="flex gap-4 flex justify-center py-10 ">
                        <label for="" class="block mt-2 text-xl text-[#4B4B61] dark:text-white ">Filtrez :</label>
                     

                        <Select className="" >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent className="text-[#4B4B61] rounded-lg bg-white ">
                                <SelectItem value="mieux">Les mieux notés</SelectItem>
                                <SelectItem value="moins">Les moins notés</SelectItem>
                            </SelectContent>
                        </Select>

                    </form>


                    <Tabs defaultValue="account" className="w-[300px] lg:w-full ">
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

    </div>

  )
}

export default Home;






