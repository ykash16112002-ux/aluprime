import React, { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackNode?: React.ReactNode;
  aspectRatioClass?: string;
  showGlassSheen?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  fallbackNode,
  showGlassSheen = true,
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-neutral-200 ${className}`}>
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setHasLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
              hasLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
          {/* Subtle architectural glass light sheen over the photo */}
          {showGlassSheen && (
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60" />
          )}
        </>
      ) : (
        /* Zero-broken-image fallback */
        <div className="w-full h-full flex items-center justify-center">
          {fallbackNode || (
            <div className="w-full h-full bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300 flex items-center justify-center p-4 text-center">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                {alt}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
