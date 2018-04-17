import React, {Component} from "react";
import API from "../../utils/API";
import {Link} from "react-router-dom";
import {Col, Row, Container} from "../../components/Grid";
import {List, ListItem} from "../../components/List";
import {Input, FormBtn, TextArea} from "../../components/Form";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DeleteBtn from "../../components/DeleteBtn";
import axios from 'axios';
import App from "../../App.js"
import {Table,TableCol,TableRow} from "../../components/Table"

class Home extends Component {
  state = {
    savedInvestors: [],
    name: "",
    budget: "",
    percentage: ""
  };

  componentDidMount() {
    this.loadInvestors();
  }

  loadInvestors = () => {
    API
      .getInvestors()
      .then(res => this.setState({savedInvestors: res.data, name: "", budget: "", percentage: ""}))
      .catch(err => console.log(err));
  };

  deleteInvestor = id => {
    API
      .deleteInvestor(id)
      .then(res => this.loadInvestors())
      .catch(err => console.log(err));
  };

  saveInvestor = (investorData) => {
    const investor = {
      name: this.state.name,
      budget: this.state.budget,
      percentage: this.state.percentage
    };
    API
      .saveInvestor(investor)
      .then(res => this.loadInvestors())
      .catch(err => console.log(err));

  };

  handleInputChange = event => {
    const {name, value} = event.target;

    this.setState({[name]: value});
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.budget && this.state.percentage) {
      this.saveInvestor()
    }
  };

  render() {

    return (

      <div>
        <Navbar handleLogout={this.props.handleLogout} auth={this.state.auth}/>
        <Container>
          {/* <Nav handleLogout = {this.handleLogout} auth = { this.state.auth }/> */}

          <Row>
            <Col size="md-12">
              <Container>
                <Row>
                  <Col size="md-12">

                    <br/>

                    <h1 className="titleRealEstate outset">Real Estate Investments</h1>
                    <br/>
                    <h5>Enter the information of your client</h5>

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
                        placeholder="percentage of profit (required)"/>

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
              {this.state.savedInvestors.length? (
                <Table>
                  {this.state.savedInvestors.map((investor, index) => (
                        <TableRow key={index}>
                          {/* <Link to={"/"}> */}
                                <table className="table">
                                  <thead className="thead-dark">
                                    <tr>
                                      <th scope="col">
                                        <h3>Investor</h3>
                                      </th>
                                      <th scope="col">
                                        Name
                                      </th>
                                      <th scope="col">
                                        Budget
                                      </th>
                                      <th scope="col">
                                        Percentage
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="table-hover">
                                    <tr>
                                      <th scope="row"></th>
                                      <td value={this.state.name}/>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>

                                <DeleteBtn onClick={() => this.deleteInvestor(investor._id)}/>
                                <br/>

                      

                         
                          {/* </Link> */}

                        </TableRow>

                      ))}
                  </Table>

                )
                : (
                  <h3>No Results to Display</h3>
                )}

            </Col>
          </Row>
          <Footer/>
        </Container>
      </div>

    );
  }
}

export default Home;