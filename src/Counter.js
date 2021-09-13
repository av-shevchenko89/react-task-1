import React from "react";

class Counter extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = { count: 5 };

        this.changeCounter = this.changeCounter.bind(this);
    }

    changeCounter(increase) {
        let {count} = this.state;
        count = increase ? count + 1 : count - 1;
        if (count < 0) count = 0;

        this.setState({ count });
    }

    render() {
        return (
            <div className="counter">
                <button onClick={ () => this.changeCounter(false) }>-</button>
                <p>{ this.state.count }</p>
                <button onClick={ () => this.changeCounter(true) }>+</button>
            </div>
        )
    }
}

export default Counter;
