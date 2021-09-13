import React from "react";
import Button from "./Button";

function Search(props) {
    return (
        <div className="search">
            <input type="text" placeholder="What do you want to watch?"
                   value={props.value}
                   onChange={e => props.onChange(e.target.value)} />
            <Button label="Search" onClick={props.onSubmit} />
        </div>
    )
}

export default Search;
