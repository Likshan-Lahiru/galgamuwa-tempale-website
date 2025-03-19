import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import EventModal from './EventModal';
const events = [{
  title: 'ටැම්පිට සම්බුද්ධ මන්දිරය විවෘත කීරීම',
  date: '',
  time: '2025 ක් මාර්තු මස 22',
  location: 'ශ්‍රී උපතිස්සාරාමය',
  description: 'වසර 260 ක් තරම්  ඉපරැණි ටැම්පිට සම්බුද්ධ මන්දිරය කාලයාගේ ඇවැමෙන් විනාශ වන්නට ‍යෙදුණි ක්‍රි.ව. 1946 - 1995 එවකට විහාරාධිපතිත්වය   ඉසිලූ ගෞරවාර්හ කොහොඹන්කුලමේ  උපතිස්ස නාහිමිපාණන් වහන්සේ විසින් මෙම මන්දිරය ප්‍රතිසංකරණය කර තිබේ (සමහර අංග ඉවත් වී තිබේ). ',
  history: 'වසර 260 ක් තරම්  ඉපරැණි ටැම්පිට සම්බුද්ධ මන්දිරය කාලයාගේ ඇවැමෙන් විනාශ වන්නට ‍යෙදුණි ක්‍රි.ව. 1946 - 1995 එවකට විහාරාධිපතිත්වය   ඉසිලූ ගෞරවාර්හ කොහොඹන්කුලමේ  උපතිස්ස නාහිමිපාණන් වහන්සේ විසින් මෙම මන්දිරය ප්‍රතිසංකරණය කර තිබේ (සමහර අංග ඉවත් වී තිබේ). අනතුරුව තවදුරටත් ගරාවැටීම හේතු කරගෙන ක්‍රි.ව. 1976 දී එවකට විහාරාධිපතිව වැඩ විසු ගෞරවාර්හ තඹුත්තේගම සෝරත ස්වාමීන් වහන්සේ  විසින් ද මෙම සම්බුද්ධ මන්දිරය ප්‍රතිසංකරණය කර තිබේ (සමහර අංග ඉවත් වී තිබේ). ක්‍රි.ව. 2022 පෙබරවාරි මස 18 වන දින උන්වහන්සේ අපවත් වී වදාල සේක. නැවත ක්‍රි.ව. 2024 වන විට අතිශයින්ම ගර්භීත වෙමින් පැවැති මෙම සම්බුද්ධ මන්දිරය වත්මන් විහාරාධිපති ගෞරවාර්හ උඩුවේරියේ නාරද ස්වාමීන් වහන්සේගේ අනුශාසකත්වය, උපදේශකත්වය, පූර්ණ මගපේන්වීම හා අධීක්ෂණය යටතේ උන්වහන්සේගේ හා විහාරස්ථ දායක දායිකාවන්ගේ අවශ්‍ය පමණට ධන ප්රිත්‍යාගයෙන්, පුරාවිද්යා දෙපාර්තමේන්තුවේ පූර්ණ මැදිහත් වීමෙන් ක්‍රි.ව. 2024 ක් අප්‍රේල්  මස වැඩ ආරම්භ කර මාස 06 ක් පුරාවට ඉතා විධිමත්ව මූලික තත්වයට අනුවම සංරක්ෂණය කරන ලදුව  සැදැහැවතුන්ගේ වන්දනා මානයට සහ සංස්කෘතික උරුමයක් ලෙස අනාගත පරපුරට දැක බලාගැනීම සදහා ක්‍රි.ව. 2025 ක් මාර්තු මස 22 වන් දින විවෘත කරයි. ',
  images: ['https://i.ibb.co/dwBzZPv7/4.jpg', 'https://i.ibb.co/SD8fFNtb/5.jpg', 'https://i.ibb.co/Z0HnrwC/6.jpg', 'https://i.ibb.co/JFWHRv0M/7.jpg', 'https://i.ibb.co/k6hYwsgB/8.jpg']
}, {
  title: 'Vesak Festival',
  date: 'May Full Moon Poya Day',
  time: 'All Day Event',
  location: 'Temple Premises',
  description: 'Celebration of the birth, enlightenment, and passing away of Lord Buddha with lantern displays and devotional songs.',
  images: ['https://i.ibb.co/QyDSqvt/Untitled-113.jpg', 'https://i.ibb.co/ZrCr5KW/P5051427-ezgif-com-webp-to-jpg-converter.jpg',]
},];
const AnnualEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null);
  return <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Annual Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us in celebrating these significant events that mark our
            Buddhist calendar year. Each event carries deep spiritual meaning
            and cultural heritage.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => <motion.div key={event.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img src={event.images[0]} alt={event.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="mt-6 w-full bg-amber-700 text-white py-2 rounded-md hover:bg-amber-800 transition-colors" onClick={() => setSelectedEvent(event)}>
                  Learn More
                </motion.button>
              </div>
            </motion.div>)}
        </div>
      </div>
      {selectedEvent && <EventModal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)} event={selectedEvent} />}
    </div>;
};
export default AnnualEvents;