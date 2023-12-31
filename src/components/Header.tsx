import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CartWidget } from "./CartWidget";
import { SearchForm } from "./SearchForm";

interface HeaderProps {}

export function Header({}: HeaderProps): JSX.Element | null {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Conta</span>

          <Image
            alt=""
            width={24}
            height={24}
            src="https://github.com/wfl-junior.png"
            className="w-6 aspect-square rounded-full"
          />
        </Link>
      </div>
    </header>
  );
}
