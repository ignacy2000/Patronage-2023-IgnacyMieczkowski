class ErrorVisibility {
    constructor() {
        this.showError = (error) => {
            if(error.classList.contains('hidden')) {
                error.classList.remove('hidden');
            }
        }

        this.hideError = (error) => {
            if(!error.classList.contains('hidden')) {
                error.classList.add('hidden');
            }
        }
    }
}

export const errorVisibility = new ErrorVisibility();