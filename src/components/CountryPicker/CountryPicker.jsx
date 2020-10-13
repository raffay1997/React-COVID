import React,{useState,useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import './CountryPicker.css'

import {fetchCountries} from '../api'

const CountryPicker=({handleCountryChange})=>{
    const [countries, setCountries]=useState([])

    useEffect (()=>{
        const fetchAPI= async()=>{
            setCountries(await fetchCountries());
}
        fetchAPI();
    },[setCountries]);

    return(
        <FormControl className="formcontrol">
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value=""> Global</option>
                {countries.map((country,i)=><option key={i} value={country}> {country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;