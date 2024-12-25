import * as React from 'react';
import { InputField } from './InputField';
import { SocialButton } from './SocialButton';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const socialButtons = [
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/73856e2c998847d3e71f046fe0feb67a4678d75326827e42338582aa241058d7?placeholderIfAbsent=true&apiKey=0d214c4152984886b62e71f763b6bf0d", alt: "Google" },
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c010af52cb249710b03b21837ba7c8fb16ba4119608efe460feed0437a6fc836?placeholderIfAbsent=true&apiKey=0d214c4152984886b62e71f763b6bf0d", alt: "Facebook" },
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0dc1bf6660ee01f7549137b7052f12029ac5df2b72be1b3ade7a695b779f332e?placeholderIfAbsent=true&apiKey=0d214c4152984886b62e71f763b6bf0d", alt: "Apple" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex overflow-hidden flex-col items-center px-20 py-10 rounded-3xl bg-indigo-500 bg-opacity-30 max-w-[410px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f3bddfddfaaa27726970e52def8be1afc828f2425658e8327835e9201dca525?placeholderIfAbsent=true&apiKey=0d214c4152984886b62e71f763b6bf0d"
        alt="Login logo"
        className="object-contain aspect-square w-[85px]"
      />
      <form onSubmit={handleSubmit} className="flex flex-col mt-10 w-full max-w-[250px]">
        <h1 className="text-2xl text-white">Login</h1>
        <div className="flex flex-col mt-6 w-full text-sm">
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
          />
          <div className="mt-4">
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/de8eeeacc93842a05acf1c48eaa02386e07d804501ce5c9d822dc9ae50aa3252?placeholderIfAbsent=true&apiKey=0d214c4152984886b62e71f763b6bf0d"
            />
          </div>
          <button type="button" className="self-start mt-2.5 text-white">
            Forgot Password?
          </button>
        </div>
        <button
          type="submit"
          className="overflow-hidden gap-2.5 self-stretch py-2.5 pr-24 pl-24 mt-6 w-full text-base text-white bg-sky-900 rounded-lg min-h-[40px]"
        >
          Sign in
        </button>
        <div className="self-start mt-6 text-sm text-center text-white">
          or continue with
        </div>
        <div className="flex gap-4 items-start mt-6 w-full">
          {socialButtons.map((button, index) => (
            <SocialButton
              key={index}
              iconSrc={button.iconSrc}
              alt={button.alt}
            />
          ))}
        </div>
        <div className="self-start mt-6 text-xs text-center text-white">
          Don't have an account yet?{' '}
          <button type="button" className="underline focus:outline-none focus:ring-2 focus:ring-white">
            Register for free
          </button>
        </div>
      </form>
    </div>
  );
};