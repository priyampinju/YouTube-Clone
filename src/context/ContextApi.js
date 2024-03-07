import React, { createContext, useEffect, useState } from 'react'

import { FetchDataFromApi } from '../utils/api';

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectCategories, setSelectCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        FetchDataFromApi(`search/?${query}`). then((res) => {
            console.log(res)
            //setSearchResults(res)
            setLoading(false)
        })
    }

    return (
        <Context.Provider
        value= {{
            loading,
            setLoading,
            searchResults,
            setSelectCategory,
            selectCategories,
            mobileMenu,
            setMobileMenu,
        }}
        >
            {props.children}
        </Context.Provider>
    )

}