import React from "react";
import { Button } from "@/components/ui/button"


function Home() {

  return (
    <div className="">

        <nav className="items-center py-4 bg-[#F2FAFC] flex justify-between">

            <div className="px-6">

                <img className="h-14" src="assets/Group_9__5_-removebg-preview 1.png" alt="logo"/>

            </div>


            <div className="flex items-center px-6">

                <div className="">
                    <Button className="text-[16px]" variant="online">
                        <img className="h-[40px] mt-6 " src="assets/Search.png" alt="logo"/>

                    </Button>
                </div>


                <div className=""> 
                    <Button className="gap-2 w-[100px] h-[30px]" variant="">            
                        <img className="h-18" src="assets/ph_star-fill.png" alt="logo"/>
                        <span className="text-[8px]"> LAISSER UN AVIS</span>
                    </Button>
                </div>
            </div>

          

        </nav>





        <div className=" px-8 bg-[#F2FAFC]">

            <div>

                <div className="text-[30px]">
                    <h1>Notez et choisissez <br/> votre structure sanitaire</h1>
                </div>


                <div className="py-2 text-[12px]">
                    <h6 >
                        Et si vous aviez le pouvoir de choisir le meilleur <br/>établissement de santé pour votre santé ?
                        <br/><span className="font-bold">O’Hitu</span> vous aide à faire votre choix en rassemblant les avis des patients et la note général
                        <br/>de Connexions 4.0.  
                    </h6>
                </div>

                <div className="flex items-center">

                    <div className="">
                        <Button className=" w-[300px] h-[px] border-2 text-[16px] gap-4 bg-white" variant="online">
                            <img className="" src="assets/material-symbols-light_search.png" alt="logo"/>
                            <span className="mr-10 text-[#BDBDBD]">Rechercher une structure</span>
                        </Button>
                        
                        <Button className=" w-[300px] h-[px] border-2 text-[16px] gap-4 mt-1 bg-white" variant="online">
                            <img className="" src="assets/fluent_location-20-regular.png" alt="logo"/>
                            <span className="mr-32 text-[#BDBDBD]">Localisation</span>
                        </Button>

                        <Button className=" w-[300px] h-[px] border-2 text-[10px] gap-4 bg-black mt-1" variant="online">
                            <span className="text-center text-white">Rechercher une structure</span>
                            <img className="" src="assets/material-symbols-light_search.png" alt="logo"/>
                        </Button>
                    </div>


                </div>


                <div className="flex gap-4 mt-4">
                    <Button className="w-[100px] h-[48px] bg-[#1A2E35] text-[10px]" variant="">Hopital</Button>
                    <Button className="w-[100px] h-[48px] bg-[#1A2E35] text-[10px]" variant="">Clinique</Button>
                    <Button className="w-[100px] h-[48px] bg-[#1A2E35] text-[10px]" variant="">Pharmacie</Button>
                </div>

                <div className="flex gap-4 mt-4">
                    <Button className="w-[100px] h-[48px] bg-[#1A2E35] text-[10px]" variant="">PMI</Button>
                    <Button className="w-[100px] h-[48px] bg-[#1A2E35] text-[10px]" variant="">Cabinet</Button>
                    <Button className="w-[100px] h-[48px] bg-[#1A2E35] text-[10px]" variant="">Centre d'examen</Button>
                </div>


            </div>

            <div className="mt-10">

                <div className="h-[430px] bg-white rounded-b-lg shadow-lg"> 
                    <h2 className="text-[#4B4B61] text-center py-6 text-[20px]">Les mieux notés</h2>

                    <div className="flex items-center border-b-2 border-black">
                        <Button className="w-[80px] h-[48px] font-bold text-[10px] rounded" variant="">Hopitaux</Button>
                        <Button className="w-[80px] h-[48px] font-bold text-[10px] rounded" variant="online">Cliniques</Button>
                        <Button className="w-[80px] h-[48px] font-bold text-[10px] rounded ml-4" variant="online">Pharmacies</Button>
                        <Button className="w-[80px] h-[48px] font-bold text-[10px] rounded" variant="online">Pmi</Button>
                      
                    </div>




                    <div className="py-2 px-3 flex justify-between border-b-2 border">
                        <div className="">
                            <h1 className="font-bold text-xl">CHUL</h1>
                            <h6 className="text-[#585858] text-[10px]">Centre Hospitalier Universitaire de Libreville</h6>
                        </div>

                        <div className="flex mr-3 items-center gap-4">
                            <img className="h-2.5 " src="assets/Vector.png" alt="logo"/>
                            <h1 className="font-bold text-xl">4,5</h1>
                            <img className="h-3" src="assets/ph_star-fill.png" alt="logo"/>

                        </div>

                    </div>


                    <div className="py-2 px-3 flex justify-between border-b-2 border">
                        <div className="">
                            <h1 className="font-bold text-xl">CHUO</h1>
                            <h6 className="text-[#585858] text-[10px]">Centre Hospitalier Universitaire d’Owendo</h6>
                        </div>

                        <div className="flex mr-3 items-center  gap-4">
                            <img className="h-2.5 " src="assets/Vector.png" alt="logo"/>
                            <h1 className="font-bold text-xl">4,5</h1>
                            <img className="h-3" src="assets/ph_star-fill.png" alt="logo"/>

                        </div>

                    </div>


                    <div className="py-2 px-3 flex justify-between border-b-2 border">
                        <div className="">
                            <h1 className="font-bold text-xl">CHUA</h1>
                            <h6 className="text-[#585858] text-[10px]">Centre Hospitalier Universitaire d’Akanda</h6>
                        </div>

                        <div className="flex mr-3 items-center mt-5 gap-4">
                            <img className="h-2.5 " src="assets/Vector Rouge.png" alt="logo"/>
                            <h1 className="font-bold text-xl">2,5</h1>
                            <img className="h-3" src="assets/ph_star-fill.png" alt="logo"/>

                        </div>

                    </div>


                    <div className="py-2 px-3 flex justify-between">
                        <div className="">
                            <h1 className="font-bold text-xl">NTENGUE</h1>
                            <h6 className="text-[#585858] text-[10px]">Hôpital Régional de Ntengue</h6>
                        </div>

                        <div className="flex mr-3 gap-4 itmes-center mt-5">
                            <img className="h-2.5 mr-4 mt-2" src="assets/Vector Rouge.png" alt="logo"/>
                            <h1 className="font-bold text-xl">1</h1>
                            <img className="h-3 mt-2" src="assets/ph_star-fill.png" alt="logo"/>
                        </div>

                    </div>
                    
                </div>


                <div className="mt-3">

                    <a className="" href="#">
                        <span className="text-[#DB4C4C] px-14 text-[16px] underline">Afficher plus de structure</span>
                    </a>

                </div>

            </div>
        </div>

        <div className=" bg-[#F2FAFC] h-20"></div>






































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
