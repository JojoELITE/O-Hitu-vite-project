import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

function Tableau() {

  return (
    <>

        <div className="mt-10 lg:mt-0">

        <div className="h-[430px] lg:h-[560px] bg-white rounded-b-lg shadow-lg"> 


            <form class="flex gap-4 flex justify-center py-10 ">
                <label for="" class="block mt-2 text-xl text-[#4B4B61] dark:text-white  ">Filtrez :</label>
            

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


            <Tabs defaultValue="account" className="w-[300px] lg:w-full ">
                <TabsList className="gap-2 lg:gap-4 border-b-2 border-black w-full lg:w-full">
                    <TabsTrigger value="account">Hopitaux</TabsTrigger>
                    <TabsTrigger value="cliniques">Cliniques</TabsTrigger>
                    <TabsTrigger value="pharmacies">Pharmacies</TabsTrigger>
                    <TabsTrigger value="pmi">Pmi</TabsTrigger>
                    <TabsTrigger className="lg:block hidden" value="cabinet">Cabinet</TabsTrigger>
                    <TabsTrigger className="lg:block hidden" value="centre d'examen">Centre d'examen</TabsTrigger>



                </TabsList>
                <TabsContent value="account">


                            <div className="py-2 lg:py-6 px-3 flex justify-between border-b-2 border">
                                <div className="">
                                    <h1 className="font-bold text-xl lg:text-2xl">CHUL</h1>
                                    <h6 className="text-[#585858] text-[10px] lg:text-[16px]">Centre Hospitalier Universitaire de Libreville</h6>
                                </div>

                                <div className="flex mr-3 gap-4 mt-5 lg:mt-3">
                                    <img className="h-2.5 lg:h-5 mt-2 lg:mt-1" src="assets/Vector.png" alt="logo"/>
                                    <h1 className="font-bold text-xl lg:text-2xl">4,5</h1>
                                    <img className="h-3 lg:h-6 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo"/>

                                </div>

                            </div>


                            <div className="py-2 lg:py-4 px-3 flex justify-between border-b-2 border">
                                <div className="">
                                    <h1 className="font-bold text-xl lg:text-2xl">CHUO</h1>
                                    <h6 className="text-[#585858] text-[10px] lg:text-[16px]">Centre Hospitalier Universitaire d’Owendo</h6>
                                </div>

                                <div className="flex mr-3 gap-4 mt-5 lg:mt-3">
                                    <img className="h-2.5 lg:h-5 mt-2 lg:mt-1" src="assets/Vector.png" alt="logo"/>
                                    <h1 className="font-bold text-xl lg:text-2xl">4,5</h1>
                                    <img className="h-3 lg:h-6 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo"/>

                                </div>

                            </div>


                            <div className="py-2 lg:py-4 px-3 flex justify-between border-b-2 border">
                                <div className="">
                                    <h1 className="font-bold text-xl lg:text-2xl">CHUA</h1>
                                    <h6 className="text-[#585858] text-[10px] lg:text-[16px]">Centre Hospitalier Universitaire d’Akanda</h6>
                                </div>

                                <div className="flex mr-3 gap-4 mt-4 lg:mt-3">
                                    <img className="h-2.5 lg:h-5 mt-3 lg:mt-2" src="assets/Vector Rouge.png" alt="logo"/>
                                    <h1 className="font-bold text-xl lg:text-2xl">2,5</h1>
                                    <img className="h-3 lg:h-6 mt-2 lg:mt-1" src="assets/ph_star-fill.png" alt="logo"/>

                                </div>

                            </div>


                            <div className="py-2 lg:py-4 px-3 flex justify-between">
                                <div className="">
                                    <h1 className="font-bold text-xl lg:text-2xl">NTENGUE</h1>
                                    <h6 className="text-[#585858] text-[10px] lg:text-[16px]">Hôpital Régional de Ntengue</h6>
                                </div>

                                <div className="flex mr-3 gap-4 mt-4 lg:mt-3 items-center">
                                    <img className="h-2.5 lg:h-5 mt-2 lg:mt-1 mr-4" src="assets/Vector Rouge.png" alt="logo"/>
                                    <h1 className="font-bold text-xl lg:text-2xl">1</h1>
                                    <img className="h-3 lg:h-6 mt-0 lg:mt-0" src="assets/ph_star-fill.png" alt="logo"/>

                                </div>

                            </div>
                </TabsContent>
                <TabsContent value="cliniques">2 Change your password here.</TabsContent>
                <TabsContent value="pharmacies">3 Change your password here.</TabsContent>
                <TabsContent value="pmi">4 Change your password here.</TabsContent>
                <TabsContent value="cabinet">5 Change your password here.</TabsContent>
                <TabsContent value="centre d'examen">6 Change your password here.</TabsContent>


            </Tabs>



        </div>

        <div className="lg:py-4 mt-3 lg:mt-0">

            <a className="" href="#">
                <span className="text-[#DB4C4C] px-14 lg:px-44 text-[16px] lg:text-[20px] underline">Afficher plus de structure</span>
            </a>

        </div>

        </div>

    </>
  )
}

export default Tableau;
