import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
// import DatePicker from '@mui/lab/DatePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';


import { useState } from 'react'
import axios from 'axios';
import { PersonalVideo } from '@mui/icons-material';

const link = 'localhost:3001/api/student'
const AdminForm = () => {
    const [personDetails, setPersonalDetails] = useState({
        name: "",
        personalPhone: "",
        localPhone: "",
        personalEmail: "",
        localEmail: "",
        joinDate: "",
        secret: "",

    })

    const [institute, setInstitute] = useState({
        name: "",
        estd: "",
        creator: "",
        headTeacher: ""
    })

    const create = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/admin/signup', { ...personDetails, ...institute }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => console.log(response))
            .catch(err => console.log(err.response.data.message))
    }
    const handleIns = (e) => {
        setInstitute({
            ...institute,
            [e.target.name]: e.target.value
        })
    }

    const handlePersonalInput = (e) => {

        setPersonalDetails({
            ...personDetails,
            [e.target.name]: e.target.value
        })
    }


    const { name, personalPhone, personalEmail, localemail, localPhone, gender, joinDate } = personDetails;
    const { name: iName, estd, creator, headTeacher } = institute

    return (
        <Container maxWidth="sm" >
            <h2 style={{ color: 'gray' }} >
                Create Account By Admin
            </h2>
            <h4 style={{ color: 'gray' }} >
                Personal Details
            </h4>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                <TextField name="name" type="text" value={name} onChange={handlePersonalInput} id="standard-basic" label="Full Name" variant="standard" />
                <TextField name="localPhone" value={localPhone} type="number" onChange={handlePersonalInput} id="standard-basic" label="Local Phone Number" variant="standard" />
                <TextField name="personalPhone" value={personalPhone} type="number" onChange={handlePersonalInput} id="standard-basic" label="Personal Phone Number" variant="standard" />
                <TextField name="localEmail" value={localemail} type="email" onChange={handlePersonalInput} id="standard-basic" label="Local Email" variant="standard" />
                <TextField name="personalEmail" value={personalEmail} type="email" onChange={handlePersonalInput} id="standard-basic" label="Personal Email" variant="standard" />
                <TextField type="password" name="secret" onChange={handlePersonalInput} id="standard-basic" label="Password" variant="standard" />

                <RadioGroup
                    aria-label="gender"
                    defaultValue="other"
                    name="gender"
                    onChange={handlePersonalInput}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                <TextField type="date" name="joinDate" onChange={handlePersonalInput} value={joinDate} />

                <br />
                <br />
                <h4 style={{ color: 'gray' }} >
                    Institute Details
                </h4>

                <TextField type="text" name="name" onChange={handleIns} value={iName} id="standard-basic" label="Name" variant="standard" />
                <TextField type="text" name="creator" onChange={handleIns} value={creator} id="standard-basic" label="Creator" variant="standard" />
                <TextField type="text" name="headTeacher" onChange={handleIns} value={headTeacher} id="standard-basic" label="Head Teacher" variant="standard" />
                <TextField type="date" name="estd" onChange={handleIns} value={estd} />

                <br />
                <br />



            </Box>
            <Button onClick={create} variant="contained" color="success">
                Submit
            </Button>
        </Container>
    );
}

export default AdminForm


const setValue = () => {

}