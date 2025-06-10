import { Link } from "@inertiajs/react";

export const Footer = () => {
  return (
    <footer className="container mx-auto max-w-7xl border-t px-4 py-8 text-center">
      <div className="flex flex-col items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-base font-semibold">TeamSync</span>
        </Link>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} TimBurnOut. All rights reserved.
      </p>
    </footer>
  );
};
