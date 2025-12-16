"use client";

import React from "react";
import { CreateHeader } from "@/components/create/CreateHeader";
import { ImageUploader } from "@/components/create/ImageUploader";
import { BasicInfo } from "@/components/create/BasicInfo";
import { MetadataSelector } from "@/components/create/MetadataSelector";
import { IngredientEditor } from "@/components/create/IngredientEditor";
import { InstructionEditor } from "@/components/create/InstructionEditor";

export default function CreateRecipePage() {
  return (
    <div className="bg-background min-h-screen flex justify-center font-display">
      <div className="w-full max-w-md bg-background min-h-screen flex flex-col shadow-2xl relative">
        <CreateHeader />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-10">
          <ImageUploader />
          <BasicInfo />
          <div className="h-6"></div>
          <MetadataSelector />
          <div className="h-1 w-full bg-muted/50 my-8"></div>
          <IngredientEditor />
          <div className="h-8"></div>
          <InstructionEditor />
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
}
