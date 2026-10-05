import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaAward,
  FaCertificate,
  FaFootballBall,
  FaMedal,
  FaTrophy,
} from 'react-icons/fa';

const tabs = [
  {
    id: 'certificates',
    label: 'Certificates',
    icon: FaCertificate,
    description: 'Academic, science, and learning experiences',
  },
  {
    id: 'awards',
    label: 'Awards',
    icon: FaTrophy,
    description: 'Creative and competitive recognition',
  },
  {
    id: 'sports',
    label: 'Sports',
    icon: FaFootballBall,
    description: 'Football, athletics, and team achievements',
  },
  {
    id: 'olympiads',
    label: 'Olympiads',
    icon: FaMedal,
    description: 'Repeated participation across subject areas',
  },
];

const certificates = [
  {
    icon: '🏅',
    title: 'Ei ASSET Excellence',
    description:
      'Certificate of Academic Excellence in Ei ASSET, placing in the top 15th percentile nationally.',
    period: '2022–23',
    category: 'Academic',
  },
  {
    icon: '☀️',
    title: 'NTPC Green Energy',
    description:
      'Certificate for an individual study visit to the 300MW Nokhra Solar Plant in Bikaner.',
    period: 'Field study',
    category: 'Science',
  },
  {
    icon: '🧪',
    title: 'Japan Super Science Fair',
    description:
      '1st Position in the Science Zone at JSSF, Kyoto, Japan, competing with 34 international schools.',
    period: 'International',
    category: 'Science',
  },
  {
    icon: '🤖',
    title: 'AI & Robotics Challenge',
    description:
      'Represented the school in the AI & Robotics for Good Youth Challenge.',
    period: 'National',
    category: 'Technology',
  },
  {
    icon: '🚀',
    title: 'Young CEO Boot Camp',
    description:
      'Represented BVN at the Think Startup Young CEO Boot Camp at IIT Delhi.',
    period: 'IIT Delhi',
    category: 'Leadership',
  },
  {
    icon: '🌌',
    title: 'Space Science Workshop',
    description:
      'Participated in a hands-on space science exploration workshop.',
    period: '2024–25',
    category: 'Science',
  },
];

const awards = [
  {
    icon: '🥉',
    title: 'Colourful India Dance',
    description:
      '3rd Position in Solo Dance at the Colourful India Dance Competition.',
    period: 'Recent',
    category: 'Dance',
  },
  {
    icon: '🥉',
    title: 'Manjusha Solo Dance',
    description:
      '3rd Position in Solo Dance at the Manjusha Ek Subhag Shrishti Dance Competition.',
    period: 'Recent',
    category: 'Dance',
  },
  {
    icon: '🎭',
    title: 'Manjusha Group Dance',
    description:
      'Participated in the Manjusha Ek Subhag Shrishti Group Dance Competition.',
    period: 'Recent',
    category: 'Performance',
  },
  {
    icon: '🏆',
    title: 'BC Roy Trophy',
    description:
      'Selected for the BC Roy Trophy Delhi Team National Camp U-15.',
    period: '2025–26',
    category: 'Football',
  },
  {
    icon: '🌍',
    title: 'JSSF Kyoto',
    description:
      'Participated in the Japan Super Science Fair, representing the school and India.',
    period: 'International',
    category: 'Science',
  },
  {
    icon: '🏕️',
    title: 'Space Workshop',
    description:
      'Participated in a hands-on space science exploration workshop.',
    period: '2024–25',
    category: 'Science',
  },
];

const sports = [
  {
    icon: '🏆',
    title: 'BC Roy Trophy',
    description: 'Delhi Team National Camp U-15 selection.',
    period: '2025–26',
    category: 'Selection',
  },
  {
    icon: '🏆',
    title: 'SGFI U-14 Delhi Team',
    description:
      'Selected for the SGFI U-14 Delhi Team National Camp through Inter-Zonals.',
    period: 'National',
    category: 'Selection',
  },
  {
    icon: '⚽',
    title: 'HCL Delhi Future Stars League Tier 1',
    description:
      'Captain of Hans Capital FC, finishing 3rd in Group C and progressing to Super 9.',
    period: '2025',
    category: 'Football',
  },
  {
    icon: '⚽',
    title: 'HCL Delhi Future Stars League Tier 2',
    description: 'Captain of Youth Football International FC.',
    period: '2024',
    category: 'Football',
  },
  {
    icon: '🥇',
    title: 'Sub-Junior Football Zonals',
    description: 'Achieved 1st Position in the Sub-Junior Football Zonals.',
    period: '2021–22',
    category: 'Football',
  },
  {
    icon: '🥈',
    title: 'Football Zonals',
    description:
      'Achieved 2nd Position and led the team as School Captain.',
    period: '2023–24',
    category: 'Football',
  },
  {
    icon: '🥉',
    title: 'Sub-Junior Football Zonals',
    description:
      'Achieved 3rd Position as School Team Captain.',
    period: '2022–23',
    category: 'Football',
  },
  {
    icon: '🎟️',
    title: 'Zone-23 Football Inter-Zonals',
    description:
      'Selected for the Sub-Junior Zone-23 Football Inter-Zonals.',
    period: '2023–24',
    category: 'Selection',
  },
  {
    icon: '🎟️',
    title: 'Zone-23 Football Inter-Zonals',
    description:
      'Selected for the Sub-Junior Zone-23 Football Inter-Zonals.',
    period: '2022–23',
    category: 'Selection',
  },
  {
    icon: '⚽',
    title: 'Johar Cup',
    description:
      'Represented the school in the Johar Cup at Mothers International School.',
    period: '2022–23',
    category: 'Football',
  },
  {
    icon: '🥇',
    title: '400m Race',
    description:
      'Achieved 1st Position in the 400m Race at Inter-House Sports Day.',
    period: '2024–25',
    category: 'Athletics',
  },
  {
    icon: '🥇',
    title: '4×200m Relay',
    description:
      'Achieved 1st Position in the 4×200m Relay at Inter-House Sports Day.',
    period: '2024–25',
    category: 'Athletics',
  },
];

const olympiads = [
  {
    badge: 'IMO',
    title: 'International Mathematics Olympiad',
    description: 'Repeated participation in mathematics competitions.',
    period: '5 times · 2018–2024',
    category: 'Mathematics',
  },
  {
    badge: 'IEO',
    title: 'International English Olympiad',
    description: 'Repeated participation in English competitions.',
    period: '5 times · 2018–2024',
    category: 'English',
  },
  {
    badge: 'NSO',
    title: 'National Science Olympiad',
    description: 'Repeated participation in science competitions.',
    period: '5 times · 2018–2024',
    category: 'Science',
  },
  {
    badge: 'ISSO',
    title: 'International Social Studies Olympiad',
    description: 'Participation in social studies competitions.',
    period: '2 times',
    category: 'Social studies',
  },
  {
    badge: 'IGKO',
    title: 'International General Knowledge Olympiad',
    description: 'Participation in general knowledge competitions.',
    period: '2 times',
    category: 'General knowledge',
  },
  {
    badge: 'NCO',
    title: 'National Cyber Olympiad',
    description: 'Participation in cyber and technology competitions.',
    period: '1 time',
    category: 'Technology',
  },
];

const dataMap = {
  certificates,
  awards,
  sports,
  olympiads,
};

const panelThemes = {
  certificates: {
    accent: 'text-blue-700',
    iconBackground: 'bg-blue-50',
    border: 'border-blue-100',
    softBackground: 'bg-blue-50/60',
  },
  awards: {
    accent: 'text-amber-700',
    iconBackground: 'bg-amber-50',
    border: 'border-amber-100',
    softBackground: 'bg-amber-50/60',
  },
  sports: {
    accent: 'text-emerald-700',
    iconBackground: 'bg-emerald-50',
    border: 'border-emerald-100',
    softBackground: 'bg-emerald-50/60',
  },
  olympiads: {
    accent: 'text-primary-700',
    iconBackground: 'bg-primary-50',
    border: 'border-primary-100',
    softBackground: 'bg-primary-50/60',
  },
};

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('certificates');
  const tabRefs = useRef([]);

  const activeItems = dataMap[activeTab];
  const activeTabDetails = tabs.find((tab) => tab.id === activeTab);
  const ActiveTabIcon = activeTabDetails.icon;
  const activeTheme = panelThemes[activeTab];

  const handleTabKeyDown = (event, currentIndex) => {
    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % tabs.length;
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    }

    if (event.key === 'Home') {
      nextIndex = 0;
    }

    if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    }

    if (nextIndex !== currentIndex) {
      event.preventDefault();

      const nextTab = tabs[nextIndex];
      setActiveTab(nextTab.id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section
      id="achievements"
      className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-labelledby="achievements-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
            Recognition
          </span>

          <h2
            id="achievements-heading"
            className="mt-3 font-primary text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Achievements and awards
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            A collection of academic, scientific, sporting, creative, and
            leadership milestones.
          </p>
        </motion.div>

        <div className="mb-10 grid gap-3 sm:grid-cols-4">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;

            return (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon size={18} aria-hidden="true" />
                  </span>

                  <span className="font-primary text-2xl font-bold text-gray-900">
                    {dataMap[tab.id].length}
                  </span>
                </div>

                <p className="mt-3 text-sm font-bold text-gray-900">
                  {tab.label}
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {tab.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div
          className="mb-8 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Achievement categories"
        >
          <div className="mx-auto flex min-w-max justify-center gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm sm:gap-3">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`${tab.id}-tab`}
                  aria-selected={isActive}
                  aria-controls={`${tab.id}-panel`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 sm:px-5 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/20'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary-700'
                  }`}
                >
                  <Icon size={16} aria-hidden="true" />
                  <span>{tab.label}</span>

                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[11px] ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {dataMap[tab.id].length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`${activeTab}-panel`}
            role="tabpanel"
            aria-labelledby={`${activeTab}-tab`}
            tabIndex={0}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-7 flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${activeTheme.iconBackground} ${activeTheme.accent}`}
                >
                  <ActiveTabIcon size={21} aria-hidden="true" />
                </span>

                <div>
                  <h3 className="font-primary text-xl font-bold text-gray-900">
                    {activeTabDetails.label}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {activeTabDetails.description}
                  </p>
                </div>
              </div>

              <span
                className={`self-start rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide sm:self-auto ${activeTheme.softBackground} ${activeTheme.accent}`}
              >
                {activeItems.length}{' '}
                {activeItems.length === 1 ? 'record' : 'records'}
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {activeItems.map((item, index) => {
                const isOlympiad = activeTab === 'olympiads';
                const iconValue = isOlympiad ? item.badge : item.icon;

                return (
                  <motion.article
                    key={`${activeTab}-${item.title}-${index}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.045,
                      duration: 0.45,
                    }}
                    className={`group flex h-full flex-col rounded-2xl border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${activeTheme.border}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl ${
                          isOlympiad
                            ? 'bg-gradient-to-br from-primary-600 to-secondary-500 text-sm font-extrabold text-white'
                            : `${activeTheme.iconBackground} ${activeTheme.accent}`
                        }`}
                        aria-hidden="true"
                      >
                        {iconValue}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${activeTheme.softBackground} ${activeTheme.accent}`}
                      >
                        {item.category}
                      </span>
                    </div>

                    <h4 className="mt-5 font-primary text-lg font-bold leading-7 text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                      {isOlympiad ? item.description : item.description}
                    </p>

                    <div className="mt-5 border-t border-gray-100 pt-4">
                      <span className={`text-xs font-bold uppercase tracking-[0.14em] ${activeTheme.accent}`}>
                        {isOlympiad ? item.period : item.period}
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Achievements;