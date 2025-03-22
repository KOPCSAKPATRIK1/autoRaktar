import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { render } from "preact";
import "./style.css";
import CarItem from "./components/CarItem";
import Header from "./components/Header";
import { useState } from "preact/hooks";
import ViewToggle from "./components/ViewToggle";

export function App() {
	const [isGridView, setIsGridView] = useState(true)
  return (
    <div>
      <Header />
      <div className="container">
		<ViewToggle onViewChange={setIsGridView}/>
        <div className={isGridView 
			? "row row-cols-1 row-cols-md-2 row-cols-lg-3" 
			: "row row-cols-1"}>
          {carItemProps.map((car) => (
            <CarItem
              key={car.id}
              id={car.id}
              brand={car.brand}
              model={car.model}
              year={car.year}
              color={car.color}
			  isGridView={isGridView}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const carItemProps = [
  { id: 1, brand: "Toyota", model: "Corolla", year: 2018, color: "Red" },
  { id: 2, brand: "Honda", model: "Civic", year: 2020, color: "Black" },
  { id: 3, brand: "Ford", model: "Mustang", year: 2019, color: "Blue" },
  { id: 4, brand: "BMW", model: "X5", year: 2021, color: "Red" },
  { id: 5, brand: "Audi", model: "A4", year: 2022, color: "Gray" },
];

render(<App />, document.getElementById("app"));
