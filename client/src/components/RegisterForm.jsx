import React from 'react'
import styles  from './RegisterForm.module.css'
import '../index.css'
import { useContext , useState } from 'react'
import {Appcontext} from '../context/AppContext'
import Form from './Form'
import {useNavigate} from 'react-router-dom'
import validateForm  from '../utils/validateForm'

function RegisterForm() {
  const {user,setuser} =useContext(Appcontext);
	const [name, setName] = useState(user?.name || "");
	const [email, setEmail] = useState(user?.email || "");
	const [username, setUsername] = useState(user?.username || "");
	const [phone, setPhone] = useState(user?.phone || "");
	const [error, setError] = useState();
	const navigate = useNavigate();
  const submitHandler = () => {
		const { valid, invalid } = validateForm(name, email, username, phone);
		if (!valid) {
			setError({ ...invalid });
			return;
		}

		setError(null);
  
		setuser({ name, email, username, phone });
		navigate("/genres");
	};
  return (
   <div className={styles.container}>
      <div className={styles.left}>
          <div className={styles.label}>Discover new things on Superapp</div>
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <h1>Super App</h1>
          <p>Create your new account</p>
        </div>
        <div className={styles.content}>
            <Form 
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            username={username}
            setUsername={setUsername}
            phone={phone}
            setPhone={setPhone}
            error={error}
            setError={setError}
            submitHandler={submitHandler} 
            />
        </div>
        <div className={styles.footer}>
          
          <p>By clicking on Sign up. you agree to Superapp <span> Terms and Conditions of Use</span></p>
          <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
        </div>

      </div>
   </div>
  )
}

export default RegisterForm