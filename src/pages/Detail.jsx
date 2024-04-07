import React from "react"
import Selector from "@/Components/Selector";
import { Button } from "@/components/ui/button"

function Detail() {

  return (
    <div className="bg-[#F6F8FB]">
      
      <nav className="flex items-center sticky top-0 gap-4 lg:gap-10 py-4 lg:py-4 px-8 lg:px-28  bg-[#F2FAFC]">
            
            <div className="items-center ">
                <a className="" href="http://localhost:5173/">
                    <img className="sm:py-10 " src="assets/Group_9__5_-removebg-preview 1.png" alt="logo"/>
                </a>

            </div>


            <div className="">

            <div className="lg:flex items-center mt-10">

                <div className="lg:py-2 block lg:flex">
                    <Button className=" w-[300px] lg:w-[426.04px] lg:h-[70px] border-2 text-[16px] bg-white" variant="online">
                        <img className="lg:h-[66px]" src="assets/material-symbols-light_search.png" alt="logo"/>
                        <input className="h-8 lg:h-0 py-2 px-4 outline-none" type="text" placeholder="Rechercher une structure" />
                    </Button>
                    
                    <div className=" flex w-[300px] lg:w-[426.04px] h-10 lg:h-[70px] border-2 text-[16px] mt-1 lg:mt-0 bg-white" variant="online">
                        <Button className="sm:block lg:hidden" variant="online">
                            <img className="h-9 lg:h-[44px] mb-1" src="assets/fluent_location-20-regular.png" alt="logo"/>
                        </Button>
                        <Selector/>
                        <Button className="lg:block hidden" variant="online">
                            <img className="lg:h-[44px] mt-1 ml-3" src="assets/fluent_location-20-regular.png" alt="logo"/>
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


            <div className="lg:ml-[300px]"> 
                <Button className="gap-2 lg:gap-4 w-[110px] lg:w-[189px] h-[30px] lg:h-[50px]" variant="">            
                    <img className="sm:h-18" src="assets/ph_star-fill.png" alt="logo"/>
                    <span className="text-[8px] lg:text-[12px]"> LAISSER UN AVIS</span>
                </Button>
            </div>

        </nav>


        <div className="bg-black px-28 py-10">

          <div className="">

            <div className="flex gap-3">
                <img className="h-6 mt-2" src="assets/gauche.png" alt="logo"/>
                <h1 className="text-[8px] lg:text-4xl text-white ml-2"> CHUL : Centre hospitalier universitaire <br/> de Libreville</h1>
            </div>

            <div className="flex gap-3 mt-6 items-center">
                <img className="h-8 " src="assets/local2.png" alt="logo"/>
                  <h6 className=" text-white">hôpital général,  Derrière L, 356 Rue Ndende, Libreville</h6>
            </div>

            <div className="flex gap-3 mt-3 items-center">
                <img className="h-8 " src="assets/tel.png" alt="logo"/>
                <h6 className=" text-white">+24177808864</h6>
            </div>

            <div className="flex gap-3 mt-3 items-center">
                <img className="h-8 " src="assets/reseau.png" alt="logo"/>
                <h6 className=" text-white">www.chul.ga</h6>
            </div>

            <div className="mt-6 flex gap-4">
                <div>
                  <a className="mt-8" href="avis">
                    <Button className=" w-[100px] lg:w-[200px] h-[48px] gap-2 bg-white text-black" variant="online">
                      <img className="h-8" src="assets/smile.png" alt="logo"/>
                        Donner son avis</Button>
                  </a>
                </div>

                <div className="">
                  <a className="mt-8" href="partager">
                    <Button className=" w-[100px] lg:w-[200px] h-[48px] bg-white gap-2 text-black" variant="online">
                      <img className="h-8 mt-1" src="assets/share.png" alt="logo"/>
                        Partager cette page</Button>
                  </a>
                </div>
            </div>

          </div>


          <div className="text-black bg-white">

            <div></div>
            <div></div>
            <div></div>


            <div>
              <h2>Classement régional </h2>
            </div>
          </div>

          


        </div>
    
    </div>
  )
}

export default Detail;
