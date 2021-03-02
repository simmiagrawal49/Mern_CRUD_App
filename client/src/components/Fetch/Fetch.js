import React, { Component } from  'react';
import axios from 'axios';
class Fetch extends Component{

        constructor(props){
        super(props)
        this.state ={
            products: [],
            error :[]
        }

    }

    componentDidMount(){
            axios.get('http://localhost:5000/products')
                .then(response => {
                    console.log(response);
                    this.setState({products:response.data})
                })
                .catch(error => {
                    console.log(error);
                    this.setState({errorMsg: 'Error retrieving data'})
                })
    }

    render(){
        const {products,errorMsg} = this.state
    return(
        <div>Available Products

        <table>
        <tr>
        {
            products.length ?
            products.map(products => 
            <div key={products.id}><th>{products.name}</th>
           <th> {products.color}</th>
            <th>{products.description}</th>
            </div>) : null
            
        }
        </tr>
        </table>
        {errorMsg ? <div>{errorMsg}</div> :null

        }
        </div>
    );
    }
}

export default Fetch;
