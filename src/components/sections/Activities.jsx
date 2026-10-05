import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaFootballBall,
  FaGlobeAmericas,
  FaMusic,
  FaUsers,
} from 'react-icons/fa';

const activities = [
  {
    icon: FaUsers,
    eyebrow: 'Lead with purpose',
    title: 'Leadership roles',
    description:
      'Developing responsibility, communication, and teamwork through leadership on and off the field.',
    color: {
      gradient: 'from-blue-500 to-indigo-600',
      soft: 'bg-blue-50',
      border: 'border-blue-100',
      text: 'text-blue-700',
      dot: 'bg-blue-500',
    },
    items: [
      {
        icon: '🎖️',
        text: 'School Sports Captain',
      },
      {
        icon: '⚽',
        text: 'Captain, Hans Capital FC in the HCL Delhi Future Stars League',
      },
      {
        icon: '⚽',
        text: 'Captain, Youth Football International FC',
      },
      {
        icon: '🏆',
        text: 'School Team Captain in multiple tournaments',
      },
    ],
  },
  {
    icon: FaGlobeAmericas,
    eyebrow: 'Think beyond borders',
    title: 'International exposure',
    description:
      'Learning through international science events, competitions, and collaborative experiences.',
    color: {
      gradient: 'from-emerald-500 to-teal-600',
      soft: 'bg-emerald-50',
      border: 'border-emerald-100',
      text: 'text-emerald-700',
      dot: 'bg-emerald-500',
    },
    items: [
      {
        icon: '🌍',
        text: 'Japan Super Science Fair, Kyoto, Japan',
      },
      {
        icon: '🔬',
        text: 'International Science Competitions',
      },
      {
        icon: '🤖',
        text: 'AI & Robotics for Good Youth Challenge',
      },
      {
        icon: '🚀',
        text: 'Think Startup Young CEO Boot Camp at IIT Delhi',
      },
    ],
  },
  {
    icon: FaFootballBall,
    eyebrow: 'Discipline in motion',
    title: 'Sports and athletics',
    description:
      'Building resilience, focus, and competitive spirit through football and track-and-field events.',
    color: {
      gradient: 'from-amber-500 to-orange-600',
      soft: 'bg-amber-50',
      border: 'border-amber-100',
      text: 'text-amber-700',
      dot: 'bg-amber-500',
    },
    items: [
      {
        icon: '⚽',
        text: 'Competitive Football across multiple competitions',
      },
      {
        icon: '🏃',
        text: 'Track and Field Athletics',
      },
      {
        icon: '🏆',
        text: 'Regular participation in school and national tournaments',
      },
      {
        icon: '🎯',
        text: '1500m, 200m, and 400m events',
      },
    ],
  },
  {
    icon: FaMusic,
    eyebrow: 'Express with confidence',
    title: 'Performing arts',
    description:
      'Developing confidence, expression, and creativity through dance and group performances.',
    color: {
      gradient: 'from-pink-500 to-rose-600',
      soft: 'bg-pink-50',
      border: 'border-pink-100',
      text: 'text-pink-700',
      dot: 'bg-pink-500',
    },
    items: [
      {
        icon: '💃',
        text: 'Solo Dance across multiple competitions',
      },
      {
        icon: '🎭',
        text: 'Group Performances',
      },
      {
        icon: '🏅',
        text: '3rd Position, Colourful India Dance Competition',
      },
      {
        icon: '🎪',
        text: 'Manjusha Ek Subhag Shrishti participation',
      },
    ],
  },
];

const Activities = () => {
  return (
    <section
      id="activities"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-labelledby="activities-heading"
    >
      <div
        className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-secondary-100/50 blur-3xl"
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
            Beyond academics
          </span>

          <h2
            id="activities-heading"
            className="mt-3 font-primary text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Leadership, passion, and perspective
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            The experiences that build confidence, discipline, creativity, and
            a wider understanding of the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-950 via-primary-950 to-primary-800 p-7 text-white shadow-xl sm:p-10"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-200">
                The complete picture
              </span>

              <h3 className="mt-3 font-primary text-3xl font-bold leading-tight sm:text-4xl">
                Growth happens in more than one classroom.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
                Academic interests are strengthened by experiences that develop
                leadership, collaboration, resilience, cultural awareness, and
                creative expression.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[30rem]">
              {[
                { label: 'Leadership', value: '01' },
                { label: 'Exposure', value: '02' },
                { label: 'Discipline', value: '03' },
                { label: 'Creativity', value: '04' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                >
                  <span className="font-mono text-xs font-bold text-primary-200">
                    {item.value}
                  </span>

                  <p className="mt-3 text-sm font-semibold text-white">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.article
                key={activity.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className={`group overflow-hidden rounded-[2rem] border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${activity.color.border}`}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${activity.color.gradient} text-white shadow-lg`}
                    >
                      <Icon size={25} aria-hidden="true" />
                    </span>

                    <span
                      className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${activity.color.soft} ${activity.color.text}`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <p
                    className={`mt-7 text-xs font-bold uppercase tracking-[0.16em] ${activity.color.text}`}
                  >
                    {activity.eyebrow}
                  </p>

                  <h3 className="mt-2 font-primary text-2xl font-bold text-gray-900">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {activity.description}
                  </p>

                  <div className="my-6 h-px bg-gray-100" />

                  <ul className="space-y-4">
                    {activity.items.map((item, itemIndex) => (
                      <motion.li
                        key={item.text}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          delay: index * 0.08 + itemIndex * 0.05,
                          duration: 0.4,
                        }}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                      >
                        <span
                          className={`mt-2 h-2 w-2 shrink-0 rounded-full ${activity.color.dot}`}
                          aria-hidden="true"
                        />

                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-primary-100 bg-primary-50/60 p-6 text-center sm:p-8"
        >
          <p className="mx-auto max-w-3xl text-sm leading-7 text-primary-900 sm:text-base">
            Together, these experiences reflect a balanced journey: learning
            technical concepts, leading teams, competing with discipline, and
            expressing ideas creatively.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;