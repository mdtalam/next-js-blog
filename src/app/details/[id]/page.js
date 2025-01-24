
const Details = async({params}) => {
    const { id } = params
    console.log(id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json()
  console.log(data)
  return (
    <div className="container mx-auto bg-gray-200 p-10 text-center my-14 max-w-lg">
        <p className="text-lg ">
            UserId: {data.userId}
        </p>
        <h1 className="text-3xl font-bold my-4 capitalize">
            {data.title}
        </h1>
        <p className="text-lg">
            {data.body}
        </p>
    </div>
  )
}

export default Details