import { motion } from 'framer-motion';

const Education = () => {
  const timeline = [
    { title: '10th Grade', year: 'Completed', school: 'Birla Vidya Niketan', achievement: '96.8% Score', badge: 'success' },
    { title: 'Class 11 (PCM)', year: 'Current', school: 'Birla Vidya Niketan | Physics, Chemistry, Mathematics', achievement: 'In Progress', badge: 'primary' },
    { title: 'Future Goals', year: '2027+', school: 'Engineering at a Premier Institution | Research & Innovation', achievement: 'Aspiring', badge: 'info' },
  ];

  const badgeClass = {
    success: 'bg-green-500',
    primary: 'bg-primary',
    info: 'bg-info',
  };

  return (
    <section id="education" className="py-20 lg:py-28 px-4 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Academic Journey</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-primary text-gray-900 mt-2">Education & Qualifications</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-primary via-primary/40 to-transparent"></div>

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative flex"
              >
                {/* Dot anchored correctly per-row now */}
                <div className="absolute left-4 md:left-1/2 top-6 md:-translate-x-1/2 -translate-x-1/2 w-5 h-5 bg-white border-4 border-primary rounded-full z-10 shadow-md"></div>

                <div
                  className={`w-full pl-14 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-10' : 'md:pl-10 md:ml-auto'
                  }`}
                >
                  <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl shadow-card border border-gray-100 hover:border-primary/30 transition-all">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <span className="text-sm font-medium text-primary">{item.year}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.school}</p>
                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold text-white ${badgeClass[item.badge]}`}>
                      {item.achievement}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;