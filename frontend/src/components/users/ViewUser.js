import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material"
import { orange } from "@mui/material/colors"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


function ViewUser() {

    const [user, setUser] = useState([])
    const navigate = useNavigate()
    let { id } = useParams();

    // console.log('id', id)

    const handleBackToHome = () => {
        navigate("/")
    }

    const fetchUser = async () => {
        const response = await fetch('http://localhost:8000/get-user',
            {
                method: "GET"
            }
        )
        const user = await response.json()

        setUser(user)
    }

    useEffect(() => {
        fetchUser()
    }, [])


    return (
        <>
            <Box>
                <Typography variant="h2" textAlign='center' style={{ backgroundColor: orange[400] }}>User Details</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#616161" }}>
                            <TableCell align="center" className="tableRowCell">
                                No
                            </TableCell>
                            <TableCell align="center" className="tableRowCell">
                                Name
                            </TableCell>
                            <TableCell align="center" className="tableRowCell">
                                Age
                            </TableCell>
                            <TableCell align="center" className="tableRowCell">
                                Address
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {
                user.map((user, index) => {
                    
                    if (user._id == id) {
                        return (<>
                            <TableBody>
                                <TableRow key={index}>
                                    <TableCell align="center">{index+1}</TableCell>
                                    <TableCell align="center">{user.name}</TableCell>
                                    <TableCell align="center">{user.age}</TableCell>
                                    <TableCell align="center">{user.address}</TableCell>
                                </TableRow>
                            </TableBody>
                            </>)
                    }
                })
            }
                </Table>
            </TableContainer>
            <Box m={3} textAlign="center">
                <Button variant="contained"
                    color="primary" onClick={handleBackToHome}>
                    Back to Home
                </Button>
            </Box>
        </>
    )
}

export default ViewUser