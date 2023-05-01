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
import {Outlet, useLoaderData, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getAllContactsApi} from "../../Api/contactsApi";


export async function getContactsAllLoader() {
    const response = await getAllContactsApi();
    console.log("trigger", response.data);
    return {contacts: response.data, otherData: []};
}

const Root = () => {

    const navigate = useNavigate();
    const {contacts} = useLoaderData();

    const onItemClick = (id = null) => {
        if (id) {
            navigate(`contacts/${id}`);
        } else
            navigate(`contacts/create`);
    }

    useEffect(() => {
        // console.log(contacts);
    });

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
                                        <Avatar src={contact.avatar}/>
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