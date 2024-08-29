import React from 'react';
import LorenzImage from '../assets/images/Lorenz_edit.jpg'; // Path to Lorenz's image
import DuncanImage from '../assets/images/Chris Duncan - Decisely Headshot.jpg'; // Path to Chris Duncan's image

const AboutUs = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-serif text-blue-900 mb-12 text-center">About Us</h2>

      {/* Chris Duncan Section */}
      <div className="flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">Chris Duncan</h3>
          <p className="text-lg text-gray-700">
            Chris Duncan serves as the Executive-in-Residence and Adjunct Professor at Mars Hill University. As the Faculty Sponsor of the MHU Study Lion project, Chris has provided invaluable guidance and support throughout the development process. His extensive experience in both the academic and professional worlds has helped shape the strategic direction of the Study Lion App, ensuring it meets the educational needs of both faculty and students. Chris's passion for innovation in education is evident in his leadership and dedication to this project.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={DuncanImage} alt="Chris Duncan" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Lorenz Hoover Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center">
        <div className="lg:w-1/2 lg:pl-8 mb-8 lg:mb-0">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">Lorenz Hoover</h3>
          <p className="text-lg text-gray-700">
            Lorenz Hoover is the Project Lead Developer for the MHU Study Lion App. With a deep passion for technology and education, Lorenz has spearheaded the development of this innovative tool that aims to enhance the learning experience at Mars Hill University. His expertise in web development and API integration has been pivotal in bringing the vision of the Study Lion App to life. Lorenz's commitment to creating user-friendly interfaces ensures that both students and professors can easily navigate and benefit from this cutting-edge application.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={LorenzImage} alt="Lorenz Hoover" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
