import React, { useState } from 'react'

function Register() {

  const [forms, setforms] = useState({
    name: "",
    email:"",
    mob:"",
    mess:""
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
    if (!forms.name.trim()){
      newErrors.name = "Name is required";
    }
    if (!forms.email.trim()){
      newErrors.email = "Email is required";
    }
    if (!forms.mob.trim()){
      newErrors.mob = "Mobile no. is required";
    }
    if (!forms.pass.trim()){
      newErrors.pass = "Password is required";
    }
    if (!forms.confpass.trim()){
      newErrors.confpass = "Password is required";
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
    setforms ({name:"",email:"",mob:"",pass:"",confpass:""});
    setErrors({});
  }

  return (
    <div>

<div className="container-fluid ">
        <div className="row allign-items-center mb-2">
          <div className="col-md-6 d-none d-md-block p-0">
            <img src="images/female-mechanic-preparing-check-list.jpg" className="img-fluid" />
          </div>
          <div className="col-md-6">

          
        <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="name"
                    className={`form-control ${errors.name ? "is-invalid":""}`}
                    id="name"
                    name="name"
                    placeholder="Enter Name here "
                    autoComplete="off"
                    value={forms.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
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
                <div className="mb-3">
                  <label htmlFor="mob" className="form-label">
                    Mobile no.:
                  </label>
                  <input
                    type="mob"
                    className={`form-control ${errors.mob ? "is-invalid":""}`}
                    id="mob"
                    name="mob"
                    autoComplete="off"
                    placeholder="Enter Mobile no. here "
                    value={forms.mob}
                    onChange={handleChange}
                  />
                  {errors.mob && (
                    <div className="invalid-feedback">{errors.mob}</div>
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
                <div htmlFor="confpass" className="mb-3">
                  <label className="form-label">
                    Confirm Your Password:
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.confpass ? "is-invalid":""}`}
                    id="confpass"
                    name="confpass"
                    placeholder="Enter same password here "
                    autoComplete="off"
                    value={forms.confpass}
                    onChange={handleChange}
                  />
                  {errors.confpass && (
                    <div className="invalid-feedback">{errors.confpass}</div>
                  )}
                </div>
                  <button type="submit" className="btn btn-primary">
                  Submit
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

export default Register
