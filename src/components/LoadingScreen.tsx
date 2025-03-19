
import { motion } from 'framer-motion'
const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="relative w-32 h-32 mb-8"
            >
                <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl animate-pulse"></div>
                <img
                    src="https://uploadthingy.s3.us-west-1.amazonaws.com/2kTjiyXdQPGRsaTtdktUHX/pngegg.png"
                    alt="Temple Logo"
                    className="w-full h-full object-contain relative z-10"
                />
            </motion.div>
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    textShadow: [
                        '0 0 15px rgba(251, 191, 36, 0.5)',
                        '0 0 30px rgba(251, 191, 36, 0.8)',
                        '0 0 15px rgba(251, 191, 36, 0.5)',
                    ],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="text-white text-3xl md:text-4xl font-bold tracking-wider"
                style={{
                    textShadow: '0 0 15px rgba(251, 191, 36, 0.5)',
                }}
            >
                නමෝ බුද්ධාය
            </motion.div>
        </div>
    )
}
export default LoadingScreen
