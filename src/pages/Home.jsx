import React from "react";
import { Button } from "@/components/ui/button"


function Home() {

  return (
    < div className="py-10 px-24">
        <nav className="flex justify-between">
            <div className="flex gap-10">

                <img src="./assets/Group_9__5_-removebg-preview 1.png" alt="logo"/>

                <div>

                    <Button className="text-[16px]" variant="online">Rechercher une structure sanitaire</Button>
                </div>

            </div>


            <div>
                <Button variant="">LAISSER UN AVIS</Button>
            </div>

        </nav>


        <div className="py-10">

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


                <div className="py-10">
                    <Button className=" w-[426.04px] h-[65.42px] border-2 text-[12px]" variant="online">Rechercher une structure</Button>
                    <Button className=" w-[222.28px] h-[65.42px] border-2 text-[12px]" variant="online">Localisation</Button>
                </div>


                <div className="flex gap-4 ">
                    <Button className="w-[141.25px]" variant="">Hopital</Button>
                    <Button className="w-[141.25px]" variant="">Clinique</Button>
                    <Button className="w-[141.25px]" variant="">Pharmacie</Button>
                    <Button className="w-[141.25px]" variant="">PMI</Button>
                </div>


            </div>



            <div></div>

        </div>

    </div>
  )
}

export default Home;
