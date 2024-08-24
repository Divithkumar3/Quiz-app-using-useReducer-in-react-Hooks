import React, { useReducer } from 'react';
import './App.css';

const initialState = {
  score: 0,
  currentquestion: 0,
  questions: [
    {
      question: 'Who is the owner of the Rajasthan royals team?',
      options: [
        { image: require('./sharuk.avif'), value: 0 },
        { image: require('./zinda.jpeg'), value: 1 },
        { image: require('./ambani.jpeg'), value: 2 },
        { image: require('./manoj.webp'), value: 3 },
      ],
      correctAnswer: 3,
    },
    {
      question: 'Who is the current captain of Rajasthan royals team?',
      options: [
        { image: require('./jos.jpeg'), value: 0 },
        { image: require('./ashwin.jpeg'), value: 1 },
        { image: require('./sanju.jpeg'), value: 2 },
        { image: require('./chahal.jpeg'), value: 3 },
      ],
      correctAnswer: 2,
    },
    {
      question: 'Who is the current coach of Rajasthan royals team?',
      options: [
        { image: require('./rahul.jpeg'), value: 0 },
        { image: require('./sanga.jpeg'), value: 1 },
        { image: require('./shane.jpeg'), value: 2 },
        { image: require('./step.jpeg'), value: 3 },
      ],
      correctAnswer: 1,
    },
    {
      question: 'Who is the highest run getter for Rajasthan Royals?',
      options: [
        { image: require('./sanju.jpeg'), value: 0 },
        { image: require('./shane.jpeg'), value: 1 },
        { image: require('./smith.jpeg'), value: 2 },
        { image: require('./rahane.jpeg'), value: 3 },
      ],
      correctAnswer: 0,
    },
  ],
};

const quiz = (state, action) => {
  switch (action.type) {
    case 'Questions':
      return {
        ...state,
        currentquestion: state.currentquestion + 1,
      };
    case 'Correct':
      if (action.payload === state.questions[state.currentquestion].correctAnswer) {
        return {
          ...state,
          score: state.score + 1,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

function Quizanswer() {
  const [state, dispatch] = useReducer(quiz, initialState);
  const questionchange = () => {
    if (state.currentquestion <= state.questions.length - 1) {
      dispatch({ type: 'Questions' });
    } else {
      alert(`Quiz finished! Your total score is: ${state.score}`);
    }
  };

  const CheckAnswer = (answer) => {
    dispatch({ type: 'Correct', payload: answer });
    questionchange();
  };

  return (
    <div>
      <p className="rr">Questions on Rajasthan Royals</p>
      <div className="ques">
        {state.currentquestion < state.questions.length ? (
          <div>
            <h1>{state.questions[state.currentquestion].question}</h1>
            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
              {state.questions[state.currentquestion].options.map(
                (option, index) => (
                  <li key={index}>
                    <button onClick={() => CheckAnswer(index)}>
                      <img
                        src={option.image}
                        alt="Option"
                        className="image"
                        style={{ width: '170px', height: '200px' }}
                      />
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        ) : (
          <div>
            <h2>Quiz finished!</h2>
            <h2>
              Your total score is: {state.score} out of{' '}
              {state.questions.length}
            </h2>
          </div>
        )}
      </div>
      {state.currentquestion < state.questions.length && (
        <h2 className='total'>Score: {state.score}</h2>
      )}
    </div>
  );
}

export default Quizanswer;


// import React, { useReducer } from 'react';

// const initialState = {
//   score: 0,
//   currentQuestion: 0,
//   questions: [
//     {
//       question: 'What is the capital of France?',
//       options: ['Paris', 'London', 'Berlin', 'Rome'],
//       correctAnswer: 0,
//     },
//     {
//       question: 'What is the largest planet in our solar system?',
//       options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
//       correctAnswer: 2,
//     },
//     {
//       question: 'What is the largest planet in our solar system?',
//       options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
//       correctAnswer: 2,
//     },
//   ],
// };

// const quizReducer = (state, action) => {
//   switch (action.type) {
//     case 'NEXT_QUESTION':
//       return {
//         ...state,
//         currentQuestion: state.currentQuestion + 1,
//       };
//     case 'CHECK_ANSWER':
//       if (action.payload === state.questions[state.currentQuestion].correctAnswer) {
//         return {
//           ...state,
//           score: state.score + 1,
//         };
//       } else {
//         return state;
//       }
//     default:
//       return state;
//   }
// };

// const Quiz = () => {
//   const [state, dispatch] = useReducer(quizReducer, initialState);

//   const handleNextQuestion = () => {
//     dispatch({ type: 'NEXT_QUESTION' });
//   };

//   const handleCheckAnswer = (answer) => {
//     dispatch({ type: 'CHECK_ANSWER', payload: answer });
//     handleNextQuestion();
//   };

//   return (
//     <div>
//       <h2>{state.questions[state.currentQuestion].question}</h2>
//       <ul>
//         {state.questions[state.currentQuestion].options.map((option, index) => (
//           <li key={index}>
//             <button onClick={() => handleCheckAnswer(index)}>
//               {option}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <p>Score: {state.score}</p>
//     </div>
//   );
// };

// export default Quiz;



