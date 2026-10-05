import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaEnvelope,
  FaExternalLinkAlt,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';

const contactMethods = [
  {
    icon: FaEnvelope,
    title: 'Email',
    label: 'Send an email',
    value: 'vrishankjha@gmail.com',
    href: 'mailto:vrishankjha@gmail.com',
    type: 'email',
    color: {
      gradient: 'from-blue-500 to-indigo-600',
      soft: 'bg-blue-50',
      border: 'border-blue-100',
      text: 'text-blue-700',
    },
  },
  {
    icon: FaPhone,
    title: 'Phone',
    label: 'Call directly',
    value: '+91 93525 76210',
    href: 'tel:+919352576210',
    type: 'phone',
    color: {
      gradient: 'from-emerald-500 to-teal-600',
      soft: 'bg-emerald-50',
      border: 'border-emerald-100',
      text: 'text-emerald-700',
    },
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary-100/50 blur-3xl"
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
            Let’s connect
          </span>

          <h2
            id="contact-heading"
            className="mt-3 font-primary text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Start a conversation
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Whether you want to discuss engineering, research, football,
            collaboration, or learning, I would be happy to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-gradient-to-br from-gray-950 via-primary-950 to-primary-800 p-7 text-white shadow-xl sm:p-9"
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-200 backdrop-blur">
                  Open to meaningful connections
                </span>

                <h3 className="mt-8 max-w-md font-primary text-3xl font-bold leading-tight sm:text-4xl">
                  Let’s turn curiosity into conversation.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-gray-300 sm:text-base">
                  I am always interested in learning from new people,
                  exploring ideas, and connecting with those who value
                  curiosity, discipline, and innovation.
                </p>
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-200">
                  Best way to reach me
                </p>

                <a
                  href="mailto:vrishankjha@gmail.com"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950"
                >
                  <FaEnvelope size={15} aria-hidden="true" />
                  vrishankjha@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-soft sm:p-8"
          >
            <div className="mb-7">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-600">
                Direct contact
              </span>

              <h3 className="mt-2 font-primary text-2xl font-bold text-gray-900">
                Choose how you would like to connect
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Use any of the options below to reach me directly.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;

                const content = (
                  <div
                    className={`flex items-center gap-4 rounded-2xl border bg-white p-5 transition-all duration-300 ${
                      method.color.border
                    } ${
                      method.href
                        ? 'group-hover:-translate-y-1 group-hover:shadow-card'
                        : ''
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${method.color.gradient} text-white shadow-md`}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.12em] ${method.color.text}`}
                      >
                        {method.title}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-gray-900 sm:text-base">
                        {method.value}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {method.label}
                      </p>
                    </div>

                    {method.href && (
                      <FaArrowRight
                        className={`shrink-0 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 ${method.color.text}`}
                        size={15}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );

                return method.href ? (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                    aria-label={`${method.label}: ${method.value}`}
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                  >
                    {content}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-gray-100 pt-7">
              <p className="mb-4 text-sm font-bold text-gray-900">
                Follow my journey
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/vrishank-jha-13571835a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Vrishank Jha on LinkedIn"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#0A66C2] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  <FaLinkedin size={17} aria-hidden="true" />
                  LinkedIn
                  <FaExternalLinkAlt size={11} aria-hidden="true" />
                </a>

                <a
                  href="mailto:vrishankjha@gmail.com"
                  aria-label="Send an email to Vrishank Jha"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-bold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  <FaEnvelope size={16} aria-hidden="true" />
                  Email me
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl border border-primary-100 bg-primary-50/60 p-6 text-center sm:p-8"
        >
          <p className="mx-auto max-w-3xl text-sm leading-7 text-primary-900 sm:text-base">
            “Every meaningful opportunity begins with a simple conversation.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;