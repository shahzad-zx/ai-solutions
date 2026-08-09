import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiPhoneCall, FiCalendar, FiClock, FiCheckCircle, 
  FiPlay, FiPause, FiVolume2, FiTrendingUp, FiShield,
  FiZap, FiActivity
} from 'react-icons/fi';
import SectionReveal from '../ui/SectionReveal';

const industriesData = [
  {
    id: 'salon',
    name: 'Hair Salon & Beauty',
    emoji: '💇‍♀️',
    tagline: 'Never lose a walk-in or appointment call during peak styling hours.',
    accentColor: '#38BDF8', // Cyan
    gradient: 'from-sky-500/30 via-indigo-500/20 to-purple-500/30',
    agentName: 'Aria — Salon Concierge',
    metrics: { accuracy: '99.4%', revenueSaved: '$18,400/mo', responseTime: '210ms' },
    capabilities: [
      'Stylist-specific schedule allocation',
      'Service duration & price estimates',
      'Walk-in wait time updates',
      'Automated SMS & WhatsApp reminders'
    ],
    dialogue: [
      { speaker: 'Customer', text: 'Hi! Do you have any openings for a balayage and haircut this Friday afternoon?' },
      { speaker: 'AI Receptionist', text: 'Hello! Yes, Sarah has a slot open at 2:30 PM and Elena is available at 4:00 PM. Which stylist or time do you prefer?' },
      { speaker: 'Customer', text: 'Sarah at 2:30 PM sounds perfect.' },
      { speaker: 'AI Receptionist', text: 'Great! I have reserved Friday at 2:30 PM with Sarah. I just sent a confirmation text to your number.' }
    ],
    slotPreview: { day: 'Friday, 2:30 PM', service: 'Balayage + Cut', staff: 'Sarah M.', status: 'Confirmed' }
  },
  {
    id: 'dental',
    name: 'Dental & Clinic',
    emoji: '🦷',
    tagline: 'Screen urgent toothaches 24/7 and triage emergency visits instantly.',
    accentColor: '#10B981', // Emerald
    gradient: 'from-emerald-500/30 via-teal-500/20 to-cyan-500/30',
    agentName: 'Marcus — Clinic Care Coordinator',
    metrics: { accuracy: '99.8%', revenueSaved: '$24,500/mo', responseTime: '190ms' },
    capabilities: [
      '24/7 Emergency dental triage',
      'Insurance provider verification',
      'Automated hygiene checkup reminders',
      'HIPAA-compliant patient logging'
    ],
    dialogue: [
      { speaker: 'Customer', text: 'Hi, I have a severe toothache since last night. Can I see a dentist today?' },
      { speaker: 'AI Receptionist', text: 'I am so sorry to hear that. We hold emergency slots daily. Dr. Rao can see you today at 11:15 AM. Shall I book that emergency visit?' },
      { speaker: 'Customer', text: 'Yes please, 11:15 AM works!' },
      { speaker: 'AI Receptionist', text: 'You are booked for 11:15 AM today with Dr. Rao. Please bring your insurance card.' }
    ],
    slotPreview: { day: 'Today, 11:15 AM', service: 'Emergency Triage', staff: 'Dr. Rao', status: 'Priority Booking' }
  },
  {
    id: 'restaurant',
    name: 'Restaurants & Dining',
    emoji: '🍷',
    tagline: 'Manage table reservations, party sizes, and dietary requests effortlessly.',
    accentColor: '#F59E0B', // Amber
    gradient: 'from-amber-500/30 via-orange-500/20 to-red-500/30',
    agentName: 'Oliver — Maitre D AI',
    metrics: { accuracy: '99.2%', revenueSaved: '$15,800/mo', responseTime: '230ms' },
    capabilities: [
      'Table seating & party size optimization',
      'Special dietary & allergy tagging',
      'Waitlist SMS management',
      'Private event & group booking handler'
    ],
    dialogue: [
      { speaker: 'Customer', text: 'Hello, I’d like to reserve a table for 4 this Saturday at 7:30 PM.' },
      { speaker: 'AI Receptionist', text: 'Good evening! I have a outdoor patio booth available at 7:30 PM or indoor dining at 7:45 PM. Which table atmosphere do you prefer?' },
      { speaker: 'Customer', text: 'Patio booth at 7:30 PM please.' },
      { speaker: 'AI Receptionist', text: 'Wonderful! Table for 4 reserved Saturday 7:30 PM on the patio. See you then!' }
    ],
    slotPreview: { day: 'Saturday, 7:30 PM', service: 'Table for 4 (Patio)', staff: 'Oliver (Host)', status: 'Reserved' }
  },
  {
    id: 'hotel',
    name: 'Hotels & Hospitality',
    emoji: '🏨',
    tagline: 'Provide 24/7 room inquiries, late check-in guidance, and concierge service.',
    accentColor: '#A855F7', // Violet
    gradient: 'from-purple-500/30 via-indigo-500/20 to-pink-500/30',
    agentName: 'Sophia — Front Desk AI',
    metrics: { accuracy: '99.6%', revenueSaved: '$32,000/mo', responseTime: '200ms' },
    capabilities: [
      'Late check-in & keyless entry help',
      'Room upgrade availability check',
      'Local amenity & dining recommendations',
      'Multi-lingual guest interaction'
    ],
    dialogue: [
      { speaker: 'Customer', text: 'Hi, we will be landing late tonight around 1:00 AM. Can we still check in?' },
      { speaker: 'AI Receptionist', text: 'Welcome! Yes, our night keyless check-in is active 24/7. I have flagged your room for late arrival.' },
      { speaker: 'Customer', text: 'Awesome, can we also request extra pillows in the room?' },
      { speaker: 'AI Receptionist', text: 'Noted! Extra pillows have been dispatched to Suite 402. Safe travels!' }
    ],
    slotPreview: { day: 'Tonight, 1:00 AM', service: 'Suite 402 Late Check-in', staff: 'Night Concierge', status: 'Key Released' }
  },
  {
    id: 'fitness',
    name: 'Fitness & Gyms',
    emoji: '🏋️‍♂️',
    tagline: 'Book personal training sessions, class slots, and membership inquiries.',
    accentColor: '#EC4899', // Pink
    gradient: 'from-pink-500/30 via-rose-500/20 to-purple-500/30',
    agentName: 'Jax — Gym & Training Coordinator',
    metrics: { accuracy: '99.1%', revenueSaved: '$12,600/mo', responseTime: '220ms' },
    capabilities: [
      'Group class reservation management',
      'Personal trainer calendar scheduling',
      'Guest pass & trial activation',
      'Membership upgrade assistance'
    ],
    dialogue: [
      { speaker: 'Customer', text: 'Hi! Is there space in tomorrow morning’s 7:00 AM HIIT class?' },
      { speaker: 'AI Receptionist', text: 'Good morning! Yes, there are 3 spots remaining in Coach Alex’s 7:00 AM HIIT class. Want me to lock in your spot?' },
      { speaker: 'Customer', text: 'Yes, please book me in!' },
      { speaker: 'AI Receptionist', text: 'You are registered for 7:00 AM HIIT! See you tomorrow morning.' }
    ],
    slotPreview: { day: 'Tomorrow, 7:00 AM', service: 'HIIT Class', staff: 'Coach Alex', status: 'Spot Locked' }
  },
  {
    id: 'law',
    name: 'Law Firms & Legal',
    emoji: '⚖️',
    tagline: 'Qualify prospective clients, schedule initial consults, and intake cases.',
    accentColor: '#6366F1', // Indigo
    gradient: 'from-indigo-500/30 via-purple-500/20 to-sky-500/30',
    agentName: 'Eleanor — Legal Intake Specialist',
    metrics: { accuracy: '99.9%', revenueSaved: '$41,000/mo', responseTime: '180ms' },
    capabilities: [
      'Confidential lead screening & intake',
      'Attorney calendar alignment',
      'Consultation fee collection links',
      'Conflict of interest pre-checks'
    ],
    dialogue: [
      { speaker: 'Customer', text: 'Hello, I need to consult an attorney regarding a commercial lease dispute.' },
      { speaker: 'AI Receptionist', text: 'Thank you for calling. Our senior partner Mr. Vance specializes in commercial leases. He has a consultation slot open Monday at 10:00 AM.' },
      { speaker: 'Customer', text: 'Monday at 10:00 AM works well for me.' },
      { speaker: 'AI Receptionist', text: 'I have scheduled your 45-minute intake consultation for Monday at 10:00 AM.' }
    ],
    slotPreview: { day: 'Monday, 10:00 AM', service: 'Lease Consultation', staff: 'Attorney Vance', status: 'Intake Filed' }
  }
];

export default function IndustryCards() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const current = industriesData[selectedIdx];

  return (
    <section className="relative py-28 px-6 lg:px-10 overflow-hidden" id="industries">
      {/* Background Aurora Aura matching current industry accent */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20 filter blur-[120px] pointer-events-none"
        animate={{
          background: `radial-gradient(circle, ${current.accentColor} 0%, transparent 70%)`
        }}
        transition={{ duration: 0.8 }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <p className="text-sm text-sky-400 uppercase tracking-[0.2em] font-semibold mb-4 flex items-center justify-center gap-2">
            <FiZap className="text-sky-400 animate-pulse" />
            Tailored Industry Workflows
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold font-heading text-white mb-5 tracking-tight">
            Built for <span className="ar-gradient-text">every business type.</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-[620px] mx-auto">
            Select your industry below to watch the live AI receptionist simulate real customer calls and calendar bookings in real-time.
          </p>
        </SectionReveal>

        {/* Top Horizontal Industry Selector Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 ar-scrollbar-hide justify-start md:justify-center">
          {industriesData.map((ind, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={ind.id}
                onClick={() => { setSelectedIdx(idx); setIsPlayingAudio(false); }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 shrink-0 border cursor-pointer ${
                  isSelected 
                    ? 'bg-slate-800 text-white border-sky-400/80 shadow-lg shadow-sky-500/20 scale-105' 
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-800/80 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span className="text-lg">{ind.emoji}</span>
                <span>{ind.name}</span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping ml-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Stage: 2-Column Split Interactive Visualizer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* LEFT COLUMN: Industry Specifications & Capabilities */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-900/85 border border-indigo-500/30 p-8 flex flex-col justify-between backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${current.gradient} opacity-30 rounded-bl-full pointer-events-none`} />

              <div>
                {/* Industry Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 shadow-md">{current.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">{current.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-sky-400 font-mono mt-0.5">
                      <FiActivity className="animate-pulse" />
                      <span>{current.agentName}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {current.tagline}
                </p>

                {/* Capabilities Grid */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
                    Industry Capabilities
                  </h4>
                  {current.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <FiCheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={15} />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Summary Row */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 bg-slate-950/40 -mx-8 -mb-8 p-6">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Accuracy</div>
                  <div className="text-base font-bold text-emerald-400 font-heading">{current.metrics.accuracy}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono">ROI Recovered</div>
                  <div className="text-base font-bold text-sky-400 font-heading">{current.metrics.revenueSaved}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Speed</div>
                  <div className="text-base font-bold text-purple-400 font-heading">{current.metrics.responseTime}</div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Live Interactive Voice Call & Booking Simulator */}
            <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-indigo-950/90 border border-sky-400/50 p-8 flex flex-col justify-between backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              {/* Simulator Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400">
                      <FiPhoneCall size={18} />
                    </div>
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">Live AI Call Simulation</h4>
                    <span className="text-[11px] text-slate-400 font-mono">Voice Stream: Active • HD Quality</span>
                  </div>
                </div>

                {/* Audio Wave Control */}
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-400/40 text-xs font-semibold transition-all cursor-pointer"
                >
                  {isPlayingAudio ? <FiPause size={14} /> : <FiPlay size={14} />}
                  <span>{isPlayingAudio ? 'Pause Demo' : 'Play Voice Demo'}</span>
                </button>
              </div>

              {/* Animated Audio Equalizer Bar */}
              <div className="flex items-center justify-center gap-1.5 h-10 mb-6 bg-slate-950/60 rounded-xl p-2 border border-slate-800">
                <FiVolume2 className="text-sky-400 mr-2" size={16} />
                {Array.from({ length: 32 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 rounded-full bg-gradient-to-t from-sky-400 to-purple-400"
                    animate={{
                      height: isPlayingAudio ? [`${15 + (i % 7) * 10}%`, `${60 + (i % 5) * 8}%`, `${20 + (i % 3) * 10}%`] : '20%',
                    }}
                    transition={{
                      duration: 0.5 + (i % 4) * 0.1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>

              {/* Dialogue Conversation Terminal */}
              <div className="space-y-3.5 mb-6 flex-1">
                {current.dialogue.map((line, idx) => {
                  const isAI = line.speaker === 'AI Receptionist';
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: isAI ? -15 : 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.12 }}
                      className={`flex flex-col ${isAI ? 'items-start' : 'items-end'}`}
                    >
                      <span className="text-[10px] text-slate-400 font-mono mb-1">{line.speaker}</span>
                      <div 
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                          isAI 
                            ? 'bg-slate-800/90 text-slate-100 border border-sky-500/30 rounded-tl-none shadow-md' 
                            : 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-tr-none shadow-md'
                        }`}
                      >
                        {line.text}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Real-time Slot Reservation Card */}
              <div className="rounded-2xl bg-slate-950/80 border border-emerald-500/40 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <FiCalendar size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{current.slotPreview.service}</div>
                    <div className="text-[11px] text-slate-400">{current.slotPreview.day} • {current.slotPreview.staff}</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/90 border border-emerald-500/50 px-3 py-1 rounded-full">
                  {current.slotPreview.status} ✓
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
