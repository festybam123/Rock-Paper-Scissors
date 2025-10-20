import React,{useSate} from 'react'

const login = () => {
    const [username ,setUsername] = useSate('');
    const [password ,setPassword] = useSate('');
    const [error, setError] = useSate('');

    const handleSubmit = (e) =>{
      e.preventDefault();
      if (username === "festus" && password === "festybam"){
        alert('login success')
        error()
      }else(username != "festus" && password != "festybam")
      alert("password incorrect")
    }
  return (
    <form action="submit" onSubmit={handleSubmit}>
       <div>
         <label htmlFor="username">Username:</label>
         <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

         <label htmlFor="password">Password:</label>
         <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       </div>
    </form>
  )
}

export default sample