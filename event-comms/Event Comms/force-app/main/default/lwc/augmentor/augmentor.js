import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {
    startCounter = 0;
    handleStartChange(event) {
      this.startCounter = parseInt(event.target.value);
    }
    handleMaximizeCounter(event) {
        console.log('hMC click');
        const factor = event.target.dataset.factor;
        console.log(`augmentor.js: 11 : ${factor}`);
        this.template.querySelector('c-numerator').maximizeCounter({detail: factor});
      }
}