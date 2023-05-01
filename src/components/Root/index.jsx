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
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllContacts} from "../../store/contactSlice";

const Root = () => {

    const navigate = useNavigate();
    const contacts = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();

    const onItemClick = (id = null) => {
        if (id) {
            navigate(`contacts/${id}`);
        } else
            navigate(`contacts/create`);
    }

    useEffect(() => {
        dispatch(getAllContacts())
    }, [dispatch]);

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
                    {/*<Grid container spacing={2}>*/}
                    {/*    <Grid item>*/}
                    {/*        <Button onClick={() => onBtnClick('decrement')} variant="contained">Decrement</Button>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item>*/}
                    {/*        <Button onClick={() => onBtnClick('increment')} variant="contained">Increment</Button>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item>*/}
                    {/*        <Button onClick={() => onBtnClick('increment-100')} variant="contained">Increment by*/}
                    {/*            100</Button>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item>*/}
                    {/*        <Typography varient="h4">{value}</Typography>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
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