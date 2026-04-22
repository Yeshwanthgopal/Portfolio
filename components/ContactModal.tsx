"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const email = "yeshwanthgopaljaladi@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOutlook = () => {
    // Try Outlook specific protocol first
    window.location.href = `ms-outlook://compose?to=${email}`;
    
    // Fallback to mailto if protocol isn't handled (most OSs will still open default app)
    setTimeout(() => {
      if (document.hasFocus()) {
        window.location.href = `mailto:${email}`;
      }
    }, 500);
  };

  const handleGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[10001] pointer-events-none flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-md bg-zinc-900/90 border border-white/10 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Let&apos;s talk.</h2>
                    <p className="text-zinc-500 text-sm mt-1">Select your preferred method</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Gmail Option */}
                  <button
                    onClick={handleGmail}
                    className="w-full group relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">Gmail</div>
                      <div className="text-zinc-500 text-xs">Open in browser tab</div>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-600 group-hover:text-yellow-500 transition-colors">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Outlook Option */}
                  <button
                    onClick={handleOutlook}
                    className="w-full group relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">Outlook</div>
                      <div className="text-zinc-500 text-xs">Open in Outlook app</div>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-600 group-hover:text-yellow-500 transition-colors">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Copy Option */}
                  <button
                    onClick={handleCopy}
                    className="w-full group relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                      {copied ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">{copied ? "Copied!" : "Copy Email Address"}</div>
                      <div className="text-zinc-500 text-xs truncate max-w-[200px]">{email}</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500 to-yellow-500/0 opacity-30" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
