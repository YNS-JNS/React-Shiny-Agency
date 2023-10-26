// Importing CSS and Assets: ___________________________
// Importing Card Component
import Card from '../../components/Card';
// Importing colors
import colors from '../../utils/style/colors';
// _____________________________________________________

// Styled components: __________________________________
// Importing styled-components library
import styled from 'styled-components';
// CardsContainer div:
const CardsContainer = styled.div`
   display: grid;
   gap: 24px;
   grid-template-rows: 350px 350px;
   grid-template-columns: repeat(2, 1fr);
   align-items: center;
   justify-items: center;
`;

// PageTitle h1:
const PageTitle = styled.h1`
   font-size: 30px;
   color: black;
   text-align: center;
   padding-bottom: 30px;
`;
// PageSubtitle h2:
const PageSubtitle = styled.h2`
   font-size: 20px;
   color: ${colors.secondary};
   font-weight: 300;
   text-align: center;
   padding-bottom: 30px;
`;

// _______________________________________

const Freelances = () => {
   // Some data for test:
   const freelanceProfiles = [
      {
         name: 'Jane Doe',
         jobTitle: 'Devops',
      },
      {
         name: 'John Doe',
         jobTitle: 'Developpeur frontend',
      },
      {
         name: 'Jeanne Biche',
         jobTitle: 'Développeuse Fullstack',
      },
   ];

   return (
      <div>
         <PageTitle>Trouvez votre prestataire</PageTitle>
         <PageSubtitle>
            Chez Shiny nous réunissons les meilleurs profils pour vous.
         </PageSubtitle>
         <CardsContainer>
            {freelanceProfiles.map((profile, index) => (
               <Card
                  key={`${profile.name}-${index}`}
                  label={profile.jobTitle}
                  title={profile.name}
               />
            ))}
         </CardsContainer>
      </div>
   );
};

export default Freelances;
