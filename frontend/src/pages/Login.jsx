import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState('');

  return (
    <PageTransition>
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,122,0,0.06)_0%,transparent_70%)] blur-[40px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,167,51,0.04)_0%,transparent_70%)] blur-[40px]" />
          {/* Animated grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(12,74,110,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(12,74,110,0.06) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[440px]">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
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
              Welcome back
            </h1>
            <p className="text-sm text-text-muted">Sign in to your dashboard</p>
          </motion.div>

          {/* Login Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl bg-[rgba(12,74,110,0.03)] backdrop-blur-[30px] border border-[rgba(12,74,110,0.06)] p-8"
          >
            {/* Google sign-in */}
            <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-[rgba(12,74,110,0.05)] border border-border text-sm font-medium text-text-primary hover:bg-[rgba(12,74,110,0.08)] hover:border-[rgba(12,74,110,0.12)] transition-all duration-300 mb-6 cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-text-muted/40 uppercase tracking-wider">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Email */}
              <div>
                <label className="block text-xs text-text-muted mb-2 font-medium">Email</label>
                <div className={`relative flex items-center rounded-xl border transition-all duration-300 ${focused === 'email' ? 'border-accent/40 bg-[rgba(255,122,0,0.03)]' : 'border-border bg-[rgba(12,74,110,0.03)]'}`}>
                  <FiMail size={16} className="absolute left-4 text-text-muted/40" />
                  <input
                    type="email"
                    placeholder="you@company.com"
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    className="w-full py-3 pl-11 pr-4 bg-transparent text-sm text-text-primary placeholder:text-text-muted/30 outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs text-text-muted font-medium">Password</label>
                  <a href="#" className="text-xs text-accent hover:text-accent-secondary transition-colors">Forgot?</a>
                </div>
                <div className={`relative flex items-center rounded-xl border transition-all duration-300 ${focused === 'password' ? 'border-accent/40 bg-[rgba(255,122,0,0.03)]' : 'border-border bg-[rgba(12,74,110,0.03)]'}`}>
                  <FiLock size={16} className="absolute left-4 text-text-muted/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    onFocus={() => setFocused('password')}
                    onBlur={() => setFocused('')}
                    className="w-full py-3 pl-11 pr-12 bg-transparent text-sm text-text-primary placeholder:text-text-muted/30 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-text-muted/40 hover:text-text-muted transition-colors cursor-pointer"
                  >
                    {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, boxShadow: '0 0 30px rgba(255,122,0,0.2)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-accent text-bg-primary font-semibold text-sm flex items-center justify-center gap-2 hover:bg-accent-secondary transition-colors cursor-pointer mt-6"
              >
                Sign In
                <FiArrowRight size={16} />
              </motion.button>
            </form>
          </motion.div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-text-muted mt-6"
          >
            Don't have an account?{' '}
            <Link to="/signup" className="text-accent hover:text-accent-secondary transition-colors font-medium">
              Start free trial
            </Link>
          </motion.p>
        </div>
      </section>
    </PageTransition>
  );
}
