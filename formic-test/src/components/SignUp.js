import React from 'react'



export default function SignUp({formik}) {
    
  return (
    <div className='container border border-warning'>
            <label>Name</label>
            <input name='name' type='text' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
            { formik.touched.name && formik.errors.name?<p className="text-danger">{formik.errors.name}</p>:null}
            <label>Email</label>
            <input name='email' type='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
            { formik.touched.email && formik.errors.email?<p className="text-danger">{formik.errors.email}</p>:null}
            <label>Password</label>
            <input name='password' type='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
            { formik.touched.password && formik.errors.password?<p className="text-danger">{formik.errors.password}</p>:null}
            <label>confirm Password</label>
            <input name='confirmPassword' type='password' onChange={formik.handleChange} value={formik.values.confirmPassword}
             onBlur={formik.handleBlur}/>
            { formik.touched.confirmPassword && formik.errors.confirmPassword?<p className="text-danger">{formik.errors.confirmPassword}</p>:null}
            
        
    </div>
  )
}
