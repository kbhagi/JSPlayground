async function getData(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "mode": "cors"
      } // manual, *follow, error
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  try 
    {
        const data = await getData("https://jlkjkreld.execute-api.us-east-1.amazonaws.com/prod/pytesting?lang=hola%27");
        console.log(JSON.stringify(data)); 
    } 
    catch (error)
     {
        console.log(error);
    }


