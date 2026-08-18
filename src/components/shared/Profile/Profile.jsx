"use client";

import React, { useEffect } from "react";
import { ArrowRightFromSquare, Gear } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";

const Profile = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending, refetch } = useSession();

  useEffect(() => {
    refetch();
  }, [pathname, refetch]);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully!");
      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Logout failed. Please try again.");
    }
  };

  if (isPending) {
    return (
      <div className="w-10 h-10 bg-gray-100 rounded-full animate-pulse" />
    );
  }

  if (!session || !session.user) {
    return null;
  }

  const name = session.user.name || "User";
  const email = session.user.email || "";
  const image =
    typeof session.user.image === "string" &&
    session.user.image.startsWith("http")
      ? session.user.image
      : null;

  const fallbackLetter = name.charAt(0).toUpperCase();

  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full outline-none">
        <Avatar className="w-10 h-10 cursor-pointer ring-2 ring-green-500/20">
          {image ? (
            <Image
              src={image}
              width={40}
              height={40}
              alt={name}
              className="object-cover w-10 h-10 rounded-full"
              unoptimized
            />
          ) : (
            <Avatar.Fallback className="font-semibold text-white bg-green-600">
              {fallbackLetter}
            </Avatar.Fallback>
          )}
        </Avatar>
      </Dropdown.Trigger>

      <Dropdown.Popover className="min-w-60">
        <div className="px-3 py-3">
          <div className="flex items-center gap-3">
            <Avatar
              size="sm"
              className="ring-2 ring-green-500/20"
            >
              {image ? (
                <Avatar.Image
                  src={image}
                  alt={name}
                />
              ) : (
                <Avatar.Fallback className="font-semibold text-white bg-green-600">
                  {fallbackLetter}
                </Avatar.Fallback>
              )}
            </Avatar>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">
                {name}
              </p>

              <p className="text-xs text-gray-500 truncate">
                {email}
              </p>
            </div>
          </div>
        </div>

        <Dropdown.Menu>
          <Dropdown.Item
            id="my-bookings"
            textValue="My Bookings"
          >
            <Link
              href="/my-bookings"
              className="block w-full"
            >
              <Label>My Bookings</Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            id="add-facilities"
            textValue="Add Facility"
          >
            <Link
              href="/add-facilities"
              className="block w-full"
            >
              <Label>Add Facility</Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            id="manage-facilities"
            textValue="Manage Facilities"
          >
            <Link
              href="/manage-facilities"
              className="flex items-center justify-between w-full"
            >
              <Label>Manage Facilities</Label>
              <Gear className="text-green-600 size-4" />
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            id="logout"
            textValue="Logout"
            variant="danger"
            onClick={handleSignOut}
          >
            <div className="flex items-center justify-between w-full">
              <Label>Log Out</Label>
              <ArrowRightFromSquare className="text-red-500 size-4" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default Profile;