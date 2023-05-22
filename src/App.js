import React, { useState } from 'react';
import NavBar from './component/NavBar';
import NewsComponents from './component/NewsComponents';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar_Below_component from './component/Navbar_Below_component';
import Footer from './component/Footer';

const App = (props) => {

  const [navColor, setNavColor] = useState('light')
  const [text, setText] = useState('dark')
  const [BG, setBG] = useState('light')
  const [progress, setProgress] = useState()
  const [pageSize, setPageSize] = useState(7)

  const Progress = (progress) => {
    setProgress(progress)
  }

  const clickToChangeColorModes = () => {
    if (navColor === 'light') {
      if (text === 'dark') {
        if (BG === 'light') {
          setBG('dark')
        }
        setText('light')
      }
      setNavColor('dark')
    }

    else {
      setText('dark')
      setNavColor('light')
      setBG('light')
    }
  }


  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height='2px'
      />
      {/* PageSize is used for that how many articles can exist in one page */}
      <Router>
        <Routes>
          <Route exact path="/" element=
            {
              <React.Fragment >
                <NavBar />
                <Navbar_Below_component />
                <Footer />
              </React.Fragment>
            } />

          <Route exact path="/home" element=
            {
              <React.Fragment >
                <NavBar />
                <NewsComponents setProgress={Progress} pageSize={pageSize} backgroundColor={BG} constructor={navColor} constructor2={text} country='de' category={'entertament'} />
                <Footer />
              </React.Fragment>
            } />


          {/* 
              country='de' 
              <Route exact path="/india/science" element={<NewsComponents key="science" pageSize={9} backgroundColor={this.state.BG} constructor={this.state.navColor} constructor2={this.state.text} country='in' category={'science'} />} />

              <Route exact path="/india/entertainment" element={<NewsComponents key="entertainment" pageSize={9} backgroundColor={this.state.BG} constructor={this.state.navColor} constructor2={this.state.text} country='in' category={'entertainment'} />} />

              <Route exact path="/india/business" element={<NewsComponents key="business" pageSize={9} backgroundColor={this.state.BG} constructor={this.state.navColor} constructor2={this.state.text} country='in' category={'business'} />} /> */}

          {/* category='in' and  category={'in'}  are SAME */}

        </Routes>
      </Router>
    </>
  )
}

export default App