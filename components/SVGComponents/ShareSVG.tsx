const MySVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6 text-current transition-colors duration-300"
  >
    <path
      fill="currentColor"
      d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z"
    />
  </svg>
);

function ShareSVG() {
  return (
    <div className="group text-light-4 hover:text-primary-500 cursor-pointer object-contain">
      {MySVG}
    </div>
  );
}

export default ShareSVG;
