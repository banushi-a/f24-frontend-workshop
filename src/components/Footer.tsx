const Footer = () => {
  return (
    <footer className="bg-gray-100 w-screen py-2 px-4">
      <ul className="text-xl flex justify-between items-center">
        <li className="text-black-700 text-xl italic">
          Made by students at{" "}
          <a
            className="underline"
            href="https://www.sandboxnu.com/"
            target="_blank"
          >
            {/* target="_blank" redirects to a new tab*/}
            Sandbox
          </a>
        </li>
        <li className="text-black-700 text-xl italic">
          View the{" "}
          <a
            className="underline"
            href="https://github.com/banushi-a/f24-frontend-workshop"
            target="_blank"
          >
            {/* target="_blank" redirects to a new tab*/}
            source code
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
