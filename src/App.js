import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
import Counter from './components/Counter'
import LoginPage from './components/LoginPage';


class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/TextComponent">Text Component</Link>
            </li>
            <li>
              <Link to="/YesOrNoComponent">YesOrNoComponent</Link>
            </li>
            <li>
              <Link to="/ChangeArrowsComponent">ChangeArrowsComponent</Link>
            </li>
            <li>
              <Link to="/SquareComponent">SquareComponent</Link>
            </li>
            <li>
              <Link to="/ItalicTextComponent">ItalicTextComponent</Link>
            </li>
            <li>
              <Link to="/SignInComponent">SignInComponent</Link>
            </li>
            <li>
              <Link to="/LoopingOutComponents">LoopingOutComponents</Link>
            </li>
            <li>
              <Link to="/LoadComponent">LoadComponent</Link>
            </li>
            <li>
              <Link to="/LoadPropsComponent">LoadPropsComponent</Link>
            </li>
            <li>
              <Link to="/DropdownComponent">DropdownComponent</Link>
            </li>
            <li>
              <Link to="/CountComponent">CountComponent</Link>
            </li>
            <li>
              <Link to="/ArrayModification">ArrayModification</Link>
            </li>
            <li>
              <Link to="/Animation">Animation</Link>
            </li>
            <li>
              <Link to="/SayHello">SayHello</Link>
            </li>
            <li>
              <Link to="/InputField">InputField</Link>
            </li>
            <li>
              <Link to="/Counter">Counter</Link>
            </li>
            <li>
              <Link to="/LoginPage">LoginPage</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/TextComponent">
            <div className='container'>
              <TextComponent text='Regular text' fontSize={14} color='#000000'  />
              <TextComponent text='Huge header' fontSize={24} color='#000000'  />
              <TextComponent text='Danger notification' fontSize={14} color='#FF0000' />
              <TextComponent text='Underlined text' fontSize={18} color='#000000' textDecoration />
            </div>
          </Route>
          <Route path="/YesOrNoComponent">
            <div className='container'>
              <YesOrNoComponent />
            </div>
          </Route>
          <Route path="/ChangeArrowsComponent">
            <div className='container'>
              <ChangeArrowsComponent />
            </div>
          </Route>
          <Route path="/SquareComponent">
            <div className='container'>
            <SquareComponent label='BIG text' cssClass='big-square' />
              <SquareComponent label='Middle text' cssClass='middle-square' />
              <SquareComponent label='little text' cssClass='little-square' />
            </div>
          </Route>
          <Route path="/ItalicTextComponent">
            <div className='container'>
              <ItalicTextComponent />
            </div>
          </Route>
          <Route path="/SignInComponent">
            <div className='container'>
              <SignInComponent />
            </div>
          </Route>
          <Route path="/LoopingOutComponents">
            <div className='container'>
              <LoopingOutComponents />
            </div>
          </Route>
          <Route path="/LoadComponent">
            <div className='container'>
              <LoadComponent />
            </div>
          </Route>
          <Route path="/LoadPropsComponent">
            <div className='container'>
              <LoadPropsComponent loading={true} />
              <LoadPropsComponent loading={false} />
            </div>
          </Route>
          <Route path="/DropdownComponent">
            <div className='container'>
              <DropdownComponent />
            </div>
          </Route>
          <Route path="/CountComponent">
            <div className='container'>
            <CountComponent />
            </div>
          </Route>
          <Route path="/ArrayModification">
            <div className='container'>
              <ArrayModification />
            </div>
          </Route>
          <Route path="/Animation">
            <div className='container'>
              <Animation />
            </div>
          </Route>
          <Route path="/SayHello">
            <div className='container'>
              <SayHello />
            </div>
          </Route>
          <Route path="/InputField">
            <div className='container'>
              <InputField />
            </div>
          </Route>
          <Route path="/Counter">
            <div className='container'>
              <Counter />
            </div>
          </Route>
          <Route path="/LoginPage">
            <div className='container'>
              <LoginPage />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
