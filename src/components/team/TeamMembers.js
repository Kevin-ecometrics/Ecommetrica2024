import proyectos from "@components/portfolioData";

const teamMembers = [
  {
    id: 1,
    image: "/team1.webp",
    name: "Kevin",
    fullName: "Kevin Ortega",
    role: "Full-Stack Developer",
    skills: "React, Node, Express",
    experience: "5 años de experiencia",  
    transition: "imagen1",
    education: "Lic. Tecnologías en Sistemas Inteligentes",
    contact: "664 642 9633",  
    proyecto: "E-commetrica, Developer Full-Stack.",
    proyecto2: "Cenyca Universidad, Desarrollador de plataforma para estudiantes, maestros y control escolar.",
    proyecto3: null,
    edu: "Lic. Tecnologías en Sistemas Inteligentes.",
    edu2: null,
    testimonio: "Kevin es un Developer excepcional. Su habilidad para estructurar proyectos de manera eficiente con herramientas innovadoras marcó una gran diferencia en nuestro proyecto.",
    testimonio2: "Trabajar con Kevin fue una experiencia increíble. Su dominio web nos permitió desarrollar una aplicación completamente funcional inclusive aun antes del tiempo de entrega. Siempre estuvo disponible para resolver dudas y aportó ideas innovadoras que mejoraron nuestro producto final.",
    description:
      " Kevin es versátil  para facilitar y agilizar procesos de  programación para que tu sitio web sea funcional y atractivo.",
  },
  {
    id: 2,
    image: "/team2.webp",
    name: "Karen",
    fullName: "Karen Valdez",
    role: "Editor & Copywriter",
    skills: "Editor, Copywriter, Content Creator",
    transition: "imagen2",
    experience: "5 años de experiencia",  
    education: "Lic. en Comunicación y Publicidad",
    contact: "664 642 9633",  
    proyecto8: "El muchacho alegre, Hostess",
    proyecto7: "HR Coffee & Deli, Barista.",
    proyecto6: "Tinta del sol, Barista.",
    proyecto5: "Websense MX, Copywriter.",
    proyecto4: "Imprex Digital, Asistente general.",
    proyecto3: "Distribuidora Landys, Ventas web.",
    proyecto2: "HERFAVE, Comunnity manager y ventas.",
    proyecto: "E-commetrica, Copywriter y editor de videos.",
    edu: "Lic. en Comunicación y Publicidad.",
    edu2: null,
    testimonio: "Su capacidad para transformar ideas en palabras que conectan con el público es impresionante. Trabajar con ella fue fundamental para darle vida a nuestro contenido y asegurarnos de que nuestra marca tuviera un impacto.",
    testimonio2: "Karen es una profesional con un gran ojo para los detalles. Siempre sabe cómo captar la esencia de lo que estamos comunicando y lo presenta de una manera única y efectiva.",
    description:
      " Karen es una creativa que elevar la voz de tu proyecto para atraer clientes y maximizar su crecimiento.",
  },
  {
    id: 3,
    image: "/team3.webp",
    name: "Yaz",
    fullName: "Yazmin Guardado",
    role: "Ux /Ui Designer",
    skills: "Ux / Ui, Branding, Publicidad",
    transition: "imagen3",
    experience: "14 años de experiencia",  
    education: "Lic. Diseño Grafico Digital y Marketing",
    contact: "664 642 9633",  
    proyecto: "E-commetrica, Diseñador Ux / Ui y branding.",
    proyecto2: "Academia Lean Sigma, Diseñador senior y community manager.",
    proyecto3: "Alternativa 19 del Sur, Diseñador senior y marketing.",
    proyecto4: "HighBits, Diseñador Jr.",
    edu: "Diseño Tradicional y Psicología del diseño.",
    edu2: "Diseño Grafico Digital y Marketing.",
    testimonio: "Trabajar con Yazmin fue un placer. Tiene una increíble capacidad para entender lo que necesita el usuario y traducirlo en diseños visuales que no solo son atractivos, sino también fáciles de usar. Su trabajo ha hecho que nuestra plataforma sea mucho más intuitiva y agradable para los usuarios.",
    testimonio2: "Yazmin tiene un don para el diseño. Su atención al detalle y su capacidad para transformar ideas en interfaces limpias y funcionales realmente marcan la diferencia. Siempre tiene en cuenta la experiencia del usuario, lo que hace que el producto final sea impecable.",
    description: "Yaz es una experta en experiencia de usuario con diseños creativos que logran atraer y cumplir las metas de tu negocio.",
  },
  {
    id: 4,
    image: "/team4.webp",
    name: "Juan",
    fullName: "Juan M. González",
    role: "CEO & Consultor",
    skills: "WebMaster, Project Manager, Ecommerce",
    transition: "imagen4",
    experience: "8 años de experiencia",
    education: "Mtr. Economía Aplicada",
    contact: "664 642 9633",  
    proyecto: "E-commetrica, Consultor de ecommerce y desarrollador web.",
    proyecto2: "Border Grower, Director de ecommerce y programador en R y Liquid.",
    proyecto3: "Digital Lab Agency, Dearrollador de ecommerce.",
    proyecto4: "Guarantee Solar, Especialista de mercadotecnia digital.",
    edu: "Lic. Negocios Internacionales.",
    edu2: "Mtr. Economía Aplicada.",
    testimonio: "Juan es un experto en ecommerce y desarrollo web, ha trabajado en proyectos de gran envergadura y ha logrado posicionar marcas en el mercado digital.",
    testimonio2: "Su experiencia en el desarrollo de ecommerce y su habilidad para posicionar marcas en el mercado digital lo hacen un experto en el área.",
    contact: "664 642 9633",  
    description:
      "Juan es experto en SEO, optimiza el posicionamiento y el cosistema digital para que tu negocio crezca.",
  },
];

// Función para filtrar propiedades nulas o vacías
const filterEmptyProperties = (member) => {
  return Object.fromEntries(
    Object.entries(member).filter(([_, value]) => value !== null && value !== "")
  );
};

// Filtrar propiedades nulas o vacías antes de renderizar
const filteredTeamMembers = teamMembers.map(filterEmptyProperties);


export default teamMembers;


