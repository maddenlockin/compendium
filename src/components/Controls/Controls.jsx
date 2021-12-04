import React from 'react'

export default function Controls({ types, selectedType, filterChange }) {
    return (
        <>
            Filter cards by type:
            <select value={selectedType} onChange={(e) => filterChange(e.target.value)}>
                <option key='all' value='all'>All Cards</option>
                {types.map(({type}) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </>
    );
}
