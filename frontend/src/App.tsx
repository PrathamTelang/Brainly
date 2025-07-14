
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
      size='sm' text='Pink'  
      onClick={() => {}} 
    />
    <Button 
      startIcon={<PlusIcon size='md'/>}
      endIcon={<ShareIcon size='md'/>}  
      variant='secondary' 
      size='md' 
      text='Black' 
      onClick={() => {}} />
    <Button 
      startIcon={<PlusIcon size='lg'/>}
      endIcon={<ShareIcon size='lg'/>} 
      variant='secondary' 
      size='lg' 
      text='SYSTEMATIC' 
      onClick={() => {}} />
    </>
  )
}

export default App
