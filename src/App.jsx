import ContactForm from './component/ContactForm';
import { useRef } from 'react';

function App() {
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white px-6">
        <div className="py-4">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </div>
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to Edith Technologies</h1>
            <p className="text-lg mb-6">We build smart, fast and reliable solutions for your business.</p>
            <button
              onClick={scrollToServices}
              className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-blue-200 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="bg-white text-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="/software-development.jpg" alt="Software Development" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-semibold mb-2">Software Development</h3>
              <p>Custom software solutions tailored to your business needs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="/web-development.jpg" alt="Web Development" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
              <p>Responsive and modern websites to establish your online presence.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="/ai-solutions.jpg" alt="AI Solutions" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-semibold mb-2">AI Solutions</h3>
              <p>Integrating artificial intelligence to drive innovation and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactRef} className="bg-gray-100 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="issue">
                What help do you need?
              </label>
              <select
                id="issue"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="">Select an issue</option>
                <option value="technical">Technical Issue</option>
                <option value="pricing">Pricing Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="feedback">Feedback / Suggestions</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white text-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            At Edith Technologies, we specialize in delivering high-performance software, web, and AI solutions
            tailored to meet your business needs. Our expert team is dedicated to innovation and client satisfaction.
          </p>
        </div>
        <footer className="text-black text-center py-6">
          <p>Contact us: <a href="mailto:edithtechnologiessmailbox@rediffmail.com" className="underline">edithtechnologiessmailbox@rediffmail.com</a></p>
        </footer>
      </section>
    </div>
  );
}

export default App;