import {useEffect} from 'react';
import {useState} from 'react';

function SelectedContactPage({selectedContactId, setSelectedContactId}) {

    const [contact, setContact] = useState(null);
    useEffect(()=>{
        async function getSelectedContact(){
            try{
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const json = await response.json();
                setContact(json);
            } catch (error){
                console.log(error);
            }
        }
        getSelectedContact();
    }, [])

        if (!contact){
            return (
                <p>No contact</p>
            )
        } else {
            return (
                <>
                <p>Name: {contact.name}</p>
                <p>Username: {contact.username}</p>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p>Website: {contact.website}</p>

                <button onClick= {() => setSelectedContactId(null)}>Go back</button>
                </>
            )
        }
}

export default SelectedContactPage;