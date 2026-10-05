import { useState } from "react";

export default function UserList(){
    return(
        <>
            <div>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}