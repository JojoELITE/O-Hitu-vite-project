import React from "react"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Link } from "react-router-dom"



function AvisMo() {

    return (
        <>

            <div className="block lg:hidden">

                <Button className="gap-1" variant="">
                    <img className="" src="assets/ph_star-fill.png" alt="logo" />

                    <AlertDialog className="">
                        <AlertDialogTrigger className="text-[8px] lg:text-[16px] ">LAISSER UN AVIS</AlertDialogTrigger>

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
                                        En laissant un avis sur O’hitu vous acceptez nos<br/>
                                        <Link to className="font-bold"> Politique de confidentialité</Link>
                                    </div>

                                </div>


                            </AlertDialogHeader>

                        </AlertDialogContent>
                    </AlertDialog>

                </Button>
            </div>






        </>
    )
}

export default AvisMo;
