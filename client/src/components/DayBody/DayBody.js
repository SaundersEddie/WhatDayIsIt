import React, {Component} from 'react';
// import Axios from 'axios';
// import Header from '../Header/Header';

export default class DayBody extends Component {
    constructor(props) {
        super(props);

        this.onChangeOurSearch = this.onChangeOurSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ourSearch: '',
            ourResults: [],
        };
    }

    componentDidMount() {
        this.setState({
            ourSearch: '',
            ourResults: [],
        });

        // Setup our default values and log them before we kick in the calls to Axios
        const ourMonths = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
        let todayDate = new Date();
        let todayMonth = ourMonths[todayDate.getMonth()];
        let todayDay = todayDate.getDate();
        const todaySearch = `${todayMonth}-${todayDay}`
        console.log (todaySearch)
    }

    onChangeOurSearch(e) {
        this.setState({
            ourSearch: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log ("Find Clicked");
    }

    render() {
        return (
            <>
                {/* <Header /> */}
                <h1>Please enter a month and day in the search box in for format of MMM-DD, or enter ALL to see all entries.</h1>
                {/* Day Search */}
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
            </>
        )
    }
}
