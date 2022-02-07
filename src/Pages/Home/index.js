import { CountriesList } from "../../Components/CountriesList";
import { Navbar } from "../../Components/Navbar";
import styles from "./styles.module.css";

export function Home (){
    
    return(
        <>
        
        <Navbar/>

            <div className="container">

            <div className="row">

            
                <div className="col-5">

                    <div className="list-group">

                <CountriesList/>

                </div>

                </div>
                
            </div>

            </div>
            

        </>
            
    )
}