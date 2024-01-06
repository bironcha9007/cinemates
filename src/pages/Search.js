import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { Link } from "react-router-dom";
import { Button } from "../components";

import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);
  useTitle(`Resultados busqueda : ${queryTerm}`);




  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0 ? `No se encontraron resultados '${queryTerm}'` : `Resultados de la Busqueda '${queryTerm}'`}</p>
      </section>
      <div className="flex justify-center my-4">
        <Link to="/">
          <Button>Back To Cinemate</Button>
        </Link>
      </div>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

    </main>
  )
}
