import React, {Component} from 'react';
import NoteList from './components/NotesList';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  render() {
    return (
      <section>
        <RegisterForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
