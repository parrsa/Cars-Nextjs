import carsData from '@/Data/DataCar'
import CarList from '@/Components/Template/CarList'
const Suv = () => {
  const SuvCar=carsData.filter((item)=>item.category=== "suv")

  return (
    <CarList data={SuvCar}/>
  )
}

export default Suv