"use client";

import React, { useState } from "react";
import { Spinner } from "../../components";

export default function IconsPreviewPage() {
  const [size, setSize] = useState<number>(32);
  const [color, setColor] = useState<string>("#262626");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Ophelia Icons Preview</h1>
      
      <div className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Size: {size}px</label>
          <input
            type="range"
            min="16"
            max="128"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-20 h-10 border rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Spinner</h3>
          <div className="flex justify-center items-center h-32 bg-gray-100 rounded">
            <Spinner size={size} color={color} />
          </div>
        </div>
      </div>
    </div>
  );
}