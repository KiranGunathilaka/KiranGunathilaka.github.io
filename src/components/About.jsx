import SectionWrapper from './SectionWrapper';
import profilePic     from '../assets/Kiran.jpeg'; // put an image here

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <img
          src={profilePic}
          alt="Profile"
          className="mx-auto h-52 w-52 rounded-full object-cover shadow-lg md:h-64 md:w-64"
        />

        <div>
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Final-year engineering student at the University of Moratuwa. I build
            low-cost AMRs powered by Jetson Nano, LiDAR &amp; stepper motors. My
            toolkit spans C/C++, ROS 2, Python, and a love for elegant hardware.
          </p>

          <h3 className="mt-6 text-xl font-semibold">Tech Stack</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'C/C++', 'Python'].map(s => (
              <li
                key={s}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
