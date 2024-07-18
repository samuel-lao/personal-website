import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Project() {
    const [id, setId] = useState(useParams().id);

    return (
        <div>{id}</div>
    )
}
