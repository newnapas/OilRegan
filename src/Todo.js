import React , {Component} from 'react';

export class Todo extends Component {

    state = {
        inputText: '',
        inputText2:''
    }

    handleChangeText = (event) => {
        this.setState({inputText: event.target.value});
    }
    handleChangeText2 = (event) => {
        this.setState({inputText2: event.target.value});
    }

    render() {
        return(
            <div className="card clearfix">
            <div className="to-do-box">
                <h1 className="title">To-do-list</h1>
                <div className="form-box">
                    <input className="input input" type="text"
                        onChange={this.handleChangeText}
                        value={this.state.inputText}
                        />
                    <input className="input input" type="text"
                        onChange={this.handleChangeText2}
                        value={this.state.inputText2}
                        />
                    <button clssName="bb-input button">Add</button>
                    <h2>{parseInt(this.state.inputText) + parseInt(this.state.inputText2)}</h2>
                </div>



            </div>
        </div>
        )
    }
}