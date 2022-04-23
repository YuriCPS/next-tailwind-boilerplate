export type ButtonProps = {
  href: string
  title: string
}

const Button = ({ href, title }: ButtonProps) => (


  <a href={href}>
    <button
      type="button"
      className="p-2 m-2 rounded-md bg-amber-400 hover:scale-110 hover:bg-amber-500"
    >
      {title}
    </button>
  </a>
)

export default Button
