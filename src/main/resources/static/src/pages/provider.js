import React, { useEffect, useState } from 'react';
import {PackageContext} from './context';

const PACKAGE_URL = "http://localhost:8080/packages/";
const PackageProvider = ({intialState, children}) => {
    const [packages, setPackages] = useState([]);

    let getPackages = () => {
        fetch(PACKAGE_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(raw => raw.json())
        .then(json => {
            setPackages(json);
        })
    }

    let addPackage = (hotelPackage) => {
        fetch(PACKAGE_URL, {
            method: "POST",
            body: JSON.stringify(hotelPackage),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(raw => raw.json())
        .then(getPackages);
    }

    let updatePackage = (id, hotelPackage) => {
        fetch(PACKAGE_URL, {
            method: "PUT",
            body: JSON.stringify({id, hotelPackage}),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(raw => raw.json())
        .then(getPackages);
    }
    
    let deletePackage = (id) => {
        fetch(`${PACKAGE_URL}/${id}`, {
            method: "DELETE",
            body: JSON.stringify({id}),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(raw => raw.json())
        .then(getPackages);
    }

    return(
        <PackageContext.Provider value={{
            packages: packages,
            getPackages: getPackages,
            addPackage: addPackage,
            updatePackage: updatePackage,
            deletePackage: deletePackage
        }}>
            {children}
        </PackageContext.Provider>
    )
}

export default PackageProvider;