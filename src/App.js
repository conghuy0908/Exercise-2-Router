import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login({setUser}) {
  const [emails,setEmails] = useState('')
  const [passwords,setPasswords] = useState('')
  const navigate = useNavigate()

  // const handleSubmit = () =>{
  //   if(emails ){
  //     console.log(emails);
  //   }else {
  //     alert("Email is Wrong");
  //   }
  //   if(passwords === "letmein"){
  //     console.log(passwords);
  //   }else {
  //     alert("Password is Wrong");
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emails,passwords)
    if(!emails|| !passwords) return;
    setUser({emails: emails, passwords: passwords});
    navigate('/em')
};
  return (
    <div className='contanier'>
      <h2>Đăng nhập</h2>
      <label>Email</label>
      <input type='text' className='form-input' value={emails} onChange={(e)=> setEmails(e.target.value)}/>
      <label >Password</label>
      <input type="password"  value={passwords} onChange={(e)=> setPasswords(e.target.value)}/>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}
