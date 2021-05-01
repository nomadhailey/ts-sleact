import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback } from 'react';
import { Redirect } from 'react-router';
import useSWR from 'swr';

const Workspace: FC = ({ children }) => {
  const { data, error, revalidate, mutate } = useSWR('/api/users', fetcher);
  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        // revalidate();
        mutate(false);
      });
  }, []);

  if (!data) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </>
  );
};
export default Workspace;
