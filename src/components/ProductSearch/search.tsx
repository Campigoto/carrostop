import './styles.css';

const ProductSearch = () => {
  return (
    <div className="base-card product-search-container">
        <div className="product-search-input">
          <input placeholder="Digite sua busca" />
        </div>
        <div className="search-button">
          <button className="btn">
            <h6>Buscar</h6>
          </button>
        </div>
    </div>
  );
};

export default ProductSearch;
