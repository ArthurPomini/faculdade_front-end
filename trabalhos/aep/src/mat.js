class Modal {
    constructor(modalId, closeButtonIdOrClass) {
        this.modalElement = document.getElementById(modalId);
        this.closeButton = document.getElementById(closeButtonIdOrClass) || document.querySelector(closeButtonIdOrClass);
        
        this.initModalEvents();
    }

    initModalEvents() {
        if (this.closeButton) {
            this.closeButton.addEventListener('click', () => this.fechar());
        }
        window.addEventListener('click', (event) => {
            if (event.target === this.modalElement) {
                this.fechar();
            }
        });
    }

    abrir() {
        this.modalElement.style.display = 'flex';
    }

    fechar() {
        this.modalElement.style.display = 'none';
    }
}

class VideoModal extends Modal {
    constructor(modalId, closeClass, videoContainerClass, videoUrl) {
        super(modalId, closeClass); 
        this.videoContainer = document.querySelector(videoContainerClass);
        this.videoUrl = videoUrl;
    }

    abrir() {
        this.videoContainer.innerHTML = `
            <iframe 
                src="${this.videoUrl}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>`;
        super.abrir(); 
    }

    fechar() {
        super.fechar();
        this.videoContainer.innerHTML = ''; 
    }
}

class Quiz {
    constructor(formId, feedbackId, submitButtonId, respostaCorreta) {
        this.form = document.getElementById(formId);
        this.feedbackMessage = document.getElementById(feedbackId);
        this.submitButton = document.getElementById(submitButtonId);
        this.respostaCorreta = respostaCorreta;

        this.initQuizEvents();
    }

    initQuizEvents() {
        this.submitButton.addEventListener('click', () => this.validarResposta());
    }

    resetarQuiz() {
        this.form.reset();
        this.feedbackMessage.style.display = 'none';
        this.feedbackMessage.className = 'feedback';
    }

    validarResposta() {
        const alternativaSelecionada = this.form.querySelector('input[name="resposta"]:checked');

        if (!alternativaSelecionada) {
            this.exibirFeedback("Por favor, selecione uma alternativa antes de finalizar!", "wrong");
            return;
        }

        if (alternativaSelecionada.value === this.respostaCorreta) {
            this.exibirFeedback("✓ Resposta Correta! Muito bem!", "correct");
        } else {
            this.exibirFeedback("✕ Resposta Incorreta. Tente analisar as medidas novamente!", "wrong");
        }
    }

    exibirFeedback(mensagem, tipo) {
        this.feedbackMessage.textContent = mensagem;
        this.feedbackMessage.className = `feedback ${tipo}`;
        this.feedbackMessage.style.display = "block";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const quizTrigonometria = new Quiz('quiz-form', 'feedback-message', 'btn-finalizar', 'B');

    const urlVideoAula = "https://www.youtube.com/embed/C7NrVLmEYcs?autoplay=1";
    const modalAulas = new VideoModal('video-modal', '.close-button', '.video-container', urlVideoAula);

    const modalExercicios = new Modal('exercicio-modal', 'close-exercicio');

    document.getElementById('btn-aulas').addEventListener('click', () => {
        modalAulas.abrir();
    });

    document.getElementById('btn-exercicios').addEventListener('click', () => {
        quizTrigonometria.resetarQuiz(); 
        modalExercicios.abrir();
    });
});