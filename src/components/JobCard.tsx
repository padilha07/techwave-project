import { Job } from '../types/Job';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="job-card">
      <h3>{job.titulo}</h3>
      <p><strong>Local:</strong> {job.local}</p>
      <p><strong>Descrição:</strong> {job.descricao}</p>
      <button className="apply-button">Ver Detalhes</button>
    </div>
  );
}
