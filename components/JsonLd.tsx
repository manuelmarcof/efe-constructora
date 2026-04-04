export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://efeconstructora.com.py/#organization",
        name: "Efe Constructora",
        url: "https://efeconstructora.com.py",
        logo: {
          "@type": "ImageObject",
          url: "https://efeconstructora.com.py/images/mockup-web.png",
        },
        description:
          "Empresa de arquitectura e ingenieria en Asuncion, Paraguay. Construccion desde cero, reformas, diseño de interiores y obras llave en mano con atencion al detalle y rapidez.",
        email: "info@efeconstructora.com.py",
        telephone: "+595981000000",
        foundingLocation: {
          "@type": "Place",
          name: "Asuncion, Paraguay",
        },
        sameAs: [],
        knowsAbout: [
          "Construccion desde cero",
          "Reformas de viviendas",
          "Diseño de interiores",
          "Obra llave en mano",
          "Construccion comercial",
          "Construccion residencial",
          "Diseño arquitectonico",
          "Tecnologia BIM",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://efeconstructora.com.py/#localbusiness",
        name: "Efe Constructora",
        image: "https://efeconstructora.com.py/images/oficina-efe.png",
        url: "https://efeconstructora.com.py",
        telephone: "+595981000000",
        email: "info@efeconstructora.com.py",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Barrio Jara",
          addressLocality: "Asuncion",
          addressRegion: "Asuncion",
          addressCountry: "PY",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -25.2637,
          longitude: -57.5759,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "07:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "07:00",
            closes: "12:00",
          },
        ],
        priceRange: "$$",
        areaServed: [
          {
            "@type": "City",
            name: "Asuncion",
          },
          {
            "@type": "AdministrativeArea",
            name: "Gran Asuncion",
          },
          {
            "@type": "AdministrativeArea",
            name: "Departamento de Cordillera",
          },
          {
            "@type": "Country",
            name: "Paraguay",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Arquitectura e Ingenieria",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Construccion desde Cero",
                description:
                  "Construccion de viviendas y edificios comerciales desde cero con diseño integral y atencion al detalle.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Reformas de Viviendas",
                description:
                  "Reforma integral de viviendas — transformacion de espacios segregados en hogares funcionales con iluminacion natural y ventilacion.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diseño de Interiores",
                description:
                  "Diseño de interiores funcional y estetico que conecta con las personas y su forma de habitar.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Obra Llave en Mano",
                description:
                  "Gestion integral desde la seleccion del terreno hasta la entrega final. Un unico punto de responsabilidad.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Construccion Comercial",
                description:
                  "Supermercados, oficinas y locales comerciales ejecutados con rapidez y calidad.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
