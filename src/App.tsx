import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import { ImageSection } from './components/ImageSection';
import { JobList } from './components/JobList';
import { ExploreOpportunities } from './components/ExploreOpportunities';
import './styles.css';
import { MissionSection } from './components/MissionSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="app">
      <Header />
      <MainSection />
      <ImageSection />
      <JobList />
      <ExploreOpportunities /> 
      <MissionSection />
      <Footer />
    </div>
  );
}
