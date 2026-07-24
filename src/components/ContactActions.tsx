import React, { useState } from 'react';
import { MessageSquare, Mail, Copy, Check, Download, Share2 } from 'lucide-react';
import { generateVCard } from '../utils/vcard';

interface ContactActionsProps {
  whatsappUrl: string;
  whatsappFormatted: string;
  email: string;
}

export const ContactActions: React.FC<ContactActionsProps> = ({
  whatsappUrl,
  whatsappFormatted,
  email,
}) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CodeEngine - Soluções Digitais',
          text: 'Cartão de Visita Digital da CodeEngine. Transformamos ideias em soluções digitais inteligentes.',
          url: window.location.href,
        });
      } catch (e) {
        // Fallback copy url
        handleCopy(window.location.href, 'share');
      }
    } else {
      handleCopy(window.location.href, 'share');
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* Primary WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-white font-semibold text-base sm:text-lg tracking-wide shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_45px_rgba(6,182,212,0.6)] transition-all duration-300 transform active:scale-[0.98] overflow-hidden cursor-pointer"
      >
        {/* Animated sheen highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

        {/* WhatsApp Icon */}
        <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white" />
        </div>

        <span className="relative z-10">Falar no WhatsApp</span>
      </a>

      {/* Secondary Button Row: Email & Save Contact */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <a
          href={`mailto:${email}`}
          className="group relative flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-cyan-500/30 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all duration-300 backdrop-blur-md cursor-pointer"
        >
          <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          <span>Enviar Email</span>
        </a>

        <button
          onClick={generateVCard}
          type="button"
          className="group relative flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-cyan-500/30 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all duration-300 backdrop-blur-md cursor-pointer"
        >
          <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          <span>Guardar Contacto (.vcf)</span>
        </button>
      </div>

      {/* Discrete Contact Info Bar with Copy Triggers */}
      <div className="w-full mt-1 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-slate-400">
        {/* Phone / WhatsApp */}
        <div className="flex items-center gap-2 bg-slate-900/40 px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/10 transition-colors w-full sm:w-auto justify-between sm:justify-start">
          <span className="text-slate-500 font-mono text-[11px]">WhatsApp:</span>
          <span className="font-mono text-slate-200 font-medium">{whatsappFormatted}</span>
          <button
            onClick={() => handleCopy('+244957459336', 'phone')}
            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            title="Copiar WhatsApp"
          >
            {copiedType === 'phone' ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 bg-slate-900/40 px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/10 transition-colors w-full sm:w-auto justify-between sm:justify-start">
          <span className="text-slate-500 font-mono text-[11px]">Email:</span>
          <span className="font-mono text-slate-200 font-medium truncate max-w-[170px] sm:max-w-none">
            {email}
          </span>
          <button
            onClick={() => handleCopy(email, 'email')}
            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            title="Copiar Email"
          >
            {copiedType === 'email' ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Share Link */}
        <button
          onClick={handleShare}
          className="p-1.5 rounded-lg bg-slate-900/40 hover:bg-white/10 border border-white/5 text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer text-xs"
          title="Partilhar Cartão"
        >
          {copiedType === 'share' ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-mono text-[11px]">Link copiado</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono text-[11px]">Partilhar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
