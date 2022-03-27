import "./card.css";

export default function Card(props) {
  const { data, Dashboard } = props;
  return (
    <div className="Custom-card">
      <img
        src={
          data.image ||
          "https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_50digipaintings/1.jpg"
        }
      />
      <div className="Custom-card-content">
        <h6 className="Custom-card-title">{data.title}</h6>
        <p>{`${data.price} ETH`}</p>
        {Dashboard ? "" : <button className="buyBtn">Buy</button>}
      </div>
    </div>
  );
}
