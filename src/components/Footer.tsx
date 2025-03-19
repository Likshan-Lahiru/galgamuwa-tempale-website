
import { MapPin, Phone, Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="w-full bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src="/image-11.png" alt="Gangaramaya Temple Logo" className="h-16 w-16 object-contain mb-4" />
            <h3 className="text-amber-500 font-bold text-lg">
              ශ්‍රී උපතිස්සාරාමය
            </h3>
            <p className="text-amber-500 text-sm">TEMPLE OF LEGACY</p>
            <p className="mt-4 text-sm text-gray-300 text-center md:text-left">
              ශ්‍රී උපතිස්සාරාමය is one of the oldest Buddhist temples in
              කුරුණැගල, started by the famous scholar monk 
               in the late.
            </p>
          </div>
          <div>
            <h3 className="text-amber-500 font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Donation
                </a>
              </li>
              <li>
           
              </li>
              <li>
         
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-amber-500 font-bold text-lg mb-6">Location</h3>
            <div className="bg-gray-800 h-40 mb-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985117176!2d79.85408!3d6.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMDAuMSJOIDc5wrA1MScxNC43IkU!5e0!3m2!1sen!2sus!4v1585555555555!5m2!1sen!2sus" width="100%" height="100%" frameBorder="0" style={{
              border: 0
            }} allowFullScreen={false} aria-hidden="false" tabIndex={0} title="Gangaramaya Temple Location"></iframe>
            </div>
            <button className="text-sm text-amber-500 hover:underline">
              View larger map
            </button>
          </div>
          <div>
            <h3 className="text-amber-500 font-bold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-amber-500 mr-2 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-300 text-sm">
                  ශ්‍රී උපතිස්සාරාමය,
                  <br />
                   ගල්ගමුව ,
                  <br />
                  කුරුණැගල , Sri Lanka
                </p>
              </li>
              <li className="flex items-center">
                <Mail className="text-amber-500 mr-2 flex-shrink-0" size={18} />
                <a href="mailto:info@gangaramaya.com" className="text-gray-300 text-sm hover:text-amber-500 transition-colors">
                  info@ශ්‍රීඋපතිස්සාරාමය.com
                </a>
              </li>
           {/*   <li className="flex items-center">
                <Phone className="text-amber-500 mr-2 flex-shrink-0" size={18} />
                <a href="tel:+94112435169" className="text-gray-300 text-sm hover:text-amber-500 transition-colors">
                  (+94) 0000000
                </a>
              </li>*/}
              <li className="flex items-center">
                <Phone className="text-amber-500 mr-2 flex-shrink-0" size={18} />
                <a href="tel:+94718025100" className="text-gray-300 text-sm hover:text-amber-500 transition-colors">
                  +94 718025100
                </a>
              </li>
             {/* <li className="flex items-center">
                <Phone className="text-amber-500 mr-2 flex-shrink-0" size={18} />
                <a href="tel:+94112369622" className="text-gray-300 text-sm hover:text-amber-500 transition-colors">
                  (+94) 0000000
                </a>
              </li>*/}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">
            © 2025 ශ්‍රී උපතිස්සාරාමය Temple. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;