import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const OurDay = props => (
    <tr>
        <td>{props.ourResults.day.charAt(0).toUpperCase()+props.ourResults.day.substring(1)}</td>
        <td>{props.ourResults.name}</td>
    </tr>
)

export default class DayBody extends Component {
    constructor(props) {
        super(props);
        this.onChangeOurSearch = this.onChangeOurSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ourSearch: '',
            ourResults: []
        };
    }

    componentDidMount() {
        let ourMonths = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
        let todayDate = new Date();
        axios.get ('/wdii/showday/'+ourMonths[todayDate.getMonth()]+'-'+todayDate.getDate())
            .then (res => {
                this.setState ({ ourResults: res.data })
            })
            .catch ((error) => {
                console.log ("error:", error)
            });
    }

    onChangeOurSearch(e) {
        this.setState({
            ourSearch: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.ourSearch.toLowerCase() === "all") {
            axios.get ('/wdii/alldays')
                .then (res => {
                    this.setState ({ 
                        ourSearch: '',
                        ourResults: res.data 
                    })
                })
                .catch ((error) => {
                    console.log ("error:", error)
                });
        }
        else {
            let ourMonths = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
            if (ourMonths.includes(this.state.ourSearch.toLowerCase().substring(0,3))) {
                axios.get ('/wdii/showday/'+this.state.ourSearch)
                .then (res => {
                    this.setState ({ 
                        ourSearch: '',
                        ourResults: res.data 
                    })
                })
                .catch ((error) => {
                    console.log ("error:", error)
                });
            }
        }
    }

    dayList() {
            return this.state.ourResults.map(currentday => {
            return <OurDay ourResults={currentday} key={currentday._id} />
            })
        }

    render() {
        return (
            <>
                <h3>Please enter a month and day in the search box to see what day it is.</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Col>
                            <Form.Label>Date:</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control 
                                size="lg"
                                type="text" 
                                value={this.state.ourSearch}
                                onChange={this.onChangeOurSearch} 
                            />
                        </Col>
                        <Col>
                            <Button 
                                variant="dark"
                                type="submit" 
                                value="Find Day"
                            >Find Day
                            </Button>
                        </Col>
                </Form.Row>
                <Form.Text className="text-muted">
                    format:MMM-DD, or ALL
                </Form.Text>
                </Form>


                <h3>Our Results</h3>
                {this.state.ourResults.length > 0 
                ?   <Table striped hover>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Day Of</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dayList()}
                        </tbody>
                    </Table>
                :   <Table striped hover>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Day Of</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2">No Data To Display</td>
                        </tr>
                    </tbody>
                </Table>
                }
            </>
        )
    }
}
