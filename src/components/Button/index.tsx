export type ButtonProps = {
  href: string
  text: string
  color: string
  size: string
};

interface Styles {
  bg: { [key: string]: string }
  size: { [key: string]: string }
  common: string,
}

const style: Styles = {
  bg: {
    amber: 'bg-amber-400 hover:bg-amber-500',
    blue: 'bg-blue-600 hover:bg-blue-700 text-white',
    green: 'bg-green-600 hover:bg-green-700 text-white',
    neutral: 'bg-neutral-700 hover:bg-neutral-900 text-white',
    red: 'bg-red-600 hover:bg-red-700 text-white',
    violet: 'bg-violet-600 hover:bg-violet-800 text-white',
  },
  size: {
    small: 'text-sm',
    medium: 'text-md',
    large: 'text-xl',
  },
  common: 'hover:scale-110 m-2 py-2 px-4 rounded-md font-medium',
};

const Button = ({
  href, text, color, size,
}: ButtonProps) => (
  <a href={href}>
    <button
      type="button"
      className={`${style.bg[color]} ${style.size[size]} ${style.common}`}
    >
      {text}
    </button>
  </a>
);

export default Button;
