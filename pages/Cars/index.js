import Categories from "@/Components/module/Categories"
import SearchBar from "@/Components/module/SearchBar"
import CarsPage from "@/Components/Template/CarsPage"
import CarsData from "../../Data/DataCar"
const Details = () => {
  return (
    <div>
    <SearchBar/>
    <Categories/>
     <CarsPage data={CarsData}/>
    </div>
  )
}

export default Details