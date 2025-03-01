import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Password from '../../components/inputs/Password';
import { Link, useNavigate } from 'react-router-dom';
import { checkMail, registerUser } from '../../redux/features/auth/authService';
import { toast } from "react-toastify"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SET_LOGIN, SET_NAME, SET_USER } from '../../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner';
import logo from '../../assets/StockPilot_noBg.png'


const Register = () => {
        const [userData, setUserData] = useState({ name:"", email: "", password:"", confirmPassword:"" })
        const [isLoading, setIsLoading] = useState(false)
        const dispatch = useDispatch()
        const navigate = useNavigate()

        const handleFormChange = (event)=>{
            const { name, value} = event.target

            setUserData({ ...userData, [name]: value })
            
        }

        const handleSubmit = async (e)=>{
            e.preventDefault()
            setIsLoading(true)
            if(userData.password !== userData.confirmPassword){
                return toast.error("confirm password does not match")
            }

            if(!checkMail(userData.email)){
                return toast.error("invalid email")
            }

            if(userData.password.length < 6){
                return toast.error("password length must be 6 and above")
            }

            const data = await registerUser(userData)
            
           await dispatch(SET_LOGIN(true))
           await dispatch(SET_NAME(data.name))
            navigate('/dashboard')

            setIsLoading(false)

        } 
    

  return (
    <Paper sx={{ padding:8 }} elevation={4}>
    <Spinner isLoading={isLoading} />
        {isLoading && <h1 className='text-6xl text-green-500'>Loading...</h1>}
            <div className='flex flex-col justify-center items-center '>

            <Card  sx={{ maxWidth:"400px" }} >
                <CardMedia
                    sx={{ height: 50 }}
                    image={logo}
                    title="Register"
                />
                <CardHeader 
                    title="Register"
                />
                <CardContent>
                    <form onSubmit={handleSubmit} >
                        
                        <FormControl sx={{ justifyContent:"center", width:300 }}>

                            <TextField required  margin='dense' label="Name" variant="standard" name='name' value={userData.name} onChange={handleFormChange} />
                            
                            <TextField required margin='normal' type="email" label="Email" variant="standard" name='email' value={userData.email} onChange={handleFormChange} />
                        
                            <Password type="standard" required id='standard-required' text="Password" name='password' value={userData.password} onChange={handleFormChange} />
                            <Password required id='outlined-required' text="Confirm Password" name='confirmPassword' value={userData.confirmPassword} onChange={handleFormChange}  />

                        </FormControl>
                        <Button type='submit' variant="outlined">Submit</Button>

                    </form>
                </CardContent>
                    <CardActions>
                        <Link to="/">
                            <Button size="small">Home</Button>
                        </Link>
                        <p>Already have an account</p>
                        <Link to="/login">
                            <Button size="small">Login</Button>
                        </Link>
                    </CardActions>
            </Card>
            </div>
       
      
    </Paper>
  )
}

export default Register