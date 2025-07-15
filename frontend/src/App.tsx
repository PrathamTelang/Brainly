
import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Card } from './components/Card'

function App() {

  return (
    <>
        <div className='flex justify-end gap-2 py-8'>
          <Button 
          startIcon={<PlusIcon size='lg'/>}
          endIcon={<ShareIcon size='lg'/>}
          variant='primary' 
          size='lg' text='Pink'  
          onClick={() => {}} 
        />
        <Button 
          startIcon={<PlusIcon size='lg'/>}
          endIcon={<ShareIcon size='lg'/>} 
          variant='secondary' 
          size='lg' 
          text='SYSTEMATIC' 
          onClick={() => {}} />
    </div>


      <div className='flex gap-10'>
        <Card type='twitter' link='https://x.com/elonmusk/status/1944848819562406008' title='First Tweet'/>
        <Card type='youtube' link='https://www.youtube.com/watch?v=ShYKkPPhOoc' title='first video'/>
        <Card type='twitter' link='https://x.com/elonmusk/status/1944848819562406008' title='first tweet'/>
        <Card type='youtube' link='https://www.youtube.com/watch?v=ShYKkPPhOoc' title='first video'/>
      </div>
    </>
    
  )
}

export default App
