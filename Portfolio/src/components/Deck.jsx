import React, { Component } from "react";
import Card from "./Card";

class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      numberOfCards: 2,
    };

    // Initialize the refs
    this.view_port = React.createRef();
    this.touch_area = React.createRef();
    this.images = React.createRef();
  }

  componentDidMount() {
    const new_cards = [];

    for (let i = 0; i < this.state.numberOfCards; i++) {
      new_cards.push(<Card picsum={`https://picsum.photos/600/${350 + i}`} />);
    }

    this.setState({ cards: new_cards });
  }

  order_cards = () => {
    const cards_width = parseFloat(styles.view_port.width);
    const middle_card_by_index = Math.floor(this.state.numberOfCards / 2);

    let counter_for_right = 1;
    let counter_for_left = middle_card_by_index;

    for (let i = 0; i < this.images.current.children.length; i++) {
      this.images.current.children[i].style.transitionDuration = "0.0s";

      if (i > middle_card_by_index) {
        // Add your logic here
      } else if (i < middle_card_by_index) {
        // Add your logic here
      } else {
        // Add your logic here
      }
    }
  };

  render() {
    return (
      <>
        <button id="prev">Prev</button>
        <button id="next">Next</button>
        <div ref={this.touch_area} style={styles.touch_area} className="touch_area"></div>
        <div ref={this.view_port} style={styles.view_port} className="view_port">
          <div ref={this.images} style={styles.images_container} className="images container">
            {this.state.cards}
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  view_port: {
    margin: 0,
    padding: 0,
    width: "500px",
    height: "400px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  images_container: {
    margin: 0,
    padding: 0,
    width: "inherit",
    height: "inherit",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  touch_area: {
    margin: 0,
    padding: 0,
    width: "100vw",
    height: "400px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 0, 0, 0.2)",
    zIndex: 9999,
  },
};

export default Deck;
