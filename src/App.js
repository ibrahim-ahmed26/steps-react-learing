import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}></StepMessage>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              color="#fff"
              onHandlePervious={handlePrevious}
            >
              <span>⬅️</span>pervious
            </Button>
            <Button
              bgColor="#7950f2"
              color="#fff"
              onHandlePervious={handleNext}
            >
              next <span>➡️</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
function StepMessage({ step }) {
  return (
    <p className="message">
      Step {step}: {messages[step - 1]}
    </p>
  );
}
function Button({ color, bgColor, onHandlePervious, children }) {
  return (
    <div className="buttons">
      <button
        style={{ backgroundColor: bgColor, color: color }}
        onClick={onHandlePervious}
      >
        {children}
      </button>
    </div>
  );
}
