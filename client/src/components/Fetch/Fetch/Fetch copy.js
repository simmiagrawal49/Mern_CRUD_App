import React, { Component } from  'react';
import axios from 'axios';
//import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from '@material-ui/core/';
import Add from '../Add/Add';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Update from '../Update/Update';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
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
    deleteProduct(id)
    {
          axios.delete('http://localhost:5000/products/delete/'+id)
                .then(response => {
                    if(response.data != null){
                        alert("Product Deleted");
                    }
                    this.setState({
                        products:this.state.products.filter(product => product.id !==id)
                        })
                })
                .catch(error => {
                    console.log(error);
                    this.setState({errorMsg: 'Error retrieving data'})
                })
    }
    /*  UpdateProduct(id)
    {
        render()
        {<>
               <Add/></>
        }
    } */

    render(){
        const {products,errorMsg} = this.state
    return(

        <div>
        <div>Available Products
        
        {/* <table>
        <tr>
        {
            products.length ?
            products.map(products => 
            <div key={products.id}><th>{products.name}</th>
              <th> {products.color}</th>
              <th>{products.description}</th>
              <th> <Button size="small" color="primary" onClick={() => this.deleteProduct(products._id)}> Delete</Button></th>
              <th> <Button size="small" color="primary" onClick={() => <Add/>}> Edit</Button></th>
            </div>) : null
            
        }
        </tr>
        </table> */}
         <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">  </StyledTableCell>
            <StyledTableCell align="right">  </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <Router>
			 {
            products.length ?
            products.map(products => 
            <StyledTableRow key={products.id}><StyledTableCell component="th" scope="row">{products.name}</StyledTableCell>
              <StyledTableCell align="right"> {products.color}</StyledTableCell>
              <StyledTableCell align="right">{products.description}</StyledTableCell>
              <StyledTableCell align="right"> <Button size="small" color="primary" onClick={() => this.deleteProduct(products._id)}> Delete</Button></StyledTableCell>
           {/*   <StyledTableCell align="right"> <Button size="small" color="primary"> Edit</Button></StyledTableCell> */}
        <StyledTableCell align="right">   <Link to={"/update/" +products.id}>Update</Link> </StyledTableCell></StyledTableRow>) : null
            
        }
        <Route path="/update" component={Update} />
        </Router>
        </TableBody>
      </Table>
    </TableContainer>
        
        </div>
        {errorMsg ? <div>{errorMsg}</div> :null

        }
        </div>
    );
    }
}

export default Fetch;

<input type="text" name="name" value={name} onChange={this.changeHandler}/>