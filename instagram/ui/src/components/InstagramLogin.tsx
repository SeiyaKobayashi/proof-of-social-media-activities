import React, { useCallback, useState } from 'react';
import { LoginSocialInstagram, IResolveParams } from 'reactjs-social-login';
import { InstagramLoginButton } from 'react-social-login-buttons';

const INSTAGRAM_APP_ID: string | undefined = process.env.INSTAGRAM_APP_ID;
const INSTAGRAM_APP_SECRET: string | undefined = process.env.INSTAGRAM_APP_SECRET;
const REDIRECT_URI: string | undefined = process.env.REDIRECT_URI;

// React component of Instagram login
export default function InstagramLoginComponent() {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState<any>();

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => {}, []);

  return (
    <LoginSocialInstagram
      client_id={INSTAGRAM_APP_ID || ''}
      client_secret={INSTAGRAM_APP_SECRET || ''}
      redirect_uri={REDIRECT_URI || ''}
      onLogoutSuccess={onLogoutSuccess}
      onResolve={({ provider, data }: IResolveParams) => {
        console.log('provider', provider);
        console.log('data', data);
        setProvider(provider);
        setProfile(data);
      }}
      onReject={(err: any) => {
        console.log(err);
      }}
    >
      <InstagramLoginButton />
    </LoginSocialInstagram>
  );
};
