import React from 'react'
import {useForm} from 'react-hook-form'
function Login() {
  let { register,handleSubmit } = useForm()
  
  return (
    
    <div className='container'>
        <div className='row'>
            <div className="col-md-6 col-sm-12 bg-warning">
                <img src='https://thumbs.dreamstime.com/b/login-illustration-letter-cubes-forming-word-36025252.jpg' width="90%" alt="loginpic"/>
            </div>
            <div className="col-md-6 col-sm-12">
                <form className='form bg-light mt-5'>
                    <input type="text" className="mb-3 form-control w-60" placeholder="enter username" {...register("username")}/>
                    <input type="password" className="mb-3 form-control" placeholder="enter password"  {...register("password")}/>
                    <button type='submit' className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login