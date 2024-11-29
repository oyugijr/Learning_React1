import  { useContext, useState } from 'react';
import axios from "axios";
import { Trash2Icon } from "lucide-react";
import { refreshContext } from '../pages/Home';

export interface TUser {
    id: number;
    fullname: string;
    phone: string;
    address: string;
    score: number;
}

function Record(record: TUser) {
    const [loading, setLoading] = useState<boolean>(false);
    const { refresh, setRefresh } = useContext(refreshContext);

    const deleteRecord = async (id: number) => {
        setLoading(true);
        try {
            const response = await axios.delete(`http://localhost:8000/api/users/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.status === 200) {
                setRefresh(!refresh);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <tr className="hover">
            <th>{record.id}</th>
            <td>{record.fullname}</td>
            <td>{record.address}</td>
            <td>{record.phone}</td>
            <td>{record.score}</td>
            <td>
                <button className="btn" onClick={() => deleteRecord(record.id)}>
                    {loading ? <span>Deleting...</span> : <Trash2Icon className="text-red-800" />}
                </button>
            </td>
        </tr>
    );
}

export default Record;
