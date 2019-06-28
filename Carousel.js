class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.button = carousel.querySelectorAll('button');
        this.images = carousel.querySelectorAll('img');
        // this.images.forEach(img => img.style.display = 'none');
        this.images.forEach(img => img.classList.add('hidden'));

        this.tab = document.querySelector('.select');
        this.images.forEach((img, i) => {
            // console.log(img.dataset.tab, i, this.tab);

            if (img.dataset.tab === this.tab.dataset.tab) {
                this.index = i;
            }
            // else {
            //     this.index = 0;
            // }
        })


        // this.index = 0;  //index of the image with the dataset.tab === tab.dataset.tab
        // this.images[this.index].style.display = 'block';
        // setInterval(() => { if (this.index <= this.images.length) { this.index += 1 } else { this.index = 0; }; this.images[this.index].classList.remove('hidden'); }, 3000);

        // this.images[this.index].classList.remove('hidden');

        // setInterval(() => {
        //     this.images[this.index].style.display = 'hidden';
        //     if (this.index < this.images.length - 1) {
        //         this.index += 1;
        //     } else {
        //         this.index = 0;
        //     }
        // }, 1000);

        this.images[this.index].classList.remove('hidden');

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

            // img.style.display = 'none';
            img.classList.add('hidden');

            if (this.index === i) {
                // img.style.display = 'block'
                img.classList.remove('hidden');
            }
        })
    }
}


const carousel = document.querySelector('.carousel');

new Carousel(carousel);

