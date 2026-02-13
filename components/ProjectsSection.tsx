"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Retail EDI Integration",
      location: "Walmart & Target Network",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "ERP Automation Deployment",
      location: "SAP & Dynamics NAV",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "3PL Logistics Connectivity",
      location: "Warehouse & Carriers",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#2F5D63]">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14 text-white">

          <h2 className="text-3xl min-[1020px]:text-4xl font-bold mb-4">
            Our Best Integration Projects
          </h2>

          <p className="text-gray-200 max-w-[720px]">
            Delivering enterprise-grade EDI integrations, ERP automation,
            and logistics connectivity solutions across global supply
            chain networks.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="
          grid gap-8

          /* Mobile */
          grid-cols-1

          /* Tablet */
          min-[760px]:grid-cols-2

          /* Desktop */
          min-[1020px]:grid-cols-3
        "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
              relative
              rounded-2xl
              overflow-hidden
              shadow-lg
              group
              h-[320px]
              flex flex-col
            "
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Bottom Info Card */}
              <div className="relative mt-auto m-4 bg-white rounded-xl px-5 py-4 shadow-md z-10">
                <h3 className="font-semibold text-[#1B505B]">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                  <MapPin size={14} />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
