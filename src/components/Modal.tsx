import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

const Modal = ({ isOpen, onClose, onContact }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed align-center left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-xl shadow-2xl p-6 m-4">
              <button
                onClick={onClose}
                className="absolute right-8 top-8 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold mb-4">Interested in Our Services?</h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss how we can help transform your business through innovative digital solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={onContact}
                    className="btn btn-primary"
                  >
                    Contact Us Now
                  </button>
                  <button
                    onClick={onClose}
                    className="btn btn-outline"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;