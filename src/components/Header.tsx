interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <header className="bg-yellow-100 w-screen py-2 px-4">
      <ul className="text-xl flex justify-between items-center">
        <li className="text-black text-3xl font-bold">{title}</li>
      </ul>
    </header>
  );
};

export default Header;
