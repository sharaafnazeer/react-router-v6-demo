import {
    Avatar,
    Box, Button,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField
} from "@mui/material";
import {Folder} from "@mui/icons-material";
import {Outlet, useNavigate} from "react-router-dom";
import {contactArray} from "../Util/helper";
import {useEffect, useState} from "react";

const Root = (effect, deps) => {

    const navigate = useNavigate();
    const [contacts, setContacts] = useState(contactArray);

    useEffect(() => {
        setContacts(contactArray);
    }, [contactArray])

    const onItemClick = (id = null) => {
        if (id) {
            navigate(`contacts/${id}`);
        } else
            navigate(`contacts/create`);
    }

    return (

        <Box
            sx={{
                padding: '1rem',
                marginTop: '1rem',
            }}
        >
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={3}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <TextField sx={{marginBottom: '1rem'}} fullWidth id="search" label="Search"
                                       variant="outlined"/>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => onItemClick()} variant="contained">New</Button>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <List>
                        {
                            contacts.map((contact) => (
                                <ListItem key={contact.id} onClick={() => onItemClick(contact.id)}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Folder/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={contact.firstName + ' ' + contact.lastName}
                                        // secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>
                            ))
                        }
                    </List>
                </Grid>
                <Grid
                    item
                    xs={9}
                >
                    <Outlet/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Root