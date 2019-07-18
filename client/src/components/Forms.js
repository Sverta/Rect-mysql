import React, { Component } from 'react';
import { Input, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
// import DatePickerPage from './DatePickerPage';

class Forms extends Component {
        // state = {
        //   response: '',
        //   post: '',
        //   responseToPost: '',
        // };
        
        // componentDidMount() {
        //   this.callApi()
        //     .then(res => this.setState({ response: res.express }))
        //     .catch(err => console.log(err));
        // }
        
        // callApi = async () => {
        //   const response = await fetch('/api/hello');
        //   const body = await response.json();
        //   if (response.status !== 200) throw Error(body.message);
          
        //   return body;
        // };
        
        // handleSubmit = async e => {
        //   e.preventDefault();
        //   const response = await fetch('/api/world', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ post: this.state.post }),
        //   });
        //   const body = await response.text();
          
    //   this.setState({ responseToPost: body });
    // };
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            surname: '',
            email: '',
            response : []
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/users');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log(body)
        return body;
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  handleSubmit = async e  => {
      console.log('A name was submitted: ', this.state);
      const data = { Firstname: this.state.firstname, Lastname: this.state.surname, Email: this.state.email}
      console.log("data", data);

      e.preventDefault();
      const response = await fetch('/users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
      }).then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))
    //   fetch('/api/user', { method: 'POST', 

    // body: JSON.stringify(data), // data can be 'string' or {object}!

    // headers:{ 'Content-Type': 'application/json' } })

    // .then(res => res.json())

    // .catch(error => console.error('Error:', error))

    // .then(response => console.log('Success:', response));
    // e.preventDefault();
  }

  render() {
    return (

      <MDBContainer>
        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
              <p>{this.state.firstname}</p>
              
                {/* <form onSubmit={this.handleSubmit}>
                <p>
                    <strong>Post to Server:</strong>
                </p>
                <input
                    type="text"
                    value={this.state.post}
                    onChange={e => this.setState({ post: e.target.value })}
                />
                <button type="submit">Submit</button>
                </form>
                <p>{this.state.responseToPost}</p> */}
 {/* <p>{this.state}</p> */}
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">

                    <Input
                      label="Your name"
                      icon="user"
                      name='firstname'
                      type="text"
                      value={this.state.firstname}
                      onChange={e => this.handleChange(e)} />

                    <Input
                      label="Your surname"
                      icon="user-shield"
                      type="text"
                      name='surname'
                      value={this.state.surname}
                      onChange={e => this.handleChange(e)} />

                    <Input
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      name='email'
                      value={this.state.email}
                      onChange={e => this.handleChange(e)}
                      validate
                      error="wrong"
                      success="right"
                    />


                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Register
     </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="3"></MDBCol>
        </MDBRow>
      </MDBContainer>

    );
  }
}

export default Forms;


