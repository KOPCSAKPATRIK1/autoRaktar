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
        <h5 className="card-title">{model}</h5>
        <p className="card-text">{brand}</p>
        <p className="card-text">{year}</p>
        <p className="card-text">{color}</p>
      </div>
    </div>
  );
}
