window.onload = ()=> {
    const body = document.querySelector('body');
    

    const buttons = document.querySelectorAll('.botao');
    const buttons2 = document.querySelectorAll('.botao-carousel');

    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const modalContent = document.getElementById('modal-content');

    function openInfo() {
        modal.style.display = 'flex';
        modalContent.innerHTML= `<iframe width="100%" height="100%" src="https://pt.wikipedia.org/wiki/Guns_N%27_Roses" 
        title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        body.style.overflow = "hidden";
    }

    function watchVideo(id) {
        const videoLink = checkId(id);
        modal.style.display = 'flex';
        modalContent.innerHTML=  `<iframe width="100%" height="100%" src=${videoLink} title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        body.style.overflow = "hidden";
    }

    function checkId(id) {
        switch(id) {
            case 'guns':
                return 'https://www.youtube.com/embed/H6cOUavrbyY';
            case 'linkin':
                return 'https://www.youtube.com/embed/dgn0egjhDJs';
            case 'nirvana':
                return 'https://www.youtube.com/embed/kI5mmq5QIz4';
            case 'pink':
                return 'https://www.youtube.com/embed/YR5ApYxkU-U';
            case 'queen':
                return 'https://www.youtube.com/embed/Z3w5gVM_4y8';
            case 'raul':
                return 'https://www.youtube.com/embed/f8QS49e2idc';
            case 'red':
                return 'https://www.youtube.com/embed/ibDRKuxDUP8';
            case 'rem':
                return 'https://www.youtube.com/embed/4ms8L2AjtcY';
            case 'acdc':
                return 'https://www.youtube.com/embed/g8xScxmekQk';
            case 'charlie':
                return 'https://www.youtube.com/embed/0dLX40UMUKo';
            case 'creed':
                return 'https://www.youtube.com/embed/n3hLt_kcSc8';    
            case 'chitao':
                return 'https://www.youtube.com/embed/du3WhsSZE2I';
            case 'gustavo':
                return 'https://www.youtube.com/embed/a9m8Mofp-3M';
            case 'henrique':
                return 'https://www.youtube.com/embed/jmoafYxe-_I';
            case 'joao':
                return 'https://www.youtube.com/embed/TWzo6anRoKA';
            case 'jorge':
                return 'https://www.youtube.com/embed/h6ru0vpISkE';
            case 'marilia':
                return 'https://www.youtube.com/embed/WkYqQctOi9g';
            case 'milionario':
                return 'https://www.youtube.com/embed/6JrTp5KvbTs';
            case 'luan':
                return 'https://www.youtube.com/embed/xrCkR05JoV4';
            case 'simone':
                return 'https://www.youtube.com/embed/2liMyC_r3Tw';
            case 'zeneto':
                return 'https://www.youtube.com/embed/pMaKEU1QzF4';    


        }
        
    }


    buttons.forEach(button=> {
        button.addEventListener('click', (e)=>{
            e

            const { id } = e.target;

            if( id !== 'main-more-info') {
                watchVideo(e.target.id);
            }else {
                openInfo();
            }
        })
    })

    buttons2.forEach(button=> {
        button.addEventListener('click', (e)=>{
            e
            const { id } = e.target;
            watchVideo(e.target.id);
        }
        )
    })

    closeModal.addEventListener('click', ()=> {
        modal.style.display = 'none';
        modalContent.innerHTML= "";
        body.style.overflow = "visible";
    })
}