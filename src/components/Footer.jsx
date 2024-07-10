import { Link } from "react-router-dom";

const Advats = [
  { name: "About" },
  { name: "Advertising" },
  { name: "Business" },
  { name: "How Search Works" },
];
const Settings = [{ name: "Privacy" }, { name: "Terms" }, { name: "Settings" }];
const Footer = () => {
  return (
    <div className="flex flex-col gap-3 text-[#E8E9E9] bg-[#161716] text-xs">
      <div className="p-2 px-8">
        <p>Rwanda</p>
      </div>
      <hr style={{ height: '0.1px', backgroundColor: '#313335', border: 'none' }}/>
      <div className="flex flex-col items-center gap-3 justify-center md:flex-row md:justify-between p-2 px-8">
        <div className="flex items-center gap-6  ">
          {Advats.map((advat, index) => (
            <div key={index}>
              <Link
                to={`/${advat.name.toLowerCase()}`}
                className="hover:underline"
              >
                {advat.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6  ">
          {Settings.map((privacy, index) => (
            <div key={index}>
              <Link
                to={`/${privacy.name.toLowerCase()}`}
                className="hover:underline"
              >
                {privacy.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
