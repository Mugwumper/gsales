import React from 'react'
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { userEmail } from "../../App";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { fb } from "../../utils/firebase";
import { AuthContext } from "../../App";
import "./style.css";

const INITIAL_STATE = {
  name: "",
  birthday: ""
};

function VendorsPage() {
  let localIsLogged = React.useContext(AuthContext).isLogged;
  console.log("localIsLogged: "+localIsLogged);
  const [people, setPeople] = React.useState([]);
  const [values, setValues] = React.useState(INITIAL_STATE);

  // React.useEffect(() => {
  //   console.log("React.useEffect for family page called..");
  //   console.log("userEmail: " + userEmail);
  //   if (userEmail) loadVendors();
  // }, [values.name, values.birthday]);

  React.useEffect(() => {
    console.log("new useEffect called");
    if (userEmail) loadVendors();
  }, [localIsLogged]);

  function loadVendors() {
    const fbEmail = fb.auth().currentUser.providerData[0].email
    console.log("loadVendors called with email: '"+fbEmail+"'");
    API.getVendors({ email:  fbEmail})
      .then(res =>
        { setPeople(res.data[0].family);
          //console.log("res.data:" + res.data[0] );
          console.log( res.data );
          console.log( people );
        }
      )
      .catch(err => console.log(err));
  };

  function deleteVendor(id) {
    API.deleteFamily({ 
      email: fb.auth().currentUser.providerData[0].email,
      id: id    
    })
    .then(res => this.loadFamily())
    .catch(err => console.log(err));
  };
  
  function handleInputChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  
  function handleFormSubmit(event) {
    event.preventDefault();
    if (values.name && values.birthday) {
      API.saveFamily({
        userEmail: fb.auth().currentUser.providerData[0].email,
        name: values.name,
        birthday: values.birthday
      })
        .then(res => {
          this.loadVendors();
        })
        .catch(err => console.log(err));
    }
  };  

  return (
    <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Add Vendors</h1>
        </Jumbotron>
        <form>
          <Input
            onChange={handleInputChange}
            name="name"
            placeholder="Name (required)"
          />
          <Input
            onChange={handleInputChange}
            name="birthday"
            placeholder="Birthday in ISO 8601 date format (required)"
          />
          <FormBtn
            onClick={handleFormSubmit}
          >
            Add Vendor
          </FormBtn>
        </form>
        <br></br><br></br><br></br>
        <div className="unnamed">
          <form>
            {/* {people.length ? (
              <List>
                {people.map(person => (
                  <ListItem key={person._id}>
                      <strong>
                        {person.name} - {person.birthday}
                      </strong>
                    <DeleteBtn onClick={() => deleteVendor(person._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          </form>
        </div>
      </Col>
    </Row>
  </Container>
  )
}


export default VendorsPage;
