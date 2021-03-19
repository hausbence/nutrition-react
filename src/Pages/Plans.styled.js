import styled from "styled-components";

export const StyledPlans = styled.div`
    h3 {
        color: ${({ theme }) => theme.primaryDark}
    }
    margin: auto;
    margin-top: 70px;
    width 1200px;
	display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .day-container {
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        background: ${({ theme }) => theme.primaryLight};
    }
    .day-container h3{
        color: ${({ theme }) => theme.primaryDark}
    }
    
`;
