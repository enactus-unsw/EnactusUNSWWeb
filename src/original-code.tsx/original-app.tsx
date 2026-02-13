import {
  Bars3Icon,
  BeakerIcon,
  BookmarkIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  PencilIcon,
  PhoneXMarkIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';

import Button from 'components/atoms/button';
import Logos from 'components/atoms/logos';
import CopyButton from 'components/molecules/copy-button';
import Card from 'components/organisms/card';

const features = [
  {
    name: 'Vite',
    description:
      'Faster and leaner development experience for modern web projects.',
    logo: CubeTransparentIcon,
    docs: 'https://vitejs.dev/',
  },
  {
    name: 'React',
    description: 'JavaScript library for building user interfaces.',
    logo: PencilIcon,
    docs: 'https://reactjs.org/',
  },
  {
    name: 'TypeScript',
    description:
      'Strongly typed programming language that builds on JavaScript.',
    logo: BookmarkIcon,
    docs: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Tailwind',
    description: 'A utility-first CSS framework packed with classes.',
    logo: PhotoIcon,
    docs: 'https://tailwindcss.com/',
  },
  {
    name: 'ESLint',
    description: 'Find and fix problems in your JavaScript code.',
    logo: BeakerIcon,
    docs: 'https://eslint.org/',
  },
  {
    name: 'Prettier',
    description: 'An opinionated code formatter.',
    logo: Bars3Icon,
    docs: 'https://prettier.io/',
  },
  {
    name: 'Atomic design',
    description:
      'We’re not designing pages, we’re designing systems of components.',
    logo: PhoneXMarkIcon,
    docs: 'https://bradfrost.com/blog/post/atomic-web-design/',
  },
  {
    name: 'Relative imports',
    description:
      'Import resource using its full path from the project’s src folder.',
    logo: ChevronDownIcon,
    docs: 'https://github.com/vitejs/vite/issues/88#issuecomment-762415200',
  },
];

function App() {
  return (
    <main>
      <h1 className="text-white">HELLO</h1>
      <header className="relative z-10 mx-auto max-w-screen-lg pt-16 xl:max-w-screen-xl">
        <h3 className="text-2xl font-bold leading-none tracking-tight text-purple-200 sm:text-4xl">
          <span className="text-[gold] opacity-75">Vital</span> @ Vite Template
        </h3>
        <h1 className="mb-8 text-6xl font-extrabold leading-none tracking-tight text-purple-400 sm:mb-10 lg:text-7xl">
          React + TypeScript + Tailwind
        </h1>
        <p className="mb-10 max-w-screen-lg text-lg font-medium text-gray-300 sm:mb-11 sm:text-xl">
          Bootstrap your web projects faster than ever. Comes with:{' '}
          <code className="font-mono font-bold text-blue-500">CSS-Modules</code>
          , <code className="font-mono font-bold text-blue-500">Jest</code>,{' '}
          <code className="font-mono font-bold text-blue-500">Husky</code>,{' '}
          <code className="font-mono font-bold text-blue-500">Commit-lint</code>
          , <code className="font-mono font-bold text-blue-500">ESLint</code>,{' '}
          <code className="font-mono font-bold text-blue-500">Prettier</code>{' '}
          and{' '}
          <code className="font-mono font-bold text-blue-500">
            Atomic organization for components
          </code>
          . Configured and ready to go.
        </p>
        <div className="absolute right-12 top-12 opacity-10 lg:opacity-50">
          <Logos.Vite className="h-56 w-56" />
        </div>
      </header>
      <section className="mx-auto max-w-screen-lg xl:max-w-screen-xl">
        <div className="items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0">
          <a href="https://github.com/jvidalv/vital">
            <Button>Visit on Github</Button>
          </a>
          <CopyButton text="npx degit jvidalv/vital my-app" />
        </div>
      </section>
      <section className="mx-auto grid max-w-screen-lg grid-cols-10 gap-4 xl:max-w-screen-xl">
        {features.map((props, index) => (
          <div key={index} className="col-span-10 sm:col-span-5">
            <Card
              title={props.name}
              description={props.description}
              Icon={props.logo}
              href={props.docs}
            />
          </div>
        ))}
      </section>
      <footer className="mx-auto max-w-screen-lg pb-16 text-center font-bold text-gray-400 sm:text-right xl:max-w-screen-xl">
        <a href="https://github.com/jvidalv">
          Josep Vidal @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
}

export default App;
