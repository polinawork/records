import React, { Component } from 'react';
import PersonalAccount from './PersonalAccount'
import Logo from "./Logo";

function compare(field, order) {
    var len = arguments.length;
    if(len === 0) {
        return (a, b) => (a < b && -1) || (a > b && 1) || 0;
    }
    if(len === 1) {
        switch(typeof field) {
            case 'number':
                return field < 0 ?
                    ((a, b) => (a < b && 1) || (a > b && -1) || 0) :
                    ((a, b) => (a < b && -1) || (a > b && 1) || 0);
            case 'string':
                return (a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0;
        }
    }
    if(len === 2 && typeof order === 'number') {
        return order < 0 ?
            ((a, b) => (a[field] < b[field] && 1) || (a[field] > b[field] && -1) || 0) :
            ((a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0);
    }
    var fields, orders;
    if(typeof field === 'object') {
        fields = Object.getOwnPropertyNames(field);
        orders = fields.map(key => field[key]);
        len = fields.length;
    } else {
        fields = new Array(len);
        orders = new Array(len);
        for(let i = len; i--;) {
            fields[i] = arguments[i];
            orders[i] = 1;
        }
    }
    return (a, b) => {
        for(let i = 0; i < len; i++) {
            if(a[fields[i]] < b[fields[i]]) return orders[i];
            if(a[fields[i]] > b[fields[i]]) return -orders[i];
        }
        return 0;
    };
}


class Record extends Component {

    constructor() {
        super(...arguments);
        this.handleProgramChange = this.handleProgramChange.bind(this);
        this.handleMasterChange = this.handleMasterChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.state = {
            program:'',
            master:'',
            data:'',
            time:'',
        };
    }

    handleProgramChange(e){
        this.setState({program: e.target.value})
    }
    handleMasterChange(e){
        this.setState({master: e.target.value})
    }
    handleDataChange(e){
        this.setState({data: e.target.value})
    }
    handleTimeChange(e){
        this.setState({time: e.target.value})
    }
    record(){
        let records = JSON.parse(localStorage.getItem('records'));
        let record = {
            program: this.state.program,
            master: this.state.master,
            data: this.state.data,
            time: this.state.time
        }
        records.push(record);
        records.sort(compare('data', 'time'));
        localStorage.setItem("records", JSON.stringify(records));
    }

    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Logo/>
                        <div className="appointment">
                            <h2>Appointment</h2>
                            <form>
                                <label for="program" className="sr-only">Program</label>
                                <select id="program" className="form-control" onChange={this.handleProgramChange} placeholder="Spa-program">
                                    <option value="" className="selected-name">Spa-programs</option>
                                    <option value="Spa-program 1">Spa-program 1</option>
                                    <option value="Spa-program 2">Spa-program 2</option>
                                    <option value="Spa-program 3">Spa-program 3</option>
                                </select><br/>
                                <label for="master" className="sr-only">Master</label>
                                <select id="master" className="form-control" onChange={this.handleMasterChange} placeholder="Master">
                                    <option value="" className="selected-name">Masters</option>
                                    <option value="Master 1">Master 1</option>
                                    <option value="Master 2">Master 2</option>
                                    <option value="Master 3">Master 3</option>
                                </select>
                                <label for="date" className="sr-only">Data</label>
                                <input type="date" id="date" className="form-control" onChange={this.handleDataChange} name="date"/>
                                <label for="time" className="sr-only" >Time</label>
                                <select id="time" className="form-control"  onChange={this.handleTimeChange} placeholder="Time">
                                    <option value="" className="selected-name">Time</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                </select>
                                <input type="submit" onClick={this.record.bind(this)} value="Submit"/>
                            </form>
                        </div>
                    </div>
                </div>
                <PersonalAccount  records = {JSON.parse(localStorage.getItem('records'))}/>
            </div>
        );
    }
}
export default Record;