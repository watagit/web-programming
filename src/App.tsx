import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Header from './components/organisms/Header'

import TopPage from './components/pages/TopPage'
import HomePage from './components/pages/HomePage'
import IdeaDetailPage from './components/pages/IdeaDetailPage'
import StarterProfilePage from './components/pages/StarterProfilePage'
import CreatorProfilePage from './components/pages/CreatorProfilePage'
import StarterProfileEditPage from './components/pages/StarterProfileEditPage'
import CreatorProfileEditPage from './components/pages/CreatorProfileEditPage'
import PostIdeaPage from './components/pages/PostIdeaPage'

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Router>
          <Switch>
            <Route exact path={'/'} component={TopPage} />
            <Route exact path={'/home'} component={HomePage} />
            <Route exact path={'/ideas/new'} component={PostIdeaPage} />
            <Route exact path={'/ideas/:id'} component={IdeaDetailPage}/>
            <Route exact path={'/starters/:id'} component={StarterProfilePage} />
            <Route exact path={'/starters/:id/edit'} component={StarterProfileEditPage} />
            <Route exact path={'/creators/:id'} component={CreatorProfilePage} />
            <Route exact path={'/creators/:id/edit'} component={CreatorProfileEditPage} />
          </Switch>
        </Router>
      </Container>
    </div>
  )
}

export default App
