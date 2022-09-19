import { ReactElement } from "react";
import "./CardList.css";
import { IMAGE_LIST } from "../../constants/cardList";
import Card from "./Card";

const CardList = (): ReactElement => (
  <div data-testid="card-list" className="card-container container">
    {IMAGE_LIST.map((src, index) => (
      <Card
        dataTestId={index === 0 ? "card" : ""}
        key={`card-${index}`}
        src={src}
      />
    ))}
  </div>
);

export default CardList;
