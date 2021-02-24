import React from 'react'
import {Pagination} from 'react-bootstrap'

import './Pagination.css'

export function CustomPagination(){
    let active = 1;
    let items = [];

    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <Pagination className="pagination_rounded">
                <Pagination.Prev />
                {items}
                <Pagination.Next />
            </Pagination>
        </div>
    )
}

export default CustomPagination
