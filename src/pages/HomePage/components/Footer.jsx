import { RiGeminiLine } from "react-icons/ri";
import Links from './Links'
const linksUI = [
  { title: "Company", links: ["About", "Terms", "Privacy Policy"] },
  { title: "Support", links: ["FAQ", "Conntact Us"] },
  { title: "Legal", links: ["Terms of Use", "Privacy Policy"] },
];
function Footer() {
  return (
    <footer className="flex items-start gap-4 justify-around py-10">
      <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-500">
          <RiGeminiLine />
        </div>
        <h1 className="text-white">AI Interview</h1>
      </div>
      <p className="text-gray-400">AI-powered interview preparation to help you <br/> land your dream job.</p>
      </div>
      {linksUI.map(link => <Links link = {link}/>)}
    </footer>
  );
}

export default Footer;
