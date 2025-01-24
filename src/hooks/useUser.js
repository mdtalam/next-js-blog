"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const useUser = () => {
  const { user, getUser } = useKindeBrowserClient();
  const alsoUser = getUser();
  
  return { user, alsoUser };
};

export default useUser;
