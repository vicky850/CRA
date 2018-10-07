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
    Row,Modal, ModalBody, ModalFooter, ModalHeader
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

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong>Fee Ledger</strong>
                                <small></small>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="name">Name of the firm</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                            <Input type="select" name="ccmonth" id="ccmonth">
                                                <option value="1">Firm A</option>
                                                <option value="2">Firm B</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="name">File No.</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                            <Input type="select" name="ccmonth" id="ccmonth">
                                                <option value="1">File Number A</option>
                                                <option value="2">File Number B</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Station</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                            <Input type="text" id="ccnumber" disabled placeholder="Station" required />
                                        </FormGroup>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">GSTIN</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                            <Input type="text" id="ccnumber" disabled placeholder="GSTIN" required />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Address</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                            <Input type="text" id="ccnumber" disabled placeholder="Address" required />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Composition scheme GST</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                            <Input type="select" name="ccmonth" id="ccmonth">
                                                <option value="1">Yes</option>
                                                <option value="2">No</option>
                                            </Input></FormGroup>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Fee Payment Type</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                            <Input type="select" name="ccmonth" id="ccmonth">
                                                <option value="1">Yearly</option>
                                                <option value="2">Monthly</option>
                                            </Input></FormGroup>
                                    </Col>
                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Period</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                            <Input type="select" name="ccmonth" id="ccmonth">
                                                <option value="1">2017-18/July</option>
                                                <option value="2">2018-19/August</option>
                                            </Input></FormGroup>
                                    </Col>
                                    <Col xs="12" sm="4">
                                    <FormGroup>
                                        <Label htmlFor="business">Particulars</Label>
                                        <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                            <Input type="textarea" name="textarea-input" id="textarea-input" rows="1"
                                            placeholder="GST Assessment comments..." /></FormGroup></Col>
                                </Row>
                                <Row>
                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Amount</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                           <Input type="text" id="group-firms" placeholder="Amount" />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Received Amount</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                           <Input type="text" id="group-firms" placeholder="Amount" />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="12" sm="4"><FormGroup>
                                        <Label htmlFor="business">Settled</Label>
                                        <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                           <Input type="select" name="business" id="business">
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Input></FormGroup></Col>

                                </Row>
                                <Row>
                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Receipt No.</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                          <Input type="text" id="group-firms" placeholder="Receipt No." />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="business">Date</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                          <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" sm="4"><FormGroup>
                                        <Label htmlFor="business">In which Account</Label>
                                        <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                          <Input type="select" name="business" id="business">
                                            <option value="1">Account A</option>
                                            <option value="2">Account B</option>
                                        </Input></FormGroup></Col>
                                </Row>
                            </CardBody>

                        </Card>

                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong>On Account Detail</strong>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Amount Recd.</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                         <Input type="text" id="group-firms" placeholder="Amount Recd." />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="business">Date</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                         <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Receipt No.</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                         <Input type="text" id="group-firms" placeholder="Receipt No." />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Total Fees</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                         <Input type="text" id="group-firms" placeholder="Total Fees" />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Received Fee</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                         <Input type="text" id="group-firms" placeholder="Received Fee" />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Balance</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                         <Input type="text" id="group-firms" placeholder="Balance" />
                                        </FormGroup>
                                    </Col>
                                    {/* <Col xs="12" sm="4">
                                        <Label htmlFor="business">In which Account</Label>
                                        <Input type="select" name="business" id="business">
                                            <option value="1">Account A</option>
                                            <option value="2">Account B</option>
                                        </Input></Col> */}
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong>Informed on</strong>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" sm="4"><FormGroup>
                                        <Label htmlFor="business">To Whom</Label>
                                        <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                         <Input type="select" name="business" id="business">
                                            <option value="1">Person A</option>
                                            <option value="2">Person B</option>
                                        </Input></FormGroup></Col>

                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="business">Date</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                         <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Amount</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                         <Input type="text" id="group-firms" placeholder="Amount" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12" sm="4">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Given By</Label>
                                            <AppSwitch className={'float-right mb-0 mx-1'} color={'primary'} size={'sm'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                                         <Input type="text" id="group-firms" placeholder="Given By" />
                                        </FormGroup>
                                    </Col>
                                </Row>
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
                <Modal isOpen={this.state.success} toggle={this.toggleSuccess}
                  className={'modal-success ' + this.props.className}>
                  <ModalHeader toggle={this.toggleSuccess}>Fee Report</ModalHeader>
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
            </div>
        );
    }
}

export default ClientMenu;
