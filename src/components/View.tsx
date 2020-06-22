import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type StyledProps = {
  stackIndex: number;
};

const StyledView = styled(motion.div)<StyledProps>`
  z-index: ${({ stackIndex }) => stackIndex};
  background: gray;
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
`;

export type ViewProps = React.ComponentProps<typeof StyledView>;

export const View: React.FC<ViewProps> = (props) => (
  <StyledView
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ ease: 'easeInOut', duration: 0.3 }}
    {...props}
  />
);
