"use client";

import React from "react";
import { useAuthStore } from "@/lib/stores/useAuthStore";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function EditProfileModal({ open, onClose }: Props) {
  const { user, updateProfile, isLoading, error, clearError } = useAuthStore();

  const [name, setName] = React.useState(user?.name || "");
  const [bio, setBio] = React.useState(user?.bio || "");

  React.useEffect(() => {
    if (open) {
      setName(user?.name || "");
      setBio(user?.bio || "");
      clearError();
    }
  }, [open, user, clearError]);

  if (!open) return null;

  const onSave = async () => {
    try {
      await updateProfile({ name, bio });
      onClose();
    } catch {
      // store already sets error
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
      <div className="w-full max-w-md rounded-t-3xl bg-background p-5 shadow-2xl border border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-foreground text-lg font-bold">Edit Profile</h3>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-1">
              Name
            </label>
            <input
              className="w-full h-12 rounded-xl bg-muted/50 px-4 outline-none border border-transparent focus:border-primary/50"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-1">
              Bio
            </label>
            <textarea
              className="w-full min-h-[96px] rounded-xl bg-muted/50 px-4 py-3 outline-none border border-transparent focus:border-primary/50 resize-none"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="A short bio..."
            />
          </div>

          {error && <p className="text-sm font-medium text-red-500">{error}</p>}

          <Button
            className="w-full font-bold"
            onClick={onSave}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save changes"}
          </Button>
        </div>
      </div>
    </div>
  );
}
