
import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'


function App() {

  return (
    <>
    <p>hi</p>
    <Button 
      startIcon={<PlusIcon size='md'/>}
      endIcon={<ShareIcon size='md'/>}
      variant='primary' 
      size='sm' text='pink'  
      onClick={() => {}} 
    />
    <Button  variant='secondary' size='md' text='black' onClick={() => {}} />
    <Button variant='secondary' size='lg' text='black' onClick={() => {}} />
    </>
  )
}

export default App
