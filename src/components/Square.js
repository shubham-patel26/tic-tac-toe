import React,{Component} from 'react';

class Square extends Component{
   

    render() {
        // TODO: use onClick={this.props.onClick}
        // TODO: replace this.state.value with this.props.value
        return (
        <button className="square" 
        onClick={() => this.props.onClick()}
        >
            {this.props.value}
        </button>
        );
    }
}

export default Square;