import CarList from "@/Components/Template/CarList"
import carsData from "@/Data/DataCar"
const Hachback = () => {
  const HatchBackCars=carsData.filter((item)=>item.category=== "hatchback")
  return (
    <CarList data={HatchBackCars}/>
  )
}

export default Hachback