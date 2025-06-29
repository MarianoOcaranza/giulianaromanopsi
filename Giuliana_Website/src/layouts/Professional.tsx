import { Calendar, GraduationCap, BookOpen, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Professional: React.FC = ()=> {
    const recorrido = [
    {
      fecha: "2019 - 2024",
      icono: <GraduationCap className="text-violet-700 w-5 h-5" />,
      titulo: "Licenciatura en Psicología",
      descripcion: "Universidad Abierta Interamericana (UAI). Promedio final 9.0",
    },
    {
      fecha: "2024",
      icono: <BookOpen className="text-violet-700 w-5 h-5" />,
      titulo: "Diplomatura en Terapia Cognitivo-Conductual",
      descripcion: "Instituto Latinoamericano de Estudios de Posgrado",
    },
    {
      fecha: "2024",
      icono: <BookOpen className="text-violet-700 w-5 h-5" />,
      titulo: "Formación en Terapia Dialéctico Conductual (DBT)",
      descripcion: "Fundación Centro Argentino de Terapias Contextuales",
    },
    {
      fecha: "2025",
      icono: <BookOpen className="text-violet-700 w-5 h-5" />,
      titulo: "Entrenamiento en Habilidades DBT",
      descripcion: "Fundación Foro",
    },
    {
      fecha: "2025",
      icono: <BookOpen className="text-violet-700 w-5 h-5" />,
      titulo: "Formación en Terapia de Aceptación y Compromiso",
      descripcion: "Fundación Centro Argentino de Terapias Contextuales",
    },
    {
      fecha: "Enero-Septiembre 2024",
      icono: <Briefcase className="text-violet-700 w-5 h-5" />,
      titulo: "Elección de Vida",
      descripcion: "Terapia individual en comunidad terapéutica para adolescentes, adultos y adultos mayores en consumo problemático de sustancias.",
    },
    {
      fecha: "Septiembre 2024-Julio 2025",
      icono: <Briefcase className="text-violet-700 w-5 h-5" />,
      titulo: "CISAM: Centro Interdisciplinario de Salud Mental",
      descripcion: "",
    },
    {
      fecha: "Noviembre 2024-Actualidad",
      icono: <Briefcase className="text-violet-700 w-5 h-5" />,
      titulo: "Colores Pontevedra",
      descripcion: "",
    },
    {
      fecha: "Septiembre 2024-Actualidad",
      icono: <Briefcase className="text-violet-700 w-5 h-5" />,
      titulo: "Consultorio Virtual",
      descripcion: "",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-violet-100 rounded-2xl mt-5 mb-5 shadow-md p-8"
    >
      <h3 className="text-3xl font-semibold text-violet-800 mb-6 flex items-center gap-2">
        <Briefcase className="text-violet-700 w-6 h-6" />
        Recorrido Profesional
      </h3>

      <div className="relative border-l-2 border-violet-300 ml-4 space-y-6">
        {recorrido.map((item, index) => (
          <div key={index} className="ml-4">
            <div className="flex items-center gap-2 mb-1">
              {item.icono}
              <h4 className="text-xl font-semibold text-violet-800">{item.titulo}</h4>
            </div>
            <div className="flex items-center text-sm text-violet-600 mb-2">
              <Calendar className="w-4 h-4 mr-1" />
              {item.fecha}
            </div>
            <p className="text-gray-700 leading-relaxed">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Professional;