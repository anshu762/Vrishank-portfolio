import { motion } from 'framer-motion';
import {
  FaBrain,
  FaCalculator,
  FaChartLine,
  FaCheck,
  FaCogs,
  FaFileExcel,
  FaFlask,
  FaLightbulb,
  FaMicrochip,
  FaPython,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa';

const hardSkills = [
  {
    icon: FaPython,
    title: 'Programming',
    description: 'Python development',
    level: 85,
    category: 'Computing',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaMicrochip,
    title: 'Robotics',
    description: 'Arduino and automation',
    level: 80,
    category: 'Engineering',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: FaCalculator,
    title: 'Applied Mathematics',
    description: 'Problem solving',
    level: 90,
    category: 'Sciences',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: FaFlask,
    title: 'Applied Physics',
    description: 'Scientific research',
    level: 88,
    category: 'Sciences',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: FaChartLine,
    title: 'Financial Analysis',
    description: 'Data interpretation',
    level: 75,
    category: 'Analysis',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: FaShieldAlt,
    title: 'Cybersecurity',
    description: 'Security basics',
    level: 70,
    category: 'Computing',
    color: 'from-slate-600 to-slate-800',
  },
  {
    icon: FaLightbulb,
    title: 'Entrepreneurship',
    description: 'Startup thinking',
    level: 78,
    category: 'Innovation',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: FaFileExcel,
    title: 'MS Office Suite',
    description: 'Excel and PowerPoint',
    level: 85,
    category: 'Productivity',
    color: 'from-green-500 to-emerald-600',
  },
];

const softSkills = [
  {
    icon: FaUsers,
    title: 'Leadership',
    description: 'School sports captain',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: FaCheck,
    title: 'Discipline',
    description: 'Focused and committed',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: FaBrain,
    title: 'Curiosity',
    description: 'Research oriented',
    color: 'bg-violet-50 text-violet-700',
  },
  {
    icon: FaShieldAlt,
    title: 'Resilience',
    description: 'Problem overcomer',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: FaUsers,
    title: 'Teamwork',
    description: 'Collaborative player',
    color: 'bg-rose-50 text-rose-700',
  },
];

const proficiencyLabel = (level) => {
  if (level >= 90) return 'Advanced';
  if (level >= 80) return 'Strong';
  if (level >= 70) return 'Developing';
  return 'Learning';
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-labelledby="skills-heading"
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
            My capabilities
          </span>

          <h2
            id="skills-heading"
            className="mt-3 font-primary text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Skills and expertise
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            A growing combination of technical knowledge, scientific thinking,
            creativity, and people-focused skills.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-950 via-primary-950 to-primary-800 p-7 text-white shadow-xl sm:p-9"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-white/10"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-primary-200 backdrop-blur">
                <FaCogs size={26} aria-hidden="true" />
              </span>

              <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-primary-200">
                Engineering mindset
              </p>

              <h3 className="mt-3 font-primary text-3xl font-bold leading-tight sm:text-4xl">
                Learn deeply.
                <br />
                Build thoughtfully.
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-300">
                I am developing a foundation across programming, robotics,
                mathematics, physical sciences, analysis, and innovation.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  'Technical exploration',
                  'Scientific problem-solving',
                  'Leadership through action',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.45 }}
                    className="flex items-center gap-3 text-sm font-medium text-gray-200"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-400/20 text-primary-200">
                      <FaCheck size={11} aria-hidden="true" />
                    </span>

                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-200">
                  Current direction
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Exploring the connection between engineering, research, and
                  real-world impact.
                </p>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-gray-200 bg-gray-50 p-6 shadow-soft sm:p-8"
          >
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-600">
                  Technical foundation
                </span>

                <h3 className="mt-2 font-primary text-2xl font-bold text-gray-900">
                  Hard skills
                </h3>
              </div>

              <p className="max-w-xs text-sm leading-6 text-gray-500 sm:text-right">
                A self-assessed view of current learning and working confidence.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {hardSkills.map((skill, index) => {
                const Icon = skill.icon;
                const label = proficiencyLabel(skill.level);

                return (
                  <motion.article
                    key={skill.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.06, duration: 0.5 }}
                    className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-sm`}
                      >
                        <Icon size={19} aria-hidden="true" />
                      </span>

                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
                        {skill.category}
                      </span>
                    </div>

                    <h4 className="mt-5 font-primary font-bold text-gray-900">
                      {skill.title}
                    </h4>

                    <p className="mt-1 text-sm text-gray-500">
                      {skill.description}
                    </p>

                    <div
                      className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100"
                      role="progressbar"
                      aria-label={`${skill.title} proficiency`}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow={skill.level}
                      aria-valuetext={`${skill.level}% self-assessed proficiency`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.9,
                          delay: 0.15 + index * 0.04,
                          ease: 'easeOut',
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-[2rem] border border-gray-200 bg-white p-6 shadow-soft sm:p-8"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-secondary-600">
                How I work
              </span>

              <h3 className="mt-2 font-primary text-2xl font-bold text-gray-900">
                Soft skills in action
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Skills become meaningful when they are visible in the way a
                person learns, collaborates, and responds to challenges.
              </p>
            </div>

            <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.article
                    key={skill.title}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-center transition-shadow duration-300 hover:shadow-soft"
                  >
                    <span
                      className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl ${skill.color}`}
                    >
                      <Icon size={19} aria-hidden="true" />
                    </span>

                    <h4 className="mt-4 text-sm font-bold text-gray-900">
                      {skill.title}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {skill.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;