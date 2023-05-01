import {Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteContactApi, getContactByIdApi} from "../../Api/contactsApi";
import {getContactsAllLoader} from "../Root";

const Contact = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [contact, setContacts] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getContactByIdApi(params.id).then((res) => {
            setContacts(res?.data || null);
            setLoading(false);

        }).catch(() => {
            navigate('/');
            setLoading(false);
        })
    }, [params.id]); // when params.id is getting changed, the useEffect will fire-up

    const onDelete = () => {
        deleteContactApi(params.id)
            .then(() => {
                getContactsAllLoader().then(() => navigate('/'))
            }).catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            {
                isLoading ? (
                    <>
                        <Box sx={{display: 'flex'}}>
                            <CircularProgress/>
                        </Box>
                    </>
                ) : (
                    <>
                        {contact && (
                            <>
                                <Card sx={{maxWidth: 600}}>
                                    <CardMedia
                                        sx={{height: 300}}
                                        image={contact?.avatar}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {contact?.firstName + ' ' + contact?.lastName}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div">
                                            {contact?.contactNumber}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {contact?.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Edit</Button>
                                        <Button onClick={() => onDelete()} size="small">Delete</Button>
                                    </CardActions>

                                </Card>
                            </>
                        )}
                    </>
                )
            }
        </>
    );
}
export default Contact;