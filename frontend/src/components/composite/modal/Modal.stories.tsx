import { useState } from 'react';
import { Modal } from './Modal';
import Button from '@/components/core/button/Button';

export default {
  title: 'Composite/Modal',
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
        description="This is an example of a reusable modal component."
      />
    </>
  );
};
