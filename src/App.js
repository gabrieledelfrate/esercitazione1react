import './A'
import React from 'react';
import Car from 'react';
import { ButtonComponent } from '../src/components/button';
import { ImageComponent } from '../src/components/imagine';

function App() {
  return (
    <div>
      <ButtonComponent text="Clicca per acquistare" />
      <ImageComponent src="https://media.istockphoto.com/id/862415786/it/foto/auto-nera-classica-in-garage.jpg?s=1024x1024&w=is&k=20&c=8V8_8u4dbf-I5E54fghQ5Q4_c_DSK7Fvv1RcLEBUbtg=" alt="FordMustang" />
    </div>
  );
}

export default App;
