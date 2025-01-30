import { useParams } from "react-router-dom";
import PerfumeCard from "../components/PerfumeCard";
import perfumes from "../perfumes";

const PerfumeList = () => {
  const { categoria } = useParams();

  const perfumesFiltrados = categoria
    ? perfumes.filter((perfume) => perfume.categoria === categoria)
    : perfumes;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {perfumesFiltrados.length === 0 ? (
        <p>No hay perfumes en esta categoría.</p>
      ) : (
        perfumesFiltrados.map((perfume) => (
          <PerfumeCard key={perfume.id} perfume={perfume} />
        ))
      )}
    </div>
  );
};

export default PerfumeList;