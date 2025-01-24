import Link from "next/link";

const Details = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return (
    <div className="container mx-auto bg-gray-200 p-10 text-center my-14 max-w-lg">
      <p className="text-lg ">UserId: {data.userId}</p>
      <h1 className="text-3xl font-bold my-4 capitalize">{data.title}</h1>
      <p className="text-lg">{data.body}</p>
      <div className=" mt-4">
      <Link href="/" className="bg-teal-500 px-4 py-2 rounded text-white hover:bg-teal-600">
        Back To Home
      </Link>
      </div>
    </div>
  );
};

export default Details;
