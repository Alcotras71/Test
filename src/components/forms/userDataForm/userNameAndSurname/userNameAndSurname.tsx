import React from 'react';


const UserNameAndSurname = (props: {name: string, surname: string}) => {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.surname}</p>
        </div>
    )
}
       
        


export default UserNameAndSurname;