import axios from "axios";
import { useEffect, useState } from "react"

type Company = {
  id: string;
  name: string;
  description: string | null;
};

type Job = {
  id: string;
  title: string;
  description: string | null;
};

type JobWithCompany = Job & {
  company: Company;
}

function App() {
  const [jobs, setJobs] = useState<JobWithCompany[]>([]);

  useEffect(() => {
    axios.get("http://localhost:9000/graphql")
      .then((res) => setJobs(res.data));
  }, [])

  return (
    <div className="p-4">
      <div className="grid place-items-center">
        <h1 className="text-2xl font-semibold">Job Board</h1>

        <div>
          {jobs.map(job => (
            <div key={job.id}>{job.title}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
