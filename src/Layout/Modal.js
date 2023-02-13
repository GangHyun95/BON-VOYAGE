import React, { useEffect } from "react";
import styled from "styled-components";

const Modal = ({ visible, onClose, children, width, height }) => {
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget && onClose) {
      onClose(e);
      e.stopPropagation();
    }
  };
  return (
    <>
      <ModalWrapper visible={visible} onClick={onMaskClick}>
        <ModalInner width={width} height={height}>
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: ${(props) => (props.visible ? "block" : "none")};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  outline: none;
  z-index: 1000;
  cursor: auto;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: absolute;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
  background-color: #fff;
  width: ${(props) => (props.width ? props.width + "px" : "auto")};
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 4px;
`;

export default Modal;
