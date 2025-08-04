"use client";

import VignetteComponent from "../../vignette/VignetteComponent";

export default function VignettePage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="transform origin-center">
        <VignetteComponent />
      </div>
    </div>
  );
}
