import './App.css'
import ContactList from './components/ContactList.jsx'
import SelectedContactPage from './components/SelectedContactPage.jsx'
import {useState} from 'react';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  if (!selectedContactId){
    return (
    <>
    <ContactList key="ContactList" setSelectedContactId={setSelectedContactId}/>
    </>
    );
  } else {
    return (
      <>
      <SelectedContactPage key={selectedContactId} selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      </>
    )
  }
}

export default App
