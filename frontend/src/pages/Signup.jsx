import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMail, FiLock, FiArrowRight, FiArrowLeft, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';

const businessTypes = [
  { emoji: '💇', name: 'Salon' },
  { emoji: '🦷', name: 'Clinic' },
  { emoji: '🍽️', name: 'Restaurant' },
  { emoji: '💪', name: 'Gym' },
  { emoji: '🏨', name: 'Hotel' },
  { emoji: '⚖️', name: 'Law Firm' },
  { emoji: '🧖', name: 'Spa' },
  { emoji: '📚', name: 'Tutoring' },
  { emoji: '🔧', name: 'Repair Shop' },
  { emoji: '🏢', name: 'Other' },
];

const steps = ['Account', 'Business', 'Setup'];

export default function Signup() {
  const [step, setStep] = useState(0);
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [focused, setFocused] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const checkPassword = (val) => {
    let s = 0;
    if (val.length >= 8) s++;
    if (/[A-Z]/.test(val)) s++;
    if (/[0-9]/.test(val)) s++;
    if (/[^A-Za-z0-9]/.test(val)) s++;
    setPasswordStrength(s);
  };

  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-400', 'bg-green-500'];
  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong'];

  return (
    <PageTransition>
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,122,0,0.05)_0%,transparent_70%)] blur-[40px]" />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(12,74,110,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(12,74,110,0.06) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[480px]">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-bg-primary">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.8" />
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary tracking-tight">
                Recept<span className="text-accent">AI</span>
              </span>
            </Link>
            <h1 className="text-2xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-2">
              Create your account
            </h1>
            <p className="text-sm text-text-muted">Start your 14-day free trial</p>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <motion.div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    i < step ? 'bg-accent text-bg-primary' : i === step ? 'bg-accent/20 text-accent border border-accent/40' : 'bg-[rgba(12,74,110,0.05)] text-text-muted/40 border border-border'
                  }`}
                  animate={i === step ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {i < step ? <FiCheck size={14} /> : i + 1}
                </motion.div>
                <span className={`text-xs font-medium hidden sm:block ${i <= step ? 'text-text-primary' : 'text-text-muted/30'}`}>{s}</span>
                {i < steps.length - 1 && <div className={`w-8 h-px ${i < step ? 'bg-accent' : 'bg-border'}`} />}
              </div>
            ))}
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl bg-[rgba(12,74,110,0.03)] backdrop-blur-[30px] border border-[rgba(12,74,110,0.06)] p-8"
          >
            <AnimatePresence mode="wait">
              {/* Step 1: Account */}
              {step === 0 && (
                <motion.form
                  key="step0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                  onSubmit={(e) => { e.preventDefault(); setStep(1); }}
                >
                  <div>
                    <label className="block text-xs text-text-muted mb-2 font-medium">Full Name</label>
                    <div className={`relative flex items-center rounded-xl border transition-all duration-300 ${focused === 'name' ? 'border-accent/40 bg-[rgba(255,122,0,0.03)]' : 'border-border bg-[rgba(12,74,110,0.03)]'}`}>
                      <FiUser size={16} className="absolute left-4 text-text-muted/40" />
                      <input type="text" placeholder="John Smith" onFocus={() => setFocused('name')} onBlur={() => setFocused('')} className="w-full py-3 pl-11 pr-4 bg-transparent text-sm text-text-primary placeholder:text-text-muted/30 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-text-muted mb-2 font-medium">Email</label>
                    <div className={`relative flex items-center rounded-xl border transition-all duration-300 ${focused === 'email' ? 'border-accent/40 bg-[rgba(255,122,0,0.03)]' : 'border-border bg-[rgba(12,74,110,0.03)]'}`}>
                      <FiMail size={16} className="absolute left-4 text-text-muted/40" />
                      <input type="email" placeholder="you@company.com" onFocus={() => setFocused('email')} onBlur={() => setFocused('')} className="w-full py-3 pl-11 pr-4 bg-transparent text-sm text-text-primary placeholder:text-text-muted/30 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-text-muted mb-2 font-medium">Password</label>
                    <div className={`relative flex items-center rounded-xl border transition-all duration-300 ${focused === 'password' ? 'border-accent/40 bg-[rgba(255,122,0,0.03)]' : 'border-border bg-[rgba(12,74,110,0.03)]'}`}>
                      <FiLock size={16} className="absolute left-4 text-text-muted/40" />
                      <input type="password" placeholder="Min 8 characters" onFocus={() => setFocused('password')} onBlur={() => setFocused('')} onChange={(e) => checkPassword(e.target.value)} className="w-full py-3 pl-11 pr-4 bg-transparent text-sm text-text-primary placeholder:text-text-muted/30 outline-none" />
                    </div>
                    {/* Strength bar */}
                    <div className="flex gap-1 mt-2">
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < passwordStrength ? strengthColors[passwordStrength] : 'bg-[rgba(12,74,110,0.06)]'}`} />
                      ))}
                    </div>
                    {passwordStrength > 0 && <p className="text-[10px] text-text-muted/40 mt-1">{strengthLabels[passwordStrength]}</p>}
                  </div>
                  <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="w-full py-3.5 rounded-xl bg-accent text-bg-primary font-semibold text-sm flex items-center justify-center gap-2 hover:bg-accent-secondary transition-colors cursor-pointer mt-4">
                    Continue <FiArrowRight size={16} />
                  </motion.button>
                </motion.form>
              )}

              {/* Step 2: Business Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-text-muted mb-5">Select your business type</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {businessTypes.map((b) => (
                      <motion.button
                        key={b.name}
                        onClick={() => setSelectedBusiness(b.name)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                          selectedBusiness === b.name
                            ? 'border-accent/40 bg-accent/5'
                            : 'border-border bg-[rgba(12,74,110,0.02)] hover:border-[rgba(12,74,110,0.12)]'
                        }`}
                      >
                        <span className="text-xl">{b.emoji}</span>
                        <span className="text-sm text-text-primary font-medium">{b.name}</span>
                      </motion.button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(0)} className="flex-1 py-3 rounded-xl border border-border text-sm text-text-muted hover:text-text-primary hover:border-[rgba(12,74,110,0.12)] transition-all cursor-pointer flex items-center justify-center gap-2">
                      <FiArrowLeft size={14} /> Back
                    </button>
                    <motion.button onClick={() => setStep(2)} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="flex-1 py-3 rounded-xl bg-accent text-bg-primary font-semibold text-sm flex items-center justify-center gap-2 hover:bg-accent-secondary transition-colors cursor-pointer">
                      Continue <FiArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-5"
                  >
                    <FiCheck size={32} className="text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-2">You're all set!</h3>
                  <p className="text-sm text-text-muted mb-6">Your AI receptionist is being configured. You'll be redirected to your dashboard.</p>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-xl border border-border text-sm text-text-muted hover:text-text-primary transition-all cursor-pointer flex items-center justify-center gap-2">
                      <FiArrowLeft size={14} /> Back
                    </button>
                    <Link to="/" className="flex-1">
                      <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="w-full py-3 rounded-xl bg-accent text-bg-primary font-semibold text-sm flex items-center justify-center gap-2 hover:bg-accent-secondary transition-colors cursor-pointer">
                        Go to Dashboard <FiArrowRight size={16} />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Footer */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center text-sm text-text-muted mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-accent hover:text-accent-secondary transition-colors font-medium">Sign in</Link>
          </motion.p>
        </div>
      </section>
    </PageTransition>
  );
}
