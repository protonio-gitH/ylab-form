import React from 'react';
import Input from '../Input/Input';
import styles from './Form.module.scss'
import Button from '../Button/Button';
import { useFormHandler } from '../../hooks/useFormHandle.js';

const Form = () => {
    const {
        register,
        handleSubmit,
        errors,
        submit,
        error,
    } = useFormHandler();

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit(submit,error)}>
            <h1 className={styles.title}>Вход</h1>
            <Input label="Почта" id="Email" type="email" error={errors.email} {...register('email')} />
            <Input label="Пароль" id="Password" type="password" error={errors.password} {...register('password')} />
            <Button text="Войти" type="submit"/>
        </form>
    );
};

export default Form;