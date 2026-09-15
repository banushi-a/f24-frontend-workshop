import BirdPreview from "./components/BirdPreview";
import Bird1 from "./images/bird1.jpg";
import Header from "./components/Header";

const App = () => {
  /* NOTE:
      Most of the time, it's not the case that our applications will have
      a list of the data needed hardcoded in our app. We usually call an
      API which returns some JSON data that we can then parse and use in
      our apps.
  */
      const posts = [<BirdPreview title= "Some bird" description= "Some description" imageSrc={Bird1} />];
      const header = <Header title="🐣 Chirper" />;
      return (
        <>
          {header}
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {posts.map((post, index) => {
              return <div key={index}>{post}</div>;
            })}
          </main>
        </>
      );
};

export default App;
