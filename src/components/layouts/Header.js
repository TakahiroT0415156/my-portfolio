import { importIcon } from "../../utils/importIcons";

const Header = () => {
  const { FaInstagram, MdOutlineMailOutline } = importIcon();
  return (
    <header className="text-4xl font-mainFont flex w-screen justify-between py-6 px-4 bg-yellow-300">
      <h1 className="cursor-pointer bg-blue-600">Takahiro Terada</h1>
      <ul className="flex justify-between bg-green-400">
        <li className="">
          <a
            href="https://www.instagram.com/fennecnoprograming/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <FaInstagram size={25} />
            test
          </a>
        </li>
        <li className="">
          <a
            href="mailto:teradatakahiro16@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <MdOutlineMailOutline size={25} />
          </a>
        </li>
        <li className=""></li>
      </ul>
    </header>
  );
};

export default Header;
