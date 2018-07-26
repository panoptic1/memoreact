import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => <h1 className="scoreboard jumbotron">{props.children}</h1>;

export default Scoreboard;