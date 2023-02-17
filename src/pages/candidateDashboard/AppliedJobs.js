import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/reusable/Loading";
import { useGetAppliedJobsQuery } from "../../features/job/jobApi";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetAppliedJobsQuery(email);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-10">
      <h1 className='text-xl py-5'>Applied jobs</h1>

      <table className="table-auto">
        <thead>
          <tr>
            <th className='bg-primary text-white bg-primary/10 transition-all py-2 px-3 '>Position</th>
            <th className='bg-primary text-white bg-primary/10 transition-all py-2 px-3 '>Location</th>
            <th className='bg-primary text-white bg-primary/10 transition-all py-2 px-3 '>Type</th>

          </tr>
        </thead>
        <tbody>
          {  data?.data?.map(({ _id, position, location, employmentType }) => <tr key={_id}>
              <td className="border border-slate-600 p-2">{position}</td>
              <td className="border border-slate-600 p-2">{location}</td>
              <td className="border border-slate-600 p-2">{employmentType}</td>
              
            </tr>
            )
          }


        </tbody>
      </table>


    </div>
  );
};

export default AppliedJobs;
