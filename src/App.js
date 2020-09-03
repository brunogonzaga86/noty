import React from "react";
import NoteList from "./components/NotesList";

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva sua nota" />
        <button>Criar Nota</button>
      </form>
      <NoteList />
    </section>
  );
}

export default App;
