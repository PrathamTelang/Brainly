
import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Card } from './components/Card'
import { CreateContentModal } from './components/CreateContentModal'
import { useState } from 'react'

function App() {
const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
    <CreateContentModal open={modalOpen} onClose={() => {
      setModalOpen(false)
    }}/>
        <div className='flex justify-end gap-2 py-8'>
          <Button 
          startIcon={<PlusIcon size='lg'/>}
          variant='primary' 
          size='lg' text='Share Brain'  
          onClick={() => {}} 
          />
          <Button 
          startIcon={<ShareIcon size='lg'/>} 
          variant='secondary' 
          size='lg' 
          text='Add Content' 
          onClick={() => {
            setModalOpen(true)
          }} />
        </div>


      <div className='flex flex-wrap gap-10 max-w-screen'>
        <Card type='twitter' link='https://x.com/elonmusk/status/1944848819562406008' title='First Tweet'/>
        <Card type='youtube' link='https://www.youtube.com/watch?v=ShYKkPPhOoc' title='first video'/>
        <Card type='twitter' link='https://x.com/elonmusk/status/1944848819562406008' title='first tweet'/>
        <Card type='youtube' link='https://www.youtube.com/watch?v=ShYKkPPhOoc' title='first video'/>
        <Card type='twitter' link='https://x.com/elonmusk/status/1944848819562406008' title='First Tweet'/>
        <Card type='youtube' link='https://www.youtube.com/watch?v=ShYKkPPhOoc' title='first video'/>
        <Card type='twitter' link='https://x.com/elonmusk/status/1944848819562406008' title='first tweet'/>
        <Card type='youtube' link='https://www.youtube.com/watch?v=ShYKkPPhOoc' title='first video'/>
      </div>
    </>
    
  )
}

export default App
