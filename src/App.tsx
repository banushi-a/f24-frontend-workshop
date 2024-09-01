import BirdPreview from "./components/BirdPreview";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Bird1 from "./images/bird1.jpg";
import Bird2 from "./images/bird2.jpg";
import Bird3 from "./images/bird3.jpg";

const App = () => {
  /* NOTE:
      Most of the time, it's not the case that our applications will have
      a list of the data needed hardcoded in our app. We usually call an
      API which returns some JSON data that we can then parse and use in
      our apps.
  */
  const posts = [
    <BirdPreview
      imageSrc={Bird1}
      title={"Rainbow Bird"}
      desription={
        "Omg a rainbow bird! I was so lucky to see this in the wild! I hope it'll return"
      }
    />,
    <BirdPreview
      imageSrc={Bird2}
      title={"Fat Blue Bird"}
      desription={
        "This little fella looked super plump and cute! He totally wasn't able to fly so I loved seeing him waddle around."
      }
    />,
    <BirdPreview
      imageSrc={Bird3}
      title={"House boy"}
      desription={
        "This is my dawg Aberdingus, he just stays in his cage and sleeps all day. Caught him up after a long nap."
      }
    />,
  ];

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {posts.map((post) => {
          return <div>{post}</div>;
        })}
      </main>
      <Footer />
    </>
  );
};

export default App;
