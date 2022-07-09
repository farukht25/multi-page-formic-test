import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignUp1 from './components/SignUp1';
import SignUp2 from './components/SignUp2';
import * as Yup from 'yup'
import { Formik, useFormik } from 'formik'
import { useState } from 'react';

function App() {
  const [currentForm, setCurrentForm] = useState(0);
  const forms=[<SignUp formik={formik} />,<SignUp1 formik={formik}/>,<SignUp2 formik={formik}/>];
  const formik=useFormik(
    {
        initialValues:{
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
            name1:"",
            email1:"",
            password1:"",
            confirmPassword1:"",
            name2:"",
            email2:"",
            password2:"",
            confirmPassword2:""
        },
        validationSchema:Yup.object({
            name:Yup.string().min(8,'user name must be atleast 8 chanrecters long').max(15,'user name must be no longer than 15 chanrecters long').required('required'),
            email:Yup.string().email('enter valid email'),
            password:Yup.string().min(8,'length should be between 8 and 15').max(15,'length should be between 8 and 15').required('required'),
            confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('required'),
            name1:Yup.string().min(8,'user name must be atleast 8 chanrecters long').max(15,'user name must be no longer than 15 chanrecters long').required('required'),
            email1:Yup.string().email('enter valid email'),
            password1:Yup.string().min(8,'length should be between 8 and 15').max(15,'length should be between 8 and 15').required('required'),
            confirmPassword1:Yup.string().oneOf([Yup.ref('password1'), null], 'Passwords must match').required('required'),
            name2:Yup.string().min(8,'user name must be atleast 8 chanrecters long').max(15,'user name must be no longer than 15 chanrecters long').required('required'),
            email2:Yup.string().email('enter valid email'),
            password2:Yup.string().min(8,'length should be between 8 and 15').max(15,'length should be between 8 and 15').required('required'),
            confirmPassword2:Yup.string().oneOf([Yup.ref('password2'), null], 'Passwords must match').required('required')
            
        }),
        onSubmit:(values,{ resetForm })=>{
            alert(JSON.stringify(values))
            resetForm();
            setCurrentForm(0)
        }
    }
    

)
const nextPage=()=>{
  setCurrentForm(prev=>prev+1);
}
const prevPage=()=>{
  setCurrentForm(prev=>prev-1);
}
   
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
      {forms[currentForm]}
      {currentForm===0?null:<button onClick={prevPage} type='button'>previous</button>}
      {currentForm===forms.length-1?null: <button onClick={nextPage} type='button'>Next</button>}
      {currentForm===(forms.length-1)? <button type='submit'>Submit</button>:null}
      </form>
    </div>
  );
}

export default App;
