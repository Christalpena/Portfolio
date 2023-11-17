import { lazy } from "react";
import "./Main.css"

const Masonry = lazy(() => import("../ShufleCards/Shuffle"));
const Experience = lazy(() => import("../Experience"));

const Main = () => {
    return(
        <section className="main">
            <Experience />
            <Masonry />
        </section>
    )
};

export default Main;