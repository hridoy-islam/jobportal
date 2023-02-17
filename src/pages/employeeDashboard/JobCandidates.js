import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/reusable/Loading';
import {useJobByIdQuery} from "../../features/job/jobApi"

const JobCandidates = () => {
    const {id} = useParams()
    const {data, isLoading} = useJobByIdQuery(id);
    const candidates = data?.data.applicants || {};
    if(isLoading){
        return <Loading />
    }
    
    return (
        <div className="container mx-10">
            <h1 className='text-2xl'> Candidates Applied for this job </h1>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className='bg-primary text-white bg-primary/10 transition-all py-2 px-3 '>Email</th>
                        <th className='bg-primary text-white bg-primary/10 transition-all py-2 px-3 '>View Details</th>
                        <th className='bg-primary text-white bg-primary/10 transition-all py-2 px-3 '>Send Message</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {candidates?.length &&
                        candidates.map(({ email, id }) => <tr key={id}>
                            <td className="border border-slate-600 p-2">{email}</td>
                            <td className="border border-slate-600 p-2"><Link className='px-2 text-white bg-primary text-center' to={`/dashboard/candidate/${id}`}>View Details</Link></td>
                            <td className="border border-slate-600 p-2"><Link className='px-2 text-white bg-success'>Send Message</Link></td>
                        </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default JobCandidates;