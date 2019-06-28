class Tab {
    constructor(tab) {
        this.tab = tab;
        this.dataTab = this.tab.dataset.tab;
        this.cards = document.querySelectorAll('article.card');
        // this.Cards = Array.from(this.cards).map(card => new Card(card));
        this.tab.addEventListener('click', () => this.tabSelect());
    }

    tabSelect() {
        const tabs = document.querySelectorAll('.a-tags a');
        tabs.forEach(tab => tab.classList.remove('select'));
        const images = document.querySelectorAll('.carousel img');
        images.forEach(img => {
            console.log(img.dataset.tab, this.dataTab);
            img.classList.add('hidden');
            if (img.dataset.tab === this.dataTab) {
                img.classList.remove('hidden');
            }
        });
        this.tab.classList.add('select');
        this.cards.forEach(card => card.style.display = 'none');
        this.cards.forEach(card => {
            if (card.dataset.tab === this.dataTab) {
                card.style.display = 'flex';
            } else if (this.dataTab === 'all') {
                card.style.display = 'flex';
            }
        })
    }
}


// class Card {
//     constructor(card) {
//         this.card = card;
//     }
// }



const tabs = document.querySelectorAll('.a-tags a');
tabs.forEach(tab => new Tab(tab));




