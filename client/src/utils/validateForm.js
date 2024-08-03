const validateForm=(name,email,username,phone)=>{

  let valid = true;
  let invalid = {
      name: false,
      email: false,
      username: false,
      phone: false,
  };
  if(!name || !email || !username || !phone){
    valid = false;
        invalid = {
            name: !name,
            email: !email,
            username: !username,
            phone: !phone,
        };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
  const phoneRegex = /^\d{10}$/;
  if(!emailRegex.test(email) || !phoneRegex.test(phone)){
    invalid = {
      ...invalid,
      email: !emailRegex.test(email),
      phone: !phoneRegex.test(phone),
  };
  valid = false;
  }
  return ({
    valid,invalid
  }
  )
}
export default validateForm;