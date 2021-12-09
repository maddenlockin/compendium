import React from 'react'

export default function Controls({ types, selectedType, filterChange, sort, setSort }) {
    return (
        <>
            Filter by type:
            <select value={selectedType} onChange={(e) => filterChange(e.target.value)}>
                <option key='all' value='all'>All Cards</option>
                {types.map(({ type }) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>{' '}
            or Sort A-Z or Z-A: 
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {/* <option value='default' key='default'>
                    default
                </option> */}
                <option value='asc' key='asc'>
                    asc
                </option>
                <option value='desc' key='desc'>
                    desc
                </option>
            </select>
        </>
    );
}
