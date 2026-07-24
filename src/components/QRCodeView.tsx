import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode, X, ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QRCodeViewProps {
  url: string;
}

export const QRCodeView: React.FC<QRCodeViewProps> = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Compact Glass QR Badge in Card */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="group relative flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 text-xs text-slate-300 hover:text-white shadow-lg cursor-pointer"
          title="Clique para ampliar o QR Code"
        >
          <div className="p-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
            <QrCode className="w-3.5 h-3.5" />
          </div>
          <span className="font-medium tracking-tight">Escanear QR Code WhatsApp</span>
          <span className="text-[10px] text-cyan-400/80 font-mono bg-cyan-950/60 border border-cyan-500/30 px-1.5 py-0.5 rounded-md">
            AMPLIAR
          </span>
        </button>
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#121827] via-[#0d121f] to-[#080b12] border border-cyan-500/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background ambient glow inside modal */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-5">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  CodeEngine
                </div>
                <h3 className="text-lg font-bold text-white">QR Code de Contacto</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Aponte a câmara do telemóvel para abrir o WhatsApp instantaneamente
                </p>
              </div>

              {/* Styled QR Code Box */}
              <div className="relative group p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 shadow-inner flex flex-col items-center justify-center my-2">
                <div className="p-3 bg-white rounded-xl shadow-2xl border border-cyan-300/40">
                  <QRCodeSVG
                    value={url}
                    size={190}
                    bgColor="#FFFFFF"
                    fgColor="#0A0E17"
                    level="H"
                    includeMargin={false}
                    imageSettings={{
                      src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2306B6D4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>',
                      x: undefined,
                      y: undefined,
                      height: 32,
                      width: 32,
                      excavate: true,
                    }}
                  />
                </div>
                <div className="mt-3 text-[11px] font-mono text-cyan-300/80 flex items-center gap-1">
                  <span>+244 957 459 336</span>
                </div>
              </div>

              {/* Direct Open Button */}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs tracking-wide shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <span>Abrir Directamente no WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
