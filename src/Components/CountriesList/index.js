import countries from '../../countries.json'
import {Link} from "react-router-dom";




export function CountriesList() {

  return (

      <>

         {countries.map((currentCountry, index) => {

              return (

                //<Link to={location => `${location.pathname}?sort=name`} />
                <Link to={`${currentCountry.alpha3Code}`}>
                <a className="list-group-item list-group-item-action" href="">
                <p>{currentCountry.name.common}</p>
                </a>
            </Link>
              )

          })}

      </>

  )

}