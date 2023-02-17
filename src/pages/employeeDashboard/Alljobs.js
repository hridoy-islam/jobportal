import React from 'react';
import { Link } from 'react-router-dom';
import { useGetJobQuery, useToggleJobStatusMutation } from '../../features/job/jobApi';

const Alljobs = () => {
    const { data } = useGetJobQuery()
    const jobs = data?.data || {}
    const [changeStatus] = useToggleJobStatusMutation()
    const toggleStatus = (id) => {
        changeStatus({jobId : id})
    }
    return (
        <div className='container mx-10'>
            <h1 className='text-2xl'> All Jobs Here... </h1>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className='bg-primary text-white bg-primary/10 transition-all py-2 px-3 '>Location</th>
                        <th className='bg-primary text-white bg-primary/10 transition-all py-2 px-3 '>Postion</th>
                        <th className='bg-primary text-white bg-primary/10 transition-all py-2 px-3 '>workLevel</th>
                        <th className='bg-primary text-white bg-primary/10 transition-all py-2 px-3 '>Applied</th>
                        <th className='bg-primary text-white bg-primary/10 transition-all py-2 px-3 '>Status</th>
                        <th className='bg-primary text-white bg-primary/10 transition-all py-2 px-3 '>See Candidates</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs?.length &&
                        jobs.map(({ _id, workLevel, position, location, applicants, jobstatus }) => <tr key={_id}>
                            <td className="border border-slate-600 p-2">{location}</td>
                            <td className="border border-slate-600 p-2">{position}</td>
                            <td className="border border-slate-600 p-2">{workLevel}</td>
                            <td className="border border-slate-600 p-2">{applicants?.length}</td>
                            <td className="border border-slate-600 p-2">
                                <button onClick={()=>toggleStatus(_id)} className={`px-2 text-white ${jobstatus ?'bg-success' : 'bg-warning'} `}>{
                                    jobstatus ? 'Open' : 'Closed'
                                }</button>
                            </td>
                            <td className="border border-slate-600 p-2"><Link className='px-2 text-white bg-primary text-center' to={`${_id}`}>See Candidates</Link></td>
                        </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default Alljobs;