import React, {Component} from 'react';
import axios from 'axios';
import './DayBody.css';

const OurDay = props => (
    <tr>
        <td>{props.ourResults.day}</td>
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
                console.log ("our results: " , this.state.ourResults)
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
            return <OurDay ourResults={currentday} key={currentday._id} />;
        })
    }

    render() {
        return (
            <>
                <h1>Please enter a month and day in the search box in for format of MMM-DD, or enter ALL to see all entries.</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Date:</label>
                    <input 
                        type="text" 
                        value={this.state.ourSearch}
                        onChange={this.onChangeOurSearch} 
                    />
                    <input 
                        type="submit" 
                        value="Find Day" 
                    />
                </form>
                <h1>Our Results</h1>
                <hr/>
                <table id="dayResults">
                    <tr>
                        <th>Day</th>
                        <th>Day Of</th>
                    </tr>
                    <tbody>
                        {this.dayList()}
                    </tbody>
                </table>
            </>
        )
    }
}
