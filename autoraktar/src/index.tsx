import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { render } from "preact";
import "./style.css";
import { App } from "./App";

render(<App />, document.getElementById("app"));