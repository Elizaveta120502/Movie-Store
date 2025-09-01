import React from "react";
import {useParams} from "react-router-dom";
import { Button, TextInput, Card, Text } from '@mantine/core';

function ParticularMovie(){
    const {id} = useParams();
    return(
        <div>
            <Button>Particular movie {id}</Button>
        </div>

    );
}

export default ParticularMovie;