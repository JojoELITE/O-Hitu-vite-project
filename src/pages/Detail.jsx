import React from "react"
import Selector from "@/Components/Selector";
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Footer from "@/Components/Footer";


function Detail() {

  return (
    <div className=" bg-[#F2FAFC]">

      <nav className="flex items-center sticky top-0 gap-4 lg:gap-10 py-4 lg:py-4 px-8 lg:px-28  bg-[#F2FAFC]">

        <div className="items-center ">
          <a className="" href="http://localhost:5173/">
            <img className="sm:py-10 " src="assets/Group_9__5_-removebg-preview 1.png" alt="logo" />
          </a>

        </div>


        <div className="">

          <div className="lg:flex items-center mt-10">

            <div className="lg:py-2 block lg:flex">
              <Button className=" w-[300px] lg:w-[426.04px] lg:h-[70px] border-2 text-[16px] bg-white" variant="online">
                <img className="lg:h-[66px]" src="assets/material-symbols-light_search.png" alt="logo" />
                <input className="h-8 lg:h-0 py-2 px-4 outline-none" type="text" placeholder="Rechercher une structure" />
              </Button>

              <div className=" flex w-[300px] lg:w-[426.04px] h-10 lg:h-[70px] border-2 text-[16px] mt-1 lg:mt-0 bg-white" variant="online">
                <Button className="sm:block lg:hidden" variant="online">
                  <img className="h-9 lg:h-[44px] mb-1" src="assets/fluent_location-20-regular.png" alt="logo" />
                </Button>
                <Selector />
                <Button className="lg:block hidden" variant="online">
                  <img className="lg:h-[44px] mt-1 ml-3" src="assets/fluent_location-20-regular.png" alt="logo" />
                </Button>
              </div>


              <Button className=" w-[300px] h-[px] border-2 text-[16px] gap-4 bg-black text-center text-white mt-1 lg:hidden" variant="online">
                Rechercher une structure
                <img className="" src="assets/material-symbols-light_search.png" alt="logo" />
              </Button>
            </div>


            <Button variant="online ">
              <img className="h-[90px] mt-4 lg:block hidden" src="assets/Search.png" alt="logo" />
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
            <img className="sm:h-18" src="assets/ph_star-fill.png" alt="logo" />
            <span className="text-[8px] lg:text-[12px]"> LAISSER UN AVIS</span>
          </Button>
        </div>


      </nav>


      <div className="bg-black flex justify-between px-28 py-12">

        <div className="">

          <div className="flex gap-3">
            <img className="h-6 mt-2" src="assets/gauche.png" alt="logo" />
            <h1 className="text-[8px] lg:text-4xl text-white ml-2"> CHUL : Centre hospitalier universitaire <br /> de Libreville</h1>
          </div>

          <div className="flex gap-3 mt-6 items-center py-4">
            <img className="h-8 " src="assets/local2.png" alt="logo" />
            <h6 className=" text-white">hôpital général,  Derrière L, 356 Rue Ndende, Libreville</h6>
          </div>

          <div className="flex gap-3 mt-3 items-center">
            <img className="h-8 " src="assets/tel.png" alt="logo" />
            <h6 className=" text-white">+24177808864</h6>
          </div>

          <div className="flex gap-3 mt-3 items-center py-4">
            <img className="h-8 " src="assets/reseau.png" alt="logo" />
            <h6 className=" text-white">www.chul.ga</h6>
          </div>

          <div className="mt-6 flex gap-4">
            <div>
              <a className="mt-8" href="avis">
                <Button className=" w-[100px] lg:w-[200px] h-[48px] gap-2 bg-white text-black" variant="online">
                  <img className="h-8" src="assets/smile.png" alt="logo" />
                  Donner son avis</Button>
              </a>
            </div>

            <div className="">
              <a className="mt-8" href="partager">
                <Button className=" w-[100px] lg:w-[200px] h-[48px] bg-white gap-2 text-black" variant="online">
                  <img className="h-8 mt-1" src="assets/share.png" alt="logo" />
                  Partager cette page</Button>
              </a>
            </div>
          </div>

        </div>


        <div className="text-black bg-white p-6 rounded-lg">

          <div className="flex gap-4 items-center">
            <div className="font-bold py-6 px-4">NOTE DES<br /> PATIENTS</div>
            <div className="flex py-8 px-4 items-center">
              <img className="h-6" src="assets/ph_star-fill.png" alt="logo" />
              <img className="h-6" src="assets/ph_star-fill.png" alt="logo" />
              <img className="h-6" src="assets/eb.png" alt="logo" />
              <img className="h-6" src="assets/eb.png" alt="logo" />
              <img className="h-6" src="assets/eb.png" alt="logo" />
            </div>

            <div className="flex font-bold text-2xl">
              <h2 className="py-7 ">2.81</h2>
              <h2 className="py-7 text-sm">/5</h2>
            </div>

            <div>
              <h6 className="text-[#322E2E] text-center py-4 mr-10">sur 232 <br /> avis</h6>
            </div>

          </div>



          <div className="flex gap-4 border-y-2 border-[#C6C6C6] py-6 px-4 items-center">
            <h2 className="font-bold">CONNEXIONS 4.0</h2>
            <img className="h-5" src="assets/i_Icon.png" alt="logo" />

            <div className="ml-16">
              <span className="rounded-md bg-[#C8DAE6] p-3 text-white font-bold text-xl">A</span>
              <span className="rounded-md bg-black p-3 text-white font-bold ml-2 text-xl">B</span>
              <span className="rounded-md bg-[#C8DAE6] p-3 text-white font-bold ml-2 text-xl">C</span>
              <span className="rounded-md bg-[#C8DAE6] p-3 text-white font-bold ml-2 text-xl">D</span>

            </div>

          </div>



          <div className="flex gap-4 py-6 px-4 border-b-2 border-[#C6C6C6] items-center">
            <h2 className="font-bold ">NOTE GLOBALE </h2>
            <img className="h-5" src="assets/i_Icon.png" alt="logo" />

            <div className="flex font-bold text-2xl ml-24">
              <h2 className="">2.75</h2>
              <h2 className=" text-sm">/5</h2>
            </div>

          </div>


          <div className="flex gap-4 px-4 py-6 items-center">
            <h2 className="font-bold">CLASSEMENT REGIONAL </h2>
            <img className="h-5" src="assets/i_Icon.png" alt="logo" />

            <div className="flex font-bold text-2xl ml-6">
              <h2 className="">30</h2>
              <h2 className="text-sm">/100</h2>
            </div>

          </div>

        </div>

      </div>


      <div className="p-12 px-28 ">

        <div className="bg-white rounded-">

          <Tabs defaultValue="description" className="w-full py-10 px-10">
            <TabsList className="gap-32 bg-white">
              <TabsTrigger className="text-xl hover:font-bold text-black border-b-8 border-black" value="description">Description</TabsTrigger>
              <TabsTrigger className="text-xl hover:font-bold text-black hover:border-b-8 border-black" value="localisation">Localisation</TabsTrigger>
              <TabsTrigger className="text-xl hover:font-bold text-black hover:border-b-8 border-black" value="avis">Avis</TabsTrigger>

            </TabsList>
            <TabsContent value="description">

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <h1 className="text-4xl font-bold py-8">Description</h1>
                  <AccordionTrigger>Quelle est l'activité du CHUL ?</AccordionTrigger>
                  <AccordionContent>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br />
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </AccordionContent>
                </AccordionItem>
              </Accordion>


              <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Quelles sont les spécialités médicales ? </AccordionTrigger>
                  <AccordionContent>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br />
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </TabsContent>


            <TabsContent value="localisation">

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <h1 className="text-4xl font-bold py-8">Localisation</h1>
                  <AccordionTrigger>Quelle est l'activité du CHUL ?</AccordionTrigger>
                  <AccordionContent>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br />
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </AccordionContent>
                </AccordionItem>
              </Accordion>


              <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Quelles sont les spécialités médicales ? </AccordionTrigger>
                  <AccordionContent>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br />
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </TabsContent>


            <TabsContent value="avis">

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <h1 className="text-4xl font-bold py-8">Avis</h1>
                  <AccordionTrigger>Quelle est l'activité du CHUL ?</AccordionTrigger>
                  <AccordionContent>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br />
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </AccordionContent>
                </AccordionItem>
              </Accordion>


              <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Quelles sont les spécialités médicales ? </AccordionTrigger>
                  <AccordionContent>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br />
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </TabsContent>

          </Tabs>


          <div>
            <h1 className="text-4xl font-bold py-8 px-10">Localisation</h1>
          </div>



          <div>

            <div>

              <div>
                <h1 className="text-4xl font-bold py-8 px-10">Les derniers avis des patients</h1>
              </div>

              <div className="flex text-2xl px-10 gap-10">
                <div className="">
                  <h2 className="">Avis Patient</h2>
                  <h6 className="text-sm">10 total</h6>
                </div>

                <div className="flex gap-2 ">
                  <img className="h-6 mt-0.5" src="assets/ph_star-fill.png" alt="logo" />
                  <h2 className="font-bold">4.8</h2>
                </div>
              </div>

              <div className="px-10 flex items-center mt-4">
                <div>
                  <input type="checkbox" id="myCheckbox" name="myCheckbox" value="checked" class="w-6 h-6"/>
                  <label className="text-sm" for="myCheckbox">5-star</label>
                </div>

                <div className="bg-gray-300 flex w-[10%] h-2">
                  <div className="w-[93%] bg-black rounded-full "></div>
                  <div className=""></div>
                </div>
              </div>

            </div>






          </div>

        </div>


      </div>


      <Footer />

    </div>
  )
}

export default Detail;
