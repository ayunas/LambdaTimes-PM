class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.button = carousel.querySelectorAll('button');
        this.images = carousel.querySelectorAll('img');
        this.images.forEach(img => img.style.display = 'none');
        this.index = 0;
        this.images[this.index].style.display = 'block';
        this.button.forEach(button => button.addEventListener('click', () => this.rotate(button)));
    }

    rotate(button) {
        console.log('rotating carousel');
        if (button.id === 'rightBtn') {
            if (this.index < (this.images.length - 1)) {
                this.index += 1;
            } else {
                this.index = 0;
            }
        } else {
            if (this.index > 0) {
                this.index -= 1;
            } else {
                this.index = this.images.length - 1;
            }
        }

        this.images.forEach((img, i) => {

            img.style.display = 'none';

            if (this.index === i) {
                img.style.display = 'block'
            }
        })
    }
}


const carousel = document.querySelector('.carousel');
console.log(carousel);

new Carousel(carousel);

