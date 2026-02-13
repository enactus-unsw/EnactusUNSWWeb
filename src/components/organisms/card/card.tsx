import {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
  forwardRef,
} from 'react';

export interface CardProps
  extends Omit<ComponentProps<'div'>, 'className' | 'children'> {
  title: string;
  description: string;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  href: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, Icon, href, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="relative h-full overflow-hidden rounded-md bg-white bg-opacity-5 p-4 shadow"
        {...rest}
      >
        <div>
          <span className="absolute bottom-3 right-3 flex items-center justify-center rounded-md opacity-10">
            <Icon className="h-12 w-12 text-white" aria-hidden="true" />
          </span>
        </div>
        <div className="flex h-full flex-col">
          <h3 className="text-2xl font-bold text-blue-500">{title}</h3>
          <p className="mt-2 flex-1 text-base text-gray-300">{description}</p>
          <div className="pt-6">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-bold tracking-wide text-white transition hover:text-blue-400"
            >
              Visit documentation →
            </a>
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
