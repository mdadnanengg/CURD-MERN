import { Box, Button, Grid, Typography } from "@mui/material"   
import { orange } from "@mui/material/colors"
import { useNavigate } from "react-router-dom"
import UserList from "../users/UserList"

function Home() {
    const navigate = useNavigate()
    const handleAdd = () => {
        navigate("/add-user")
    } 
  return (
    <>
    <Box>
    <Typography variant="h2" textAlign='center' mb={2} style={{ backgroundColor: orange[400]}}>Student List</Typography>
    </Box>
    <Box m={3} display="flex" justifyContent="flex-end">
        <Button variant="contained"
        color="primary" onClick={handleAdd}>
            Add
        </Button>
    </Box>  
    <Grid container>
        <Grid item xs={12} sm={12} md={12} xl={12}>
            <UserList/>
        </Grid>
    </Grid>
    </>
  )
}

export default Home