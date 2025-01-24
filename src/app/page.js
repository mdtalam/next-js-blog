import PostCard from "@/components/PostCard";

const Home = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json()


  return (
    <div className="container mx-auto my-14 px-4">
      <h1 className="text-4xl text-center font-bold mb-8">Home Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          data.map(post => (
            <PostCard key={post.id} post={post}></PostCard>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
