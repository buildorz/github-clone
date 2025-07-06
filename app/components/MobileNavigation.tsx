import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface MobileNavigationProps {
  closeMenu: () => void;
}

export default function MobileNavigation({ closeMenu }: MobileNavigationProps) {
  return (
    <div className="md:hidden bg-black text-white p-4 absolute top-16 left-0 w-full z-40">
      <ul className="space-y-4">
        <li>
          <Link
            href="#"
            className="flex items-center justify-between font-semibold"
            onClick={closeMenu}
          >
            Product <ChevronDown size={16} />
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center justify-between font-semibold"
            onClick={closeMenu}
          >
            Solutions <ChevronDown size={16} />
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center justify-between font-semibold"
            onClick={closeMenu}
          >
            Resources <ChevronDown size={16} />
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center justify-between font-semibold"
            onClick={closeMenu}
          >
            Open Source <ChevronDown size={16} />
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center justify-between font-semibold"
            onClick={closeMenu}
          >
            Enterprise <ChevronDown size={16} />
          </Link>
        </li>
        <li>
          <Link href="#" className="font-semibold" onClick={closeMenu}>
            Pricing
          </Link>
        </li>
      </ul>
    </div>
  );
}
