import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Chip } from '@mui/material'; 

function getStatusColor(status) {
    switch (status) {
        case "pending":
            return "info"
        case "creator":
            return "info"
        case "accepted":
            return "success"
        case "denied":
            return "warning"
        default:
            return "primary"
    }
}

export default function GroupCard(props) {

    console.log(props)
    return (
        <Card className="group-card" sx={{ minWidth: 275, marginBottom: "1em" }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Gift date: {props.date}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Event holds in {props.location}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Total members invited: <b>{props.totalInvitedUsers}</b>
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Total members Accepted: <b>{props.totalAcceptedUsers}</b>
                </Typography>

                <Chip label={props.status} color={getStatusColor(props.status)} />


            </CardContent>
        </Card>
    );
}