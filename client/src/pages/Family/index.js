import React from "react";
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

//const INITIAL_STATE = { vendorName: "" };

function VendorAdd() {
  let localIsLogged = React.useContext(AuthContext).isLogged;
  console.log("localIsLogged: " + localIsLogged);
  const [people, setPeople] = React.useState([]);
  const [vendorName, setVendorName] = React.useState('');

  React.useEffect(() => {
    console.log("useEffect for localIsLogged called...");
    if (userEmail) loadVendors();
  }, [localIsLogged]);

  function loadVendors() {
    console.log("loadVendors called");
    API.getVendor({ email: fb.auth().currentUser.providerData[0].email })
      .then(res => {
        setPeople(res.data[0].vendors);
        console.log(res.data[0].vendors);
      })
      .catch(err => console.log(err));
  }

  function deleteVendor(id) {
    API.deleteVendor({
      email: fb.auth().currentUser.providerData[0].email,
      id: id
    })
      .then(loadVendors())
      .catch(err => console.log(err));
  }

  function addVendor(vname) {
    API.saveVendor({
      userEmail: fb.auth().currentUser.providerData[0].email,
      name: vname
    })
      .then()
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
      setVendorName(event.target.value);
  };

  function clearForm(event) {
    setVendorName('');
  }

  // create a new vendor
  function handleFormSubmit(event) {
    event.preventDefault();
    if (vendorName) {
      addVendor(vendorName);
      clearForm();
      loadVendors();
    }
  }

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
              value={vendorName}
              placeholder="Name (required)"
            />
            <FormBtn onClick={handleFormSubmit}>Add Family Member</FormBtn>
          </form>
          <br></br>
          <br></br>
          <br></br>
          <div className="collectEvents">
            <form>
              {people.length ? (
                <List>
                  {people.map(person => (
                    <ListItem key={person._id}>
                      <strong>{person.name}</strong>
                      <DeleteBtn onClick={() => deleteVendor(person._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </form>
            <button onClick={loadVendors}>call loadVendors()</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default VendorAdd;
