import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-2 md:px-12 md:py-20">
      <main className="container mx-auto py-8 space-y-8">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">We’re Here to Help You Build Your Future</h2>
        <p className="text-lg">
          Got questions? Need assistance? We’d love to hear from you! Our support team is available to provide answers, offer guidance, or address any concerns you may have.
        </p>

        <div className="space-y-4">
          <p className="text-lg">
            <strong>Email Us:</strong> For inquiries about job listings, features, or partnerships, email us at <a href="mailto:contact@yourwebsite.com" className="text-blue-600">contact@yourwebsite.com</a>.
          </p>
          <p className="text-lg">
            <strong>Follow Us on Social Media:</strong> Stay connected with us for the latest updates, job tips, and career advice.
            <div className="flex space-x-4 mt-2">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <Facebook size={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <Twitter size={24} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <Instagram size={24} />
              </Link>
              <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <Youtube size={24} />
              </Link>
            </div>
          </p>
          <p className="text-lg">
            <strong>Call Us:</strong> If you prefer a direct conversation, give us a call at <span className="text-blue-600">[Your Phone Number]</span>. We’re available Monday to Friday from 9 AM to 6 PM.
          </p>
          <p className="text-lg">
            <strong>Visit Us:</strong> [Your Office Address]  
            Come by for a chat if you’re in the area—we’d be happy to meet you!
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Contact Form</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" required />
          <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" required />
          <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded" rows="5" required></textarea>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
