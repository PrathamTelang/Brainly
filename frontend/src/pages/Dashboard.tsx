import '../App.css';
import { Button } from '../components/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  // Optional: Refresh content every time the modal closes
  useEffect(() => {
    if (!modalOpen) {
      refresh();
    }
  }, [modalOpen]);

  return (
    <div className="flex w-screen">
      <Sidebar />
      <div>
        {/* Pass refresh to modal */}
        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} refresh={refresh} />

        <div className="flex w-screen pl-72 py-8 justify-between">
          <h1 className="text-3xl text-white">All Notes</h1>
          <div className="flex gap-2">
            <Button
              startIcon={<PlusIcon size="lg" />}
              variant="primary"
              size="lg"
              text="Share Brain"
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/brain/share`,
                  { share: true },
                  {
                    headers: {
                      Authorization: localStorage.getItem('token') || '',
                    },
                  }
                );
                alert(`http://localhost:5173/share/${response.data.hash}`);
              }}
            />
            <Button
              startIcon={<ShareIcon size="lg" />}
              variant="secondary"
              size="lg"
              text="Add Content"
              onClick={() => setModalOpen(true)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-10 max-w-screen pl-72">
          {contents.map(({ type, link, title }, index) => {
            // Only allow "twitter" or "youtube" as type
            const allowedTypes = ["twitter", "youtube"] as const;
            const safeType = allowedTypes.includes(type as any) ? (type as "twitter" | "youtube") : "youtube";
            return (
              <Card key={`${type}-${link}-${index}`} type={safeType} link={link} title={title} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
