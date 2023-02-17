import React from 'react';
import { useParams } from 'react-router-dom';
import { useCandidateByIdQuery } from '../../features/candidate/candidateApi';
import Loading from './Loading';

const Candidate = () => {
    const { id } = useParams()
    const { data, isLoading } = useCandidateByIdQuery(id);
    const {address, city, country, firstName, email, gender, lastName, postcode} = data?.data || {}
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='container mx-10'>
            <h1 className='text-2xl'>Candidate Details</h1>
            <p>First Name : <span className="font-bold">{firstName}</span></p>
            <p>Last Name : <span className="font-bold">{lastName}</span></p>
            <p>Email : <span className="font-bold">{email}</span></p>
            <p>Gender : <span className="font-bold">{gender}</span></p>
            <p>Address : <span className="font-bold">{address}</span></p>
            <p>City : <span className="font-bold">{city}</span></p>
            <p>Country : <span className="font-bold">{country}</span></p>
            <p>Post Code : <span className="font-bold">{postcode}</span></p>
        </div>
    );
};

export default Candidate;
