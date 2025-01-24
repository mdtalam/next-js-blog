"use client";

import Link from "next/link";


const PostCard = ({post}) => {
    console.log(post)
    const {title,id} = post
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl flex flex-col">
      <div className="card-body flex-1">
        <h2 className="card-title">{title}</h2>
      </div>
      {/* Button positioned at the bottom of the card */}
      <div className="card-actions justify-center mt-auto">
        <Link href={`/details/${id}`} className="btn btn-primary mb-4">Details</Link>
      </div>
    </div>
    </>
  );
};

export default PostCard;
