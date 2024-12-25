import * as React from 'react';


export const SocialButton: React.FC<SocialButtonProps> = ({ iconSrc, alt, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-1 shrink gap-2.5 justify-center items-center px-7 py-2.5 bg-white rounded-lg border border-solid basis-0 border-stone-300"
      aria-label={`Sign in with ${alt}`}
    >
      <img
        loading="lazy"
        src={iconSrc}
        alt={alt}
        className="object-contain self-stretch my-auto rounded-3xl aspect-[1.06] w-[18px]"
      />
    </button>
  );
};