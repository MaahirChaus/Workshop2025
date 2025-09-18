import React from 'react';
import { useNavigate } from 'react-router-dom';


function Error() {
  const navigate = useNavigate();

//const handleClick = () => {
 //   navigate('/');
  //};

  return (
    <div>
      <div className="error">
        <div className='error-title'>
          <div className='row '>
            <div className='col-5 d-block mx-auto mt-0'>
          <img 
          src='images/error.jpg'
          className="img-fluid "
          alt="Centered Responsive"
          />
          </div>
          </div>
          <div className='row '>
            <div className="col text-center mb-4">  
          <button 
          onClick={() => navigate('/')}
          type="button" 
          class="btn btn-outline-danger mt-3">
          Back to home
          </button>
          </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Error
