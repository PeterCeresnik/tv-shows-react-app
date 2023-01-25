import { TenStarRating } from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";

export function TVShowDetail({tvShow}) {
    const rating = Math.round(tvShow.vote_average / 2 * 10) / 10;
    return <div>
        <div className={s.title}>{tvShow.name}</div>
        <div className={s.rating_container}>
            <TenStarRating rating={rating}/>
            <span className={s.rating}> {rating} / 5</span>
        </div>
        <div className={s.overview}>{tvShow.overview}</div>
    </div>
}