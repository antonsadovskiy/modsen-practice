import styled from "styled-components";
import { CustomInput } from "@/components/custom-input";

export const Wrapper = styled.div`
  margin-top: 125px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-bottom: 250px;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 39px;
`;
export const Title = styled.div`
  font: var(--h1);
  color: ${({ theme }) => theme.color.black};
`;
export const Subtitle = styled.div`
  font: var(--h3);
  color: ${({ theme }) => theme.color.black};
  text-align: center;
`;

export const FormFields = styled.form`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    max-width: 500px;
    width: 100%;
  }
`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  gap: 110px;
`;

export const FormInput = styled(CustomInput)`
  font: var(--h5);
`;
