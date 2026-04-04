import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Efe Constructora — Arquitectura e Ingenieria",
    short_name: "Efe Constructora",
    description:
      "Construccion desde cero, reformas, diseño de interiores y obras llave en mano en Asuncion, Paraguay.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f0eb",
    theme_color: "#1a1a1a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
