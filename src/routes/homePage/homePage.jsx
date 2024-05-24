import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Vaša Vodeća Agencija za Nekretnine</h1>
          <p>
          Bez obzira da li tražite udoban stan u centru grada, prostranu porodičnu kuću u mirnom naselju ili luksuznu vilu na prestižnoj lokaciji, naš tim stručnjaka je tu da vam pomogne na svakom koraku. Razumemo da je kupovina nekretnine jedan od najvažnijih koraka u vašem životu, zato smo tu da vam pružimo personalizovanu podršku i stručne savete kako biste doneli najbolju odluku.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Godina izdavanja</h2>
            </div>
            <div className="box">
              <h1>20</h1>
              <h2>Iskusnih agenata</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Zadovoljnih klijenata</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/realestate.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomePage;