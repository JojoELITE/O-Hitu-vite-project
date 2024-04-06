import React from "react"
import Search from "/Search";

function Resultat() {

  return (
    <div className="block md:hidden lg:block">

      <nav className="flex items-center sticky top-0 gap-4 lg:gap-0 py-4 lg:py-4 px-8 lg:px-28  bg-[#F2FAFC]">

        <div className="items-center ">

            <img className="sm:py-10 " src="assets/Group_9__5_-removebg-preview 1.png" alt="logo"/>

        </div>


        <Search/>


        <div className="ml-0 lg:ml-[900px]"> 
            <Button className="gap-2 lg:gap-4 w-[110px] lg:w-[189px] h-[30px] lg:h-[50px]" variant="">            
                <img className="sm:h-18" src="assets/ph_star-fill.png" alt="logo"/>
                <span className="text-[8px] lg:text-[12px]"> LAISSER UN AVIS</span>
            </Button>
        </div>

      </nav>



      <div className="bg-black">

        <h6 className="text-white">16 Resultat pour</h6>
        <h1 className="text-white font-bold">Clinique à Estuaire , Libreville</h1>

      </div>


      <div>
        <div className="flex gap-4">
              <Button className=" w-[100px] lg:w-[180px] h-[48px] bg-[#1A2E35] " variant="">Tous le filtres
                <img className="sm:h-18" src="assets/" alt="logo"/>
              </Button>
              <Button className=" w-[100px] lg:w-[180px] h-[48px] bg-[#1A2E35] " variant="">Clinique</Button>
              <Button className=" w-[100px] lg:w-[180px] h-[48px] bg-[#1A2E35] " variant="">Pharmacie</Button>
              <Button className=" w-[100px] lg:w-[180px] h-[48px] bg-[#1A2E35] lg:block hidden" variant="">PMI</Button>
          </div>
        <div></div>
      </div>



    </div>
  )
}

export default Resultat;
