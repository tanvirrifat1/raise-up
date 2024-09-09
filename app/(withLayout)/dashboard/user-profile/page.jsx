"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UserProfile from "../../../../components/ui/user-profile/userProfile";

const UserProfilepage = () => {
  const { data } = useSession();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const id = data?.user?.bizid;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`/api/user/${id}`);

        if (!res.ok) {
          throw new Error(`An error occurred: ${res.status}`);
        }

        const userData = await res.json();

        setUserData(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // if (id) {
    //   fetchUserData();
    // }
    fetchUserData();
  }, [data, id]);

  if (loading) return <div>Loading...</div>;

  return <UserProfile singleUser={userData} />;
};

export default UserProfilepage;
