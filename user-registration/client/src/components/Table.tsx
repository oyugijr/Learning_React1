import  { useEffect, useState, useContext, useCallback } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import Record, { TUser } from "./Record";
import { refreshContext } from '../pages/Home';

export default function Table() {
    const { refresh } = useContext(refreshContext);
    const [userData, setUserData] = useState<TUser[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('http://localhost:8000/api/users');
            setUserData(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [refresh]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers, refresh]);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && (
                        <tr>
                            <td><BeatLoader color="#2edb3a" size={18} /></td>
                        </tr>
                    )}
                    {userData.length ? userData.sort((a, b) => b.id - a.id).map((record) => (
                        <Record key={record.id} {...record} />
                    )) : (
                        <tr>
                            <td colSpan={5} className="text-center">No records found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
