import React, { Component } from 'react';
import axios from 'axios';

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
 <form onSubmit={this.submitHandler}>
     <div>
        <label>Prduct Name</label>
         <input type="text" name="name" value={name} onChange={this.changeHandler}/>
     </div>
     <div>
        <label>Color</label>
        <input type="text" name="color" value={color} onChange={this.changeHandler} />
    </div>
    <div>
       <label>  Description</label>
        <input type="text" name="description" value={description} onChange={this.changeHandler}/>
    </div>
    <div>
       <label>  Category</label>
        <input type="text" name="category"  value={category} onChange={this.changeHandler}/>
    </div>
    <div>
       <label> Additional Informational</label>
        <input type="text" name="additional_info" value={additional_info} onChange={this.changeHandler} />
    </div>
    <button type="submit">Submit</button>
 </form>
</div>

    );
}
}

export default Add;