import React, { Component } from "react";

class NotesList extends Component {
  render() {
    return (
      <ul>
        <li>
          <section>
            <header>
              <h3>Titulo</h3>
            </header>
            <p>Escreva sua nota</p>
          </section>
        </li>
      </ul>
    );
  }
}

export default NotesList;
