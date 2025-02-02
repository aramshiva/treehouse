import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={`flex justify-between items-center p-9 w-full`}>
      <Image src="logo.svg" alt="logo" width={200} height={200} />
      <div className="flex space-x-7 self-center">
        <Link href="/about" className="text-2xl">
          about
        </Link>
        <Link href="/for_leaders" className="text-2xl">
          for_leaders
        </Link>
        <Link href="/login" className="text-2xl">
          login
        </Link>
        <Link href="/join">
          <Image src="cta.svg" alt="CTA button" width={175} height={175} />{" "}
        </Link>
      </div>
    </header>
  );
}
