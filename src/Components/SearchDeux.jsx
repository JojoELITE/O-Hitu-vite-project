import React from "react"
import Selector from "@/Components/Selector";
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


function SearchDeux() {

    return (
        <>

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

                            <div className=" flex w-[300px] lg:w-[300px] h-10 lg:h-[70px] border-2 text-[16px] mt-1 lg:mt-0 bg-white" variant="online">
                                <Button className="sm:block lg:hidden" variant="online">
                                    <img className="h-9 lg:h-[44px] mb-1" src="assets/fluent_location-20-regular.png" alt="logo" />
                                </Button>
                                <Selector />
                                <Button className="lg:block hidden" variant="online">
                                    <img className="lg:h-[40px] lg:w-[60px] mt-1 " src="assets/fluent_location-20-regular.png" alt="logo" />
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



                <div className="ml-0 lg:ml-[400px] flex">

                    <Button className=" w-[100px] lg:w-[180px] h-[48px]  gap-2 " variant="">
                        <img className="sm:h-18" src="assets/ph_star-fill.png" alt="logo" />

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

                            </AlertDialogContent>
                        </AlertDialog>

                    </Button>
                </div>

            </nav>


        </>
    )
}

export default SearchDeux;
