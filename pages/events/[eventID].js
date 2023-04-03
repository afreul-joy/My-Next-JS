
import { useRouter } from 'next/router';
import React from 'react';

const eventDetails = () => {
    const router = useRouter()   // useRouter = hooks
    const id = router.query.eventID;
    return (
        <div>
            here is Details {id}
        </div>
    );
};

export default eventDetails;;

