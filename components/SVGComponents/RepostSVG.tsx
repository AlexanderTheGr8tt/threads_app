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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"
    />
  </svg>
);

function RepostSVG() {
  return (
    <div className="group text-light-4 hover:text-primary-500 cursor-pointer object-contain">
      {MySVG}
    </div>
  );
}

export default RepostSVG;
