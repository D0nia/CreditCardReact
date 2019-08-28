// import React, { Component } from 'react';
// import {Col,Row,InputGroup,FormControl} from 'react-bootstrap';
// import './App.css'


// class Input extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     } 
    
//     companyNameChange(n) {
//       this.setState({
//         companyName: n.target.value
//       });
//     }
//     render() { 
//         return ( 
//       <div className="input">
         
//            <Row>
//             <Col md-12>
//               <InputGroup className="mb-3">
//                <InputGroup.Prepend>
//                  <InputGroup.Text id="inputGroup-sizing-default" type="text" maxLength="10" onChange={(this.companyNameChange.bind(this))}</InputGroup.Text>
//                </InputGroup.Prepend>
//                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
//               </InputGroup>
//             </Col> 
//             <Col md-12>
//               <InputGroup className="mb-3">
//                <InputGroup.Prepend>
//                  <InputGroup.Text id="inputGroup-sizing-default"  maxLength="16" onChange={(this.cardNumberTagChange.bind(this))} >Card Number</InputGroup.Text>
//                </InputGroup.Prepend>
//                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
//               </InputGroup>
//               </Col> 
//             <Col md-6>
//               <InputGroup className="mb-1">
//                <InputGroup.Prepend>
//                  <InputGroup.Text id="inputGroup-sizing-default" maxLength="2" onChange={(this.monthChange.bind(this))}>Month</InputGroup.Text>
//                </InputGroup.Prepend>
//                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
//               </InputGroup>
//               </Col> 
//             <Col md-6>
//               <InputGroup className="mb-1">
//                <InputGroup.Prepend>
//                  <InputGroup.Text id="inputGroup-sizing-default" maxLength="2" onChange={(this.dayChange.bind(this))}>Day</InputGroup.Text>
//                </InputGroup.Prepend>
//                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
//               </InputGroup>
//             </Col>
//           </Row>
     
//      </div>
//          );
//     }
// }
 
// export default Input;