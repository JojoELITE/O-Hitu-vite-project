import React from "react";
import { Button } from "@/components/ui/button"


function Home() {

  return (
    <>
        <nav className="flex justify-between py-10 px-16">
            <div className="flex gap-10">

                <img src="./assets/Group_9__5_-removebg-preview 1.png" alt="logo"/>
                <Button variant="">LAISSER UN AVIS</Button>

            </div>


            <div>
                <Button variant="">LAISSER UN AVIS</Button>
            </div>

        </nav>

    </>
  )
}

export default Home;
