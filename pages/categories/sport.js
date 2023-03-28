import React from 'react'
import carsData from '@/Data/DataCar'
import CarList from '@/Components/Template/CarList'
const Sport = () => {
  const SportCars=carsData.filter((item)=>item.category=== "sport")
  return (
    <CarList data={SportCars}/>
  )
}

export default Sport