import Card from '../module/Card'
import Styles from './CardPage.module.css'
const CarsPage = ({ data }) => {
  return (
    <div className={Styles.container}>
      {data.map((item) => (
       <Card key={item.id} {...item}/>
      ))}
    </div>
  )
}
export default CarsPage