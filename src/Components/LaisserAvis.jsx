import React from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"



function LaisserAvis() {

    return (
        <>


            <div className="">

                <div className="lg:block hidden">


                    <Button className=" w-[150px] lg:w-[180px] h-[48px]  gap-2 " variant="">
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




                <div className="block lg:hidden">

                    <Button className="gap-1" variant="">

                        <AlertDialog className="">
                            <AlertDialogTrigger className="text- ">LAISSER UN AVIS</AlertDialogTrigger>

                            <AlertDialogContent className="">
                                <AlertDialogHeader>

                                    <div className="flex justify-center  items-center gap-8">

                                        <div className="">
                                            Laisser votre avis
                                        </div>



                                        <AlertDialogCancel className="text-center rounded-full text-white bg-black mb-2">
                                            x
                                        </AlertDialogCancel>

                                    </div>


                                    <div className="py-4">

                                        <div className="">

                                            <Button variant="outlined" className=" flex items-center justify-between gap-4 rounded-full bg-[#F6F6F6]">

                                                S’identifier avec Google

                                                <img
                                                    src={`https://www.material-tailwind.com/logos/logo-google.png`}
                                                    alt="google"
                                                    className="h-8 w-8"
                                                />

                                            </Button>


                                            <Button variant="outlined" className="flex items-center justify-between gap-4 rounded-full bg-[#F6F6F6] mt-4">

                                                S’identifier avec Facebook

                                                <img
                                                    src={`https://www.material-tailwind.com/logos/logo-facebook.png`}
                                                    alt="facebook"
                                                    className="h-8 w-8"
                                                />

                                            </Button>


                                            <Button variant="outlined" className="flex items-center justify-between gap-4 rounded-full bg-[#F6F6F6] mt-4">

                                                S’identifier avec Icloud

                                                <img
                                                    src={`https://www.material-tailwind.com/logos/logo-apple.png`}
                                                    alt="apple"
                                                    className="h-8 w-8"
                                                />

                                            </Button>

                                        </div>


                                        <div className="block lg:hidden text-sm py-8">
                                            En laissant un avis sur O’hitu vous acceptez nos<br />
                                            <Link to className="font-bold"> Politique de confidentialité</Link>
                                        </div>

                                    </div>


                                </AlertDialogHeader>

                            </AlertDialogContent>
                        </AlertDialog>

                    </Button>
                </div>
            </div>

        </>
    )
}

export default LaisserAvis
