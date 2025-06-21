import SectionWrapper from './SectionWrapper';

const projects = [
  {
    title: 'AMR SLAM Pipeline',
    description:
      'Real-time SLAM on Jetson Nano integrating LakiBeam LiDAR, BNO055 IMU, and encoder fusion (ROS 2 Jazzy).',
    link: 'https://github.com/your-username/amr-slam',
  },
  {
    title: 'IoT Energy Monitor',
    description:
      'Node-RED dashboard + ESP32 gateway for machine safety analytics at Biraha Farm Company.',
    link: 'https://github.com/your-username/energy-monitor',
  },
  // add more…
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-gray-50 dark:bg-gray-800">
      <h2 className="text-center text-3xl font-bold">Projects</h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg dark:bg-gray-900"
          >
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold group-hover:text-blue-600">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {p.description}
              </p>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition group-hover:opacity-100"></span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
