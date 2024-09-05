import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from "react-toastify";
import '../mock/fetch';

const schema = yup.object().shape({
	email: yup.string().email("Invalid email").required("Email is required"),
	password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
})

export const useFormHandler = () => {
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

    const submit = async (data) => {
        console.log('Отправленные данные:', data)
        const request = await fetch("https://api.example.com/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const response = await request.json();
        if (request.ok){
            toast.success('Successfully',{
                autoClose: 2000,
            });
        }else{
            if (response.error){
                toast.error(response.error,{
                    autoClose: 2000,
                });
            }else{
                toast.error(`Error code: ${request.status}`,{
                    autoClose: 2000,
                });
            }
        }
	}
    
	const error = data => {
		console.log(data)
	}

    return {
        register,
        handleSubmit,
        errors,
        submit,
        error,
      };
};