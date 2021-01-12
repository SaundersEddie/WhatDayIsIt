import React from 'react';
import Axios from 'axios';

export default function DayBody() {
    return (
        <>
            <h1>Please enter a month and day in the search box in for format of MMM-DD, or enter ALL to see all entries.</h1>
            <form>
                <label>Date: 
                    <input type="text" name="day" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
