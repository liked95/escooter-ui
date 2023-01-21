import "./style.css";

export default function Shipping() {
  return (
    <div className="container shipping">
      <h1>Shipping</h1>
      <p>Please enter your shipping details.</p>
      <hr />
      <div className="form">
        <div className="fields fields--2">
          <label className="field">
            <label className="field__label" htmlFor="firstname">
              First name
            </label>
            <input className="field__input" type="text" />
          </label>
          <label className="field">
            <label className="field__label" htmlFor="lastname">
              Last name
            </label>
            <input className="field__input" type="text" />
          </label>
        </div>
        <label className="field">
          <label className="field__label" htmlFor="address">
            Address
          </label>
          <input className="field__input" type="text" id="address" />
        </label>
        <label className="field">
          <label className="field__label" htmlFor="country">
            Country
          </label>
          <select className="field__input" id="country">
            <option value=""></option>
            <option value="australia">Australia</option>
          </select>
        </label>
        <div className="fields fields--3">
          <label className="field">
            <label className="field__label" htmlFor="zipcode">
              Zip code
            </label>
            <input className="field__input" type="text" id="zipcode" />
          </label>
          <label className="field">
            <label className="field__label" htmlFor="city">
              City
            </label>
            <input className="field__input" type="text" id="city" />
          </label>
          <label className="field">
            <label className="field__label" htmlFor="state">
              State
            </label>
            <select className="field__input" id="state">
              <option value=""></option>
            </select>
          </label>
        </div>
      </div>
      <hr />
      <button className="shipping-button">Continue</button>
    </div>
  );
}
