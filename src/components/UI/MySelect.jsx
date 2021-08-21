import React from "react";

const MySelect = ({options, defaultOption, value, onChange}) => {

    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option disabled={true} value="">{defaultOption}</option>
            {options.map((option) => <option value={option.value} key={option.value}>{option.name}</option> )}
        </select>
    )
}

export default MySelect;