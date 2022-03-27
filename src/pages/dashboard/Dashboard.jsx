// dummy data
import { Items } from "./Items";

// internal imports
import "./dashboard.css";
import Card from "../../components/card/Card";

export default function Dashboard() {
  return (
    <div className="container">
      <h4 className="NFT-title">Items Created</h4>
      <div className="Custom-row">
        {Items.map((data, index) => (
          <Card Dashboard key={index} data={data} />
        ))}
      </div>
      <h4 className="NFT-title mb-4 mt-4">Items Sold</h4>
      <Card Dashboard data={{ title: "Items is sold", price: "43.342" }} />
      <br />
      <br />
    </div>
  );
}
