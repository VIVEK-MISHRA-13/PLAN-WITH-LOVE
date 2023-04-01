
import { useState } from "react";
import Card from "./Card";
function Tours({tours,removeTour}){


    

    function change(){
        const root = document.querySelector(':root');
        root.classList.toggle('dark');
        const toggle = document.getElementById('toggle');
        toggle.classList.toggle('active');
       
      
    }
    

    return(
        <div className="container">


             
            <div id="toggle" onClick={change}>
                <i className="indicator"></i>
            </div>

            <div>
                
            <h2 className="title">Plan With Love</h2>

           
            </div>


            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }

            </div>
        </div>
    );


}

export default Tours;