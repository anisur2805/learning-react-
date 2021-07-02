import React, { useState, useRef } from "react";
import Modal from "react-modal";
import IdleTimer from "react-idle-timer";

Modal.setAppElement("#root");

export default function ReactIdleTimer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const IdleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const onIdle = () => {
    console.log("User is Idle");
    setModalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };

  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User is Logged Out");
  };

  const stayAlive = () => {
    setModalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User is Active");
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2 className="my-5 text-center">Hello, Anisur Bin Achimuddin</h2>
      ) : (
        <h2 className="my-5 text-center">Hello Guest</h2>
      )}
      <Modal isOpen={modalIsOpen}>
        <h2>Hello World</h2>
        <p>Lorem ipsum dollar set with someone.</p>
        <button
          className="btn btn-warning text-white mx-2 btn-outline"
          onClick={logOut}>
          Logged Me Out
        </button>
        <button className="btn btn-primary mx-2" onClick={stayAlive}>
          Logged Me Again
        </button>
      </Modal>
      <IdleTimer
        ref={IdleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}></IdleTimer>
    </div>
  );
}

// export default ReactIdleTimer
