import ChrisDuncanImage from '../assets/images/Chris Duncan - Decisely Headshot.jpg'; // Import the image of Chris Duncan
import QuoteBackgroundImage from '../assets/images/Mars-hill_quote.jpg'; // Import the background image

export default function MissionStatement() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* Heading: Trajan Pro Regular, all caps, 30pt font on 36pt leading */}
        <h2 className="text-[30pt] leading-[36pt] font-serif font-bold text-[#002D72] uppercase text-center">
          Our Mission
        </h2>
        
        {/* Body Text: Source Sans Pro Light, 10pt on 14pt leading */}
        <p className="mt-6 text-[10pt] leading-[14pt] text-gray-600 text-center font-light">
          The MHU Study Lion is a cutting-edge AI tool designed to enhance your learning experience by integrating advanced AI into your business classes at Mars Hill University. Study Lion provides a unique opportunity for students to interact with custom AI models (MyGPTs) tailored specifically to your course content. 
        </p>
        <p className="mt-6 text-[10pt] leading-[14pt] text-gray-600 text-center font-light">
          As part of this pilot program, MHU Study Lion will be available in select business courses for the Fall 2024 semester. We welcome your feedback to improve your learning outcomes and better equip you with essential AI skills for your studies and future careers.
        </p>
      </div>

      {/* Quote Section */}
      <div
        className="relative mt-16 text-center bg-cover bg-center bg-no-repeat py-24 px-6 text-white rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${QuoteBackgroundImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-800 opacity-40"></div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Quote Text */}
          <p className="text-[20pt] leading-[28pt] font-semibold sm:text-[24pt] sm:leading-[32pt]">
            "MHU is leading the way in a rapidly changing world in integrating AI into Business education, preparing its graduates for an AI-ready future."
          </p>
          
          <figcaption className="mt-10 flex items-center justify-center space-x-4">
            <img
              src={ChrisDuncanImage} // Use the image of Chris Duncan
              alt="Chris Duncan"
              className="h-16 w-16 rounded-full object-cover" // Rounded full image
            />
            <div className="text-white text-left">
              {/* Name and Title: Source Sans Pro Bold */}
              <div className="font-bold text-[12pt] leading-[14pt]">Chris Duncan</div>
              <div className="text-[10pt] leading-[14pt]">Executive-in-Residence, Assistant Professor</div>
            </div>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
