import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaLeaf,
  FaMicroscope,
  FaRecycle,
  FaSeedling,
  FaTree,
} from 'react-icons/fa';

const project = {
  title: 'Pine Needle Valorization',
  subtitle: 'Turning an environmental challenge into a research opportunity',
  description:
    'An innovative research project exploring the sustainable utilization of pine needles through valorization techniques. The project connects environmental sustainability, resource optimization, and materials science.',
  link: 'https://canva.link/od4lo8hj3h4gly4',
  tags: ['Research', 'Sustainability', 'Materials Science', 'Innovation'],
};

const projectHighlights = [
  {
    icon: FaTree,
    title: 'The context',
    description:
      'Pine needles are explored as an underutilized natural resource with environmental and material potential.',
  },
  {
    icon: FaMicroscope,
    title: 'The investigation',
    description:
      'The project examines how valorization can transform a natural by-product into something useful.',
  },
  {
    icon: FaRecycle,
    title: 'The direction',
    description:
      'The work connects resource optimization with more sustainable approaches to materials science.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Observe',
    description: 'Identify an environmental challenge and understand its context.',
  },
  {
    number: '02',
    title: 'Explore',
    description: 'Study possible ways to create value from an underused resource.',
  },
  {
    number: '03',
    title: 'Communicate',
    description: 'Present the research idea and its sustainability relevance clearly.',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
            Featured work
          </span>

          <h2
            id="projects-heading"
            className="mt-3 font-primary text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Research and innovation
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            One meaningful project, presented with the idea, investigation, and
            sustainability thinking behind it.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl"
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[25rem] overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-primary-900 p-8 sm:p-10 lg:min-h-full lg:p-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 0 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.6) 0 1px, transparent 1px)',
                  backgroundSize: '34px 34px, 48px 48px',
                }}
              />

              <motion.div
                animate={{ rotate: [0, 4, 0, -4, 0] }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/20"
                aria-hidden="true"
              />

              <motion.div
                animate={{ rotate: [0, -5, 0, 5, 0] }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full border border-white/10"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-full min-h-[22rem] flex-col justify-between">
                <div className="flex items-start justify-between gap-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                    <FaLeaf aria-hidden="true" />
                    Featured research
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-200 backdrop-blur">
                    <FaSeedling size={23} aria-hidden="true" />
                  </span>
                </div>

                <div className="py-12">
                  <div className="relative mx-auto flex h-52 w-52 items-center justify-center sm:h-60 sm:w-60">
                    <div
                      className="absolute inset-0 rounded-full border border-emerald-200/30"
                      aria-hidden="true"
                    />

                    <div
                      className="absolute inset-5 rounded-full border border-dashed border-white/25"
                      aria-hidden="true"
                    />

                    <div
                      className="absolute inset-10 rounded-full bg-emerald-300/10 blur-2xl"
                      aria-hidden="true"
                    />

                    <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-8 border-white/20 bg-emerald-400/20 text-emerald-100 shadow-2xl backdrop-blur sm:h-36 sm:w-36">
                      <FaTree size={58} aria-hidden="true" />
                    </div>

                    <FaLeaf
                      className="absolute left-2 top-12 rotate-[-25deg] text-emerald-200/80 sm:left-3"
                      size={23}
                      aria-hidden="true"
                    />

                    <FaLeaf
                      className="absolute bottom-10 right-2 rotate-[30deg] text-emerald-200/80 sm:right-3"
                      size={25}
                      aria-hidden="true"
                    />

                    <FaRecycle
                      className="absolute right-3 top-6 text-white/70 sm:right-5"
                      size={22}
                      aria-hidden="true"
                    />

                    <FaMicroscope
                      className="absolute bottom-5 left-4 text-white/70 sm:left-6"
                      size={21}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div>
                  <p className="max-w-sm text-sm leading-6 text-emerald-100/80">
                    Exploring how natural materials can contribute to
                    sustainable innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700">
                  Sustainability
                </span>

                <span className="text-sm font-medium text-gray-500">
                  Research project
                </span>
              </div>

              <h3 className="mt-5 max-w-xl font-primary text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                {project.title}
              </h3>

              <p className="mt-4 max-w-xl text-lg font-semibold leading-8 text-primary-700">
                {project.subtitle}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary-100 bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-9">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View the presentation for ${project.title}`}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  <span>View project presentation</span>
                  <FaExternalLinkAlt size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid border-t border-gray-200 bg-gray-50 md:grid-cols-3">
            {projectHighlights.map((highlight, index) => {
              const Icon = highlight.icon;

              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`p-6 sm:p-8 ${
                    index < projectHighlights.length - 1
                      ? 'border-b border-gray-200 md:border-b-0 md:border-r'
                      : ''
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm">
                    <Icon size={19} aria-hidden="true" />
                  </span>

                  <h4 className="mt-5 font-primary text-lg font-bold text-gray-900">
                    {highlight.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl border border-primary-100 bg-white p-6 shadow-soft sm:p-8"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-600">
                Project mindset
              </span>

              <h3 className="mt-3 font-primary text-2xl font-bold text-gray-900">
                From observation to innovation
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                This project reflects a research mindset: notice a challenge,
                investigate its possibilities, and communicate a more
                sustainable direction.
              </p>
            </div>

            <div className="grid flex-1 gap-4 sm:grid-cols-3">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1, duration: 0.45 }}
                  className="rounded-2xl bg-gray-50 p-5"
                >
                  <span className="font-mono text-sm font-bold text-primary-600">
                    {step.number}
                  </span>

                  <h4 className="mt-3 font-primary font-bold text-gray-900">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;