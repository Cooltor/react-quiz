function NextButton({ dispatch, answer }) {
  if (answer === null) {
    return null;
  }

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Suivant
    </button>
  );
}

export default NextButton;
