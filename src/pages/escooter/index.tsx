import "./style.css";

export default function Escooter() {
  return (
    <>
      <div className="scooter-bg"></div>
      <h2 style={{ textAlign: "center" }}>Scooter Gallery</h2>
      <div id="myBtnContainer">
        <button className="btn active"> Show all</button>
        <button className="btn"> Air-balance</button>
        <button className="btn"> Electric Kick</button>
        <button className="btn"> Seated Electric Scooters</button>
      </div>

      <div className="row">
        <div className="column air-balance">
          <div className="content">
            <img
              src="https://www.australiahoverboards.com.au/wp-content/uploads/2018/10/mini-segway-with-handle-0-1-1-500x500.jpg"
              alt="Mountains"
              style={{ width: "100%" }}
            />
            <h4>Hoverboard Self Balancing Scooter with Handle – Black.</h4>
            <p>
              <li>Max Travel Distance: 20Km </li>
              <li>Max Speed: 18km/h</li>
              <li>Max Load: 120kg</li>
              <li> Price = 800 AUD</li>
            </p>
          </div>
        </div>
        <div className="column air-balance">
          <div className="content">
            <img
              src="https://cdn.shopify.com/s/files/1/0558/1104/7579/products/H3286c692d68a4095bc9e351447411dcaO.jpg?v=1634857095"
              alt="Mountains"
              style={{ width: "100%" }}
            />
            <h4>E-Swing 19 Inch Self Balancing Electric Scooter</h4>
            <p>
              <li> Max Travel Distance: 30km</li>
              <li>Max Speed: 80km/h</li>
              <li> Max Load: 100kg</li>
              <li> Price: 4,599 AUD</li>
            </p>
          </div>
        </div>

        <div className="column electric kick">
          <div className="content">
            <img
              src="https://cdn.shopify.com/s/files/1/0034/7504/6445/products/ApolloGhostelectricscooter_1078x1078.png?v=1672957386"
              alt="Lights"
              style={{ width: "100%" }}
            />
            <h4>Apollo Ghost 2022 Hydraulic Brakes</h4>
            <p>
              <li> Max Travel Distance: 63km</li>
              <li>Max Speed: 60km/h</li>
              <li> Max Load: 29kg</li>
              <li> Price: 2,299 AUD</li>
            </p>
          </div>
        </div>
        <div className="column electric kick">
          <div className="content">
            <img
              src="https://cdn.shopify.com/s/files/1/0034/7504/6445/products/Dualtron_Thunder_2_front_1200x1200.jpg?v=1654142312"
              alt="Nature"
              style={{ width: "100%" }}
            />
            <h4>Dualtron Thunder 2 Electric Scooter</h4>
            <p>
              <li> Max Travel Distance:130</li>
              <li>Max Speed: 105km/h</li>
              <li> Max Load: 47kg</li>
              <li> Price: 5,677 AUD</li>
            </p>
          </div>
        </div>
        <div className="column electric kick">
          <div className="content">
            <img
              src="https://www.mytopia.com.au/media/catalog/product/t/r/trnscobula6bk.jpg?optimize=medium&fit=bounds&height=660&width=720&canvas=720:660"
              style={{ width: "100%" }}
            />
            <h4>BULLET Black 48V 1000W Turbo Folding Scooter </h4>
            <p>
              <li> Max Travel Distance:35km</li>
              <li>Max Speed: 50km/h</li>
              <li> Max Load: 100kg</li>
              <li> Price: 1,999 AUD</li>
            </p>
          </div>
        </div>

        <div className="column Seated Electric Scooters">
          <div className="content">
            <img
              src="https://www.electricscooterinsider.com/wp-content/uploads/2020/11/hiboy-s2-pro-with-seat.jpg"
              alt="People"
              style={{ width: "100%" }}
            />
            <h4>Hiboy S2 Pro Electric Scooter Seated</h4>
            <p>
              <li> Max Travel Distance: 40km</li>
              <li>Max Speed: 30.5km/h</li>
              <li> Max Load: 100kg</li>
              <li> Price: 2,690 AUD</li>
            </p>
          </div>
        </div>
        <div className="column Seated Electric Scooters">
          <div className="content">
            <img
              src="https://cdn.shopify.com/s/files/1/0034/7504/6445/products/emove-roadrunner-seated-scooter-full_1000x1000.jpg?v=1646797670"
              alt="People"
              style={{ width: "100%" }}
            />
            <h4>EMove Roadrunner Seated Electric Scooter</h4>
            <p>
              <li> Max Travel Distance:80km</li>
              <li>Max Speed: 55km/h</li>
              <li> Max Load: 120kg</li>
              <li> Price: 2,690 AUD</li>
            </p>
          </div>
        </div>
        <div className="column Seated Electric Scooters">
          <div className="content">
            <img
              src="https://cdn.shopify.com/s/files/1/0034/7504/6445/products/fiido-q1-seated-electric-scooter-black_5771e491-3061-4511-8849-29d654dbbcfd_800x800.jpg?v=1650510567"
              alt="People"
              style={{ width: "100%" }}
            />
            <h4>Stingray FS1000 Fat Mini High Powered E Scooter</h4>
            <p>
              <li> Max Travel Distance:25km</li>
              <li>Max Speed: 50km/h</li>
              <li> Max Load: 120kg</li>
              <li> Price: 699 AUD</li>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
