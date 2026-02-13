import {
  CheckCircleIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import { ComponentProps, forwardRef, useMemo, useState } from 'react';

interface Props
  extends Omit<ComponentProps<'div'>, 'className' | 'onClick' | 'title'> {
  text: string;
}

const CopyButton = forwardRef<HTMLDivElement, Props>(
  ({ text, ...rest }, ref) => {
    const [copied, setCopied] = useState(false);
    const onClick = () => {
      navigator.clipboard?.writeText(text).then(() => setCopied(true));
    };

    const Icon = useMemo(
      () => (copied ? CheckCircleIcon : DocumentDuplicateIcon),
      [copied]
    );
    const title = copied ? 'Copied' : 'Click to copy to clipboard';

    return (
      <div
        {...rest}
        ref={ref}
        role="button"
        className="flex w-full flex-none items-center justify-center space-x-2 rounded-xl border border-gray-200 bg-gray-50 px-2 py-3 font-mono leading-6 text-gray-400 transition-colors duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white sm:w-auto sm:space-x-4 sm:px-6"
        onClick={onClick}
        title={title}
      >
        <span className="text-gray-900">
          <span className="inline text-gray-500" aria-hidden="true">
            ${' '}
          </span>
          {text}
        </span>
        <span className="sr-only">(click to copy to clipboard)</span>
        <div>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    );
  }
);

export default CopyButton;
