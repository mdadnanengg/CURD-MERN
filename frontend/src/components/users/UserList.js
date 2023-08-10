import { Visibility, Edit, Delete } from "@mui/icons-material"
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function UserList() {

    const [user, setUser] = useState([])

    const fetchUser = async () => {
        const response = await fetch('http://localhost:8000/get-user',
            {
                method: "GET"
            }
        )
        const user = await response.json()

        setUser(user)
    }

    const handleDelete = async (deleteId) => {
        console.log('id', deleteId)
        await fetch('http://localhost:8000/delete-user', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id:deleteId})
          })
          
          fetchUser()
    }

    useEffect(() => {
        fetchUser()
    }, [user])

    return (
        <>
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
                            <TableCell align="center" className="tableRowCell">
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            user.map((user, index) => {
                                const id = user._id
                                // console.log(user)
                                return (<>
                                <TableRow>
                            <TableCell align="center">{index+1}</TableCell>
                            <TableCell align="center">{user.name}</TableCell>
                            <TableCell align="center">{user.age}</TableCell>
                            <TableCell align="center">{user.address}</TableCell>
                            <TableCell align="center">
                                <Tooltip title="view">
                                <IconButton>
                                    <Link to={`/View/${id}`}>
                                    <Visibility color="primary"/>
                                    </Link>
                                </IconButton>
                                </Tooltip>
                                <Tooltip title="Edit">
                                <IconButton>
                                    <Link to={`/edit/${id}`}>
                                    <Edit color="secondary"/>
                                    </Link>
                                </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                <IconButton name={id} onClick={()=>{handleDelete(id)}} >
                                    <Delete color="error"/>
                                </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                                </>)
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default UserList