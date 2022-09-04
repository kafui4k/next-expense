import styled from '@emotion/styled';

const LandingPage = styled.div`
    padding: 10px;
    display: flex;
`;

const HeaderH1 = styled.h1`

`;

const HeroSectionBanner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex-wrap: wrap;
`;

const AuthSectionButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
`;

const HeroSectionText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
    padding: 10px;
    flex-wrap: wrap;
    max-width: 600px;
`;

export { HeroSectionText, AuthSectionButtons, HeroSectionBanner, HeaderH1, LandingPage };