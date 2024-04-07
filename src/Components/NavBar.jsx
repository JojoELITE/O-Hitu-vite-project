import React from "react"
import { Button } from "@/components/ui/button"


function NavBar() {

  return (
    <>

        <nav className="flex items-center sticky top-0 gap-4 lg:gap-0 py-4 lg:py-4 px-8 lg:px-28  bg-[#F2FAFC]">

            <div className="items-center ">
                <a className="" href="http://localhost:5173/">
                    <img className="sm:py-10 " src="assets/Group_9__5_-removebg-preview 1.png" alt="logo"/>
                </a>

            </div>


            <div className="lg:ml-8">


                <Button className="text-[16px] gap-4 flex" variant="online">
                    <img className="h-[40px] lg:h-[66px] mt-2 ml-10 lg:ml-0" src="assets/Search.png" alt="logo"/>

                    <div>
                        <span className="mb-4 hidden lg:block text-[#BDBDBD]">Rechercher une structure sanitaire</span>
                    </div>
                </Button>
            </div>


            <div className="ml-0 lg:ml-[900px]"> 
                <Button className="gap-2 lg:gap-4 w-[110px] lg:w-[189px] h-[30px] lg:h-[50px]" variant="">            
                    <img className="sm:h-18" src="assets/ph_star-fill.png" alt="logo"/>
                    <span className="text-[8px] lg:text-[12px]"> LAISSER UN AVIS</span>
                </Button>
            </div>

        </nav>

    </>
  )
}

export default NavBar;
