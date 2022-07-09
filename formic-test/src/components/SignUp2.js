import React from 'react'



export default function SignUp2({formik}) {
    
  return (
    <div className='container border border-secondary'>
            <label>Name2</label>
            <input name='name2' type='text' onChange={formik.handleChange} value={formik.values.name2} onBlur={formik.handleBlur}/>
            { formik.touched.name2 && formik.errors.name2?<p className="text-danger">{formik.errors.name2}</p>:null}
            <label>Email2</label>
            <input name='email2' type='email' onChange={formik.handleChange} value={formik.values.email2} onBlur={formik.handleBlur}/>
            { formik.touched.email2 && formik.errors.email2?<p className="text-danger">{formik.errors.email2}</p>:null}
            <label>Password2</label>
            <input name='password2' type='password' onChange={formik.handleChange} value={formik.values.password2} onBlur={formik.handleBlur}/>
            { formik.touched.password2 && formik.errors.password2?<p className="text-danger">{formik.errors.password2}</p>:null}
            <label>confirm Password2</label>
            <input name='confirmPassword2' type='password' onChange={formik.handleChange} value={formik.values.confirmPassword2}
             onBlur={formik.handleBlur}/>
            { formik.touched.confirmPassword2 && formik.errors.confirmPassword2?<p className="text-danger">{formik.errors.confirmPassword2}</p>:null}
            
    </div>
  )
}
