import { motion } from 'framer-motion';
import {
  FaAtom,
  FaBookOpen,
  FaBrain,
  FaCogs,
  FaDraftingCompass,
  FaFlask,
  FaGraduationCap,
  FaLightbulb,
  FaLaptopCode,
  FaRocket,
  FaSatellite,
  FaUsers,
} from 'react-icons/fa';

const profileDetails = [
  {
    icon: FaGraduationCap,
    title: 'Education',
    description:
      'Class 11 PCM, Birla Vidya Niketan | 10th Grade: 96.8%',
  },
  {
    icon: FaCogs,
    title: 'Focus Areas',
    description:
      'Aerospace, Mechanical & Computer Engineering, Mathematics',
  },
  {
    icon: FaLightbulb,
    title: 'Goal',
    description:
      'Research-driven engineering for global-scale solutions',
  },
];

const focusAreas = [
  {
    icon: FaRocket,
    label: 'Aerospace',
    position: 'left-0 top-8',
    color: 'border-primary-200 bg-primary-50 text-primary-700',
  },
  {
    icon: FaLaptopCode,
    label: 'Technology',
    position: 'right-0 top-8',
    color: 'border-secondary-200 bg-secondary-50 text-secondary-700',
  },
  {
    icon: FaFlask,
    label: 'Research',
    position: 'bottom-8 left-2',
    color: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
  {
    icon: FaUsers,
    label: 'Leadership',
    position: 'bottom-8 right-2',
    color: 'border-amber-200 bg-amber-50 text-amber-700',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
            Get to know me
          </span>

          <h2
            id="about-heading"
            className="mt-3 font-primary text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            About me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            A closer look at the interests, experiences, and ambitions behind
            my engineering journey.
          </p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="border-l-4 border-primary-500 pl-6 text-lg italic leading-relaxed text-gray-700">
              “I am a Class 11 PCM student passionate about engineering, the
              physical sciences, and research.”
            </p>

            <div className="space-y-4 text-base leading-8 text-gray-600">
              <p>
                Alongside academics, I serve as the{' '}
                <strong className="font-semibold text-gray-900">
                  Sports Captain
                </strong>{' '}
                of my school and compete competitively in football, developing
                strong leadership and teamwork skills. My fields of interest
                span{' '}
                <strong className="font-semibold text-gray-900">
                  Aerospace
                </strong>
                ,{' '}
                <strong className="font-semibold text-gray-900">
                  Mechanical
                </strong>
                , and{' '}
                <strong className="font-semibold text-gray-900">
                  Computer Engineering
                </strong>
                , as well as Physics, Chemistry, and Mathematics.
              </p>

              <p>
                My long-term goal is to leverage my foundation in physical
                sciences and engineering to conduct transformative research at
                a premier institution, ultimately engineering innovative
                solutions that address global challenges.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {profileDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -3 }}
                    className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <Icon size={21} aria-hidden="true" />
                    </span>

                    <div>
                      <h3 className="font-primary font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div
              className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-br from-primary-200/40 via-transparent to-secondary-200/40 blur-3xl"
              aria-hidden="true"
            />

            <div
              className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/80 bg-white p-5 shadow-xl sm:min-h-[34rem] sm:p-8"
              role="img"
              aria-label="Illustration representing Vrishank's interests in aerospace, technology, research, and leadership"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-50"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-200/70"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-secondary-300/70"
                aria-hidden="true"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary-200"
                aria-hidden="true"
              />

              <div className="absolute left-1/2 top-1/2 z-10 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-8 border-white bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 text-center text-white shadow-2xl shadow-primary-500/30 sm:h-52 sm:w-52">
                <FaAtom
                  size={34}
                  className="mb-3 text-white/90"
                  aria-hidden="true"
                />

                <span className="font-primary text-lg font-bold sm:text-xl">
                  Engineering
                </span>

                <span className="mt-1 text-xs font-medium text-white/80">
                  curiosity in motion
                </span>
              </div>

              {focusAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: 0.25 + index * 0.1,
                      duration: 0.5,
                    }}
                    whileHover={{ y: -5, scale: 1.04 }}
                    className={`absolute z-20 ${area.position} flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-xs font-bold shadow-sm transition-shadow duration-300 hover:shadow-md sm:gap-3 sm:px-4 sm:py-3 sm:text-sm ${area.color}`}
                  >
                    <Icon size={16} aria-hidden="true" />
                    <span>{area.label}</span>
                  </motion.div>
                );
              })}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute left-1/2 top-8 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-700 shadow-md"
              >
                <FaBrain className="text-primary-600" aria-hidden="true" />
                Problem solving
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-700 shadow-md"
              >
                <FaBookOpen className="text-secondary-600" aria-hidden="true" />
                Lifelong learning
              </motion.div>

              <div className="absolute bottom-1 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-lg sm:bottom-6">
                Explore • Learn • Build
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;