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
import DeuxBurtton from "@/Components/DeuxBurtton";


function Resultat() {

  return (
    <div className="block md:hidden lg:block bg-[#F6F8FB]">

      <NavBar />


      <div className="bg-black py-4 mt-4 px-8 lg:px-28">

        <h6 className="text-white ">16 Résultats pour</h6>
        <h1 className="text-white font-bold text-xl lg:text-4xl mb-4">Clinique à Estuaire , Libreville</h1>

      </div>

      <div className="bg-white lg:bg-[#F6F8FB]">


        <div className="py-6 px-6 lg:px-28 block lg:flex justify-between">
          <div className="flex gap-2 lg:gap-2 text-[#BDBDBD]">
            <Button className=" w-[130px] lg:w-[180px] h-[48px]  flex gap-2 rounded-full border-2 hover:border-gray-400  " variant="online">Tous le filtres
              <img className="sm:h-18" src="assets/filtre.png" alt="logo" />
            </Button>

            <Button className=" w-[100px] lg:w-[120px] h-[48px] rounded-full border-2  hover:border-gray-400" variant="online">Notation</Button>
            <Button className=" w-[100px] lg:w-[120px] h-[48px] rounded-full border-2 border-gray-400 " variant="online">Localisation</Button>
            <Button className=" w-[100px] lg:w-[120px] h-[48px] rounded-full border-2 hover:border-gray-400 lg:block hidden " variant="online">Catégorie</Button>
            <Button className=" w-[100px] lg:w-[120px] h-[48px] rounded-full border-2 hover:border-gray-400 lg:block hidden " variant="online">Mieux noté</Button>

          </div>

          <div className="gap-2 lg:gap-2 text-[#BDBDBD] mt-4 lg:mt-0 flex justify-between items-center">

            <form class="flex items-center gap-2  ">
              <label for="notes" class="block text-sm font-medium text-gray-900 dark:text-white">Filtrez </label>
              <select id="notes" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w- p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected></option>
                <option value="mieux">Les mieux notés</option>
                <option value="moins">les moins notés</option>
              </select>
            </form>


            <Button className=" w-[130px] lg:w-[150px] h-[48px]  flex gap-2 rounded-full border-2 hover:border-gray-400" variant="online">
              <img className="sm:h-18" src="assets/carte.png" alt="logo" />
              voir la carte
            </Button>
          </div>

        </div>

      </div>






      <div className="px-0 lg:px-28 py-0 lg:py-12 col lg:flex justify-between ">

        <div>

          <div className="py-0 lg:py-10">

            <div className="block lg:flex items-center bg-white w-[350px] lg:w-[900px] h-[300px] lg:h-[230px]  gap-20 ">

              <div>
                <img className=" ml-8 lg:block hidden" src="assets/chu.png" alt="logo" />
              </div>


              <div>

                <div>
                  <div className="flex lg:flex justify-between px-8 lg:px-0 mt-10 lg:mt-20 ">

                    <div className="font-bold text-xl mt-6">CHUO</div>

                    <div className="flex gap-3 mt-6">
                      <h1 className="font-bold text-xl lg:text-xl">4,5</h1>
                      <img className="h-3 lg:h-5 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo" />
                    </div>

                  </div>


                  <div>
                    <h6 className="px-8 lg:px-0">
                      Centre Hospitalier universitaire  <br /> d'owendo
                    </h6>
                  </div>

                </div>



                <div className="flex items-center gap-3 mb-6 text-black px-8 lg:px-0  mt-8 lg:mt-0">
                  <img className="sm:py-10 " src="assets/location.png" alt="logo" />

                  <h6> hôpital général, <br />Derrière L, 356 Rue Ndende, Libreville</h6>

                </div>

              </div>


              <DeuxBurtton />


            </div>

          </div>






          <div className="py:0 lg:py-10">

            <div className="block lg:flex items-center bg-white w-[350px] lg:w-[900px] h-[300px] lg:h-[230px]  gap-20 ">

              <div>
                <img className=" ml-8 lg:block hidden" src="assets/chul.png" alt="logo" />
              </div>


              <div>

                <div>
                  <div className="flex lg:flex justify-between px-8 lg:px-0 mt-10 lg:mt-20 ">

                    <div className="font-bold text-xl mt-6">CHUL</div>

                    <div className="flex gap-3 mt-6">
                      <h1 className="font-bold text-xl lg:text-xl">4,5</h1>
                      <img className="h-3 lg:h-5 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo" />
                    </div>

                  </div>


                  <div>
                    <h6 className="px-8 lg:px-0">
                      Centre Hospitalier universitaire  <br /> de Libreville
                    </h6>
                  </div>

                </div>



                <div className="flex items-center gap-3 mb-6 text-black px-8 lg:px-0  mt-8 lg:mt-0">
                  <img className="sm:py-10 " src="assets/location.png" alt="logo" />

                  <h6> hôpital général, <br />Derrière L, 356 Rue Ndende, Libreville</h6>

                </div>

              </div>


              <DeuxBurtton />


            </div>

          </div>







          <div className="py:0 lg:py-10">

            <div className="block lg:flex items-center bg-white w-[350px] lg:w-[900px] h-[300px] lg:h-[230px]   gap-20 ">

              <div>
                <img className=" ml-8 lg:block hidden" src="assets/chu.png" alt="logo" />
              </div>


              <div>

                <div>
                  <div className="flex lg:flex justify-between px-8 lg:px-0 mt-10 lg:mt-20 ">

                    <div className="font-bold text-xl mt-6">CHUO</div>

                    <div className="flex gap-3 mt-6">
                      <h1 className="font-bold text-xl lg:text-xl">4,5</h1>
                      <img className="h-3 lg:h-5 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo" />
                    </div>

                  </div>


                  <div>
                    <h6 className="px-8 lg:px-0">
                      Centre Hospitalier universitaire  <br /> d'owendo
                    </h6>
                  </div>

                </div>



                <div className="flex items-center gap-3 mb-6 text-black px-8 lg:px-0  mt-8 lg:mt-0">
                  <img className="sm:py-10 " src="assets/location.png" alt="logo" />

                  <h6> hôpital général, <br />Derrière L, 356 Rue Ndende, Libreville</h6>

                </div>

              </div>


              <DeuxBurtton />


            </div>

          </div>


        </div>





        <div className="">

          <div className="lg:block hidden">
            <Tableau />
          </div>


          <div className="mt-6 flex justify-center lg:block">
            <img className="sm:py-10  w-[300px] lg:w-[500px]" src="assets/bucket.png" alt="logo" />

          </div>

        </div>

      </div>


      <div className="flex justify-center lg:hidden">
        <Tableau />
      </div>

      <div className="lg:block hidden">
        <Footer />
      </div>

    </div>
  )
}

export default Resultat;
