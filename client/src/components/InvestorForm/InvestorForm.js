import React, {Component} from "react";
import API from "../../utils/API";
import './style.css';
import { FormBtn} from "../../components/Form";

class InvestorForm extends Component {
    state = {
        rent: "",
        hoa: "",
        propertyTax: "",
        miscellaneous: ""
    };



    handlePropertiesSubmit = event => {
        event.preventDefault();
        if (this.state.rent) {
          this.saveProperties()
        }
      };

      saveProperties = (PropertiesData) => {
        const properties = {
          rent: this.state.rent,
          hoa: this.state.hoa,
          propertyTax: this.state.propertyTax,
          miscellaneous: this.state.miscellaneous
        };
        API
          .saveProperties(properties)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      };    

      handleInputChange = event => {
        console.log(event.target)
        const {name, value} = event.target;
    
        this.setState({[name]: value});
      };

render(){

    return(
        <form className="InvestorForm">
        <div className="row">
            <div>
			    {/* <p>{this.Investor.name}</p> */}
               
		    </div>
        </div>

        <div className="row">
            <label className="hoa col-sm-2 col-form-label">Rent:</label>
                <div className="col-sm-10">
                    <input className="hoa-input" type="number" name="rent" onChange = {this.handleInputChange} value = {this.state.rent} />
             </div>
         </div>

         <br/>

         <div className="row">
            <label className="hoa col-sm-2 col-form-label">HOA:</label>
                <div className="col-sm-10">
                    <input className="hoa-input" type="number" name="hoa" onChange = {this.handleInputChange} value = {this.state.hoa} />
             </div>
         </div>
         <br/>
         <div className="row">
         <label className="hoa col-sm-2 col-form-label">Property Tax:</label>
             <div className="col-sm-10">
                 <input className="propertyTax-input" type="number" name="propertyTax" onChange = {this.handleInputChange} value = {this.state.propertyTax} />
             </div>
         </div>
         <br/>
         <div className="row">
         <label className="hoa col-sm-2 col-form-label">Miscellaneous</label>
             <div className="col-sm-10">
                 <input className="miscellaneous-input" type="number" name="miscellaneous" onChange = {this.handleInputChange} value = {this.state.miscellaneous} />
             </div>
         </div>
         <br/>

         <FormBtn name="submitProperties" onClick = {this.handlePropertiesSubmit}>
         Submit
         </FormBtn>


     </form>
    );
}
}

export default InvestorForm;