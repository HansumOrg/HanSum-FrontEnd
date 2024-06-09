import React, { useState, createContext, useContext, useMemo } from 'react';
import { RegisterProps } from '../../types';

export interface RegisterContextType {
  registerState: RegisterProps;
  setRegisterState: React.Dispatch<React.SetStateAction<RegisterProps>>;
}

const defaultSearchContext: RegisterProps = {
  username: '',
  password: '',
  name: '',
  phone: '',
  sex: '',
  birthday: '',
  nickname: '',
  mbti: '',
  userAgreement: 0,
};

const registerContext = createContext<RegisterContextType>({
  registerState: defaultSearchContext,
  setRegisterState: () => {},
});

const RegisterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [registerState, setRegisterState] =
    useState<RegisterProps>(defaultSearchContext);

  const registerContextState = useMemo(
    () => ({
      registerState,
      setRegisterState,
    }),
    [registerState, setRegisterState],
  );

  return (
    <registerContext.Provider value={registerContextState}>
      {children}
    </registerContext.Provider>
  );
};

export const useRegisterContext = () => {
  const context = useContext(registerContext);
  if (context === undefined) {
    throw new Error(
      'useSearchContext must be used within a RegisterContextProvider',
    );
  }
  return context;
};

export default RegisterContextProvider;
