import React, { Component } from 'react';
import {Col,Row,InputGroup,FormControl} from 'react-bootstrap';
import './App.css';


class CardInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companyName :'XXX XXX',
            cardNumberTag :'****************',
            cardSecretPass :'****',
            month: 'xx',
            day: 'xx',
            cardHolder :'XXXX'
         }
    }

    companyNameChange(n) {
      this.setState({
        companyName: n.target.value
      });
    }

    cardNumberTagChange(s) {
      this.setState({
        cardNumberTag: s.target.value
      });
    }

    monthChange(h) {
      this.setState({
        month: h.target.value
      });
    }

    dayChange(d) {
      this.setState({
        day: d.target.value
      });
    }

    render() { 

      // var a = "123456789"
      // var abc = a.match(/\d{4}/g).join(" ") 
      // console.log(abc)

        return (
          <div>
      <div className="card">
        <div className="elements" >
          <h1 className="card-company-name">{this.state.companyName}</h1>
          <img src="https://img.icons8.com/plasticine/100/000000/sim-card-chip.png" className="chip" alt="chip"/>,
          <h4 className="number-tag"> {this.state.cardNumberTag.slice(0,4)+ ' ' +this.state.cardNumberTag.slice(4,8)+ ' ' +this.state.cardNumberTag.slice(8,12)+ ' ' + this.state.cardNumberTag.slice(12,16)}</h4>
        <div className="data">
          <h4 className="card-secret-pass">{this.state.cardSecretPass}</h4>
          <h3 className ="card-valid-thru"><span>Valid<br/>thru</span> {this.state.month} / {this.state.day}</h3> 
          <img src="https://krebsonsecurity.com/wp-content/uploads/2012/03/mcvisa.png" className="vip" alt="mastercardvisa"/>
        </div>
        </div> 
       <h2 className="card-holder">{this.state.cardHolder}</h2>
      </div>

      <div className="input">
           <Col className="colm">
            <div>
              <Row >
                <h5>Company Name </h5>
               <input  type="text" maxLength="10" onChange={(this.companyNameChange.bind(this))} />
            </Row> 
            </div>
           <div>
            <Row >
              <h5>Number Tag</h5>
              <input  type="text" maxLength="16" onChange={(this.cardNumberTagChange.bind(this))}/>
            </Row>
          </div>
          <div>
            <Row >
              <h5>Month</h5>
              <input  type="text" maxLength="2"  onChange={(this.monthChange.bind(this))}/>
            </Row> 
         </div>
         <div>
           <Row >
             <h5> Day</h5>
             <input  type="text" maxLength="2"  onChange={(this.dayChange.bind(this))}/>  
         </Row>
         </div>
          
          </Col>
     </div>
      </div>
       );
    }
}
 
export default CardInfo ;