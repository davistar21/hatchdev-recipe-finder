"use client";

import React, { useState } from "react";
import { Edit2, Trash2, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useInstructionStore } from "@/lib/stores/useInstructionStore";

export function InstructionEditor() {
  const { instruction, addInstruction, updateInstruction, deleteInstruction } =
    useInstructionStore();
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleSave = (id: string, text: string) => {
    if (text.trim()) {
      updateInstruction(id, text);
      setEditingId(null);
    }
  };

  const handleDelete = (id: string) => {
    deleteInstruction(id);
  };

  const handleAddStep = () => {
    addInstruction();
  };

  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-foreground tracking-tight">
          Instructions
        </h3>
      </div>
      {/* Steps List */}
      <div className="space-y-6 relative pl-4 border-l-2 border-border ml-3">
        {instruction.map((inst, index) => (
          <motion.div
            key={inst.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-6"
          >
            <div
              className={`absolute -left-[31px] top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-background ${
                editingId === inst.id
                  ? "bg-card border-2 border-primary text-foreground"
                  : "bg-primary text-black"
              }`}
            >
              {index + 1}
            </div>
            <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
              {editingId === inst.id ? (
                <div>
                  <textarea
                    className="w-full bg-transparent border-none p-0 text-sm text-foreground placeholder-muted-foreground focus:ring-0 resize-none focus:outline-none"
                    placeholder="Describe the step..."
                    rows={3}
                    defaultValue={inst.text}
                    onBlur={(e) => handleSave(inst.id, e.target.value)}
                    autoFocus
                  />
                </div>
              ) : (
                <>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {inst.text || "Describe the next step..."}
                  </p>
                  <div className="flex justify-end gap-2 mt-3 pt-3 border-t border-border/50">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-primary w-8 h-8"
                      onClick={() => handleEdit(inst.id)}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-red-500 hover:bg-red-50 w-8 h-8"
                      onClick={() => handleDelete(inst.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Add Step Button */}
      <div className="mt-6 ml-3 pl-6 relative">
        <Button
          variant="outline"
          className="w-full border-2 border-dashed border-border hover:border-primary text-muted-foreground hover:text-primary rounded-xl py-6 h-auto flex items-center justify-center gap-2 font-bold text-sm transition-all group bg-transparent"
          onClick={handleAddStep}
        >
          <PlusCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Add Next Step
        </Button>
      </div>
    </div>
  );
}
