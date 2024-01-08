import React from 'react'

type Props = {
    SearchParams: SearchParams,
}

export type SearchParams = {
    url: URL;
    group_adults: string;
    group_children: string;
    no_rooms: string;
    checkin: string;
    checkout: string;
};

const page = (props: Props) => {
    return (
        <div>page</div>
    )
}

export default page