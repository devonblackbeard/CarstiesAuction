
import React from 'react'
import Heading from '../components/Heading'
import { getSession } from '../actions/authActions';

const session = async () => {
    const session = await getSession()
    console.log(session);
    
    return (

        <div>
            <Heading title='Session dashboard' />

            <div className="bg-blue-200 border-2 border-blue-500">
                <h3 className="text-lg">Session data</h3>
                <pre>{JSON.stringify(session, null, 2)}</pre>

            </div>
        </div>
    )
}

export default session