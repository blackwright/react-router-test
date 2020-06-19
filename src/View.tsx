import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type StyledProps = {
  background: string;
  stackIndex: number;
};

const StyledView = styled(motion.div)<StyledProps>`
  background: ${({ background }) => background};
  z-index: ${({ stackIndex }) => stackIndex};
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
    transition={{ clamp: true, ease: 'easeInOut', duration: 0.3 }}
    {...props}
  />
);
