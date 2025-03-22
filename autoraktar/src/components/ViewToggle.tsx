import { h } from "preact";
import { useState } from "preact/hooks";

// Egyszerű interfész a komponens számára
interface ViewToggleProps {
  onViewChange: (isGridView: boolean) => void;
}

const ViewToggle = ({ onViewChange }: ViewToggleProps) => {
  // State a jelenlegi nézet tárolására (alapértelmezetten grid nézet)
  const [isGridView, setIsGridView] = useState(true);

  // Nézet váltása
  const toggleView = () => {
    // Ellentétére állítjuk a jelenlegi értéket
    const newViewState = !isGridView;
    // Frissítjük a helyi state-et
    setIsGridView(newViewState);
    // Meghívjuk a szülő komponensből kapott függvényt
    onViewChange(newViewState);
  };

  return (
    <div className="text-center m-3">
      <button
        className="btn btn-outline-secondary"
        onClick={toggleView}
        title={isGridView ? "Váltás lista nézetre" : "Váltás rács nézetre"}
      >
        {/* Az ikon változik attól függően, hogy melyik nézetben vagyunk */}
        <i className={isGridView ? "bi bi-grid" : "bi bi-list"}></i>
      </button>
    </div>
  );
};

export default ViewToggle;