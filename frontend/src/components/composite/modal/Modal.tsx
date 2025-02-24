import { Dialog } from '@headlessui/react';
import { Button } from '@/components/core/button/Button';
import {ModalProps} from "@/types/PropTypes";

export function Modal({ isOpen, onClose, title = 'Modal Title', description = 'This is the modal description.' }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
        <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
        <Dialog.Description className="mt-2">{description}</Dialog.Description>
        <div className="mt-4">
          <Button label="Close" onClick={onClose} />
        </div>
      </div>
    </Dialog>
  );
}
