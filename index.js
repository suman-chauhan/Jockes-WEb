// GET https://icanhazdadjoke.com/ 

const jokes = document.querySelector('#joke');
const btn = document.querySelector('#btn');

// const GenrateJokes = () => {

//     const setHeader =
//     {
//         headers:
//         {
//             Accept: "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com', setHeader).then((res) => res.json()
//     ).then((data) => jokes.innerHTML = `${data.joke} <br> hahahahaha  	&#128517; 	&#128517; 	&#128517; 	&#128517;&#128569;........`).catch((error) =>
//         console.log("error occured during fetching data" + error))
// }
const GenrateJokes = async ()  => {
   try {
       
    const setHeader =
    {
        headers:
        {
            Accept: "application/json"
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', setHeader);
    const data = await res.json();
    jokes.innerHTML =data.joke;

   } catch (error) {
      console.log(error); 
   }
}
btn.addEventListener('click', GenrateJokes);
GenrateJokes();