import {Button, Card, CardContent, TextField, Box,} from "@mui/material";
import {useState} from "react";
import {addContact, contactArray} from "../Util/helper";
import {useNavigate} from "react-router-dom";
const CreateEdit = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        description: '',
    });

    const onSave = () => {
        const newId = parseInt(contactArray.reverse()[0].id) + 1
        const newData = {
            ...formData,
            id: newId,
        }
        addContact(newData);
        navigate(-1);
    }
    const onChange = (fieldId, value) => {
        const newFormData = {...formData, [fieldId]: value};
        setFormData(newFormData);
    }

    return (
        <Card sx={{maxWidth: 600}}>
            <CardContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '50ch'},
                        '& .MuiButton-contained': {m: 1},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="firstName"
                            label="First Name"
                            variant="outlined"
                            onBlur={(event) => onChange(event.target.id, event.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            id="lastName"
                            label="Last Name"
                            variant="outlined"
                            onBlur={(event) => onChange(event.target.id, event.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            id="phoneNumber"
                            label="Phone Number"
                            variant="outlined"
                            onBlur={(event) => onChange(event.target.id, event.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            rows={4}
                            variant="outlined"
                            onBlur={(event) => onChange(event.target.id, event.target.value)}
                        />
                    </div>
                    <div>
                        <Button onClick={() => onSave()} color="primary" variant="contained">Save</Button>
                        {/*<Button size="small">Edit</Button>*/}
                        {/*<Button size="small">Delete</Button>*/}
                    </div>
                </Box>
            </CardContent>
        </Card>
    )
}

export default CreateEdit;