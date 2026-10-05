import { useState } from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaDownload,
  FaEnvelope,
  FaLightbulb,
  FaRocket,
  FaSpinner,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const heroStats = [
  {
    number: '19+',
    label: 'Olympiad participations',
  },
  {
    number: '25+',
    label: 'Achievements and awards',
  },
  {
    number: '13',
    label: 'Technical and soft skills',
  },
];

const identityPoints = [
  'Class 11 PCM student',
  'Robotics enthusiast',
  'Football captain',
  'Future aerospace and computer engineer',
];

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white via-primary-50/40 to-white px-4 pb-14 pt-32 sm:px-6 lg:min-h-screen lg:px-8 lg:pb-16 lg:pt-36"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl sm:h-[32rem] sm:w-[32rem]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-96 w-96 rounded-full bg-secondary-200/40 blur-3xl sm:h-[32rem] sm:w-[32rem]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-3xl text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm backdrop-blur">
              <span
                className="origin-[70%_70%] text-xl animate-wave"
                aria-hidden="true"
              >
                👋
              </span>

              <span>Welcome to my portfolio</span>
            </div>

            <h1
              id="hero-heading"
              className="mt-7 font-primary text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="gradient-text">Vrishank Jha</span>

              <span className="mt-3 block text-gray-900">
                Engineering innovator
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0 lg:text-xl">
              I explore robotics, physical sciences, research, and
              problem-solving as I build my foundation for the future of
              aerospace and computer engineering.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                to="projects"
                smooth
                duration={500}
                offset={-88}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 sm:px-7"
              >
                <span>Explore my work</span>
                <FaArrowRight size={14} aria-hidden="true" />
              </Link>

              <Link
                to="contact"
                smooth
                duration={500}
                offset={-88}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border-2 border-primary-200 bg-white px-6 py-3 text-sm font-bold text-primary-700 transition-all duration-300 hover:-translate-y-1 hover:border-primary-600 hover:bg-primary-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 sm:px-7"
              >
                <span>Get in touch</span>
                <FaEnvelope size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 lg:justify-start">
              {identityPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 sm:text-sm"
                >
                  <FaCheckCircle
                    className="shrink-0 text-emerald-500"
                    aria-hidden="true"
                  />
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                to="about"
                smooth
                duration={500}
                offset={-88}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 px-2 py-2.5 text-sm font-bold text-gray-500 transition-colors hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                Discover my story
                <FaArrowRight size={12} aria-hidden="true" />
              </Link>
            </div>

            <Link
              to="about"
              smooth
              duration={500}
              offset={-88}
              className="mt-10 hidden cursor-pointer flex-col items-start gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 lg:inline-flex"
            >
              <span>Scroll to explore</span>

              <span className="flex h-9 w-6 justify-center rounded-full border-2 border-primary-400 p-1">
                <span className="h-2 w-1 rounded-full bg-primary-500 animate-scroll" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-300/40 blur-2xl sm:-right-12 sm:-top-12 sm:h-44 sm:w-44"
              aria-hidden="true"
            />

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-secondary-300/40 blur-2xl sm:-bottom-12 sm:-left-12 sm:h-48 sm:w-48"
              aria-hidden="true"
            />

            <motion.div
              animate={{ rotate: [0, 4, 0, -4, 0] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[calc(100%-2rem)] w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-primary-200/70"
              aria-hidden="true"
            />

            <motion.article
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-elevated backdrop-blur-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Portrait of Vrishank Jha"
                    className="h-full w-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center text-white">
                    <span className="font-primary text-8xl font-extrabold tracking-tight text-white/90">
                      VJ
                    </span>

                    <span className="mt-4 max-w-xs text-sm font-medium leading-6 text-white/85">
                      Exploring engineering, science, and innovation.
                    </span>
                  </div>
                )}

                <div
                  className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent"
                  aria-hidden="true"
                />

                <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-primary-700 shadow-lg sm:right-6 sm:top-6">
                  <FaRocket size={12} aria-hidden="true" />
                  Engineering
                </span>
              </div>

              <div className="p-6 text-center sm:p-8">
                <h2 className="font-primary text-2xl font-bold text-gray-900">
                  Vrishank Jha
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  Birla Vidya Niketan
                </p>

                <div className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Exploring and learning
                </div>
              </div>
            </motion.article>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -left-5 top-20 hidden items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-xs font-bold text-gray-700 shadow-lg sm:flex"
            >
              <FaLightbulb className="text-amber-500" aria-hidden="true" />
              Curious learner
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.6,
              }}
              className="absolute -right-5 bottom-24 hidden items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-xs font-bold text-gray-700 shadow-lg sm:flex"
            >
              <FaRocket className="text-primary-600" aria-hidden="true" />
              Future-focused
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-20 lg:gap-6">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-gray-200/80 bg-white/90 p-5 text-center shadow-soft backdrop-blur transition-shadow duration-300 hover:shadow-card sm:p-6"
            >
              <div className="gradient-text font-primary text-3xl font-extrabold sm:text-4xl">
                {stat.number}
              </div>

              <p className="mt-2 text-sm font-medium capitalize leading-6 text-gray-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;