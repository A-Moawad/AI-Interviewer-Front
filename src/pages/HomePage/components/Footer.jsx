import { RiGeminiLine } from "react-icons/ri";
import Links from "./Links";

const linksUI = [
  { title: "Company", links: ["About", "Terms", "Privacy Policy"] },
  { title: "Support", links: ["FAQ", "Contact Us"] },
  { title: "Legal", links: ["Terms of Use", "Privacy Policy"] },
];

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-10 px-6 md:px-16 py-10 lg:py-20 bg-gray-900 text-white">
      {/* Left Section - Branding & Description */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-500">
            <RiGeminiLine size={20} />
          </div>
          <h1 className="text-xl font-semibold">AI Interview</h1>
        </div>
        <p className="text-gray-400 max-w-xs">
          AI-powered interview preparation to help you{" "}
          <br className="hidden md:block" /> land your dream job.
        </p>
      </div>

      {/* Right Section - Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 w-full md:w-auto text-center md:text-left">
        {linksUI.map((link) => (
          <Links key={link.title} link={link} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
