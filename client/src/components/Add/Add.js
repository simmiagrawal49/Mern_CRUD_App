import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

class Add extends Component{

    constructor(props){
        super(props)
        this.state ={
            name: '',
            color: '',
            description: '',
            category: '',
            additional_info: ''
        }

    }

    changeHandler = (e) =>
    {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state);
        axios.post('http://localhost:5000/products/create', this.state)
                .then(response => {
                    console.log(response)
                    alert("New Product Added")
                })
                .catch(error =>{
                    console.log(error)
                }

                )
    }
render(){
const {name, color , description ,category ,additional_info} = this.state

    return(
        <div>
         <Typography variant="h6" align="left">Add New Product</Typography>
      
         <form onSubmit={this.submitHandler}
         >
     <div>
        <label>Product Name</label><br/>
          <TextField id="outlined-basic" size="small" variant="outlined" name="name" value={name} onChange={this.changeHandler}/>
     </div>
     <div>
        <label>Color</label><br/>
        <TextField id="outlined-basic" size="small" variant="outlined" name="color" value={color} onChange={this.changeHandler}/>
    </div>
    <div>
       <label>  Description</label><br/>
        <TextField id="outlined-basic" size="small" variant="outlined" name="description" value={description} onChange={this.changeHandler}/>
        
    </div>
    <div>
       <label>  Category</label><br/>
        <TextField id="outlined-basic" size="small" variant="outlined" name="category" value={category} onChange={this.changeHandler}/>
    </div>
    <div>
       <label> Additional Informational</label><br/>
       <TextField id="outlined-basic" size="small" variant="outlined" name="additional_info" value={additional_info} onChange={this.changeHandler}/>
    </div>
    <button type="submit">Submit</button>
 </form>
</div>

    );
}
}

export default Add;