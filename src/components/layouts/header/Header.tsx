"use client";
import { auth, signOutFunction } from "@/components/firebase/Firebase";
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/search";
import React from "react";
import { HeaderImage } from "./HeaderImage";
import { useRouter } from "next/navigation";
import { User } from "firebase/auth";
import { Button } from "@/components/ui";
import { Heart } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOutFunction();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header>
      <div className="flex items-center sm:justify-evenly justify-center bg-black w-full max-w-screen px-5 lg:px-0 p-2 z-30">
        <div>
          <HeaderImage />
        </div>

        <div className="bg-white rounded-md z-10 hidden sm:block">
          <SearchBar isMobile={false} />
        </div>
        <div></div>
        <div className="flex">
          {currentUser ? (
            <div className="text-white font-semibold rounded-md text-black gap-x-5">
              <span className="mr-[10px]">
                Hi, {currentUser.displayName || "User"}
              </span>
              <Button className="hover:bg-red-300" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="text-white font-semibold bg-white p-3 rounded-md text-black hover:bg-blue-100">
              <a href="/signin" className="text-black">
                Sign In
              </a>
            </div>
          )}
          <div className="hidden sm:block ">
            {currentUser ? (
              <Link href={"/favorite"}>
                <Heart className="text-white fill-white" size={30} />
              </Link>
            ) : (
              <Heart className="hidden" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
