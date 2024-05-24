import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Komunalne usluge</span>
                <p>Popravke u stanu u slučaju kvarova</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pravila o životinjama</span>
                <p>Životinje su dozvoljene</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Naknade za stan</span>
                <p>2kirije prije useljenja</p>Mora imati 3x kiriju od ukupnog prihoda domaćinstva
              </div>
            </div>
          </div>
          <p className="title">Veličine</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 m2</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 sobe</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 kupatilo</span>
            </div>
          </div>
          <p className="title">Mjesta u blizini</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Škola</span>
                <p>250m</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Autobuska stanica</span>
                <p>100m</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restoran</span>
                <p>200m</p>
              </div>
            </div>
          </div>
          <p className="title">Lokacija</p>
          <div className="listVertical">
            <div className="feature">
              <div className="featureText">
                <p>4.jula 5, Podgorica</p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button>
              <img src="/save.png" alt="" />
              Sačuvaj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;