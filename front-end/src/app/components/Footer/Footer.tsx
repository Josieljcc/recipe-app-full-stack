import { BiHomeAlt2, BiUser } from "react-icons/bi";
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";

function Footer() {
  return (
    <footer className="fixed left-0 -bottom-1 w-full bg-zinc-700 shadow-[0px_-5px_10px_-5px_black] flex h-16  items-center justify-around text-3xl px-8">
      <Link href="/home/0">
        <BiHomeAlt2 />
      </Link>
      <Link href="/favorites">
        <MdFavoriteBorder />
      </Link>
      <Link href="/profile">
        <BiUser />
      </Link>
    </footer>
  );
}

export default Footer;
