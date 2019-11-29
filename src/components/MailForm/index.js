import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class MailForm extends React.Component {

    constructor (props) {

        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            emailAddress : '', 
            emailText : '',
            emailSent : false
        }
    }

    

    handleChange = event => { 
        this.setState( {
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = event =>  { 
        event.preventDefault();
        const templateId = 'template_AfubdRO4';

        this.sendFeedback(templateId, { message_html: this.state.emailText, from_name: this.state.emailAddress, reply_to: "jose@engjoserobles.com"})
      }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!');
            this.setState ( {
              emailSent : true
            })
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('EmailJS sendmail failed. Here some thoughts on the error that occured:', err))
      }


  render() { 

   return (
   
     <Form onSubmit={ this.handleSubmit }>
      <FormGroup row>
        <Label for="emailAddress" sm={2}>Email</Label>
        <Col sm={10}>
          <Input 
          type="email" 
          name="emailAddress" 
          id="emailAddress" 
          placeholder="Enter Your Email Address"
          value={ this.state.emailAddress } 
          onChange={ this.handleChange } />
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="emailTest" sm={2}>Message</Label>
        <Col sm={10}>
          <Input 
           type="textarea" 
           name="emailText" 
           id="emailText" 
           value={ this.state.emailText } 
           onChange={ this.handleChange }/>
        </Col>
      </FormGroup>
      
      <FormGroup check row>
        <Col sm={{ size: 9, offset: 1 }}>
          <Button type="submit">
            Submit
          </Button>
          <span className="ml-3">{this.state.emailSent ? "Message Sent!" : "" }</span>
        </Col>
      </FormGroup>
    </Form>
  );
  }
}

export default MailForm;