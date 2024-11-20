import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import OldWebsiteModal from "./OldWebsiteModal";
import proyectos from "@components/portfolioData";
const Portfolio = () => {
  const lista = [
    "Todos",
    "Dentistas",
    "Médicos",
    "Industria",
    "Consultorías",
    "Comercializadoras",
    "Otros",
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
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
    categoriaSeleccionada === "Todos"
      ? proyectos
      : proyectos.filter(
          (proyecto) => proyecto.categoria === categoriaSeleccionada
        );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects =
    categoriaSeleccionada === "Todos"
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
    <section className="portfolio-section bg-gradient-to-l from-[#BD155C] to-[#1E171E] py-16 text-white">
      <h1 className="text-center font-normal text-xl md:text-2xl">
        Portafolio
      </h1>
      <p className="text-3xl md:text-5xl font-bold text-center mb-16">
        Dale un Vistazo a Nuestro Trabajo
      </p>
      <div className="flex justify-center mb-8">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
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
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-125"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleOpenProjectModal(proyecto)}
                  className="bg-[#861453] text-white px-4 py-2 rounded-lg font-bold"
                >
                  Ver Proyecto
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {categoriaSeleccionada === "Todos" && (
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
        />
      )}
      {selectedProject && (
        <OldWebsiteModal
          isOpen={isOldWebsiteModalOpen}
          onClose={handleCloseOldWebsiteModal}
          oldImage={selectedProject.oldImage}
        />
      )}
    </section>
  );
};

export default Portfolio;
