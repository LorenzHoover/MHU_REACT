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
          Chris Duncan serves as the Executive-in-Residence and Assistant Professor at Mars Hill University. As the Faculty Sponsor of the MHU Study Lion project, Chris’s passion for delivering an AI enabled education for an AI ready world, to give MHU’s students a competitive advantage is the driving force behind this pilot resource for instructors and students. His experience in both the academic and technology/business start-up worlds has helped shape the strategic direction of the MHU Study Lion App, ensuring it meets the educational needs of both faculty, students and future employers.
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
          Lorenz Hoover is the Project Lead Developer for the MHU Study Lion App. Leveraging his background in data science and a growing expertise in web development, Lorenz has recently undertaken multiple development projects, applying his newly acquored React and JavaScript skills. His work on the MHU Study Lion App, an innovative educational tool integrating ChatGPT, exemplifies his commitment to enhancing learning experiences. Lorenz's ability to design intuitive user interfaces and efficiently integrate APIs has been instrumental in making the app accessible and valuable to both students and faculty at Mars Hill University
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
