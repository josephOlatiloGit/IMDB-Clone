import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
/**
 *We need to add the image remotePatterns to the nextjs config file as domain: image.tmdb.org. to avoid a system error for next. then you restart the server
 *
 */

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 ">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt={result.title || result.name}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-sm">{result.overview}</p>
          <h2 className="text-md font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
