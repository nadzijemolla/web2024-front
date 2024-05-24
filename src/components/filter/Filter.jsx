import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Rezultat pretrage za: <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Lokacija</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Lokacija"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Kupovina/Izdavanje</label>
          <select name="type" id="type">
            <option value=""></option>
            <option value="buy">Kupovina</option>
            <option value="rent">Izdavanje</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Tip</label>
          <select name="property" id="property">
            <option value=""></option>
            <option value="apartment">Stan</option>
            <option value="house">Kuća</option>
            <option value="land">Zemljište</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min cijena</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder=""
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max cijena</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder=""
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Boj soba</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder=""
          />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;