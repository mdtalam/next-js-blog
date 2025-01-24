"use client";
import useUser from "../hooks/useUser";

const UserProfile = () => {
  const { user } = useUser();

  return (
    <div className="container mx-auto">
      <div className="text-center my-14">
        <h1 className="text-5xl">Welcome to your profile!</h1>
        <p className="text-3xl my-10">
          {user
            ? `Hello, ${user.given_name || "User"}!`
            : "No user data available."}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
