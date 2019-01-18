import React, { Component } from "react";
import HintContent from "../components/hint";

import "../format.css";
import {
  Hint,
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  LineSeries,
  ChartLabel,
  HorizontalBarSeries
} from "react-vis";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this._rememberValue = this._rememberValue.bind(this);
    this._forgetValue = this._forgetValue.bind(this);
  }

  _rememberValue(value) {
    this.setState({ value });
  }

  _forgetValue() {
    this.setState({
      value: null
    });
  }

  getGraphData = field => {
    // console.log("query: "+field);
    var responseList = new Map();
    this.props.data.forEach(dat => {
      // console.log("dat.[query]: "+dat.[query]);
      if (responseList.get(dat[field])) {
        responseList[dat[field]] = responseList[dat[field]] + 1;
      } else {
        responseList.set(dat[field], 1);
      }
    });
    var result = [];
    responseList.forEach(function(value, key) {
      result.push({ y: key, x: value });
    });
    // this.setState({graphData: result});
    return result;
  };

  render() {
    const { value } = this.state;
    var field = this.props.field;
    return (
      <div>
        <div id = "graph-special" className="panel-heading">
          <h5 className="panel-title">{field}</h5>
        </div>
        <XYPlot
          yType={"ordinal"}
          // yDistance={100}
          width={500}
          height={300}
          marginLeft={100}
          style={{ width: "95%",
            }}
        >
          <HorizontalBarSeries
            data={this.getGraphData(field)}
            color={"grey"}
            onValueMouseOver={this._rememberValue}
            // onValueMouseOver = {d=>{console.log(d)}}
            onValueMouseOut={this._forgetValue}
            opacity={0.7}
          />
          <XAxis />
          <YAxis />
          <ChartLabel
            text={this.props.field}
            className="alt-x-label"
            // includeMargin={false}
            xPercent={0.025}
            yPercent={1.01}
          />
          {value ? (
            <Hint value={value}>
              {/* <HintContent label = {this.props.field} value={value} /> */}
            </Hint>
          ) : null}
        </XYPlot>
      </div>
    );
  }
}

export default Chart;
