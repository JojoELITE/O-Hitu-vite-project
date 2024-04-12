import React from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import Tableau from "@/Components/Tableau";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


function Resultat() {

  return (
    <div className="block md:hidden lg:block bg-[#F6F8FB]">

      <NavBar />


      <div className="bg-black py-4 mt-4 px-28">

        <h6 className="text-white ">16 Résultats pour</h6>
        <h1 className="text-white font-bold text-4xl mb-4">Clinique à Estuaire , Libreville</h1>

      </div>


      <div className="mt-6 px-28 flex justify-between">
        <div className="flex gap-2 text-[#BDBDBD]">
          <Button className=" w-[100px] lg:w-[180px] h-[48px]  flex gap-2 rounded-full border-2 hover:border-gray-400  " variant="online">Tous le filtres
            <img className="sm:h-18" src="assets/filtre.png" alt="logo" />
          </Button>

          <Button className=" w-[100px] lg:w-[120px] h-[48px] rounded-full border-2  hover:border-gray-400" variant="online">Notation</Button>
          <Button className=" w-[100px] lg:w-[120px] h-[48px] rounded-full border-2 border-gray-400 " variant="online">Localisation</Button>
          <Button className=" w-[100px] lg:w-[120px] h-[48px] rounded-full border-2 hover:border-gray-400 " variant="online">Catégorie</Button>
          <Button className=" w-[100px] lg:w-[120px] h-[48px] rounded-full border-2 hover:border-gray-400 " variant="online">Mieux noté</Button>

        </div>

        <div className="flex gap-2 text-[#BDBDBD]">
          <form class="flex gap-4 flex justify-center px-3">
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

          <Button className=" w-[100px] lg:w-[150px] h-[48px]  flex gap-2 rounded-full border-2 hover:border-gray-400" variant="online">
            <img className="sm:h-18" src="assets/carte.png" alt="logo" />
            voir la carte
          </Button>
        </div>

      </div>






      <div className="px-28 py-12  flex justify-between ">

        <div>

          <div>

            <div className="flex items-center bg-white w-[900px] h-[230px]  gap-20 ">

              <div>
                <img className="sm:py-10 ml-8 mt-6 " src="assets/chul.png" alt="logo" />
              </div>



              <div>

                <div>
                  <div className="flex justify-between mt-20">

                    <div className="font-bold text-xl">CHUL</div>

                    <div className="flex gap-3">
                      <h1 className="font-bold text-xl lg:text-xl">4,5</h1>
                      <img className="h-3 lg:h-5 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo" />
                    </div>

                  </div>


                  <div>
                    <h6>
                      Centre Hospitalier universitaire de <br /> Libreville
                    </h6>
                  </div>

                </div>



                <div className="flex items-center gap-3 mb-6 text-black">
                  <img className="sm:py-10 " src="assets/location.png" alt="logo" />

                  <h6> hôpital général, <br />Derrière L, 356 Rue Ndende, Libreville</h6>

                </div>

              </div>



              <div className="mt-6">
                <div>
                  <a className="mt-8" href="detail">
                    <Button className=" w-[100px] lg:w-[180px] h-[48px] rounded-lg border-2 border-[#D83D40] text-[#D83D40] " variant="online">Voir la page detail</Button>
                  </a>
                </div>

                <div className="py-4">


                  <Button className=" w-[100px] lg:w-[180px] h-[48px]  gap-2 " variant="">

                    <AlertDialog className="">
                      <AlertDialogTrigger>LAISSER UN AVIS</AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>

                          <div className="flex justify-end gap-4 items-center">
                            <div className="">
                              En laissant un avis sur O’hitu vous acceptez nos
                              <span className="font-bold"> Politique de confidentialité</span>
                            </div>

                            <img className="h-" src="assets/fermer.png" alt="logo" />

                          </div>


                          <div className="flex gap-10">

                            <div >

                              <Button variant="outlined" className="text-[#D83D40] text-xl text-center">Qui êtes-vous?</Button>

                              <img className="ml-[28%] py-10" src="assets/Line 12.png" alt="logo" />


                              <Button variant="outlined" className="hover:text-[#D83D40] text-center text-xl">Comment évaluez<br />vous la qualité de<br /> soin ? </Button>

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


                        <AlertDialogFooter className="mr-[40%]">


                          <AlertDialogCancel>Cancel</AlertDialogCancel>

                          <a className="" href="#">
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </a>


                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                  </Button>

                </div>
              </div>



            </div>

          </div>




          <div className="py-10">

            <div className="flex items-center bg-white w-[900px] h-[230px]  gap-20 ">

              <div>
                <img className="sm:py-10 ml-8 mt-6 " src="assets/chu.png" alt="logo" />
              </div>



              <div>

                <div>
                  <div className="flex justify-between mt-20">

                    <div className="font-bold text-xl">CHUO</div>

                    <div className="flex gap-3">
                      <h1 className="font-bold text-xl lg:text-xl">4,5</h1>
                      <img className="h-3 lg:h-5 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo" />
                    </div>

                  </div>


                  <div>
                    <h6>
                      Centre Hospitalier universitaire  <br /> Centre Hospitalier universitaire
                    </h6>
                  </div>

                </div>



                <div className="flex items-center gap-3 mb-6 text-black">
                  <img className="sm:py-10 " src="assets/location.png" alt="logo" />

                  <h6> hôpital général, <br />Derrière L, 356 Rue Ndende, Libreville</h6>

                </div>

              </div>


              <div className="mt-6">
                <div>
                  <a className="mt-8" href="detail">
                    <Button className=" w-[100px] lg:w-[180px] h-[48px] rounded-lg border-2 border-[#D83D40] text-[#D83D40] " variant="online">Voir la page detail</Button>
                  </a>
                </div>

                <div className="py-4">


                  <Button className=" w-[100px] lg:w-[180px] h-[48px]  gap-2 " variant="">

                    <AlertDialog className="">
                      <AlertDialogTrigger>LAISSER UN AVIS</AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>

                          <div className="flex justify-end gap-4 items-center">
                            <div className="">
                              En laissant un avis sur O’hitu vous acceptez nos
                              <span className="font-bold"> Politique de confidentialité</span>
                            </div>

                            <img className="h-" src="assets/fermer.png" alt="logo" />

                          </div>


                          <div className="flex gap-10">

                            <div >

                              <Button variant="outlined" className="text-[#D83D40] text-xl text-center">Qui êtes-vous?</Button>

                              <img className="ml-[28%] py-10" src="assets/Line 12.png" alt="logo" />


                              <Button variant="outlined" className="hover:text-[#D83D40] text-center text-xl">Comment évaluez<br />vous la qualité de<br /> soin ? </Button>

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


                        <AlertDialogFooter className="mr-[40%]">


                          <AlertDialogCancel>Cancel</AlertDialogCancel>

                          <a className="" href="#">
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </a>


                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                  </Button>

                </div>
              </div>



            </div>

          </div>



          <div>

            <div className="flex items-center bg-white w-[900px] h-[230px]  gap-20 ">

              <div>
                <img className="sm:py-10 ml-8 mt-6 " src="assets/chul.png" alt="logo" />
              </div>



              <div>

                <div>
                  <div className="flex justify-between mt-20">

                    <div className="font-bold text-xl">CHUL</div>

                    <div className="flex gap-3">
                      <h1 className="font-bold text-xl lg:text-xl">4,5</h1>
                      <img className="h-3 lg:h-5 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo" />
                    </div>

                  </div>


                  <div>
                    <h6>
                      Centre Hospitalier universitaire de <br /> Libreville
                    </h6>
                  </div>

                </div>



                <div className="flex items-center gap-3 mb-6 text-black">
                  <img className="sm:py-10 " src="assets/location.png" alt="logo" />

                  <h6> hôpital général, <br />Derrière L, 356 Rue Ndende, Libreville</h6>

                </div>

              </div>




              <div className="mt-6">
                <div>
                  <a className="mt-8" href="detail">
                    <Button className=" w-[100px] lg:w-[180px] h-[48px] rounded-lg border-2 border-[#D83D40] text-[#D83D40] " variant="online">Voir la page detail</Button>
                  </a>
                </div>

                <div className="py-4">


                  <Button className=" w-[100px] lg:w-[180px] h-[48px]  gap-2 " variant="">

                    <AlertDialog className="">
                      <AlertDialogTrigger>LAISSER UN AVIS</AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>

                          <div className="flex justify-end gap-4 items-center">
                            <div className="">
                              En laissant un avis sur O’hitu vous acceptez nos
                              <span className="font-bold"> Politique de confidentialité</span>
                            </div>

                            <img className="h-" src="assets/fermer.png" alt="logo" />

                          </div>


                          <div className="flex gap-10">

                            <div >

                              <Button variant="outlined" className="text-[#D83D40] text-xl text-center">Qui êtes-vous?</Button>

                              <img className="ml-[28%] py-10" src="assets/Line 12.png" alt="logo" />


                              <Button variant="outlined" className="hover:text-[#D83D40] text-center text-xl">Comment évaluez<br />vous la qualité de<br /> soin ? </Button>

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


                        <AlertDialogFooter className="mr-[40%]">


                          <AlertDialogCancel>Cancel</AlertDialogCancel>

                          <a className="" href="#">
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </a>


                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                  </Button>

                </div>
              </div>



            </div>

          </div>




          <div className="py-10">

            <div className="flex items-center bg-white w-[900px] h-[230px]  gap-20 ">

              <div>
                <img className="sm:py-10 ml-8 mt-6 " src="assets/chul.png" alt="logo" />
              </div>



              <div>

                <div>
                  <div className="flex justify-between mt-20">

                    <div className="font-bold text-xl">CHUL</div>

                    <div className="flex gap-3">
                      <h1 className="font-bold text-xl lg:text-xl">4,5</h1>
                      <img className="h-3 lg:h-5 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo" />
                    </div>

                  </div>


                  <div>
                    <h6>
                      Centre Hospitalier universitaire de <br /> Libreville
                    </h6>
                  </div>

                </div>



                <div className="flex items-center gap-3 mb-6 text-black">
                  <img className="sm:py-10 " src="assets/location.png" alt="logo" />

                  <h6> hôpital général, <br />Derrière L, 356 Rue Ndende, Libreville</h6>

                </div>

              </div>

              <div className="mt-6">
                <div>
                  <a className="mt-8" href="detail">
                    <Button className=" w-[100px] lg:w-[180px] h-[48px] rounded-lg border-2 border-[#D83D40] text-[#D83D40] " variant="online">Voir la page detail</Button>
                  </a>
                </div>

                <div className="py-4">


                  <Button className=" w-[100px] lg:w-[180px] h-[48px]  gap-2 " variant="">

                    <AlertDialog className="">
                      <AlertDialogTrigger>LAISSER UN AVIS</AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>

                          <div className="flex justify-end gap-4 items-center">
                            <div className="">
                              En laissant un avis sur O’hitu vous acceptez nos
                              <span className="font-bold"> Politique de confidentialité</span>
                            </div>

                            <img className="h-" src="assets/fermer.png" alt="logo" />

                          </div>


                          <div className="flex gap-10">

                            <div >

                              <Button variant="outlined" className="text-[#D83D40] text-xl text-center">Qui êtes-vous?</Button>

                              <img className="ml-[28%] py-10" src="assets/Line 12.png" alt="logo" />


                              <Button variant="outlined" className="hover:text-[#D83D40] text-center text-xl">Comment évaluez<br />vous la qualité de<br /> soin ? </Button>

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


                        <AlertDialogFooter className="mr-[40%]">


                          <AlertDialogCancel>Cancel</AlertDialogCancel>

                          <a className="" href="#">
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </a>


                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                  </Button>

                </div>
              </div>

            </div>

          </div>



          <div>

            <div className="flex items-center bg-white w-[900px] h-[230px]  gap-20 ">

              <div>
                <img className="sm:py-10 ml-8 mt-6 " src="assets/chul.png" alt="logo" />
              </div>



              <div>

                <div>
                  <div className="flex justify-between mt-20">

                    <div className="font-bold text-xl">CHUL</div>

                    <div className="flex gap-3">
                      <h1 className="font-bold text-xl lg:text-xl">4,5</h1>
                      <img className="h-3 lg:h-5 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo" />
                    </div>

                  </div>


                  <div>
                    <h6>
                      Centre Hospitalier universitaire de <br /> Libreville
                    </h6>
                  </div>

                </div>



                <div className="flex items-center gap-3 mb-6 text-black">
                  <img className="sm:py-10 " src="assets/location.png" alt="logo" />

                  <h6> hôpital général, <br />Derrière L, 356 Rue Ndende, Libreville</h6>

                </div>

              </div>

              <div className="mt-6">
                <div>
                  <a className="mt-8" href="detail">
                    <Button className=" w-[100px] lg:w-[180px] h-[48px] rounded-lg border-2 border-[#D83D40] text-[#D83D40] " variant="online">Voir la page detail</Button>
                  </a>
                </div>

                <div className="py-4">


                  <Button className=" w-[100px] lg:w-[180px] h-[48px]  gap-2 " variant="">

                    <AlertDialog className="">
                      <AlertDialogTrigger>LAISSER UN AVIS</AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>

                          <div className="flex justify-end gap-4 items-center">
                            <div className="">
                              En laissant un avis sur O’hitu vous acceptez nos
                              <span className="font-bold"> Politique de confidentialité</span>
                            </div>

                            <img className="h-" src="assets/fermer.png" alt="logo" />

                          </div>


                          <div className="flex gap-10">

                            <div >

                              <Button variant="outlined" className="text-[#D83D40] text-xl text-center">Qui êtes-vous?</Button>

                              <img className="ml-[28%] py-10" src="assets/Line 12.png" alt="logo" />


                              <Button variant="outlined" className="hover:text-[#D83D40] text-center text-xl">Comment évaluez<br />vous la qualité de<br /> soin ? </Button>

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


                        <AlertDialogFooter className="mr-[40%]">


                          <AlertDialogCancel>Cancel</AlertDialogCancel>

                          <a className="" href="#">
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </a>


                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                  </Button>

                </div>
              </div>

            </div>

          </div>





        </div>


        <div>
          <Tableau />

          <img className="sm:py-10 w-[500px]" src="assets/bucket.png" alt="logo" />


        </div>


      </div>


      <Footer />

    </div>
  )
}

export default Resultat;
