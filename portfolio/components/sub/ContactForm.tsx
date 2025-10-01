"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'e-commerce', label: 'E-commerce Platform' },
    { value: 'api-integration', label: 'API Integration' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <motion.div
      variants={slideInFromLeft(0.3)}
      className="w-full"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={slideInFromLeft(0.4)}
            className="space-y-2"
          >
            <label htmlFor="name" className="block text-sm font-semibold text-white drop-shadow-sm">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-900/90 border border-slate-600/70 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-md hover:border-purple-400/70 shadow-lg"
              placeholder="John Doe"
            />
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="space-y-2"
          >
            <label htmlFor="email" className="block text-sm font-semibold text-white drop-shadow-sm">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-900/90 border border-slate-600/70 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-md hover:border-purple-400/70 shadow-lg"
              placeholder="john@example.com"
            />
          </motion.div>
        </div>

        {/* Subject/Project Type */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          className="space-y-2"
        >
          <label htmlFor="subject" className="block text-sm font-semibold text-white drop-shadow-sm">
            Project Type *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-900/90 border border-slate-600/70 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-md hover:border-purple-400/70 shadow-lg"
          >
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value} className="bg-slate-800">
                {type.label}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Message */}
        <motion.div
          variants={slideInFromLeft(0.7)}
          className="space-y-2"
        >
          <label htmlFor="message" className="block text-sm font-semibold text-white drop-shadow-sm">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-slate-900/90 border border-slate-600/70 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-md hover:border-purple-400/70 resize-none shadow-lg"
            placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="pt-4"
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-400 text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Message sent successfully! I'll get back to you within 24 hours.
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-400 text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Something went wrong. Please try again or contact me directly.
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;