// FIRST PART

function firstPromise() {
  const myFirstPromise = new Promise((res) => {
    return res('done')
  })
  return myFirstPromise
};
//console.log(firstPromise('done'))

function secondPromise() {
  const mySecondPromise = new Promise((res, rej) => {
    if(false){
    }else{
      return rej('error')
    }
  })
  return mySecondPromise
};

function thirdPromise(isError) {
  const myThirdPromise = new Promise((res, rej) => {
    if(isError === false){
      return res('done')
    }else{
      return rej('error')
    }
  })
  return myThirdPromise
}

// SECOND PART ASYNC/AWAIT

/* Make a change to transform this function to a async function */
async function fourthPromise() {
  return await firstPromise()
};

/* Make a change to transform this function to a async function */
async function fifthPromise(isError) {
  return await thirdPromise(isError)
};

