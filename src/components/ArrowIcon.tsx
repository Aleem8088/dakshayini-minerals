// Exact arrow vector exported from Figma (the button "Line 5" asset).
// Uses currentColor so it inverts together with the button text on hover.
export default function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 21.5 11.0459"
      className={`w-5 h-auto shrink-0 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0.75 4.77297H0V6.27297H0.75V5.52297V4.77297ZM21.2803 6.0533C21.5732 5.76041 21.5732 5.28553 21.2803 4.99264L16.5074 0.21967C16.2145 -0.0732236 15.7396 -0.0732236 15.4467 0.21967C15.1538 0.512563 15.1538 0.987437 15.4467 1.28033L19.6893 5.52297L15.4467 9.76561C15.1538 10.0585 15.1538 10.5334 15.4467 10.8263C15.7396 11.1192 16.2145 11.1192 16.5074 10.8263L21.2803 6.0533ZM0.75 5.52297V6.27297H20.75V5.52297V4.77297H0.75V5.52297Z"
        fill="currentColor"
      />
    </svg>
  );
}
