import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import { ImageSection } from './components/ImageSection';
import { JobList } from './components/JobList';
import { ExploreOpportunities } from './components/ExploreOpportunities';
import { MissionSection } from './components/MissionSection';
import { Footer } from './components/Footer';
import InscricaoForm from './components/InscricaoForm';
import './styles.css';

export function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainSection />
                <ImageSection />
                <JobList />
                <ExploreOpportunities />
                <MissionSection />
              </>
            }
          />
          <Route path="/inscricao" element={<InscricaoForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
