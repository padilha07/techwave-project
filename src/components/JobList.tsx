import { useEffect, useState } from 'react';
import { JobCard } from './JobCard';
import { Job } from '../types/Job';
import { db } from '../services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const querySnapshot = await getDocs(collection(db, "vagas"));
      const jobList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Job));
      setJobs(jobList);
    };
    fetchJobs();
  }, []);

  return (
    <section className="job-list">
      <h2>Oportunidades de Emprego</h2>
      <div className="job-cards">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
