import React from 'react';
import { motion } from 'framer-motion';
const AboutSection = () => {
  return <div className="w-full py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div className="flex flex-col md:flex-row items-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>

          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img src="https://i.ibb.co/NgN4vQvr/image-11.png" alt="Buddha Illustration" className="w-2/3 md:w-4/5 max-w-md" />
            
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <img src="https://i.ibb.co/SD8fFNtb/5.jpg" alt="Temple Exterior" className="w-full h-40 object-cover rounded-md" />
              <img src="https://i.ibb.co/dwBzZPv7/4.jpg" alt="Temple Interior" className="w-full h-40 object-cover rounded-md" />
              <img src="https://i.ibb.co/r2XLwjcz/bodiya.jpg" alt="Temple Celebration" className="w-full h-40 object-cover rounded-md" />
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                ශ්‍රී උපතිස්සාරාමය is one of the oldest Buddhist temples in කුරුණැගල,
                started by the famous scholar monk 
                Nayaka Thera in the late 19th Century.
              </p>
              <p>
                After the , his chief pupil Devundera Sri
                Jinaratana Nayake Thera took on the administration of the
                temple. It was he who laid the foundation to convert the little
                temple to an institute of international reckoning.
              </p>
              <p>
                The next chief incumbent was the Ven. Devundara Keerthi Sri
                Sumangala Jinaratana Vacissara Thera, the teacher of the Ven.
                Galboda Gnanissara, who worked to make the ශ්‍රී උපතිස්සාරාමය what it
                is today: much more than a temple in the conventional term, but
                a place of worship, a seat of learning and a cultural centre.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
};
export default AboutSection;