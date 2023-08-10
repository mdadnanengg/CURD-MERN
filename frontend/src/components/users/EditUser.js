import { Typography, Box, Grid, TextField, Button, } from "@mui/material";
import { green } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddUser() {
    let { id } = useParams();
    // console.log(id)
    const [user, setUser] = useState([])

    const fetchUser = async () => {
        const response = await fetch('http://localhost:8000/get-one-user',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _id: id }),
            }
        )
        const user = await response.json()
        const fetchedUser = user;
        setUser(fetchedUser)
        setUpdateForm(fetchedUser[0])
        console.log('user', user[0])
    }


    // const [form, setForm] = useState()
    const [updateForm, setUpdateForm] = useState()
    const updateUser = async () => {
        console.log('updateUser')
        const response = await fetch('http://localhost:8000/update-user', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateForm),
        })
        const user = await response.json()

        console.log('user', user)

        // console.log('qwertyui', user)
    }

    const navigate = useNavigate()
    const handleBackToHome = () => {
        navigate("/")
    }


    useEffect(() => {
        fetchUser()
    }, [])


    const handleChange = (e) => {

        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setUpdateForm((preFormValue) => (
            {
                ...preFormValue,
                _id: id,
                [fieldName]: fieldValue
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateUser()
        navigate('/')
    }

    console.log('update', updateForm)
    return (
        <>
            <Box>
                <Typography variant="h2" textAlign='center' mb={2} style={{ backgroundColor: green[400] }}>Edit User</Typography>
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
                        {user.map((user, index) => {
                            if (user._id === id) {
                                return (<>
                                    <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} xl={12}>
                                <TextField autoComplete="username" name="name" onChange={handleChange}
                                    variant="outlined" required fullWidth id="username"
                                    // placeholder={updateForm.name}
                                    defaultValue={user.name}
                                    // value={user.name}
                                    label="Name" autoFocus />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} xl={12}>
                                <TextField autoComplete="age" name="age" onChange={handleChange}
                                    variant="outlined" required fullWidth id="age"
                                    defaultValue={user.age}
                                    label="Age" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} xl={12}>
                                <TextField autoComplete="address" name="address" onChange={handleChange}
                                    variant="outlined" required fullWidth id="address"
                                    defaultValue={user.address}
                                    label="Address" />
                            </Grid>
                        </Grid>
                                </>)
                            }
                        })
                        }

                        <Box m={3}>
                            <Button type="submit" variant="contained"
                                color="primary" fullWidth>
                                Update
                            </Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}

export default AddUser