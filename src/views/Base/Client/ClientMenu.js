import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

class ClientMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      success: false,
    };
    this.toggleSuccess = this.toggleSuccess.bind(this);
  }
  disableCtrl = () => {
    document.getElementById("cFilenumber").disabled = true;
    document.getElementById("cancelationwef").disabled = true;
  }
  enableCtrl = () => {
    document.getElementById("cFilenumber").disabled = false;
    document.getElementById("cancelationwef").disabled = false;
  }
  handleChange = (event) => {
    if (event.target.id = "filetype" && event.target.value == "2") {
      this.enableCtrl();
    } else {
      this.disableCtrl();
    }
  }
  toggleSuccess() {
    this.setState({
      success: !this.state.success,
    });
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }
componentDidMount(){
  this.disableCtrl();
}
  render() {
    return (
      <div className="animated fadeIn" onChange={(event) => this.handleChange(event)}>
        <Row>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>New Client</strong>
                <small></small>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="filetype">Type of File</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="filetype" id="filetype">
                        <option value="1">Regular</option>
                        <option value="2">Cancel</option>
                        <option value="2">Self</option>
                      </Input>
                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="snumber">Serial Number</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="snumber" disabled value="2451" />
                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="rFilenumber">File Number(Regular)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="rFilenumber" disabled placeholder="CA-18-7365" required />
                    </FormGroup>
                  </Col>

                </Row>
                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="cFilenumber">File Number(canceled/Others)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="cFilenumber" id="cFilenumber">
                        <option value="1">All Inactive Files</option>
                        <option value="2">CA-18-7365</option>
                        <option value="2">CA-18-7365</option>
                        <option value="2">CA-18-7365</option>
                        <option value="2">CA-18-7365</option>
                        <option value="2">CA-18-7365</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4"><FormGroup>
                    <Label htmlFor="cancelationwef">Cancellation w.e.f</Label>
                    <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                    <Input type="date" id="cancelationwef" name="cancelationwef" disabled placeholder="date" />
                  </FormGroup>
                  </Col>
                  <Col xs="12" sm="4"><FormGroup>
                    <Label htmlFor="group-firms">Group  Firms</Label>
                    <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                    <Input type="select" name="group-firms" id="group-firms">
                        <option value="1">20</option>
                        <option value="2">80</option>
                        <option value="2">100</option>
                      </Input>
                  </FormGroup></Col>
                </Row>

                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Name of Group</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="Name of Group" />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Firm/Trade Name</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="Firm /Trade Name" />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4"><FormGroup>
                    <Label htmlFor="business">Constitution of Business</Label>
                    <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                    <Input type="select" name="business" id="business">
                      <option value="1">Pvt. Ltd. Company</option>
                      <option value="2">Limited Company</option>
                      <option value="2">Proprietorship</option>
                      <option value="2">Partnerhsip</option>
                      <option value="2">LLP</option>
                      <option value="2">Karta</option>
                    </Input></FormGroup></Col>
                </Row>


                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Prop./Partners/Directors (Names)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="1"
                        placeholder="Names separeted by comma..." /></FormGroup>
                  </Col>

                  <Col xs="12" sm="4"><FormGroup>
                    <Label htmlFor="business">City/Station</Label>
                    <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                    <Input type="select" name="business" id="business">
                      <option value="1">Hisar</option>
                      <option value="2">Rohtak</option>
                    </Input></FormGroup></Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Address</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="Address" />
                    </FormGroup>
                  </Col>
                </Row>



                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Address (Postal)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="Address" />
                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Branch Address (1)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="Branch Address" />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Branch Address (2)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="Branch Address" />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">TIN Number </Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="TIN Number" />
                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">GSTIN</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="GSTIN" />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Jurisdiction (State/Centre)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">Hisar</option>
                        <option value="2">Rohtak</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>


                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Ward</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">Ward-1</option>
                        <option value="2">Ward-2</option>
                      </Input></FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Name of Auth .Sig __Prop,/Partner/Director</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="Name" />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Type of Business</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">Mfg.</option>
                        <option value="2">Trading</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Nature of Business</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">Nature of Business-1</option>
                        <option value="2">Nature of Business-2</option>
                      </Input></FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Email ID of Company/Firm</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="email" id="exampleInputEmail2" placeholder="jane.doe@example.com" required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Email ID (Prop./Partner /Director)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="email" id="exampleInputEmail2" placeholder="jane.doe@example.com" required />

                    </FormGroup>
                  </Col>
                </Row>


                <Row>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Email ID (Authorized Signatory)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="email" id="exampleInputEmail2" placeholder="jane.doe@example.com" required />

                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Email ID (Accountant)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="email" id="exampleInputEmail2" placeholder="jane.doe@example.com" required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Contact No.(Name)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="exampleInputEmail2" placeholder="Contact number or name" required />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Contact No.(Name)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="exampleInputEmail2" placeholder="Contact number or name" required />

                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Contact No.(Name)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="exampleInputEmail2" placeholder="Contact number or name" required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Land Line No. </Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="number" id="exampleInputEmail2" placeholder="Land Line No." required />
                    </FormGroup>
                  </Col>
                </Row>


                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Whatsapp No. (Name)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="exampleInputEmail2" placeholder="Whatsapp No. (Name)" required />

                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Whatsapp No. (Name)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="exampleInputEmail2" placeholder="Whatsapp No. (Name)" required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Date of Liabilty (VAT) </Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="date" id="date-input" name="date-input" placeholder="date" />
                    </FormGroup>
                  </Col>
                </Row>



                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Date of Liabilty (VAT) </Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="date" id="date-input" name="date-input" placeholder="date" />

                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Date of Liabilty (GST)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="date" id="date-input" name="date-input" placeholder="date" />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Date of Validity (GST)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="date" id="date-input" name="date-input" placeholder="date" />
                    </FormGroup>
                  </Col>
                </Row>




                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">CA. Firm Name</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">Firm Name-1</option>
                        <option value="2">Firm Name-2</option>
                      </Input></FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Name of CA</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">CA Name-1</option>
                        <option value="2">CA Name-2</option>
                      </Input></FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">CA Contact Number</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">CA Number-1</option>
                        <option value="2">CA Number-2</option>
                      </Input></FormGroup>
                  </Col>
                </Row>





                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Accountant Name</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1"> Name-1</option>
                        <option value="2"> Name-2</option>
                      </Input></FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Accountant Contact No.</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">Contact No-1</option>
                        <option value="2">Contact No-2</option>
                      </Input></FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">GST User Name </Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="exampleInputEmail2" placeholder="GST User name" required />
                    </FormGroup>
                  </Col>
                </Row>


                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="gstPassword">GST Password</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="gstPassword" placeholder="GST Password" required />
                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="gstPassword">VAT User Name</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="gstPassword" placeholder="VAT User Name" required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">VAT Password</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="exampleInputEmail2" placeholder="VAT Password" required />
                    </FormGroup>
                  </Col>
                </Row>


                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="AuditCase">Audit Case</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="AuditCase" id="AuditCase">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="currentFinancialYear">Turnover in Current Financial Year (2018-19)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="currentFinancialYear" placeholder="Turnover" required />
                      </FormGroup>
                  </Col>


                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Turnover in Preceding Financial Year (2017-18)</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="previousFinancialYear" placeholder="Turnover" required /></FormGroup>
                  </Col>

                </Row>


                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="AuditCase">Quarterly/Monthly Turnover in Current Year</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="AuditCase" id="AuditCase">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="currentFinancialYear">Quarterly/Monthly Turnover in Previous Year</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="currentFinancialYear" id="currentFinancialYear">
                        <option value="1"> 2017-18</option>
                        <option value="2"> 2016-17</option>
                      </Input></FormGroup>
                  </Col>


                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Turnover in Preceding Financial Year</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> 2017-18</option>
                        <option value="2"> 2016-17</option>
                      </Input></FormGroup>
                  </Col>

                </Row>

                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Deals in purely exempted goods</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Deals in almost unregd. supplies</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Composition scheme HVAT </Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Composition scheme GST</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Reversal of Input Tax</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Self</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">GST Return Fees Structure</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> 500</option>
                        <option value="2"> 750</option>
                        <option value="2"> 1000</option>
                        <option value="2"> 1500</option>
                        <option value="2"> 2000</option>
                        <option value="2"> 2500</option>
                      </Input></FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Assessment Fees Structure</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Assessment Fees Free</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Returns Expenses free</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Fees</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Bills</option>
                        <option value="2"> Regular</option>
                      </Input></FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Important Dealer</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>

                </Row>

                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Is Return of Dealer is Sensitive</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Yes</option>
                        <option value="2"> No</option>
                      </Input></FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">No's of Clients</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Hisar</option>
                        <option value="2"> Adampur</option>
                      </Input></FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">No. of Total Clients</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="previousFinancialYear" id="previousFinancialYear">
                        <option value="1"> Regular</option>
                        <option value="2"> Cancel</option>
                      </Input></FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12">
                    <FormGroup>
                      <Label htmlFor="previousFinancialYear">Other comments</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="textarea" id="date-input" name="date-input" placeholder="Comments" />
                    </FormGroup>
                  </Col>
                </Row>
                <Modal isOpen={this.state.success} toggle={this.toggleSuccess}
                  className={'modal-success ' + this.props.className}>
                  <ModalHeader toggle={this.toggleSuccess}>Client Report</ModalHeader>
                  <ModalBody>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs="12" sm="6" md="6">
                            <FormGroup>
                              <Label htmlFor="ccnumber">From Date</Label>
                              <Input type="date" id="date-input" name="date-input" placeholder="date" />
                            </FormGroup>
                          </Col>
                          <Col xs="12" sm="6" md="6">
                            <FormGroup>
                              <Label htmlFor="ccnumber">To Date</Label>
                              <Input type="date" id="date-input" name="date-input" placeholder="date" />
                            </FormGroup>
                          </Col>
                        </Row>
                        {'&'}
                        <Row>
                          <Col xs="12" sm="6" md="6">
                            <FormGroup>
                              <Label htmlFor="ccnumber">Filter Fields</Label>
                              <Input type="select" name="business" id="business">
                                <option value="1">Field A</option>
                                <option value="2">Field B</option>
                                <option value="2">Field C</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col xs="12" sm="6" md="6">
                            <FormGroup>
                              <Label htmlFor="ccnumber">Value</Label>
                              <Input type="text" id="group-firms" placeholder="Amount" />
                            </FormGroup>
                          </Col>
                        </Row>
                        {'&'}
                        <Row>
                          <Col xs="12" sm="6" md="6">
                            <FormGroup>
                              <Label htmlFor="ccnumber">Filter Fields</Label>
                              <Input type="select" name="business" id="business">
                                <option value="1">Field A</option>
                                <option value="2">Field B</option>
                                <option value="2">Field C</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col xs="12" sm="6" md="6">
                            <FormGroup>
                              <Label htmlFor="ccnumber">Value</Label>
                              <Input type="text" id="group-firms" placeholder="Amount" />
                            </FormGroup>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={this.toggleSuccess}>Generate Report</Button>{' '}
                    <Button color="secondary" onClick={this.toggleSuccess}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col xs="12" sm="4"></Col>
                  <Col xs="12" sm="4"></Col>
                  <Col xs="12" sm="4">
                    <Row>
                      <Col xs="6" sm="4">
                        <Button color="success" onClick={this.toggleSuccess} className="mr-1"><i className="icon-pie-chart"></i> Report</Button>

                      </Col>
                      <Col xs="6" sm="4">
                        <Button color="danger" className="mr-1"><i className="fa fa-ban"></i> Reset</Button>

                      </Col>
                      <Col xs="6" sm="4">
                        <Button type="submit" size="m" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                      </Col>
                    </Row>
                  </Col>

                </Row>
              </CardFooter>
            </Card>

          </Col>
        </Row>
      </div>
    );
  }
}

export default ClientMenu;
