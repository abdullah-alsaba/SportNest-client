"use client";

import React from "react";
import { ArrowRightFromSquare, Gear } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Profile = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace("/login");
    } catch (error) {
      toast.error("Logout failed, Try again" );
    }
  };

  if (isPending) {
    return <div className="w-10 h-10 bg-gray-100 rounded-full animate-pulse" />;
  }

  
  if (!session?.user) {
    return null;
  }

  const { name, email, image } = session.user;

  const fallbackLetter = name?.charAt(0)?.toUpperCase() || "U";

  return (
    <Dropdown>

      <Dropdown.Trigger className="rounded-full">
        <Avatar className="transition-all cursor-pointer ring-2 ring-green-500/20 hover:ring-green-500/50">
          {image ? (
            <Image
              src={image}
              width={40}
              height={40}
              alt={name || "User"}
              className="object-cover w-full h-full rounded-full"
            />
          ) : (
            <Avatar.Fallback>{fallbackLetter}</Avatar.Fallback>
          )}
        </Avatar>
      </Dropdown.Trigger>

      <Dropdown.Popover>
     
        <div className="px-3 pt-3 pb-2">
          <div className="flex items-center gap-3">
            <Avatar size="sm" className="ring-2 ring-green-500/20">
              {image ? (
                <Avatar.Image alt={name || "User"} src={image} />
              ) : (
                <Avatar.Fallback delayMs={600}>
                  {fallbackLetter}
                </Avatar.Fallback>
              )}
            </Avatar>

            <div className="flex flex-col min-w-0 gap-1">
              <p className="text-sm font-semibold leading-5 text-gray-800 truncate">
                {name || "User"}
              </p>

              <p className="text-xs text-gray-500 truncate max-w-45">
                {email}
              </p>
            </div>
          </div>
        </div>

        <Dropdown.Menu>
         
          <Dropdown.Item id="my-bookings" textValue="My Bookings">
            <Link href="/my-bookings" className="block w-full">
              <Label>My Bookings</Label>
            </Link>
          </Dropdown.Item>

         
          <Dropdown.Item id="add-facilities" textValue="Add Facility">
            <Link href="/add-facilities" className="block w-full">
              <Label>Add Facility</Label>
            </Link>
          </Dropdown.Item>

        
          <Dropdown.Item id="manage-facilities" textValue="Manage Facilities">
            <Link
              href="/manage-facilities"
              className="flex items-center justify-between w-full gap-2"
            >
              <Label>Manage Facilities</Label>
              <Gear className="size-3.5 text-muted" />
            </Link>
          </Dropdown.Item>

        
          <Dropdown.Item
            id="logout"
            textValue="Logout"
            variant="danger"
            onClick={handleSignOut}
          >
            <div className="flex items-center justify-between w-full gap-2">
              <Label>Log Out</Label>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default Profile;
