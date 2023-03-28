import Styles from './Card.module.css'
import Location from '../icons/Location';
import Link from 'next/link';
const Card = (props) => {
    const { id, name, model, year, distance, location, image, price } = props;
    return (
        <Link href={`/Cars/${id}`}>
            <div className={Styles.container}>
                <img src={image} className={Styles.image} />
                <h4 className={Styles.title}>{`${name} ${model}`}</h4>
                <p className={Styles.detail}>{`${year} - ${distance}km`}</p>
                <div className={Styles.footer}>
                    <p>$ {price}</p>
                    <div className={Styles.location}>
                        <p>{location}</p>
                        <Location />
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default Card