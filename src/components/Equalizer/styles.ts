import styled from 'styled-components'

export const Wrapper = styled.div`
  cursor: pointer;
  height: 20px;

  display: flex;
  align-items: flex-end;
  width: auto;
`

export const Line = styled.div`
  width: var(--spacing-basic-small);
  background-color: var(--white);
  margin: 0 2px;
  animation: equalizer 1.9s steps(20, end) infinite;

  :nth-child(1) {
    animation-duration: 1.9s;
  }

  :nth-child(2) {
    animation-duration: 2s;
  }

  :nth-child(3) {
    animation-duration: 1.7s;
  }

  @keyframes equalizer {
    0% {
      height: 60%;
    }

    4% {
      height: 50%;
    }

    8% {
      height: 40%;
    }

    12% {
      height: 30%;
    }

    16% {
      height: 20%;
    }

    20% {
      height: 30%;
    }

    24% {
      height: 40%;
    }

    28% {
      height: 10%;
    }

    32% {
      height: 40%;
    }

    36% {
      height: 60%;
    }

    40% {
      height: 20%;
    }

    44% {
      height: 40%;
    }

    48% {
      height: 70%;
    }

    52% {
      height: 30%;
    }

    56% {
      height: 10%;
    }

    60% {
      height: 30%;
    }

    64% {
      height: 50%;
    }

    68% {
      height: 60%;
    }

    72% {
      height: 70%;
    }

    76% {
      height: 80%;
    }

    80% {
      height: 70%;
    }

    84% {
      height: 60%;
    }

    88% {
      height: 50%;
    }

    92% {
      height: 60%;
    }

    96% {
      height: 70%;
    }

    100% {
      height: 80%;
    }
  }
`

export const ClosedLine = styled.div`
  width: 27px;
  height: 2px;
  background-color: var(--white);
`
