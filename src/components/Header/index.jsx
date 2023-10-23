import { Link } from 'react-router-dom';

const index = () => {
   return (
      <nav>
         <Link to="/">Accueil</Link>
         <Link to="/survey">Questionnaire</Link>
      </nav>
   );
};

export default index;
