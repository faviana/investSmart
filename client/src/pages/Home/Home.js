import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Nav from "../../components/Navbar"
import Footer from "../../components/Footer"


class Home extends Component {
  state = {
    investors: [],
    name: "",
    budget: "",
    percentage: ""
  };

  componentDidMount() {
    this.loadInvestors();
  }

  loadInvestors = () => {
    API.getInvestors()
    .then(res => this.setState({
      savedInvestors: res.data, name: "", budget: "", percentage: "" }))
    .catch(err => console.log(err));
  };

  deleteInvestor = id => {
    API.deleteInvestor(id)
      .then(res => this.Investors())
      .catch(err => console.log(err));
  };

  saveInvestor = (investorData) => {
    const investor = {
      name: investorData.headline.main,
      budget: investorData.headline.main,
      percentage: investorData.headline.main    };
    API.saveInvestor(investor)
      .then(res => this.loadInvestors())
      .catch(err => console.log(err));

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.budget&&this.state.percentage) {
      API.saveInvestor({
        name: this.state.name,
        budget: this.state.budget,
        percentage: this.state.percentage
      })
        .then(res => this.loadInvestors())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Nav handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          <Row>
            <Col size="md-12">
              <Container>
                <Row>
                  <Col size="md-12">

                  <h1>Real Estate Investments</h1>
                  <h5>Enter the information of your client in the following form</h5>
                                  
                    <form>
                      <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="Name (required)"/>
                      <Input
                        value={this.state.budget}
                        onChange={this.handleInputChange}
                        name="budget"
                        placeholder="Budget (required)"/>
                      <Input
                        value={this.state.percentage}
                        onChange={this.handleInputChange}
                        name="percentage"
                        placeholder="percentage (required)"/>
              
                      <FormBtn
                        disabled={!(this.state.name && this.state.budget && this.state.percentage)}
                        onClick={this.handleFormSubmit}>Submit
                      </FormBtn>
                    </form>
                  </Col>
                </Row>
              </Container>
            </Col>
          
            <Col size="md-6 sm-12">
              <h1>Investors</h1>
                {this.state.investors.length ? (
                  <List>
                    {this.state.investors.map((investor, index) => (
                      <ListItem key={index}>
                        <Link to={"/investors/" + investor._id}>
                          <strong> 
                            <a>{investor.name}</a>
                          </strong>
                        </Link>
                      </ListItem>
                    ))}
                   </List>
                  ) : (
                  <h3>No Results to Display</h3>
                )}
              <Footer />
          </Col>
        </Row>
      </Container>
      
    );
  }
}

export default Home;
