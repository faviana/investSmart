import React, {Component} from "react";
import { Route, Link, Switch } from "react-router-dom";
import API from "../../utils/API";
import {Col, Row, Container} from "../../components/Grid";
import {Input, FormBtn} from "../../components/Form";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DeleteBtn from "../../components/DeleteBtn";
import EditBtn from "../../components/EditBtn";
import InvestorForm from "../../components/InvestorForm";
import"./style.css";
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
    // pass to getInvestors the this.props.auth.userId so that it only gets the investors for the signed in user
    API
      .getInvestors(this.props.auth.userId)
      .then(res => this.setState({savedInvestors: res.data, name: "", budget: "", percentage: ""}))
      .catch(err => console.log(err));
  };

  deleteInvestor = id => {
    console.log("delete button clicked ", id);
    API
      .deleteInvestor(id)
      .then(res => this.loadInvestors())
      .catch(err => console.log(err));
  };

  saveInvestor = () => {
    const investor = {
      userNameId: this.props.auth.userId,
      name: this.state.name,
      budget: this.state.budget,
      percentage: this.state.percentage
    };
    console.log("investor:", investor);

    API
      .saveInvestor(investor)
      .then(res => this.loadInvestors())
      .catch(err => console.log(err));

  };

  // editInvestor(investorId){
  //   const listForUpdate = [...this.state.investors];
  //   const indexForUpdate = this.state.investors.findIndex((investor => {
  //     return investor.id === investorId;
  //   });

  //   listForUpdate[indexForUpdate].isDone = !listForUpdate[indexForUpdate].isDone;

  //   this.setState({
  //   investors: listForUpdate
  //   })
  // };

  handleInputChange = event => {
    console.log(event.target)
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
        <Row>
          <Col size="md-12">
            {/* ================================================================== */}
            {/*                               NAVBAR                               */}
            {/* ================================================================== */}
            <Navbar handleLogout={this.props.handleLogout} auth={this.state.auth}/>
          </Col>
        </Row>

        <Container>

          {/* ================================================================== */}
          {/*                     TITLE AND DISCRIPTION                          */}
          {/* ================================================================== */}
          <Row>
            <Col size="md-1"/>
              <Col size="md-10">
                <h1 className="titleRealEstate outset">Real Estate Investments
                </h1>
                  <br/>
              </Col>
            <Col size="md-1"/>
          </Row>

          {/* ================================================================== */}
          {/*                        CREATE INVESTORS                            */}
          {/* ================================================================== */}
          <Row>
            <Col size="md-2"/>
              <Col size="md-8">
                <form>
                  <h5>Enter the information of your client
                  </h5>
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
           
                  {/* ================================================================== */}
                  {/*                  INVESTORS FORM BUTTON                             */}
                  {/* ================================================================== */}
                  <FormBtn
                    disabled={!(this.state.name && this.state.budget && this.state.percentage)}
                    onClick={this.handleFormSubmit}>Submit
                  </FormBtn>
                </form>
              </Col>
            <Col size="md-2"/>
          </Row>

            {/* ================================================================== */}
            {/*                               TABLE                                */}
            {/* ================================================================== */}
            <Col size="md-6 sm-12">
              {this.state.savedInvestors.length? (
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
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
                  <tbody className="table-hover">{this.state.savedInvestors.map((investor, index) => (
                    <tr key={investor._id}>
                      <td><Link to={`/home/${investor.name}`}>{investor.name}</Link></td>
                      <td>{investor.budget}</td>
                      <td>{investor.percentage}</td>
                      <td><DeleteBtn onClick={() => this.deleteInvestor(investor._id)}/></td>
                      <td><EditBtn onClick={() => this.editInvestor(investor._id)}/></td>
                    </tr>
                  ))}
                  </tbody>
                </table>
                ) : (<h3>No Results to Display</h3>)}
            </Col>
         
          <Row>
            <Col size="xs-12">
              <Switch>
               <Route path="/home/:investorName" component={InvestorForm} />
               <Route path="/home/:investorName" component={InvestorForm} />
               <Route path="/home/:investorName" component={InvestorForm} />
               </Switch>
            </Col>
          </Row>
       
          {/* ================================================================== */}
          {/*                               FOOTER                               */}
          {/* ================================================================== */}
          <Footer/>

        </Container>
      </div>
    );
  }
}

export default Home;

