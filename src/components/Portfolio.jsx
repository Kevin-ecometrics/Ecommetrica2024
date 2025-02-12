import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import OldWebsiteModal from "./OldWebsiteModal";
import { getLangFromUrl, useTranslations } from "src/i18n/utils";

const Portfolio = ({ URL }) => {
  const lang = getLangFromUrl(URL);
  const t = useTranslations(lang);

  const proyectos = [
    {
      nombre: "Bitescreadoresdesonrisas.com",
      categoria: t("portfolio.category.bites"),
      img: "/projects/bitespage.webp",
      url: "https://bitescreadoresdesonrisas.com",
      description: t("portfolio.description.bites"),
      old: true,
      oldImage: "/projects/bites.webp",
      prioridad: true,
    },
    {
      nombre: "Reformadental.com",
      categoria: t("portfolio.category.reformadental"),
      img: "/projects/reformapage.webp",
      url: "https://reformadental.com",
      description: t("portfolio.description.reformadental"),
      old: true,
      oldImage: "/projects/reforma.webp",
    },
    {
      nombre: "dentalreforma",
      categoria: t("portfolio.category.dentalreforma"),
      img: "/projects/dentalpage.webp",
      url: "https://dentalreforma.com",
      description: t("portfolio.description.dentalreforma"),
      old: false,
      oldImage: "/old-dentalreforma.webp",
    },
    {
      nombre: "Mongeortopedia.com",
      categoria: t("portfolio.category.mongeortopedia"),
      img: "/projects/mongepage.webp",
      url: "https://mongeortopedia.com",
      description: t("portfolio.description.mongeortopedia"),
      old: true,
      oldImage: "/projects/monge.webp",
      prioridad: true,
    },
    {
      nombre: "Cesiaborjon.com",
      categoria: t("portfolio.category.cesiaborjon"),
      img: "/projects/cesiapage.png",
      url: "https://cesiaborjon.com",
      description: t("portfolio.description.cesiaborjon"),
      old: false,
      oldImage: "/old-cesiaborjon.webp",
      prioridad: true,
    },
    {
      nombre: "Doctorarturolopez.com",
      categoria: t("portfolio.category.doctorarturlopez"),
      img: "/projects/arturopage.webp",
      url: "https://doctorarturolopez.com",
      description: t("portfolio.description.doctorarturlopez"),
      old: false,
      oldImage: "/old-doctorarturlopez.webp",
      prioridad: true,
    },
    {
      nombre: "doctorapamelaperez.com",
      categoria: t("portfolio.category.doctorapamelaperez"),
      img: "/projects/pamelapage.webp",
      url: "https://doctorapamelaperez.com",
      description: t("portfolio.description.doctorapamelaperez"),
      old: false,
      oldImage: "/old-doctorapamelaperez.webp",
    },
    {
      nombre: "Carboneticsinc.com",
      categoria: t("portfolio.category.carboneticsinc"),
      img: "/projects/carboneticspage.webp",
      url: "https://carboneticsinc.com",
      description: t("portfolio.description.carboneticsinc"),
      old: true,
      oldImage: "/projects/carbonetics.png",
      prioridad: true,
    },
    {
      nombre: "Lacocina.mx",
      categoria: t("portfolio.category.lacocina"),
      img: "/projects/cocinamxpage.webp",
      url: "https://lacocina.mx",
      description: t("portfolio.category.lacocina"),

      old: false,
      oldImage: "/old-lacocina.webp",
    },
    {
      nombre: "Wislinfarm.com",
      categoria: t("portfolio.category.wislinfarm"),
      img: "/projects/wislinpage.webp",
      url: "https://wislinfarm.com",
      description: t("portfolio.description.wislinfarm"),

      old: true,
      oldImage: "/projects/wislin.webp",
    },
    {
      nombre: "Sylindustrial.com",
      categoria: t("portfolio.category.sylindustrial"),
      img: "/projects/sylindustrialpage.webp",
      url: "https://sylindustrial.com/",
      description: t("portfolio.description.sylindustrial"),

      old: false,
      oldImage: "/old-sylsuinistros.webp",
    },
    {
      nombre: "kamili.com",
      categoria: t("portfolio.category.kamili"),
      img: "/projects/kamilipage.webp",
      url: "https://kamili.com",
      description: t("portfolio.description.kamili"),

      old: false,
      oldImage: "/old-kamili.webp",
    },
    {
      nombre: "thecondorvision.com",
      categoria: t("portfolio.category.thecondorvision"),
      img: "/projects/condorpage.webp",
      url: "https://thecondorvision.com",
      description: t("portfolio.description.thecondorvision"),

      old: false,
      oldImage: "/old-thecondorvision.webp",
    },
    {
      nombre: "gpeconsultores.com.mx",
      categoria: t("portfolio.category.gpeconsultores"),
      img: "/projects/gpepage.webp",
      url: "https://gpeconsultores.com.mx",
      description: t("portfolio.description.gpeconsultores"),

      old: true,
      oldImage: "/projects/gpe.webp",
      prioridad: true,
    },
    {
      nombre: "syltalento.com",
      categoria: t("portfolio.category.syltalento"),
      img: "/projects/sylpage.webp",
      url: "https://syltalento.com",
      description: t("portfolio.description.syltalento"),

      old: false,
      oldImage: "/old-syltalento.webp",
    },
    {
      nombre: "e-commetrics.com",
      categoria: t("portfolio.category.ecommetrics"),
      img: "/projects/eommetrica.webp",
      url: "https://e-commetrics.com",
      description: t("portfolio.description.ecommetrics"),
      old: true,
      oldImage: "/projects/ecommetrics.png",
    },
    {
      nombre: "bordergrower.com",
      categoria: t("portfolio.category.bordergrower"),
      img: "/projects/borderpage.webp",
      url: "https://bordergrower.com",
      description: t("portfolio.description.bordergrower"),
      old: false,
      oldImage: "/old-bordergrower.webp",
    },
    {
      nombre: "Chik.mx",
      categoria: t("portfolio.category.chik"),
      img: "/projects/chikpage.webp",
      url: "https://chik.mx",
      description: t("portfolio.description.chik"),

      old: false,
      oldImage: "/old-chik.webp",
    },
    {
      nombre: "labodegasolar.com",
      categoria: t("portfolio.category.labodegasolar"),
      img: "/projects/bodegapage.webp",
      url: "https://labodegasolar.com",
      description: t("portfolio.description.labodegasolar"),
      old: false,
      oldImage: "/old-labodegasolar.webp",
    },
    {
      nombre: "ziggiz",
      categoria: t("portfolio.category.ziggiz"),
      img: "/projects/ziggizpage.webp",
      url: "https://ziggiz.world",
      description: t("portfolio.description.ziggiz"),

      old: false,
      oldImage: "/projects/ziggiz.png",
    },
    {
      nombre: "centraltoreo.com",
      categoria: t("portfolio.category.centraltoreo"),
      img: "/projects/centraltoreopage.webp",
      url: "https://centraltoreo.com",
      description: t("portfolio.description.centraltoreo"),

      old: true,
      oldImage: "/projects/central.png",
    },
    {
      nombre: "proyectotijuana-claudionaranjo.com",
      categoria: t("portfolio.category.proyectotijuana"),
      img: "/projects/proyectopage.webp",
      url: "https://proyectotijuana-claudionaranjo.com",
      description: t("portfolio.description.proyectotijuana"),
      old: false,
      oldImage: "/old-proyectotijuana-claudionaranjo.webp",
    },
  ];

  const lista = [
    t("portfolio.categories.all"),
    t("portfolio.categories.dentists"),
    t("portfolio.categories.doctors"),
    t("portfolio.categories.industry"),
    t("portfolio.categories.consulting"),
    t("portfolio.categories.trading"),
    t("portfolio.categories.others"),
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    t("portfolio.categories.all")
  );
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isOldWebsiteModalOpen, setIsOldWebsiteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filtrarProyectos = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const proyectosFiltrados =
    categoriaSeleccionada === t("portfolio.categories.all")
      ? proyectos
          .sort((a, b) => b.prioridad - a.prioridad)
          .sort((a, b) =>
            b.prioridad === a.prioridad
              ? b.prioridad - a.prioridad
              : b.prioridad
              ? 1
              : -1
          )
      : proyectos.filter(
          (proyecto) => proyecto.categoria === categoriaSeleccionada
        );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects =
    categoriaSeleccionada === t("portfolio.categories.all")
      ? proyectosFiltrados.slice(indexOfFirstProject, indexOfLastProject)
      : proyectosFiltrados;

  const handleOpenProjectModal = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  const handleOpenOldWebsiteModal = () => {
    setIsOldWebsiteModalOpen(true);
  };

  const handleCloseOldWebsiteModal = () => {
    setIsOldWebsiteModalOpen(false);
  };

  const paginate = (pageNumber, event) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: document.querySelector(".portfolio-section").offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="portfolio-section bg-gradient-to-l from-[#BD155C] to-[#1E171E] py-16 text-white md:px-0 px-8"
      id="portfolio"
    >
      <h1 className="text-center font-normal text-xl md:text-2xl">
        {t("portfolio.title")}
      </h1>
      <p className="text-3xl md:text-5xl font-bold text-center mb-16">
        {t("portfolio.subtitle")}
      </p>
      <div className="md:flex justify-center mb-8 hidden">
        <div className="flex space-x-4">
          {lista.map((item) => (
            <button
              key={item}
              onClick={() => filtrarProyectos(item)}
              className={`px-4 py-2 rounded-lg font-bold ${
                categoriaSeleccionada === item
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="md:hidden mb-8">
        <select
          onChange={(e) => filtrarProyectos(e.target.value)}
          className="px-4 py-2 rounded-lg font-bold bg-white text-black w-full"
          value={categoriaSeleccionada}
        >
          {lista.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-8">
        <AnimatePresence>
          {currentProjects.map((proyecto) => (
            <motion.div
              key={proyecto.nombre}
              className="relative bg-[#c2155C] rounded-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={proyecto.img}
                alt={proyecto.nombre}
                className="w-full h-full transition-transform duration-300 group-hover:scale-125"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleOpenProjectModal(proyecto)}
                  className="bg-[#861453] text-white px-4 py-2 rounded-lg font-bold"
                >
                  {t("portfolio.button")}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {categoriaSeleccionada === t("portfolio.categories.all") && (
        <div className="flex justify-center mt-8">
          {Array.from({
            length: Math.ceil(proyectosFiltrados.length / projectsPerPage),
          }).map((_, index) => (
            <button
              key={index + 1}
              onClick={(e) => paginate(index + 1, e)}
              className={`px-4 py-2 mx-1 rounded-lg font-bold ${
                currentPage === index + 1
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
      {selectedProject && (
        <ProjectModal
          isOpen={isProjectModalOpen}
          onClose={handleCloseProjectModal}
          project={selectedProject}
          onOpenOldWebsite={handleOpenOldWebsiteModal}
          URL={URL}
        />
      )}
      {selectedProject && (
        <OldWebsiteModal
          isOpen={isOldWebsiteModalOpen}
          onClose={handleCloseOldWebsiteModal}
          oldImage={selectedProject.oldImage}
          URL={URL}
        />
      )}
    </section>
  );
};

export default Portfolio;
