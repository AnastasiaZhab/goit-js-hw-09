import Notiflix from 'notiflix';

const refs = {
    firstDelayEl: document.querySelector('input[name="delay"]'),
    delayStepEl: document.querySelector('input[name="step"]'),
    amountEl: document.querySelector('input[name="amount"]'),
    submitBTN: document.querySelector('button'),
}
  

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
        }
        else {
        reject({position, delay});
        }
        
    }, delay);
    
  });

    
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}




function onSubmit(event) {
  event.preventDefault();

  const step = Number(refs.delayStepEl.value);
  const amount = Number(refs.amountEl.value);
  let delayStep = Number(refs.firstDelayEl.value);

  
  for (let i = 1; i <= amount; i += 1){
    createPromise(i, delayStep);
    delayStep += step;
  }
}



refs.submitBTN.addEventListener('click', onSubmit);