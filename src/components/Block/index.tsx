export type BlockProps = {
  href: string
  title: string
  description: string
};

const Block = ({ href, title, description }: BlockProps) => (
  <a
    className="flex flex-col p-4 mt-6 text-left border w-80 rounded-xl hover:text-blue-600 focus:text-blue-600"
    href={href}
  >
    <h3 className="text-2xl font-bold">
      {title}
      {' '}
      &rarr;
    </h3>
    <p className="mt-4 text-xl">{description}</p>
  </a>
);

export default Block;
