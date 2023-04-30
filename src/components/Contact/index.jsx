import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {contactArray, deleteContact} from "../Util/helper";
import {useNavigate, useParams} from "react-router-dom";
import Error from "../Error";

const Contact = () => {

    const params = useParams();
    const navigate = useNavigate();
    const contact = contactArray.find((contact) => contact.id === parseInt(params.id));

    if (!contact) {
        return <Error/>
    }

    const onDelete = () => {
        deleteContact(params.id)
        navigate(-1);
    }

    return (
        <Card sx={{maxWidth: 600}}>
            <CardMedia
                sx={{height: 140}}
                image={'https://source.unsplash.com/random'}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {contact.firstName + ' ' + contact.lastName}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    {contact.contactNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {contact.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
                <Button onClick={() => onDelete()} size="small">Delete</Button>
            </CardActions>
        </Card>
    );
}
export default Contact;