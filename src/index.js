import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import TextComponent from './components/TextComponent'
import YesOrNoComponent from './components/YesOrNoComponent'
import ChangeArrowsComponent from './components/ChangeArrowsComponent'
import SquareComponent from './components/SquareComponent'
import ItalicTextComponent from './components/ItalicTextComponent'
import SignInComponent from './components/SignInComponent'
import LoopingOutComponents from './components/LoopingOutComponents'
import LoadComponent from './components/LoadComponent'
import LoadPropsComponent from './components/LoadPropsComponent'
import DropdownComponent from './components/DropdownComponent'
import CountComponent from './components/CountComponent'
import ArrayModification from './components/ArrayModification'
import Animation from './components/Animation'
import SayHello from './components/SayHello'
import InputField from './components/InputField'

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <TextComponent text='Regular text' fontSize={14} color='#000000'  />
      <TextComponent text='Huge header' fontSize={24} color='#000000'  />
      <TextComponent text='Danger notification' fontSize={14} color='#FF0000' />
      <TextComponent text='Underlined text' fontSize={18} color='#000000' textDecoration />

      <YesOrNoComponent />

      <ChangeArrowsComponent />

      <SquareComponent label='BIG text' cssClass='big-square' />
      <SquareComponent label='Middle text' cssClass='middle-square' />
      <SquareComponent label='little text' cssClass='little-square' />

      <ItalicTextComponent />

      <SignInComponent />

      <LoopingOutComponents />

      <LoadComponent />

      <LoadPropsComponent loading={true} />
      <LoadPropsComponent loading={false} />

      <DropdownComponent />

      <CountComponent />

      <ArrayModification />

      <Animation />

      <SayHello />

      <InputField />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
