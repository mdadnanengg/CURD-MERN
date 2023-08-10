import { Typography, Box, Grid, TextField, Button, } from "@mui/material";
import { deepPurple, green, orange } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
    const [form, setForm] = useState()
    const fetchUser = async () => {
        const response = await fetch('http://localhost:8000/add-user', {
            method: 'POST',
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(form), // body data type must match "Content-Type" header
        })
        const user = await response.json()
        
        console.log('qwertyui', user)
    }
    
    // useEffect(() => {
        
    // }, [])
    
    const navigate = useNavigate()
    const handleBackToHome = () => {
        navigate("/")
    }
    

const handleChange = (e) => {
    setForm((preFormValue) => (
        {
            ...preFormValue,
            [e.target.name]: e.target.value
        }
        ))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchUser()
        navigate('/')
    }
    
    return (
        <>
        <Box>
            <Typography variant="h2" textAlign='center' mb={2} style={{ backgroundColor: green[400] }}>Add User</Typography>
        </Box>
        <Box m={3} display="flex" justifyContent="flex-end">
            <Button variant="contained"
                color="primary" onClick={handleBackToHome}>
                Back to Home
            </Button>
        </Box>
        <Grid container>
            <Grid item xs={12} sm={12} md={12} xl={12}>
                <form noValidate onSubmit={handleSubmit} method="post">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} xl={12}>
                            <TextField autoComplete="username" name="name" onChange={handleChange}
                                variant="outlined" required fullWidth id="username"
                                label="Name" autoFocus />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} xl={12}>
                            <TextField autoComplete="age" name="age" onChange={handleChange}
                                variant="outlined" required fullWidth id="age"
                                label="Age" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} xl={12}>
                            <TextField autoComplete="address" name="address" onChange={handleChange}
                                variant="outlined" required fullWidth id="address"
                                label="Address" />
                        </Grid>
                    </Grid>
                    <Box m={3}>
                        <Button type="submit" variant="contained"
                            color="primary" fullWidth>
                            Add
                        </Button>
                    </Box>
                </form>
            </Grid>
        </Grid>
    </>
)
}

export default AddUser