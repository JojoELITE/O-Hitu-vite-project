import React from "react"
import Selector from "./Selector";
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";


function Search() {

  return (
    <div className="">

        <div className="lg:flex items-center">

            <div className="lg:py-10 block lg:flex ">
                <Button className="  w-[300px] lg:w-[426.04px] lg:h-[70px] border-2 text-[16px] bg-white" variant="online">
                    <img className="lg:h-[66px]" src="assets/material-symbols-light_search.png" alt="logo"/>
                    <input className="h-8 lg:h-0 py-2 px-4 outline-none" type="text" placeholder="Rechercher une structure" />
                </Button>
                
                <div className="flex w-[300px] lg:w-[426.04px] h-8 lg:h-[70px] border-2 text-[16px] mt-1 lg:mt-0 bg-white" variant="online">
                    <Button className="sm:block lg:hidden" variant="online">
                        <img className="h-8 lg:h-[44px] lg:mb-1" src="assets/fluent_location-20-regular.png" alt="logo"/>
                    </Button>


                    <Selector/>


                    <Button className="lg:block hidden" variant="online">
                        <img className="lg:h-[44px] mt-1 ml-3" src="assets/fluent_location-20-regular.png" alt="logo"/>
                    </Button>
                </div>


                <Button className=" w-[300px] h-[px] border-2 text-[16px] gap-4 text-center text-white mt-1 lg:hidden" variant="">
                    Rechercher une structure
                    <img className="" src="assets/material-symbols-light_search.png" alt="logo"/>
                </Button>
            </div>


            <Link to="/resultat">

                <Button variant="online ">
                    <img className="h-[90px] mt-4 lg:block hidden" src="assets/Search.png" alt="logo"/>
                </Button>
            </Link>
       

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
  )
}

export default Search;
