import React from 'react';
import Link from 'next/link';
import { Grid, Card, Button, Image } from 'semantic-ui-react';
// import "../style.css";
const LoginCards = (props) => {
  return (
    <>
    
      <div className='container'>
        <Grid relaxed columns='3' >    
          <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header textAlign='center' marginBottom='2px' style={{color:'black', fontSize:'30px'}}><h2><strong>Patient</strong></h2></Card.Header>
                  <Card.Meta textAlign='center' style={{color:'black', fontSize:'15px'}}>Patient Accounts</Card.Meta>
                  <Image src='patient.png' style={{marginLeft:'15px'}}></Image>
                  <Card.Description style={{color:'black'}}>
                    <ul>
                      <li>Can Sign/Login up as patient</li>
                      <li>Can view/add own records</li>
                      <li>Can grant/revoke permissions to add/view records</li>
                    </ul>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra textAlign='center'>
                  {/* <div className="ui two buttons"> */}
                  <Link href="/medical-records/patient">
                    <a>
                      <Button basic
                      color="#teal" // Change the color
                      className="hover-button"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'teal',
                        borderRadius: '30px',
                        transition: 'background-color 1s ease, color 0.3s ease, border-color 0.3s ease',
                        border: '1px solid #0AA8A7', // Default border
                      }}>
                        Login
                      </Button>
                    </a>
                  </Link>
                  <Link href="/medical-records/patient/signUp">
                    <a>
                      <Button basic
                      className="hover-button"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'teal',
                        borderRadius: '30px',
                        transition: 'background-color 1s ease, color 0.3s ease, border-color 0.3s ease',
                        border: '1px solid #0AA8A7', // Default border
                      }}>
                        Sign Up
                      </Button>
                    </a>
                  </Link>
                  {/* </div> */}
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card > 
                <Card.Content>
                  <Card.Header textAlign='center' marginBottom='3px'><h2><strong>Admin</strong></h2> </Card.Header>
                  <Card.Meta textAlign='center' style={{color:'black', fontSize:'15px'}}>Owner/Medical Council</Card.Meta>
                  <Image  Align='center' src='myadmin.png' height= '160px' width= '235x' style={{marginLeft:'15px'}}></Image>
                  <Card.Description style={{color:'black'}}>
                    <ul>
                      <li>Can add Admins</li>
                      <li>Can remove Admins</li>
                      <li>Owner of the contract can tranfer his ownership</li>
                    </ul>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra textAlign='center'>
                  <Link href="/medical-records/admin">
                    <a>
                      <Button basic
                      // color="#0AA8A7" // Change the color
                      className="hover-button"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'teal',
                        borderRadius: '30px',
                        transition: 'background-color 1s ease, color 0.3s ease, border-color 0.3s ease',
                        border: '1px solid #0AA8A7', // Default border
                      }}>
                        Login
                      </Button>
                    </a>
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
            
            
            <Grid.Column>
              <Card>
                <Card.Content>
                <Card.Header textAlign='center'><h2><strong>Doctor</strong></h2> </Card.Header>
                  <Card.Meta textAlign='center' style={{color:'black', fontSize:'15px'}}>Doctors approved by Medical Council</Card.Meta>
                  <Image src='doctor.png' style={{marginTop: '3px', marginBottom: 'px', marginLeft:'15px'}} height= '160px' width= '235x' ></Image>
                  <Card.Description style={{color:'black'}}>
                    
                    <ul>
                      <li>{`Can view patient's records with permission`}</li>
                      <li>{`Can add patient's records with permission`}</li>
                    </ul>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra textAlign='center'>
                  <Link href="/medical-records/doctor">
                    <a>
                      <Button basic
                      color="teal" // Change the color
                      className="hover-button"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'teal',
                        borderRadius: '30px',
                        transition: 'background-color 1s ease, color 0.3s ease, border-color 0.3s ease',
                        border: '1px solid #0AA8A7', // Default border
                      }}>
                        Login
                      </Button>
                    </a>
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
          {/* <style>{
              .hover-button {
                border-radius: 4px;
                transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
              }

              .hover-button:hover {
                background-color: #f0f0f0;
                color: #000;
                border-color: #ddd;
              }
            }</style> */}
      </div>
      
    </>
  );
};

export default LoginCards;
