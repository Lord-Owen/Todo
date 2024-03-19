import { useTodos } from "../context/TodoContext";

export default function Button({ text, className, ...props }) {
  const { theme } = useTodos();

  return (
    <button
      {...props}
      className={`btn btn-${theme} ${className ? className : ""}`}
    >
      {text}
    </button>
  );
}
