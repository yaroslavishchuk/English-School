import React, {Component} from 'react';
import './App.css';


class App extends Component {

      constructor(){
          super()
          this.state = {  
              submitButton: false,
              nameChecker:false,
              secondNameChecker: false,
              emailChecker: false,
              phoneNumberChecker: false,
              passwordChecker: false,
              fields: {
                  name:"",
                  secondName:"",
                  email:"",
                  phoneNumber:"",
                  pass:""
              },
              errors: {
                  nameState:{
                    name:true,
                    errorMessage:"invalid name",                  
                  },
                  secondNameState:{
                    secondName:true,
                    errorMessage:"invalid second name",                   
                  },
                  emailState:{
                    email:true,
                    errorMessage:"invalid email",                    
                  },
                  phoneNumberState:{
                    phoneNumber:true,
                    errorMessage:"phone number must contain +380",                    
                  },
                  passwordState:{
                    password:true,
                    errorMessage:"password must contain at least 8 characters",                    
                  }  
              }
          }
          this.handleSubmit = this.handleSubmit.bind(this)
          this.handleChange = this.handleChange.bind(this)

      }
  handleChange(event){
    
            const {name, value} = event.target;
            let fieldsHolder = this.state.fields
            fieldsHolder[name] = value
               
            let errors2 = this.state.errors
                    console.log(errors2)
            if(fieldsHolder["name"].length === 0){
                errors2["nameState"].name = true                
             }
            else{
                let match = /^[A-Z]\w+$/
            if(!match.test(fieldsHolder["name"])){
                  errors2["nameState"].name = true                 
            }else{
                  errors2["nameState"].name = false    
             }       
             }
            if (fieldsHolder["secondName"].length === 0){
                errors2["secondNameState"].secondName = true
            }else{
              let match = /^[A-Z]\w+$/
              if(!match.test(fieldsHolder["secondName"])){
                errors2["secondNameState"].secondName = true
            }else{
                errors2["secondNameState"].secondName = false
             }
             }
            if(fieldsHolder["email"].length === 0){
                errors2["emailState"].email = true    
            }else{
              let match = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
              if(!match.test(fieldsHolder["email"])){
                errors2["emailState"].email = true
            }else{              
                errors2["emailState"].email = false
             }
             }
             if(fieldsHolder["phoneNumber"].length === 0 ){
               errors2["phoneNumberState"].phoneNumber = true    
            }else{
              let match = /^\+380\d+$/
              if(!match.test(fieldsHolder["phoneNumber"])){
                 errors2["phoneNumberState"].phoneNumber = true
            }else{              
                 errors2["phoneNumberState"].phoneNumber = false
             }
             } 
             if(fieldsHolder["pass"].length === 0 ){
                errors2["passwordState"].password = true
            }else{
              let match = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
            if(!match.test(fieldsHolder["pass"])){                
                 errors2["passwordState"].password = true
            }else{              
                 errors2["passwordState"].password = false
             }
             }
            this.setState({
              errors: errors2
            })
           }
      
           handleSubmit(event){
                

                let name = this.state.errors.nameState["name"]
                let secondName = this.state.errors.secondNameState["secondName"]
                let email = this.state.errors.emailState["email"]
                let phoneNumber = this.state.errors.phoneNumberState["phoneNumber"]
                let password = this.state.errors.passwordState["password"]
                if(!name && !secondName && !email && !phoneNumber && !password){
                  this.setState({
                    // submitButton:true                    
                })          
                }else{
                  this.setState({
                    submitButton:false
                })       
                }
                  
                this.setState({

                    nameChecker:name,
                    secondNameChecker:secondName,
                    emailChecker:email,
                    phoneNumberChecker:phoneNumber,
                    passwordChecker:password

                })                         
           }
render(){
     
   return (
<div className="App-main">
      <h1>WORKERs</h1>   
      <div>
      <form className="App-form" action="/registerUser"  method="post">
          <span>{this.state.nameChecker ? this.state.errors.nameState["errorMessage"]: ""}</span>
          <br/>
          <input onChange={this.handleChange} placeholder="Name" type="text" name="name"/>
          <br/>
          <span>{this.state.secondNameChecker ? this.state.errors.secondNameState["errorMessage"]: ""}</span>
          <br/>
          <input onChange={this.handleChange} placeholder="Second Name" type="text" name="secondName"/>
          <br/>
          <span>{this.state.emailChecker ? this.state.errors.emailState["errorMessage"]: ""}</span>
          <br/>
          <input onChange={this.handleChange} placeholder="Email" type="text" name="email"/>
          <br/>
          <span>{this.state.phoneNumberChecker ? this.state.errors.phoneNumberState["errorMessage"]: ""}</span>
          <br/>
          <input onChange={this.handleChange} placeholder="Phone number (+380)" type="text" name="phoneNumber"/>
          <br/>
          <span>{this.state.passwordChecker ? this.state.errors.passwordState["errorMessage"]: ""}</span> 
          <br/>  
          <input onChange={this.handleChange} placeholder="Password" type="password" name="pass"/>
          <br/>	
          <input onClick={this.handleSubmit} id="submitButton" type={this.state.submitButton ? "submit" : "button"} value="Create account" />
      </form>
      </div>    
    </div> 
  );
}
}
export default App;
