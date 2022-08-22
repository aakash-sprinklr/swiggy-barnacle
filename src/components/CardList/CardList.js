import "./CardList.css";
import { IMAGE_LIST } from "../../constants/constant";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="card-container container">
      {IMAGE_LIST.map((src, index) => (
        <Card
          dataTestId={index == 0 ? "card" : ""}
          key={`card-${index}`}
          src={src}
        />
      ))}
    </div>
  );
};

export default CardList;
