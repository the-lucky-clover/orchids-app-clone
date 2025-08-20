import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-full">
        <div className="flex w-full justify-center gap-4 py-6">
          <Link
            href="/privacy-policy"
            className="text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground md:text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground md:text-sm"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;