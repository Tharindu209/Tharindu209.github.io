import CV from "@public/pdf/Tharindu-Gunarathne.pdf";
import React from "react";

const Resume = () => {
    return (
        <div className="relative z-50 my-12 lg:my-16">
            <iframe 
                src={CV}
                width="100%" 
                height="600px" 
                title="CV"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Resume;