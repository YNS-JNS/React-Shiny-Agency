// Importing from React router dom: ______
import { Link, useParams } from 'react-router-dom';

const Survey = () => {
   // ____________________________________
   // Get parametre from url:
   const { questionNumber } = useParams();

   // Trt: _______________________________
   // coder un lienprécédentet un liensuivant:
   // convert to int
   const questNumToInt = parseInt(questionNumber);
   // Si la question actuelle est à 1, le lien “précédent” reste sur la question 1
   // OTHERWISE WE DO THE DECREMENTATION BY 1
   const prevQuestNum = questNumToInt === 1 ? 1 : questNumToInt - 1;
   // INCREMENTATION BY 1
   const nextQuestNum = questNumToInt + 1;
   // _____________________________________

   return (
      <div>
         <h1>Questionnaire 🧮</h1>
         <h2>Question {questionNumber}</h2>

         <Link to={`/survey/${prevQuestNum}`}>Précédent</Link>
         {questNumToInt === 10 ? (
            <Link to={`/results`}>Résultats</Link>
         ) : (
            <Link to={`/survey/${nextQuestNum}`}>Suivant</Link>
         )}
      </div>
   );
};

export default Survey;
