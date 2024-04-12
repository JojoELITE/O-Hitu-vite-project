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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Search from "./Search"



function NavBar() {

    return (
        <>

            <nav className="flex items-center sticky top-0 gap-4 lg:gap-0 py-4 lg:py-4 px-8 lg:px-28  bg-[#F2FAFC]">

                <div className="items-center ">
                    <a className="" href="http://localhost:5173/">
                        <img className="sm:py-10 " src="assets/Group_9__5_-removebg-preview 1.png" alt="logo" />
                    </a>

                </div>


                <div className="lg:ml-8 mt-10 ">


                    <DropdownMenu>
                        <DropdownMenuTrigger>

                            <Button className="text-[16px] gap-4 flex" variant="online">
                                <img className="h-[40px] lg:h-[66px] ml-10 lg:ml-0" src="assets/Search.png" alt="logo" />

                                <div>
                                    <span className="mb-4 hidden lg:block text-[#BDBDBD]">Rechercher une structure sanitaire</span>
                                </div>
                            </Button>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="ml-32 bg-">
                            <DropdownMenuLabel className="">
                                <Search />
                            </DropdownMenuLabel>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>




                <div className="ml-0 lg:ml-[900px] flex">

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

                                            <a href="soin">
                                                <Button variant="outlined" className="hover:text-[#D83D40] text-center text-xl">Comment évaluez<br />vous la qualité de<br /> soin ? </Button>
                                            </a>

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

export default NavBar;
