// dummy data
import { cartData } from "./Cartdata";

// internal imports
import "./home.css";
import Card from "../../components/card/Card";

export default function Home() {
  return (
    <div className="container">
      <h4 className="NFT-title">Top collections</h4>
      <div className="Custom-row">
        {cartData.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </div>
      <br />
      <h4 className="NFT-title">Best Deail</h4>
      <div className="Custom-row">
        {cartData.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </div>
    </div>
  );
}
