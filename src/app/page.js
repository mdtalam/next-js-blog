import PostCard from "@/components/PostCard";

const Home = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json()

  console.log(data)

  return (
    <div className="container mx-auto my-14">
      <h1 className="text-4xl text-center font-bold">Home Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
        {
          data.map(post => <PostCard key={post.id} post={post}></PostCard>)
        }
      </div>
    </div>
  );
};

export default Home;
