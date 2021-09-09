// pure component
import React from "react";

class Title extends React.PureComponent {
    render() {
        return <h1 className="title">{this.props.title}</h1>
    }
}

export default Title;
