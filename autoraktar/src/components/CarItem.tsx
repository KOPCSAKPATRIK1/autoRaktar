import './CarItem.css'

export type CarItemProps = {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
  isGridView: boolean;
};

export default function CarItem({
  brand,
  model,
  year,
  color,
  isGridView,
}: CarItemProps) {
  const getImageUrl = () => {
    const imageUrl = new URL(
      `../assets/${brand.toLowerCase()}${model.toLowerCase()}${year}${color.toLowerCase()}.jpg`,
      import.meta.url
    ).href;
    return imageUrl;
  };

  if (!isGridView) {
    return (
      <div className="card mb-3">
        <h5 className="card-title">{model}</h5>
      </div>
    );
  }

  return (
    <div className="col mb-3">
      <div className="card ">
        <img src={getImageUrl()} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{model}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{brand}</li>
          <li className="list-group-item">{year}</li>
          <li className="list-group-item">{color}</li>
        </ul>
      </div>
    </div>
  );
}
