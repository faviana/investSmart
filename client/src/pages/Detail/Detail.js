import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

import API from "../../utils/API";

class Detail extends Component {
  state = {
    investor: {}
  };
  // When this component mounts, grab the investor with the _id of this.props.match.params.id
  // e.g. localhost:3000/investors/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getInvestor(this.props.match.params.id)
      .then(res => this.setState({ investor: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            
              <h1>
                {this.state.investor.name} by {this.state.investor.budget}
              </h1>
           
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>percentage</h1>
              <p>
                {this.state.investor.percentage}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Names</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
