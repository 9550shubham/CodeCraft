import Link from 'next/link';

const ResetButton = ({ customUsername }) => {
  const timestamp = Date.now();
  const href = customUsername 
    ? `/app?timestamp=${timestamp}` 
    : `/features?animate=true&timestamp=${timestamp}`;

  return (
    <Link
      href={href}
      className="absolute top-40 left-40 px-4 py-2 border-zinc-500 text-zinc-500 hover:text-zinc-300 rounded text-xl"
    >
      {customUsername ? "{git switch 9550shubham}" : "{git reset NORMAL}"}
    </Link>
  );
};

export default ResetButton;