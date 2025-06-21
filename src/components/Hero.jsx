import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

export default function Hero() {
  return (
    <SectionWrapper id="home" className="flex min-h-screen items-center bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-800 dark:via-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto text-center"
      >
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Kiran</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Autonomous Mobile Robot &amp; Embedded Systems Engineer passionate about
          SLAM, sensor fusion, and turning ideas into hardware.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          View My Work
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
