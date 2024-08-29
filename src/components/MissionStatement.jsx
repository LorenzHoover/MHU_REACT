import ChrisDuncanImage from '../assets/images/Chris Duncan - Decisely Headshot.jpg'; // Import the image of Chris Duncan
import QuoteBackgroundImage from '../assets/images/Mars-hill_quote.jpg'; // Import the background image

export default function MissionStatement() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Our Mission</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
          The MHU Study Lion is a cutting-edge AI tool designed to enhance your learning experience by integrating advanced AI into your business classes at Mars Hill University. Study Lion provides a unique opportunity for students to interact with custom AI models (MyGPTs) tailored specifically to your course content. 
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
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
          <p className="text-2xl font-semibold leading-8 sm:text-3xl sm:leading-9">
            "Mars Hill University is leading the way in integrating AI into education, providing a platform where students can thrive and excel."
          </p>
          <figcaption className="mt-10 flex items-center justify-center space-x-4">
            <img
              src={ChrisDuncanImage} // Use the image of Chris Duncan
              alt="Chris Duncan"
              className="h-16 w-16 rounded-full object-cover" // Rounded full image
            />
            <div className="text-white text-left">
              <div className="font-semibold">Chris Duncan</div>
              <div>Executive-in-Residence, Adjunct Professor</div>
            </div>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
