import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { LestaubiereApi } from '../../../../api';
import { loginUser } from '../../../../store/app';
import { BackendError } from '../../../../types';

import { Button, Input } from '../../../Core';
import { PartialArrowRight } from '../../../Icons';

import './Login.css';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key in 'email' | 'password' | 'global']?: string }>({});

  const dispatch = useDispatch();

  function handleChange(key: string, value: string) {
    switch (key) {
      case 'email':
        setEmail(value);

        break;
      case 'password':
        setPassword(value);

        break;
    }

    if (key === 'email' || key === 'password') {
      const { [key]: deletedKey, global, ...rest } = errors;

      setErrors(rest);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (email && password) {
      setLoading(true);

      try {
        const data = await LestaubiereApi.getInstance().login(email, password);

        dispatch(loginUser(data));
      } catch (exception) {
        setLoading(false);

        if (typeof exception.json === 'function') {
          const data = (await exception.json()) as BackendError;

          data.errors.forEach((error) => {
            if (error.field === 'email') {
              setErrors((oldState) => ({ ...oldState, email: error.message }));
            }

            if (error.field === 'password') {
              setErrors((oldState) => ({ ...oldState, password: error.message }));
            }
          });
        }
      }
    } else {
      if (!email) {
        setErrors((oldErrors) => ({
          ...oldErrors,
          email:
            'Votre adresse e-mail est obligatoire pour se connecter. Pouvez-vous le renseigner ?',
        }));
      }

      if (!password) {
        setErrors((oldErrors) => ({
          ...oldErrors,
          password:
            'Votre mot de passe est obligatoire pour se connecter. Pouvez-vous le renseigner ?',
        }));
      }
    }
  }

  return (
    <div className="Login">
      <div className="Login__title">
        <span className="Login__title-label">Connexion</span>
        <span className="Login__title-border" />
      </div>
      <form className="Login__form" onSubmit={handleSubmit}>
        <div className="Login__field">
          <Input
            type="email"
            name="email"
            value={email}
            label="Adresse email"
            placeholder="nom.prenom@gmail.com"
            autocomplete="username"
            disabled={loading}
            tabIndex={1}
            error={errors.email}
            onChange={handleChange}
          />
        </div>
        <div className="Login__field">
          <Input
            type="password"
            name="password"
            value={password}
            label="Mot de passe"
            placeholder="************"
            autocomplete="current-password"
            hasPasswordToggle
            disabled={loading}
            tabIndex={2}
            error={errors.password}
            onChange={handleChange}
          />
        </div>
        <div className="Login__actions">
          <Button
            type="primary"
            purpose="submit"
            disabled={Object.keys(errors).length > 0}
            loading={loading}
            tabIndex={3}
            icon={<PartialArrowRight color="#ffffff" />}
          >
            Continuer
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
