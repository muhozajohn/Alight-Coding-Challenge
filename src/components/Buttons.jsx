import React from "react";

const Buttons = () => {
  return (
    <div className="flex items-center gap-3">
      <button className="py-2 text-gray-400 border border-transparent px-4 text-sm font-medium rounded-md bg-primary hover:border hover:border-slate-500">
        Google Search
      </button>
      <button className="py-2 text-gray-400 border border-transparent px-4 text-sm font-medium rounded-md bg-primary hover:border hover:border-slate-500">
        I'm Feeling Lucky
      </button>
    </div>
  );
};

export default Buttons;
