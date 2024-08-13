import Link from 'next/link';

const ResetButton = ({ customUsername }) => {
  const timestamp = Date.now();
  const href = customUsername 
    ? `/app?animate=true&timestamp=${timestamp}` 
    : `/features?animate=true&timestamp=${timestamp}`;

  return (
    <Link
      href={href}
      className="absolute top-20 left-30 sm:top-20 sm:left-20 md:top-30 md:left-30 lg:top-30 lg:left-30 px-4 py-2 border-zinc-500 text-zinc-500 hover:text-zinc-300 rounded text-base sm:text-lg md:text-xl"
    >
      {customUsername ? "{git switch 9550shubham}" : "{git reset NORMAL}"}
    </Link>
  );
};

export default ResetButton;