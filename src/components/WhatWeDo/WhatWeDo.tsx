import React from "react";

const WhatWeDo = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-yellow-500 text-center pb-5">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="space-y-2 text-gray-300">
            <h3 className="text-2xl py-5 text-yellow-500">Strategy.</h3>
            <p className="hover:underline">Analytics and Research</p>
            <p className="hover:underline">Interactive Workshops</p>
            <p className="hover:underline">brand Strategy</p>
            <p className="hover:underline">Content Strategy</p>
            <p className="hover:underline">Digital Strategy</p>
            <p className="hover:underline">Conversation Rate Optimization</p>
          </div>
          <div className="space-y-2 text-gray-300">
            <h3 className="text-2xl py-5 text-yellow-500">Design.</h3>
            <p className="hover:underline">Creative Direction</p>
            <p className="hover:underline">Brand Guides</p>
            <p className="hover:underline">Prototypes</p>
            <p className="hover:underline">UI/UX & Web Design</p>
            <p className="hover:underline">Visual Asset Creation</p>
            <p className="hover:underline">Motion Design</p>
          </div>
          <div className="space-y-2 text-gray-300">
            <h3 className="text-2xl py-5 text-yellow-500">Development.</h3>
            <p className="hover:underline">System Architecture Design</p>
            <p className="hover:underline">Full-Stack Development</p>
            <p className="hover:underline">3rd Party Integration</p>
            <p className="hover:underline">Performance Optimization</p>
            <p className="hover:underline">WordPress Development</p>
            <p className="hover:underline">Shopify Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
