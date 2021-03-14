import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Update extends Component{

constructor(props) {
    super(props)

    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeProductColor = this.onChangeProductColor.bind(this);
    this.onChangeProductDesc = this.onChangeProductDesc.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      color: '',
      description: ''
    }
  }

componentDidMount() {
    axios.get('http://localhost:5000/products/read/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          color: res.data.color,
          description: res.data.description
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeProductName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeProductColor(e) {
    this.setState({ color: e.target.value })
  }

  onChangeProductDesc(e) {
    this.setState({ description: e.target.value })
  }



onSubmit(e) {
    e.preventDefault()

    const productObject = {
      name: this.state.name,
      color: this.state.color,
      description: this.state.description
    };

    axios.put('http://localhost:5000/products/update/' + this.props.match.params.id, productObject)
      .then((res) => {
        console.log(res.data)
        console.log('Product successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/')
  }



render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeProductName} />
        </Form.Group>

        <Form.Group controlId="Color">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" value={this.state.color} onChange={this.onChangeProductColor} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeProductDesc} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Product
        </Button>
      </Form>
    </div>);
  }
}

export default Update;