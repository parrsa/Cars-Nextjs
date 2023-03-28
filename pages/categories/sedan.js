import carsData from '@/Data/DataCar'
import CarList from '@/Components/Template/CarList'
const Sedan = () => {
  const SedanCars=carsData.filter((item)=>item.category=== "sedan")
  return (
    <CarList data={SedanCars}/>

  )
}

export default Sedan