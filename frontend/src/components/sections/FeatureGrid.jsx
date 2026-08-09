import { motion } from 'framer-motion';
import {
  FiPhone, FiCalendar, FiBarChart2, FiUsers, FiBell,
  FiMic, FiGrid, FiMessageSquare, FiMail, FiSmartphone,
  FiDisc, FiClock,
} from 'react-icons/fi';
import SectionReveal from '../ui/SectionReveal';
import FlipCard from '../ui/FlipCard';

const features = [
  {
    icon: FiPhone,
    title: 'AI Phone Calls',
    description: 'Intelligent voice AI answers every call with natural conversation.',
    span: 'md:col-span-2 md:row-span-1',
    gradient: 'from-sky-500/30 via-indigo-500/20 to-purple-500/30',
    details: [
      "24/7 natural voice receptionist",
      "Handles interruptions & filler words",
      "Custom voice persona & regional accents"
    ]
  },
  {
    icon: FiCalendar,
    title: 'Appointment Booking',
    description: 'Automatically books slots based on real-time availability.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-purple-500/30 via-pink-500/20 to-sky-500/30',
    details: [
      "Real-time calendar availability check",
      "Zero double-booking guarantee",
      "Instant confirmation dispatch"
    ]
  },
  {
    icon: FiGrid,
    title: 'Live Dashboard',
    description: 'Real-time overview of calls, bookings, and customer activity.',
    span: 'md:col-span-1 md:row-span-2',
    gradient: 'from-indigo-500/30 via-sky-500/20 to-emerald-500/30',
    details: [
      "Live call transcripts & audio stream",
      "Real-time revenue metrics",
      "Active front desk activity feed",
      "One-click call takeover option"
    ]
  },
  {
    icon: FiUsers,
    title: 'Customer CRM',
    description: 'Build customer profiles automatically from every interaction.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-sky-500/30 via-purple-500/20 to-indigo-500/30',
    details: [
      "Automatic contact profile building",
      "Past call history & preferences",
      "Custom tagging & notes"
    ]
  },
  {
    icon: FiBarChart2,
    title: 'Analytics',
    description: 'Deep insights into call patterns, peak hours, and conversion rates.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-purple-500/30 via-indigo-500/20 to-sky-500/30',
    details: [
      "Peak call volume heatmaps",
      "Conversion & booking ROI analytics",
      "Exportable CSV reports"
    ]
  },
  {
    icon: FiBell,
    title: 'Notifications',
    description: 'Instant alerts via push, email, and SMS for every booking.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-pink-500/30 via-purple-500/20 to-sky-500/30',
    details: [
      "Instant push alerts on new bookings",
      "Daily email digest",
      "Staff SMS notifications"
    ]
  },
  {
    icon: FiClock,
    title: 'Calendar Sync',
    description: 'Syncs with Google Calendar, Outlook, and Apple Calendar.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-indigo-500/30 via-sky-500/20 to-purple-500/30',
    details: [
      "Google, Outlook & Apple Calendar sync",
      "Two-way live calendar polling",
      "Custom buffer times between slots"
    ]
  },
  {
    icon: FiMic,
    title: 'Voice AI Engine',
    description: 'Human-like voice that understands context and intent.',
    span: 'md:col-span-2 md:row-span-1',
    gradient: 'from-sky-500/30 via-emerald-500/20 to-purple-500/30',
    details: [
      "Human acoustic model & emotion",
      "Context-aware intent recognition",
      "Multi-language & dialect support"
    ]
  },
  {
    icon: FiDisc,
    title: 'Call Recording',
    description: 'Every call is recorded and transcribed for quality review.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-purple-500/30 via-sky-500/20 to-indigo-500/30',
    details: [
      "100% encrypted cloud recordings",
      "Automated AI text transcriptions",
      "Searchable keyword archive"
    ]
  },
  {
    icon: FiMessageSquare,
    title: 'WhatsApp Sync',
    description: 'Extend your AI receptionist to WhatsApp conversations.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-emerald-500/30 via-sky-500/20 to-indigo-500/30',
    details: [
      "Automated WhatsApp bot replies",
      "Instant booking links",
      "Interactive 2-way chat flow"
    ]
  },
  {
    icon: FiSmartphone,
    title: 'SMS Reminders',
    description: 'Send confirmations, reminders, and follow-ups via SMS.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-sky-500/30 via-purple-500/20 to-pink-500/30',
    details: [
      "Automated SMS booking confirmations",
      "One-click reschedule links",
      "Reduces no-shows by 85%"
    ]
  },
  {
    icon: FiMail,
    title: 'Email Digest',
    description: 'Automated email confirmations and appointment summaries.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-indigo-500/30 via-purple-500/20 to-emerald-500/30',
    details: [
      "Branded customer confirmations",
      "Daily staff summary emails",
      "Custom email templates"
    ]
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative py-28 px-6 lg:px-10" id="features">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <p className="text-sm text-sky-400 uppercase tracking-[0.2em] font-semibold mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            Interactive Feature Bento
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold font-heading text-white mb-5 tracking-tight">
            Everything you need.
            <br />
            <span className="ar-gradient-text">Nothing you don't.</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-[580px] mx-auto">
            Hover or tap any card below to flip it and explore deep technical capabilities.
          </p>
        </SectionReveal>

        {/* Interactive Flippable Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[230px]">
          {features.map((feature, index) => (
            <SectionReveal
              key={feature.title}
              delay={index * 0.04}
              className={feature.span}
            >
              <FlipCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                details={feature.details}
                gradient={feature.gradient}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

