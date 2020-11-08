import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopPage from './components/pages/TopPage'
import HomePage from './components/pages/HomePage'
import IdeaDetailPage from './components/pages/IdeaDetailPage'
import StarterProfilePage from './components/pages/StarterProfilePage'
import CreatorProfilePage from './components/pages/CreatorProfilePage'
import StarterProfileEditPage from './components/pages/StarterProfileEditPage'
import CreatorProfileEditPage from './components/pages/CreatorProfileEditPage'
import PostIdeaPage from './components/pages/PostIdeaPage'

const App: React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default App
