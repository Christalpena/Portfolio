import "./Experience.css"
import Button from '@mui/material/Button';
import { FaSheetPlastic } from "react-icons/fa6";


const Experience = () => {

    const resume = () =>{
        window.open('Curriculum.pdf')
    }
    return(
        <section id="experience" className="experience">
            <h1 className="experience__title">EXPERIENCE</h1>
            <hr />
            
            <h1 className="experience__position">Junior Software Developer</h1>
                <span className="experience__data">September. 2024 | Current [Dominican republic] [Precisa Group SRL]</span>

                <p className="experience__details">I develop software solutions using Python and the Odoo CRM. My role covers both FrontEnd and BackEnd, as well as database management, allowing me to optimize and customize workflows to improve operational efficiency. This experience has enabled me to strengthen my skills in development and the management of scalable business solutions.</p>
            <br />
            <br />
            <hr />

            <h1 className="experience__position">Software Developer</h1>
                <span className="experience__data">June. 2023 | September. 2023 [Dominican republic] [Bank BHD]</span>

                <p className="experience__details">During my time in the Technology and Digital Transformation domain, I actively contributed to various facets of the field while working with a Customer Relationship Management (CRM) system. This experience provided me with the invaluable opportunity to immerse myself in distinct areas of expertise, including:</p>
                    <ul className="experience_skills">
                        <li>BackEnd.</li>
                        <li>FrontEnd.</li>
                        <li>QA.</li>
                    </ul>
                <Button className="experience__btn" onClick={resume} color="primary" variant="outlined" startIcon={<FaSheetPlastic color="white"/>}>Resume
                </Button>
            <hr />
        </section>
    )
};

export default Experience;