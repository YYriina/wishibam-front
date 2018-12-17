import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

class App extends Component {

  render() {
    return (
      <div className="App container">
        <h1> Hello World</h1>
        <p> Enter your private informations to register to client's side</p>
        <Form className="container-fluid"/>
      </div>
    ); 
  }
}


class Form extends Component {

  state={
    firstName:"",
    lastName:"",
    email:"",
    company:"",
    phone:"",
    subject:"",
    message:""
  }


  handleSendForm=(data)=>{
    const { firstName, lastName, email, company, phone, subject, message } = this.state;

    if(firstName !== "" && lastName !== "" && email !== "" && company !== "" && phone !== "" && subject !== "" && message !== ""){
      axios({
        method: 'post',
        url: 'http://localhost:3131/profil/',
        data: this.state
      }).then((response)=>{
        console.log(response)
        window.location.reload();
      });
    }
    else{
      alert('all the inputs are required!')
    }
  }

  render() {
    console.log(this.state)
    const { firstName, lastName, email, company, phone, subject, message } = this.state;
    return (
      <section>
        <div class="form-group row">
          <label for="example-text-input" class="col-2 col-form-label">Prénom : </label>
          <div class="col-10">
            <input class="form-control" type="text" value={firstName} onChange={(event)=>this.setState({firstName:event.target.value})}/>
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-2 col-form-label">Nom :</label>
          <div class="col-10">
            <input class="form-control" type="text" value={lastName} onChange={(event)=>this.setState({lastName:event.target.value})} />
          </div>
        </div>
        <div class="form-group row">
          <label for="example-email-input" class="col-2 col-form-label">Email :</label>
          <div class="col-10">
            <input class="form-control" type="text" value={email} onChange={(event)=>this.setState({email:event.target.value})}/>
          </div>
        </div>
        <div class="form-group row">
          <label for="example-url-input" class="col-2 col-form-label">Company :</label>
          <div class="col-10">
            <input class="form-control" type="text" value={company} onChange={(event)=>this.setState({company:event.target.value})}/>
          </div>
        </div>
        <div class="form-group row">
          <label for="example-tel-input" class="col-2 col-form-label">Telephone :</label>
          <div class="col-10">
            <input class="form-control" type="tel" value={phone}  onChange={(event)=>this.setState({phone:event.target.value})}/>
          </div>
        </div>
        <div class="form-group row">
          <label for="example-password-input" class="col-2 col-form-label">Sujet :</label>
          <div class="col-10">
            <input class="form-control" type="text" value={subject} onChange={(event)=>this.setState({subject:event.target.value})}/>
          </div>
        </div>
        <div class="form-group row">
          <label for="example-number-input" class="col-2 col-form-label">Message :</label>
          <div class="col-10">
            <input class="form-control" type="text" value={message} onChange={(event)=>this.setState({message:event.target.value})}/>
          </div>
        </div>

        <div>
          <input className="button" type="button" value="send" onClick={this.handleSendForm}/>
        </div>
      </section>
    )
  }
}

export default App; 