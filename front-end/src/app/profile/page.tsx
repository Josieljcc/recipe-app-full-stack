"use client";
import React, { useEffect, useState } from "react";
import { IUser } from "../interfaces";
import Footer from "../components/Footer/Footer";

function Profile() {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      return;
    }
    setUser(JSON.parse(user));
  }, []);
  if (!user) {
    return null;
  }
  return (
    <div className="p-10 text-zinc-300">
      <h1 className="text-3xl">Profile</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Footer />
    </div>
  );
}

export default Profile;
