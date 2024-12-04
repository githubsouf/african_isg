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
          {/* Fond semi-transparent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Conteneur de la modale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex justify-center items-center"
          >
            <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 relative">
              {/* Bouton de fermeture */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Contenu */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Intéressé par nos services ?</h3>
                <p className="text-gray-600 mb-6">
                  Discutons de la manière dont nous pouvons aider à transformer votre entreprise grâce à des solutions numériques innovantes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={onContact}
                    className="w-full sm:w-auto bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  >
                    Contact Us Now
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto bg-transparent border border-primary text-primary font-semibold py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
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
