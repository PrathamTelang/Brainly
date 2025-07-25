import '../App.css'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { useState, useEffect } from 'react'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'


export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])


  return (
    <div className='flex  w-screen'>
    <div>
      <Sidebar/>
    </div>
        <div className=''>
          <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false)
        }}/>
        <div className='flex w-screen pl-72 py-8 justify-between'>
          <h1 className='text-3xl text-white'>All Notes</h1>
          <div className='flex gap-2 '>
            <Button 
          startIcon={<PlusIcon size='lg'/>}
          variant='primary' 
          size='lg' 
          text='Share Brain'  
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
        </div>

        <div className="flex flex-wrap gap-10 max-w-screen pl-72">
          {contents && contents.map(({ _id, type, link, title }) => (
            <Card
              key={_id}
              _id={_id}
              type={type}
              link={link}
              title={title}
              onDelete={refresh}
            />
          ))}
        </div>
      </div>
        </div>

  )
}



