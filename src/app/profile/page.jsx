import UserProfile from "@/components/UserProfile";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation"; // Import the redirect function

const Profile = async () => {
  const { isAuthenticated } = await getKindeServerSession();

  if (!(await isAuthenticated())) {
    // Redirect to the login page if not authenticated
    redirect("/api/auth/login");
  }

  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default Profile;
