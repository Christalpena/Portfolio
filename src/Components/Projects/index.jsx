import "./Projects.css"
import { lazy } from "react";


const BasicTabs = lazy(() => import("./Tabs"));
const Projects = () => {

    return(
        <section className="projects" id="projects" >
            <h1 className="projects__title">PROJECTS</h1>
            <div className="projects-content" >
                <BasicTabs />
            </div>
        </section>
    )
};

export default Projects;