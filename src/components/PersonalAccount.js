import React, { Component } from 'react';
import List from './List'

let now = new Date()


class PersonalAccount extends Component{
    render(){
        return (
            <div className="typo records" >
                <div className="container">
                    <h3 className="title">Your records</h3>
                    <List futureRecords = {true} records={this.props.records.filter((record) => new Date(record.data) >= now)}/>
                    <h3 className="title">History</h3>
                    <List futureRecords = {false} records={this.props.records.filter((record) => new Date(record.data) < now)}/>
                </div>
            </div>
        );
    }
}

export default PersonalAccount;