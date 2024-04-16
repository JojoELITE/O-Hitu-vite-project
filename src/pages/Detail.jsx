import React from "react"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar"
import { Link } from "react-router-dom"


function Detail() {

  return (
    <div className=" bg-[#F2FAFC]">

      <NavBar />

      <div className="bg-black block lg:flex justify-between px-2 lg:px-28 py-12">

        <div className="">

          <div className="flex gap-3">
            <img className="h-6 mt-2 lg:block hidden" src="assets/gauche.png" alt="logo" />
            <h1 className="text-2xl lg:text-4xl text-white ml-2 lg:block hidden"> CHUL : Centre hospitalier universitaire <br /> de Libreville</h1>
            <h1 className="text-2xl lg:text-4xl text-white ml-2 block lg:hidden"> CHUL : Centre hospitalier universitaire de Libreville</h1>

          </div>

          <div className="flex gap-3 mt-2 lg:mt-6 items-center py-4">
            <img className="h-8 " src="assets/local2.png" alt="logo" />
            <h6 className=" text-white">hôpital général,  Derrière L, 356 Rue Ndende, Libreville</h6>
          </div>

          <div className="flex gap-3 mt-1 lg:mt-3  items-center">
            <img className="h-8 " src="assets/tel.png" alt="logo" />
            <h6 className=" text-white">+24177808864</h6>
          </div>

          <div className="flex gap-3 mt-1 lg:mt-3 items-center py-4">
            <img className="h-8 " src="assets/reseau.png" alt="logo" />
            <h6 className=" text-white">www.chul.ga</h6>
          </div>

          <div className="mt-6 flex  gap-6 lg:gap-4">
            <div>
              <Button className=" w-[200px] lg:w-[200px] h-[48px] gap-2 bg-white text-black" variant="online">
                <img className="h-8" src="assets/smile.png" alt="logo" />

                <AlertDialog className="">
                  <AlertDialogTrigger>LAISSER UN AVIS</AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>

                      <div className="flex justify-end gap-4 items-center">
                        <div className="">
                          En laissant un avis sur O’hitu vous acceptez nos
                          <span className="font-bold"> Politique de confidentialité</span>
                        </div>

                        <AlertDialogCancel className="text-4xl mb-4 text-center rounded-full w-20 h-20 text-white bg-black">
                          x
                        </AlertDialogCancel>

                      </div>


                      <div className="flex gap-10">

                        <div >

                          <Button variant="outlined" className="text-[#D83D40] text-xl text-center">Qui êtes-vous?</Button>

                          <img className="ml-[28%] py-10" src="assets/Line 12.png" alt="logo" />

                          <Link to="soin">
                            <Button variant="outlined" className="hover:text-[#D83D40] text-center text-xl">Comment évaluez<br />vous la qualité de<br /> soin ? </Button>
                          </Link>

                          <img className="ml-[28%] py-10" src="assets/Line 12.png" alt="logo" />



                          <Button variant="outlined" className="hover:text-[#D83D40] hover:font-bold  text-center text-xl">Comment évaluez<br />vous la qualité de<br /> service ? </Button>

                          <img className="ml-[28%] py-10" src="assets/Line 12.png" alt="logo" />


                          <Button variant="outlined" className="hover:text-[#D83D40] hover:font-bold text-xl text-center">Laisser un message</Button>

                        </div>



                        <div className="image1 border-l-2 border-gray-200 px-20">

                          <div className="py-32 px-20">

                            <Button variant="outlined" className=" text-xl text-lg  flex items-center justify-between gap-10 rounded-full bg-[#F6F6F6] p-8">

                              S’identifier avec Google

                              <img
                                src={`https://www.material-tailwind.com/logos/logo-google.png`}
                                alt="google"
                                className="h-12 w-12"
                              />

                            </Button>


                            <Button variant="outlined" className=" text-xl text-lg  flex items-center justify-between gap-10 rounded-full bg-[#F6F6F6] p-8 mt-4">

                              S’identifier avec Facebook

                              <img
                                src={`https://www.material-tailwind.com/logos/logo-facebook.png`}
                                alt="facebook"
                                className="h-14 w-14"
                              />

                            </Button>


                            <Button variant="outlined" className=" text-xl text-lg  flex items-center justify-between gap-10 rounded-full bg-[#F6F6F6] p-8 mt-4">

                              S’identifier avec Icloud

                              <img
                                src={`https://www.material-tailwind.com/logos/logo-apple.png`}
                                alt="apple"
                                className="h-14 w-14"
                              />

                            </Button>

                          </div>

                        </div>
                      </div>


                    </AlertDialogHeader>

                  </AlertDialogContent>
                </AlertDialog>

              </Button>

            </div>

            <div className="">
              <Link className="mt-8" to="partager">
                <Button className=" w-[70px] lg:w-[200px] h-[48px] bg-white gap-2 text-black" variant="online">
                  <img className="h-8 mt-1" src="assets/share.png" alt="logo" />

                  <div className="lg:block hidden">
                    Partager cette page

                  </div>

                </Button>
              </Link>
            </div>
          </div>

        </div>




        <div className="">

          <div className="text-black bg-white p-0 lg:p-6 mt-8 lg:mt-0 rounded-lg">

            <div className="flex gap-4 items-center">
              <div className="font-bold text-sm lg:text-lg py-6 px-4 lg:block hidden">NOTE DES<br /> PATIENTS</div>
              <div className="font-bold text-sm lg:text-lg py-6 px-4 block lg:hidden">NOTE DES PATIENTS</div>

              <div className="flex mr-16 lg:mr-0 py-8 px-0 lg:px-4 items-center">
                <img className="h-6" src="assets/ph_star-fill.png" alt="logo" />
                <img className="h-6" src="assets/ph_star-fill.png" alt="logo" />
                <img className="h-6" src="assets/eb.png" alt="logo" />
                <img className="h-6" src="assets/eb.png" alt="logo" />
                <img className="h-6" src="assets/eb.png" alt="logo" />
              </div>

              <div className="flex font-bold text- lg:text-2xl">
                <h2 className="py-7 ">2.81</h2>
                <h2 className="py-7 text-sm">/5</h2>
              </div>

              <div>
                <h6 className="text-[#322E2E] text-center text-[10px] block lg:hidden">sur 232 avis</h6>
                <h6 className="text-[#322E2E] text-center mr-10 text-lg lg:block hidden">sur 232 <br /> avis</h6>

              </div>

            </div>



            <div className="flex gap-2 border-y-2 border-[#C6C6C6] py-6 px-4 items-center">
              <h2 className="font-bold text-sm lg:text-lg">CONNEXIONS 4.0</h2>
              <img className="h-5" src="assets/i_Icon.png" alt="logo" />

              <div className="ml-6 lg:ml-16">
                <span className="rounded-md bg-[#C8DAE6] p-3 text-white font-bold text- lg:text-xl">A</span>
                <span className="rounded-md bg-black p-3 text-white font-bold ml-2 text- lg:text-xl">B</span>
                <span className="rounded-md bg-[#C8DAE6] p-3 text-white font-bold ml-2 text- lg:text-xl">C</span>
                <span className="rounded-md bg-[#C8DAE6] p-3 text-white font-bold ml-2 text- lg:text-xl">D</span>

              </div>

            </div>



            <div className="flex gap-4 py-6 px-4 border-b-2 border-[#C6C6C6] items-center">
              <h2 className="font-bold text-sm lg:text-lg">NOTE GLOBALE </h2>
              <img className="h-5" src="assets/i_Icon.png" alt="logo" />

              <div className="flex font-bold text- lg:text-2xl ml-24">
                <h2 className="">2.75</h2>
                <h2 className=" text-sm">/5</h2>
              </div>

            </div>


            <div className="flex gap-4 px-4 py-6 items-center">
              <h2 className="font-bold text-sm lg:text-lg">CLASSEMENT REGIONAL </h2>
              <img className="h-5" src="assets/i_Icon.png" alt="logo" />

              <div className="flex font-bold text- lg:text-2xl ml-10 lg:ml-6">
                <h2 className="">30</h2>
                <h2 className="text-sm">/100</h2>
              </div>

            </div>

          </div>
        </div>

      </div>








      <div className="p-8 lg:p-12 px-2 lg:px-28 ">

        <div className="bg-white rounded-">

          <Tabs defaultValue="description" className="w-[px] lg:w-full py-10 px-2 lg:px-10">
            <TabsList className="gap-6 lg:gap-32 bg-white">
              <TabsTrigger className="text-xl hover:font-bold text-black border-b-8 border-black" value="description">Description</TabsTrigger>
              <TabsTrigger className="text-xl hover:font-bold text-black hover:border-b-8 border-black" value="localisation">Localisation</TabsTrigger>
              <TabsTrigger className="text-xl hover:font-bold text-black hover:border-b-8 border-black" value="avis">Avis</TabsTrigger>

            </TabsList>

            <TabsContent value="description">

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <h1 className="text-2xl lg:text-4xl font-bold py-8 ">Description</h1>
                  <AccordionTrigger>Quelle est l'activité du CHUL ?</AccordionTrigger>
                  <AccordionContent className="">
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
                  <h1 className="text-2xl lg:text-4xl font-bold py-8">Localisation</h1>
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
                  <h1 className="text-2xl lg:text-4xl font-bold py-8">Avis</h1>
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
            <h1 className="text-2xl lg:text-4xl font-bold py-8 px-4 lg:px-10">Localisation</h1>
          </div>

        </div>

      </div>


      <div className="lg:block hidden">
        <Footer />
      </div>



    </div>
  )
}

export default Detail;
