import React from "react";
import classNames from "classnames";

function GenreToggle(props) {
    const genres = ['all', 'documentary', 'comedy', 'horror', 'crime'];

    return (
        <ul className="genre-list">
            { genres.map((genre, i) => {
                    const className = classNames({ 'selected': genre === props.genreSelected });
                    return (
                        <li key={ i } className={ className } onClick={ () => props.onSelect(genre) }>{ genre }</li>
                    )
                }
            ) }
        </ul>
    )
}

export default GenreToggle;
