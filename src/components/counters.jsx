import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  resetHandler = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
    console.log(this.state);
  };

  deleteHandler = (deleteId) => {
    console.log("Event Handler called", deleteId);
    const counters = this.state.counters.filter((a) => a.id !== deleteId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.resetHandler}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(
          (counter) => (
            console.log("counter", counter),
            (
              <Counter
                key={counter.id}
                onDelete={this.deleteHandler}
                onAdd={this.addHandler}
                count={counter.value}
                id={counter.id}
              />
            )
          )
        )}
      </div>
    );
  }
}

export default Counters;
