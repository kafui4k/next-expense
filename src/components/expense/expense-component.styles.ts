import styled from "@emotion/styled"

export const Label = styled.label``;

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
    padding: 1rem;
    margin-top: -20px;
    margin-left: -20px;
    margin-right: -20px;
`;

export const UpperColumn = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 1rem;
    overflow: hidden;
`;

export const LeftContainer = styled.div`
    display: flex;
    width: 100%;
    overflow-y: scroll;
`;

export const LowerColumn = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const RightContainer = styled.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 250px;
    height: 350px;
    margin: 1rem;
    cursor: pointer;
`;

export const AddReceiptButtonIcon = styled.button`
    position: absolute;
    right: 6.5rem;
    top: 21.5rem;
    background: #03BB6D;
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    font-weight: bold;
    font-size: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
`

export const LowerColumnSubmitButton = styled.button`
    position: absolute;
    right: 2.2rem;
    bottom: 1.5rem;
    background: #03BB6D;
    color: white;
    border: none;
    border-radius: 10px;
    width: 70px;
    height: 45px;
    font-weight: bold;
    cursor: pointer;
`;