import styled from "styled-components";
import { CustomInput } from "@/components/custom-input";

export const Wrapper = styled.div`
  margin-top: 125px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-bottom: 250px;
  .titleContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 39px;

    .title {
      font: var(--h1);
      color: ${({ theme }) => theme.color.black};
    }

    .subtitle {
      font: var(--h3);
      color: ${({ theme }) => theme.color.black};
      text-align: center;
    }
  }
  .formFields {
    display: flex;
    flex-direction: column;
    gap: 100px;

    .inputs {
      display: flex;
      align-items: center;
      gap: 110px;
    }
  }
  .buttonContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      max-width: 500px;
      width: 100%;
    }
  }
`;

export const FormInput = styled(CustomInput)`
  font: var(--h5);
`;
