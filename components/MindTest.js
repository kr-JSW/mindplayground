import React, { useEffect, useState } from "react";
import style from "./mindtest.module.css";
import testData from "../json/mindtest.json";
import Loading from "./Loading";
import Share from "./Share";

function MindTest({ type }) {
  const [questionState, setQuestion] = useState([]);
  const [numState, setNumState] = useState(0);
  const [score, setScore] = useState(0);
  const [resultState, setResultState] = useState(false);

  useEffect(() => {
    testData.find((item) => {
      if (item.type === type) {
        setQuestion(item.data);
      }
    });
  }, []);

  const testResult = () => {
    if (score <= 5) {
      testData.find((item) => {
        if (item.type === type + "Results") {
          setResultState(item.data[0]);
        }
      });
    } else if (5 < score && score <= 10) {
      testData.find((item) => {
        if (item.type === type + "Results") {
          setResultState(item.data[1]);
        }
      });
    } else if (10 < score && score <= 15) {
      testData.find((item) => {
        if (item.type === type + "Results") {
          setResultState(item.data[2]);
        }
      });
    } else if (15 < score && score <= 20) {
      testData.find((item) => {
        if (item.type === type + "Results") {
          setResultState(item.data[3]);
        }
      });
    }
  };

  const testBoard = () => {
    if (questionState.length !== 0) {
      const { answer, question } = questionState[numState];
      const { first, second, third } = answer;

      return (
        <div className={style.questionBoard}>
          <section>{question}</section>
          <section>
            <div
              onClick={() => {
                if (numState + 1 < questionState.length) {
                  setNumState(numState + 1);
                  setScore(score + 2);
                } else if (
                  numState + 1 === questionState.length &&
                  typeof window !== "undefined"
                ) {
                  setScore(score + 2);
                  setTimeout(() => {
                    testResult();
                  }, 3000);
                  setResultState("hi");
                }
              }}
            >
              {first}
            </div>
            <div
              onClick={() => {
                if (numState + 1 < questionState.length) {
                  setNumState(numState + 1);
                  setScore(score);
                } else if (
                  numState + 1 === questionState.length &&
                  typeof window !== "undefined"
                ) {
                  setScore(score);
                  setTimeout(() => {
                    testResult();
                  }, 3000);
                  setResultState("hi");
                }
              }}
            >
              {second}
            </div>
            <div
              onClick={() => {
                if (numState + 1 < questionState.length) {
                  setNumState(numState + 1);
                  setScore(score + 1);
                } else if (
                  numState + 1 === questionState.length &&
                  typeof window !== "undefined"
                ) {
                  setScore(score + 1);
                  setTimeout(() => {
                    testResult();
                  }, 3000);
                  setResultState("hi");
                }
              }}
            >
              {third}
            </div>
          </section>
        </div>
      );
    }
  };

  return (
    <div className={style.mindBoard}>
      {resultState ? null : testBoard()}
      {resultState === "hi" ? (
        <div>
          <Loading text="결과 확인중..." />
        </div>
      ) : null}
      {resultState !== "hi" && typeof resultState === "object" ? (
        <>
          <div className={style.resultBox}>
            <h3>{resultState.title}</h3>
            <p>{resultState.detail}</p>
          </div>
          <section className={style.btnSec}>
            <a
              onClick={() => {
                if (typeof window !== "undefined")
                  window.location.href = "/test/Sociopath/intro";
              }}
            >
              다시하기
            </a>
          </section>
          <Share />
        </>
      ) : null}
    </div>
  );
}

export default MindTest;
