const btnModal = document.getElementById('js-btn-new');
const btnClose = document.getElementById('js-btn-close');

function openModal () {
  Modal.open();  
};
btnModal.addEventListener('click',openModal);


function closeModal () {
  Modal.close();
};
btnClose.addEventListener('click',closeModal);




  const Modal = {
  open(){
    // Abrir modal
    //Adicionar a classe active ao modal
    document
    .querySelector('.c-modal-overlay')
    .classList.add('c-modal-overlay--active');

  },

  close(){
    //Fechar o modal
    //Remover a classe active do modal
    document
    .querySelector('.c-modal-overlay')
    .classList.remove('c-modal-overlay--active');

  }
} 