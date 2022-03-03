import './styles.css';

import CarCard from 'assets/images/car-card.png';
import ButtonCard from 'components/Button/purchasebutton';

const ProductCard = () => {

    return(
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={CarCard} alt="Car card" />
            </div>
            <div className="card-bottom-container">
                <h6>Audi Supra TT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                <ButtonCard/>
            </div>
        </div>

    );
}

export default ProductCard;