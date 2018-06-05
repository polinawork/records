import React, { Component } from 'react';

let now = new Date()

class List extends Component {
    constructor(){
        super(...arguments);
        this.state = {
            records: this.props.records
        };
    }
    deleteRecord(index){
        let records = JSON.parse(localStorage.getItem('records'));
        records.splice(index, 1);
        localStorage.setItem("records", JSON.stringify(records));
        this.setState({records: records.filter((record) => new Date(record.data) >= now)});
    }

    render() {
        let recordsShow = this.state.records.map((record) => {
            let index = this.state.records.indexOf(record);
            this.state.delete = index;
            return (
                <tr>
                    <td>{record.program}</td>
                    <td>{record.master}</td>
                    <td>{record.data}</td>
                    <td>{record.time}</td>
                    <td>{this.props.futureRecords && <input type="submit" onClick={this.deleteRecord.bind(this, index)} value="Delete"/>}</td>
                </tr>
            );
        });

        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Program</th>
                    <th>Master</th>
                    <th>Date</th>
                    <th>Time</th>
                    {this.props.futureRecords && <th>Setting</th>}
                </tr>
                </thead>
                <tbody>
                    {recordsShow}
                </tbody>
            </table>
        );
    }
}
export default List;