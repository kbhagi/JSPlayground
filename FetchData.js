
const myHeaders = new Headers();

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

  
const myRequest = new Request("https://rrmpeuidj.execute-api.us-east-1.amazonaws.com/prod/pytesting?lang=hola", myInit)


  fetch(myRequest).then(response=> {
  console.log(response.json())
  }).catch((error)=>{
  console.log(error)
  
  });