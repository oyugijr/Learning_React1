import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useContext, useState } from 'react';
import { refreshContext } from '../pages/Home'

type Inputs = {
    fullname: string,
    phone: string,
    address: string,
    score: number
}

export default function UserReg() {

    const { refresh, setRefresh } = useContext(refreshContext);
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const saveUser: SubmitHandler<Inputs> = async (data) => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:8000/api/users', data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setLoading(false);
            if (response.status === 201) {
                setRefresh(!refresh);
                console.log(response.data.msg);
            }
        } catch (error: any) {
            setLoading(false);
            console.log(error)
            if (error.response.status === 400) {
                console.log(error.response.data)
            }
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <form className="card-body" onSubmit={handleSubmit(saveUser)}>
                <input {...register("fullname", { required: true })} type="text" placeholder="full-name" className="input input-bordered w-full max-w-xs" />
                {errors.fullname && <span>This field is required</span>}

                <input {...register("phone", { required: true })} type="text" placeholder="phone" className="input input-bordered w-full max-w-xs" />
                {errors.phone && <span>This field is required</span>}

                <input {...register("address", { required: true })} type="text" placeholder="address" className="input input-bordered w-full max-w-xs" />
                {errors.address && <span>This field is required</span>}

                <input {...register("score", { required: true, })} type="number" placeholder="score" className="input input-bordered w-full max-w-xs" />
                {errors.score && <span>This field is required</span>}
                <button type='submit' className="btn btn-primary">{loading ? "Saving" : "save"}</button>
            </form>
        </div>
    )
}

