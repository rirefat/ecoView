import React from 'react';
import Card from './Card';
import Link from 'next/link';

const InvalidLocation = () => {
    return (
        <Card>
            <h4 className='text-center my-5'>Not found location info.</h4>
            <Link
                href={'/'}
                className="underline text-center block text-gray-400 hover:text-gray-200"
            >
                Try Again
            </Link>
        </Card>
    );
};

export default InvalidLocation;