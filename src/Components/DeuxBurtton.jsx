import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import LaisserAvis from "./LaisserAvis"



function DeuxBurtton() {

    return (
        <>


            <div className="mt-6 flex items-center gap-4 px-6 lg:px-0 lg:block">
                <div>
                    <Link className="mt-8" to="/detail">
                        <Button className=" w-[150px] lg:w-[180px] h-[48px] rounded-lg border-2 border-[#D83D40] text-[#D83D40] " variant="online">Voir la page detail</Button>
                    </Link>
                </div>

                <div className="py-4">


                   <LaisserAvis/>

                </div>
            </div>

        </>
    )
}

export default DeuxBurtton
