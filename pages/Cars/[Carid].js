import { useRouter } from "next/router"
import carsData from "@/Data/DataCar";
import CarDetails from "@/Components/Template/CarDetails";
const CarsDetails = () => {
    const router = useRouter();
    const { Carid } = router.query;
    const Detile = carsData[Carid - 1]
    return (
        <CarDetails {... Detile}/>
    )
}

export default CarsDetails