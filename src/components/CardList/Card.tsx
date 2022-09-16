import React, { ReactElement, useState } from "react";
import "./CardList.css";

interface ICard {
  src: string;
  dataTestId: string;
}
const Card = ({ src, dataTestId }: ICard): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div
      data-testid={dataTestId}
      className="card"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="content">
        <img className="card-image" src={src} alt="Burger Point" />
        <div className="food-description">
          <h3 className="food-name">Burger Point</h3>
          <p className="food-cuisine">Healthy Food, Indian, Bakery</p>
        </div>
      </div>

      <div className="hover-content">
        {visible ? <span className="hover-text">I'm hovered!</span> : null}
      </div>
    </div>
  );
};

export default Card;
