import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRadio,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";

export default function CardWithFeedback() {
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="6">
          <MDBCard>
            <MDBCardBody>
              <div className="text-center">
                <MDBIcon far icon="" size="4x" />
                <p>
                  <strong>You Elected Official Has an Upcoming Vote</strong>
                </p>
                <p>
                  Bill Number
                  <strong>Bill name</strong>
                </p>
              </div>

              <hr />

              <form className="px-4" action="">
                <p className="text-center">
                  <strong>Your Voting Preference:</strong>
                </p>
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Yes"
                  className="mb-2"
                  defaultChecked
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="No"
                  className="mb-2"
                />
               
                <p className="text-center">
                  <strong>Enter and optional comment</strong>
                </p>
                <MDBTextArea className="mb-4" label='Optional' id='textAreaExample' rows={4} />
              </form>
            </MDBCardBody>
            <MDBCardFooter>
              <div className="text-end">
                <MDBBtn>Submit</MDBBtn>
              </div>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}