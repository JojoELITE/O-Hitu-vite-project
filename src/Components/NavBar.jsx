import React from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Search from "./Search"
import { Link } from "react-router-dom"
import Auth from "./Auth"



function NavBar() {

    return (
        <>

            <nav className="flex items-center sticky top-0 gap-4 lg:gap-0 py-4 lg:py-4 px-8 lg:px-28  bg-[#F2FAFC]">

                <div className="items-center ">
                    <Link className="" to="https://o-hitu-vite-project.vercel.app/">
                        <img className="sm:py-10 " src="assets/Group_9__5_-removebg-preview 1.png" alt="logo" />
                    </Link>

                </div>


                <div className="lg:ml-8 mt-10 ">


                    <DropdownMenu>
                        <DropdownMenuTrigger>

                            <Button className="text-[16px] gap-4 flex" variant="online">
                                <img className="h-[45px] lg:h-[66px] mb-8 lg:mb-0 ml-8 lg:ml-0" src="assets/Search.png" alt="logo" />
                                

                                <div>
                                    <span className="mb-4 hidden lg:block text-[#BDBDBD]">Rechercher une structure sanitaire</span>
                                </div>
                            </Button>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="lg:ml-32 bg-">
                            <DropdownMenuLabel className="">
                                <Search />
                            </DropdownMenuLabel>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>

                
                <Auth/>


            </nav>

        </>
    )
}

export default NavBar;
