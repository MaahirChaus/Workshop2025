import React, { useState } from 'react'

function Login() {
  const [forms, setforms] = useState({
      email:"",
      pass:"",
      })

    
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e)=>{
      const {name,value} = e.target;
      setforms ({...forms, [name]: value});
  
      if (errors[name]){
        setErrors({...errors, [name]:""});
      }
    }
  
    const validate = ()=>{
      let newErrors = {};
      if (!forms.email){
        newErrors.email = "Email is required";
      }
      if (!forms.pass){
        newErrors.pass = "Password is required";
      }
      return newErrors;
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const ValidationErrors  = validate();
      if (Object.keys(ValidationErrors).length > 0){
        setErrors(ValidationErrors);
      }else{
        setErrors({});
        alert('Form Submitted')
      }
    }
  
    const handleClear = ()=>{
      setforms ({email:"",pass:""});
      setErrors({});
    }
  
    return (
      <div>

<div className="container-fluid ">
        <div className="row allign-items-center mb-2">
          <div className="col-md-6 d-none d-md-block p-0">
            <img src="images/female-hands-close-up-with-car-keys.jpg" className="img-fluid" />
          </div>
          <div className="col-md-6">

          
        <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid":""}`}
                    id="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Enter Email here "
                    value={forms.email}
                    onChange={handleChange}
                    
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                
                <div htmlFor="pass" className="mb-3">
                  <label className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.pass ? "is-invalid":""}`}
                    id="pass"
                    name="pass"
                    placeholder="Enter your password here "
                    autoComplete="off"
                    value={forms.pass}
                    onChange={handleChange}
                  />
                  {errors.pass && (
                    <div className="invalid-feedback">{errors.pass}</div>
                  )}
                </div>
                  <button type="submit" className="btn btn-primary">
                  Verify
                </button>
                <button onClick={handleClear} type="button" className="btn btn-primary ms-2">
                  Clear
                </button>
              </form>
              </div>
              </div>
              </div>
      </div>
    )
}

export default Login
