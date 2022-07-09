import React from 'react'



export default function SignUp1({formik}) {
    
  return (
    <div className='container border border-primary'>
            <label>Name1</label>
            <input name='name1' type='text' onChange={formik.handleChange} value={formik.values.name1} onBlur={formik.handleBlur}/>
            { formik.touched.name1 && formik.errors.name1?<p className="text-danger">{formik.errors.name1}</p>:null}
            <label>Email1</label>
            <input name='email1' type='email' onChange={formik.handleChange} value={formik.values.email1} onBlur={formik.handleBlur}/>
            { formik.touched.email1 && formik.errors.email1?<p className="text-danger">{formik.errors.email1}</p>:null}
            <label>Password1</label>
            <input name='password1' type='password' onChange={formik.handleChange} value={formik.values.password1} onBlur={formik.handleBlur}/>
            { formik.touched.password1 && formik.errors.password1?<p className="text-danger">{formik.errors.password1}</p>:null}
            <label>confirm Password1</label>
            <input name='confirmPassword1' type='password' onChange={formik.handleChange} value={formik.values.confirmPassword1}
             onBlur={formik.handleBlur}/>
            { formik.touched.confirmPassword1 && formik.errors.confirmPassword1?<p className="text-danger">{formik.errors.confirmPassword1}</p>:null}
            
    </div>
  )
}
