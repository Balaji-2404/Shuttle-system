import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter id="about" className='text-center mt-5' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/VITuniversity/' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/vit_univ' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/vellore_vit/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/school/vellore-institute-of-technology/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

        </section>

        

        <section className='mb-4'>
          <h1>VIT - A place to learn, A Chance to grow
          </h1>
        </section>

        
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright : 
        <a className='text-white' href='https://mdbootstrap.com/'>
           VIT 
        </a>
      </div>
    </MDBFooter>
  );
}