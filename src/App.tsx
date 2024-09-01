import BirdPreview from "./components/BirdPreview";
import Bird1 from "./images/bird1.jpg";

const App = () => {
  /* NOTE:
      Most of the time, it's not the case that our applications will have
      a list of the data needed hardcoded in our app. We usually call an
      API which returns some JSON data that we can then parse and use in
      our apps.
  */
  const posts = [<BirdPreview imageSrc={Bird1} />];

  return (
    <>
      <header className="bg-yellow-100 w-screen py-2 px-4">
        <ul className="text-xl flex justify-between items-center">
          <li className="text-green-700 text-3xl font-bold">🐣 Chirper</li>
        </ul>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {posts.map((post) => {
          return <div>{post}</div>;
        })}
      </main>
    </>
  );
};

export default App;
