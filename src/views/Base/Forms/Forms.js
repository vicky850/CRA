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
  Modal, ModalBody, ModalFooter, ModalHeader, Pagination, PaginationItem, PaginationLink, Row, Table
} from 'reactstrap';

class Forms extends Component {
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
  handleChange = (e) => {
    alert('fee info');
  }
  render() {
    return (
      <div onChange={(e) => this.handleChange(e)}>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <strong>Client Info</strong>
                <small></small>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="name">Name of the firm</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">Firm A</option>
                        <option value="2">Firm B</option>
                      </Input>
                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="name">File Number</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">File No 2323</option>
                        <option value="2">File No 2773</option>
                      </Input>
                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Station</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="ccnumber" disabled placeholder="CA-18-7365" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="date-input">GSTIN</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="ccnumber" placeholder="GSTIN" required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="group-firms">Address</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="Address" />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="name">Year</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">2017-18</option>
                        <option value="2">2018-19</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Quarterly/Monthly</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="Quarterly/Monthly" />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Turnover in Preceding Fin. Year</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="Turnover in Preceding Fin. Year" />
                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Almost Unregistered</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Purely exempted</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </Input>
                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Composition scheme GST</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </Input>
                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">GST Return Fees Structure</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">500</option>
                        <option value="2">750</option>
                        <option value="2">1000</option>
                        <option value="2">1500</option>
                        <option value="2">2000</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Reversal of Input Tax</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </Input>
                    </FormGroup>
                  </Col>

                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="business">Composition scheme GST</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Group Firms</Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="text" id="group-firms" placeholder="Group Firms" />
                    </FormGroup>
                  </Col>
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
                      <Label htmlFor="business">Returns Expenses free </Label>
                      <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Input type="select" name="business" id="business">
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> E-Filling
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th style={{"width": "500px"}}>Year (By Default)<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                      </th>
                      <th style={{"width": "500px"}}>*Manually/Mail<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      
                      <th style={{"width": "500px"}}>*Month<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>*Type of Return<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>*Date of Receipt<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>*Manually/Mail<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>Mail/Name of Person/N.A<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>*Mail ID/ Name of Person (In case of Late Returns only)<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>Challan Status<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>*Filing Date<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>*If return is filed late ( who is communicated for penalty ) N.A or Name of Person<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>Date for Communication of filing late return<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>Filed By (Auto Populated field arrived from its user Login)<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>Exempted/Nil /Unregd. Supplies /Taxable<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>*Turnover(GSTR3_B)<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>*Turnover(GSTR-1)<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>*Correspondence (Pending returns) Date<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>Name of Person<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>*Month<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>Fees Due<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>Fees (Received)<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>Received By<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                      <th style={{"width": "500px"}}>Receipt No.<AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{width:500}}> <FormGroup>
                        <Input type="select" name="sYear" id="sYear">
                          <option value="1">--Select--</option>
                          <option value="2">2018-19</option>
                          <option value="2">2018-19</option>
                        </Input>
                      </FormGroup></td>
                      <td><FormGroup>
                        <Input type="select" name="sMonth" id="sMonth">
                          <option value="1">--Select--</option>
                          <option value="1">July</option>
                          <option value="2">August</option>
                        </Input>
                      </FormGroup></td>
                      <td><FormGroup>
                        <Input type="select" name="efile-type" id="efile-type">
                          <option value="1">--Select--</option>
                          <option value="1">GSTR3-B</option>
                          <option value="2">GSTR-1</option>
                        </Input>
                      </FormGroup></td>
                      <td>
                        <FormGroup>
                          <Input type="date" id="date-input" name="date-input" placeholder="date" />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="select" name="sMail" id="sMail">
                            <option value="1">Mail</option>
                            <option value="2">Mail</option>
                          </Input></FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="email" id="exampleInputEmail2" placeholder="Mail/Name of Person/N.A" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="email" id="exampleInputEmail2" placeholder="*Mail ID/ Name of Person (In case of Late Returns only)" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="select" name="business" id="business">
                            <option value="1">Pending</option>
                            <option value="2">Complete</option>
                          </Input></FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="date" id="date-input" name="date-input" placeholder="*Filing Date" />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="email" id="exampleInputEmail2" placeholder="jane.doe@example.com" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="date" id="date-input" name="date-input" placeholder="date" />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="email" id="exampleInputEmail2" placeholder="logged in User" disabled required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="select" name="business" id="business">
                            <option value="1">Exempted</option>
                            <option value="2">Unregd. Supplies</option>
                            <option value="2">Taxable</option>
                          </Input>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="*Turnover(GSTR3_B)" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="*Turnover(GSTR-1)" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="date" id="date-input" name="date-input" placeholder="date" />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="Whatsapp No. (Name)" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="select" name="business" id="business">
                            <option value="1">--Select--</option>
                            <option value="1">July</option>
                            <option value="2">August</option>
                          </Input></FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="Fees Due" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="Fees (Received)" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="Received By" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="Receipt No." required />
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td> <FormGroup>
                        <Input type="select" name="business" id="business">
                          <option value="1">--Select--</option>
                          <option value="2">2018-19</option>
                          <option value="2">2018-19</option>
                        </Input>
                      </FormGroup></td>
                      <td><FormGroup>
                        <Input type="select" name="business" id="business">
                          <option value="1">--Select--</option>
                          <option value="1">July</option>
                          <option value="2">August</option>
                        </Input>
                      </FormGroup></td>
                      <td><FormGroup>
                        <Input type="select" name="business" id="business">
                          <option value="1">--Select--</option>
                          <option value="1">GSTR3-B</option>
                          <option value="2">GSTR-1</option>
                        </Input>
                      </FormGroup></td>
                      <td>
                        <FormGroup>
                          <Input type="date" id="date-input" name="date-input" placeholder="date" />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="select" name="business" id="business">
                            <option value="1">Mail</option>
                            <option value="2">Mail</option>
                          </Input></FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="email" id="exampleInputEmail2" placeholder="Mail/Name of Person/N.A" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="email" id="exampleInputEmail2" placeholder="*Mail ID/ Name of Person (In case of Late Returns only)" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="select" name="business" id="business">
                            <option value="1">Pending</option>
                            <option value="2">Complete</option>
                          </Input></FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="date" id="date-input" name="date-input" placeholder="*Filing Date" />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="email" id="exampleInputEmail2" placeholder="jane.doe@example.com" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="date" id="date-input" name="date-input" placeholder="date" />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="email" id="exampleInputEmail2" placeholder="logged in User" disabled required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="select" name="business" id="business">
                            <option value="1">Exempted</option>
                            <option value="2">Unregd. Supplies</option>
                            <option value="2">Taxable</option>
                          </Input>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="*Turnover(GSTR3_B)" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="*Turnover(GSTR-1)" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="date" id="date-input" name="date-input" placeholder="date" />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="Whatsapp No. (Name)" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="select" name="business" id="business">
                            <option value="1">--Select--</option>
                            <option value="1">July</option>
                            <option value="2">August</option>
                          </Input></FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="Fees Due" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="Fees (Received)" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="Received By" required />
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="text" id="exampleInputEmail2" placeholder="Receipt No." required />
                        </FormGroup>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>

                <Modal isOpen={this.state.success} toggle={this.toggleSuccess}
                  className={'modal-success ' + this.props.className}>
                  <ModalHeader toggle={this.toggleSuccess}>E-Filing Report</ModalHeader>
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
              </CardBody >
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
            </Card >
          </Col >
        </Row >
      </div >
    );
  }
}

export default Forms;
