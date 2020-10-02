import React from 'react';
import styled from 'styled-components';

export const Table = styled(({ children, ...props }) => {
    return(
        <table className={props.className} border="1">
         {children}
     </table>   
    )
})`
    flex: 1 1 200px;
`;

export default Table;
