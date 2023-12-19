import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { JOBS_API_PREFIX } from "../../constants/AppConstant";

function JobDetail() {
  const { jobId } = useParams();
  const [job, setJob] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (jobId) {
      axios
        .get(`${JOBS_API_PREFIX}/jobs/${jobId}`)
        .then((res) => {
          setJob(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [jobId]);

  function getJobs() {
    navigate("/jobs");
  }

  function removeJob() {
    if (jobId) {
      axios
        .delete(`${JOBS_API_PREFIX}/jobs/${jobId}`)
        .then((res) => {
          alert(`Remove job ${JSON.stringify(res.data)} successfully!!!`);
          navigate("/");
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  return (
    <div>
      <h1>Job Detail</h1>
      <p>
        <b>Id:</b> {job.id}
      </p>
      <p>
        <b>Posted Time:</b> {job.postedTime}
      </p>
      <p>
        <b>Title:</b> {job.title}
      </p>
      <p>
        <b>Image:</b>{" "}
        <img width={100} height={100} src={job.image} alt="Job Avatar" />
      </p>
      <p>
        <b>Company:</b> {job.company}
      </p>
      <p>
        <b>Salary:</b> {job.salary}
      </p>
      <p>
        <b>Type:</b> {job.type}
      </p>
      <p>
        <b>City:</b> {job.city}
      </p>
      <p>
        <b>Description:</b> {job.description}
      </p>
      <button type="button" onClick={getJobs}>
        Back
      </button>
      &nbsp;
      <button type="button" onClick={removeJob}>
        Remove
      </button>
    </div>
  );
}

export default JobDetail