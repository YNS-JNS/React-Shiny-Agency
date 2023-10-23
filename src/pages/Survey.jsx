import { Link, Outlet } from 'react-router-dom';

const Survey = () => {
   return (
      <div>
         <h1>Questionnaire 🧮</h1> <br />
         <Link to="client">Questionnaire Client</Link> <br />
         <Link to="freelance">Questionnaire Freelance</Link>
         <Outlet />
      </div>
   );
};

export default Survey;
