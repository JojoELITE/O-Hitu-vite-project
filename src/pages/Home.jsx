import React from "react";
import { Button } from "@/components/ui/button"


function Home() {

  return (
    <div className="">


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


















        <div className="py-2 lg:py-48 px-8 lg:px-28 block lg:flex justify-between bg-[#F2FAFC]">

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
                        <Button className=" w-[300px] lg:w-[426.04px] lg:h-[70px] border-2 text-[16px] gap-4 sm:bg-white" variant="online">
                            <img className="lg:h-[66px]" src="assets/material-symbols-light_search.png" alt="logo"/>
                            <span className="mr-10 lg:mr-32 lg:mb-4 text-[#BDBDBD]">Rechercher une structure</span>
                        </Button>
                        
                        <Button className=" w-[300px] lg:w-[426.04px] lg:h-[70px] border-2 text-[16px] gap-4 mt-1 lg:mt-0 sm:bg-white" variant="online">
                            <img className="lg:h-[44px] sm:block lg:hidden" src="assets/fluent_location-20-regular.png" alt="logo"/>
                            <span className=" mr-32 lg:mr-52 lg:mb-4 text-[#BDBDBD]">Localisation</span>
                            <img className="lg:h-[44px] lg:block hidden" src="assets/fluent_location-20-regular.png" alt="logo"/>
                        </Button>


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


                    <div className="flex lg:gap-4 items-center border-b-2 border-black">
                        <Button className="w-[80px] lg:w-[120px] h-[48px] font-bold text-[10px] lg:text-xl rounded" variant="">Hopitaux</Button>
                        <Button className="w-[80px] lg:w-[120px] h-[48px] font-bold text-[10px] lg:text-xl rounded" variant="online">Cliniques</Button>
                        <Button className="w-[80px] lg:w-[120px] h-[48px] font-bold text-[10px] lg:text-xl rounded ml-4" variant="online">Pharmacies</Button>
                        <Button className="w-[80px] lg:w-[100px] h-[48px] font-bold text-[10px] lg:text-xl rounded" variant="online">Pmi</Button>

                        <Button className="h-[48px] font-bold text-xl rounded lg:block hidden" variant="online">
                            <img className="h-6" src="assets/ph_caret-up-bold.png" alt="logo"/>
                        </Button>
                    </div>




                    <div className="py-2 lg:py-6 px-3 flex justify-between border-b-2 border">
                        <div className="">
                            <h1 className="font-bold text-xl lg:text-2xl">CHUL</h1>
                            <h6 className="text-[#585858] text-[10px] lg:text-[16px]">Centre Hospitalier Universitaire de Libreville</h6>
                        </div>

                        <div className="flex mr-3 gap-4 mt-5 lg:mt-0">
                            <img className="h-2.5 lg:h-5 mt-2 lg:mt-2" src="assets/Vector.png" alt="logo"/>
                            <h1 className="font-bold text-xl lg:text-2xl">4,5</h1>
                            <img className="h-3 lg:h-6 mt-2 lg:mt-0" src="assets/ph_star-fill.png" alt="logo"/>

                        </div>

                    </div>


                    <div className="py-2 lg:py-4 px-3 flex justify-between border-b-2 border">
                        <div className="">
                            <h1 className="font-bold text-xl lg:text-2xl">CHUO</h1>
                            <h6 className="text-[#585858] text-[10px] lg:text-[16px]">Centre Hospitalier Universitaire d’Owendo</h6>
                        </div>

                        <div className="flex mr-3 gap-4 mt-5 lg:mt-0">
                            <img className="h-2.5 lg:h-5 mt-2 lg:mt-2" src="assets/Vector.png" alt="logo"/>
                            <h1 className="font-bold text-xl lg:text-2xl">4,5</h1>
                            <img className="h-3 lg:h-6 mt-2 lg:mt-0" src="assets/ph_star-fill.png" alt="logo"/>

                        </div>

                    </div>


                    <div className="py-2 lg:py-4 px-3 flex justify-between border-b-2 border">
                        <div className="">
                            <h1 className="font-bold text-xl lg:text-2xl">CHUA</h1>
                            <h6 className="text-[#585858] text-[10px] lg:text-[16px]">Centre Hospitalier Universitaire d’Akanda</h6>
                        </div>

                        <div className="flex mr-3 gap-4 mt-5 lg:mt-0">
                            <img className="h-2.5 lg:h-5 mt-0 lg:mt-3" src="assets/Vector Rouge.png" alt="logo"/>
                            <h1 className="font-bold text-xl lg:text-2xl">2,5</h1>
                            <img className="h-3 lg:h-6" src="assets/ph_star-fill.png" alt="logo"/>

                        </div>

                    </div>


                    <div className="py-2 lg:py-4 px-3 flex justify-between">
                        <div className="">
                            <h1 className="font-bold text-xl lg:text-2xl">NTENGUE</h1>
                            <h6 className="text-[#585858] text-[10px] lg:text-[16px]">Hôpital Régional de Ntengue</h6>
                        </div>

                        <div className="flex mr-3 gap-4 mt-5 lg:mt-0 items-center">
                            <img className="h-2.5 lg:h-5 mt-2 lg:mt-3 mr-4" src="assets/Vector Rouge.png" alt="logo"/>
                            <h1 className="font-bold text-xl lg:text-2xl">1</h1>
                            <img className="h-3 lg:h-6 mt-1 lg:mt-0" src="assets/ph_star-fill.png" alt="logo"/>

                        </div>

                    </div>
                    



                </div>

                <div className="lg:py-4 mt-3 lg:mt-0">

                    <a className="" href="#">
                        <span className="text-[#DB4C4C] px-14 lg:px-44 text-[16px] lg:text-[20px] underline">Afficher plus de structure</span>
                    </a>

                </div>

            </div>
        </div>




        <div className=" bg-[#F2FAFC] h-20 sm:block lg:hidden"></div>


























        <div className="py-16 bg-[#F6F8FB] hidden lg:block">

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
