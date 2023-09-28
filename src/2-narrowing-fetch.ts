import fetch from "node-fetch";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

function printGeneralJoke() {
  fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
    .then((response) => response.json())
    .then((jsonBody: boolean) => {
      /** TS now treats jsonBody like an array */
      console.log(jsonBody.setup, jsonBody.punchline);
    });
}

async function printProgrammingJoke() {
  const response = await fetch(
    "https://jokestemp.neillbogie.repl.co/jokes/programming/random"
  );
  const jsonBody: Joke[] = await response.json();
  /** TS now treats jsonBody like an array */
  console.log(jsonBody.setup, jsonBody.punchline);
}

printExampleJoke();
// printGeneralJoke();
// printProgrammingJoke();
