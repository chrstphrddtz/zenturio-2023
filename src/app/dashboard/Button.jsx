export default function Button({ label, onClick, active, direction }) {
  const isActive = active && direction !== "";
  const arrowIcon = direction === "asc" ? "↑" : "↓";

  return (
    <button
      type="button"
      className={`text-xl font-medium tracking-0.2rem hover:font-bold ${
        isActive ? "text-primary" : ""
      }`}
      onClick={onClick}
    >
      {label}
      {isActive && <span className="ml-2">{arrowIcon}</span>}
    </button>
  );
}
